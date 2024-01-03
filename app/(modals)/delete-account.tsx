import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function DeleteAccountModal() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Confirm Account Deletion</Text>
			<Text style={styles.modal_text}>
				Are you sure you want to delete your account? This action is irrevisible
			</Text>
			<View style={styles.buttons_container}>
				<TouchableOpacity
					style={{ ...styles.btn, ...styles.confirm_btn }}
					onPress={() => router.replace("/")}
				>
					<Text style={styles.btn_text}>Confirm</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => router.replace("/(tabs)/account")}
				>
					<Text style={styles.btn_text}>Cancel</Text>
				</TouchableOpacity>
			</View>
			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	modal_text: {
		marginVertical: 20,
		color: "#555",
	},
	buttons_container: {
		flexDirection: "row",
	},
	btn: {
		backgroundColor: "black",
		padding: 20,
		paddingHorizontal: 40,
		margin: 10,
		borderRadius: 7,
	},
	confirm_btn: {
		backgroundColor: "red",
	},
	btn_text: {
		color: "white",
	},
});
