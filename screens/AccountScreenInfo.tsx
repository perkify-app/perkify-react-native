import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

import { Users } from "../constants/mock-data/Users";
import { Button } from "./components/Button";

export default function AccountScreenInfo() {
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.seperator}>
					<Text style={styles.subHeading}>Full Name</Text>
					<Text style={styles.accountInfo}>{Users[0].name}</Text>
				</View>
				<View style={styles.seperator}>
					<Text style={styles.subHeading}>Email</Text>
					<Text style={styles.accountInfo}>{Users[0].email}</Text>
				</View>
				<View style={styles.qrCode}>
					<QRCode
						value={String(Users[0].id)}
						size={200}
						backgroundColor="transparent"
					/>
				</View>
				<View style={styles.seperator}>
					<Text style={styles.subHeading}>User ID</Text>
					<Text style={styles.accountUserId}>{Users[0].id}</Text>
				</View>
			</View>
			<Button title="Sign Out" onPress={() => router.replace("/")} />
			<Button title="Delete My Account" onPress={() => router.push("/delete-account")} style={{backgroundColor: "red"}} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginHorizontal: 50,
	},
	seperator: {
		marginBottom: 25,
	},
	qrCode: {
		marginTop: 15,
		marginBottom: 25,
	},
	subHeading: {
		fontWeight: "700",
		textAlign: "center",
		marginBottom: 5,
	},
	accountInfo: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: "center",
	},
	accountUserId: {
		backgroundColor: "white",
		borderRadius: 7,
		fontSize: 24,
		textAlign: "center",
		paddingVertical: 10,
		marginTop: 5,
		marginBottom: 15,
	},
});
