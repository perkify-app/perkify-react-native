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

interface Merchant {
	merchant_id: number;
	company_name?: string;
	logo_url?: string;
	description?: string;
	address?: string;
	phone_no?: string;
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

	useEffect(() => {
		async function fetchData() {
			const merchantData = await getMerchantById(merchantId);
			const cardData = await getLoyaltyCards(
				`?user_id=U2&merchant_id=${merchantId}`
			);

			setMerchant(merchantData);
			setCard(cardData[0]);
			setLoading(false);
		}

		fetchData();
	}, [merchantId]);

	const activateLoyaltyCard = async () => {
		setActivating(true);
		const programsData = await getLoyaltyProgramsByMerchant(merchantId);
		const cardData = await createLoyaltyCard("U2", programsData[0].id);

		setCard(cardData);
		setActivating(false);
	};

	if (loading)
		return (
			<View>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);

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
							latitude: 53.47221762503716,
							longitude: -2.238378094847027,
							latitudeDelta: 0.005,
							longitudeDelta: 0.045,
						}}
					>
						<Marker
							coordinate={{
								latitude: 53.47221762503716,
								longitude: -2.238378094847027,
							}}
							title={merchant.company_name}
						/>
					</MapView>
				)}
			</View>
			<Text style={styles.title}>{merchant.company_name}</Text>
			<Text style={styles.description}>{merchant.description}</Text>
			<Text style={styles.description}>{merchant.phone_no}</Text>

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
							<ActivityIndicator size="small" color="red" />
						</View>
					) : (
						<Text style={styles.activateBtnTxt}>Activate Loyalty Card</Text>
					)}
				</Button>
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 20,
	},
	logo: {
		fontSize: 15,
		textAlign: "right",
		marginRight: 15,
	},

	title: {
		marginTop: 40,
		fontSize: 20,
		fontWeight: "bold",
		marginLeft: 15,
	},
	mapPlaceholder: {
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 300,
		backgroundColor: "#DDDDDD",
	},
	back: {
		marginLeft: 15,
	},
	description: {
		textAlign: "center",
		fontSize: 15,
		marginBottom: 20,
	},
	button: {
		backgroundColor: "black",
		padding: 10,
		marginBottom: 10,
		width: 300,
		alignSelf: "center",
		borderRadius: 7,
	},
	btnText: {
		fontSize: 16,
		fontWeight: "600",
		color: "white",
		textAlign: "center",
	},
	activateBtnTxt: {
		paddingRight: 10,
		color: "white",
	},
});

export default singleMerchant;
