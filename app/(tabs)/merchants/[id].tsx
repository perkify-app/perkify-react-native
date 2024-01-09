import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator,
	Platform,
	Image,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import getMerchantById from "../../utils/getMerchantById";
import MapView, { Marker } from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "../../../screens/components/Button";

interface Merchant {
	merchant_id: number;
	company_name?: string;
	logo_url?: string;
	description?: string;
	address?: string;
	phone_no?: string;
}

const singleMerchant = () => {
	const id = useLocalSearchParams();

	const [merchant, setMerchant] = useState<Merchant | null>(null);
	const [loading, setLoading] = useState(true);

	const merchantId = id.id;

	useEffect(() => {
		getMerchantById(merchantId).then((data) => {
			setMerchant(data);
			setLoading(false);
		});
	}, [merchantId]);

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
			<Button
				title="View Loyalty Card"
				onPress={() => {
					router.push(`/cards/2`);
				}}
			/>
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
});

export default singleMerchant;
