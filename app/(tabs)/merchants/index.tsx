import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

import { useEffect, useState } from "react";
import { Users } from "../../../constants/mock-data/Users";
import getAllMerchants from "../../utils/getMerchants";

import { router } from "expo-router";

export default function MerchantListScreen() {
	const [merchants, setMerchants] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getAllMerchants().then((data) => {
			setMerchants(data);
			setLoading(false);
		});
	}, []);

	if (loading)
		return (
			<View>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<QRCode size={200} value="https://www.google.com" />
			<Text style={styles.sub_heading}>User ID</Text>
			<Text style={styles.account_userId}>{Users[0].id}</Text>
			<Text style={styles.title}>View Merchants with promotions</Text>
			{merchants.map((merchant) => (
				<TouchableOpacity
					style={styles.button}
					key={merchant.id}
					onPress={() => router.push(`/merchants/${merchant.id}`)}
				>
					<Text style={styles.buttonText}>{merchant.company_name}</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 25,
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#DDDDDD",
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
		width: 300,
	},
	buttonText: {
		fontSize: 16,
		color: "#000000",
		textAlign: "center",
	},
	sub_heading: {
		fontWeight: "700",
		textAlign: "center",
		marginTop: 20,
	},
	account_userId: {
		backgroundColor: "white",
		borderRadius: 7,
		fontSize: 24,
		width: 200,
		textAlign: "center",
		height: 35,
		marginTop: 5,
		marginBottom: 30,
	},
});
