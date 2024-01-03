import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

import {Users} from "../constants/mock-data/Users"

export default function AccountScreenInfo() {
	return (
		<View style={styles.container}>
			<View>
				<View style={styles.seperator}>
					<Text style={styles.sub_heading}>Full Name</Text>
					<Text style={styles.account_info}>{Users[0].name}</Text>
				</View>
				<View style={styles.seperator}>
					<Text style={styles.sub_heading}>Email</Text>
					<Text style={styles.account_info}>{Users[0].email}</Text>
				</View>
				<View style={styles.qrCode}>
					<QRCode value={String(Users[0].id)} size={200} backgroundColor="transparent" />
				</View>
				<View style={styles.seperator}>
					<Text style={styles.sub_heading}>User ID</Text>
					<Text style={styles.account_userId}>{Users[0].id}</Text>
				</View>
			</View>
			<View>
				<TouchableOpacity style={styles.btn}>
					<Text style={styles.btn_text}>Sign Out</Text>
				</TouchableOpacity>
				<Link href="/(tabs)/account/confirm-delete">
					<TouchableOpacity style={{ ...styles.btn, ...styles.delete_btn }}>
						<Text style={styles.btn_text}>Delete My Account</Text>
					</TouchableOpacity>
				</Link>
			</View>
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
	sub_heading: {
		fontWeight: "700",
		textAlign: "center",
		marginBottom: 5,
	},
	account_info: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: "center",
	},
	account_userId: {
		backgroundColor: "white",
		borderRadius: 7,
		fontSize: 24,
		textAlign: "center",
		paddingVertical: 10,
		marginTop: 5,
		marginBottom: 15,
	},
	btn: {
		backgroundColor: "black",
		borderRadius: 7,
		padding: 20,
		paddingHorizontal: 35,
		marginVertical: 10,
	},
	delete_btn: {
		backgroundColor: "red",
	},
	btn_text: {
		textAlign: "center",
		color: "white",
		fontWeight: "600",
	},
});
