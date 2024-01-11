import {
	Text,
	View,
	StyleSheet,
	ActivityIndicator,
	Platform,
	Image,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "../../../screens/components/Button";

import getMerchantById from "../../utils/getMerchantById";
import getLoyaltyCards from "../../utils/getLoyaltyCards";
import getLoyaltyProgramsByMerchant from "../../utils/getLoyaltyProgramme";
import createLoyaltyCard from "../../utils/createLoyaltyCard";
import { useAuth } from "../../../hooks/useAuth";
import { Loading } from "../../../screens/components/Loading";
import { Colours } from "../../../constants/Colours";

interface Merchant {
	merchant_id: number;
	company_name?: string;
	description?: string;
	address?: string;
	lat_long?: string;
	phone_no?: string;
	logo_url?: string;
}

interface Card {
	id: number;
	loyalty_program_id: number;
	user_id: string;
	points: number;
	created_at: string;
	merchant_id: string;
	name: string;
	required_points: number;
}

const singleMerchant = () => {
	const { id: merchantId } = useLocalSearchParams();

	const [merchant, setMerchant] = useState<Merchant | null>(null);
	const [card, setCard] = useState<Card | null>(null);
	const [loading, setLoading] = useState(true);
	const [activating, setActivating] = useState(false);

	const { user, setUser, getUser } = useAuth();
	const latlong = merchant?.lat_long.split(",").map((val) => Number(val));

	useEffect(() => {
		async function fetchData() {
			const userData = await getUser();
			const merchantData = await getMerchantById(merchantId);
			const cardData = await getLoyaltyCards(
				`?user_id=${userData.id}&merchant_id=${merchantId}`
			);

			setUser(userData);
			setMerchant(merchantData);
			setCard(cardData[0]);
			setLoading(false);
		}

		fetchData();
	}, [merchantId]);

	const activateLoyaltyCard = async () => {
		setActivating(true);
		const programsData = await getLoyaltyProgramsByMerchant(merchantId);
		const cardData = await createLoyaltyCard(user.id, programsData[0].id);

		setCard(cardData);
		setActivating(false);
	};

	if (loading) return <Loading />;

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.mapPlaceholder}>
				{Platform.OS === "web" ? (
					<Image
						source={require("../../../assets/images/map-placeholder.jpg")}
						style={{ width: "100%", height: "100%" }}
					/>
				) : (
					<MapView
						style={{ width: "100%", height: "100%" }}
						initialRegion={{
							latitude: latlong[0],
							longitude: latlong[1],
							latitudeDelta: 0.005,
							longitudeDelta: 0.045,
						}}
					>
						<Marker
							coordinate={{
								latitude: latlong[0],
								longitude: latlong[1],
							}}
							title={merchant.company_name}
						/>
					</MapView>
				)}
			</View>
			<View style={styles.content}>
				<View
					style={{
						alignItems: "center",
						width: "100%",
						height: 100,
					}}
				>
					<Image
						source={{ uri: merchant.logo_url }}
						style={{ width: "100%", height: "100%" }}
						resizeMode="contain"
					/>
				</View>
				<Text style={styles.title}>{merchant.company_name}</Text>
				<Text style={styles.description}>{merchant.description}</Text>
				<Text style={styles.description}>{merchant.phone_no}</Text>
				<Text style={styles.description}>{merchant.address}</Text>

				{card ? (
					<Button
						title="View Loyalty Card"
						onPress={() => {
							router.push(`/cards/${card.id}`);
						}}
					/>
				) : (
					<Button onPress={activateLoyaltyCard}>
						{activating ? (
							<View
								style={{
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Text style={styles.activateBtnTxt}>Activating</Text>
								<ActivityIndicator size="small" color={Colours.pink} />
							</View>
						) : (
							<Text style={styles.activateBtnTxt}>Activate Loyalty Card</Text>
						)}
					</Button>
				)}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "white",
	},
	content: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		padding: 20,
	},
	logo: {
		fontSize: 15,
		textAlign: "right",
		marginRight: 15,
	},
	title: {
		marginVertical: 15,
		fontSize: 20,
		fontWeight: "bold",
	},
	mapPlaceholder: {
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 300,
		backgroundColor: "#DDDDDD",
	},
	description: {
		textAlign: "center",
		fontSize: 15,
		marginBottom: 20,
	},
	activateBtnTxt: {
		paddingRight: 10,
		color: "white",
	},
});

export default singleMerchant;
