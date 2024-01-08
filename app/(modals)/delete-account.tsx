import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { Button } from "../../screens/components/Button";

export default function DeleteAccountModal() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Confirm Account Deletion</Text>
			<Text style={styles.modalText}>
				Are you sure you want to delete your account? This action is
				irreversible!
			</Text>
			<View style={styles.buttonsContainer}>
				<Button
					title="Confirm"
					style={{ backgroundColor: "red" }}
					onPress={() => router.replace("/")}
				/>
				<Button
					title="Cancel"
					onPress={() => router.back()}
				/>
			</View>
			
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
	modalText: {
		marginVertical: 20,
		color: "#555",
	},
	buttonsContainer: {
		flexDirection: "row",
		gap: 15,
	},
});
