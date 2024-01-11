import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";

import { Button } from "../../screens/components/Button";
import { useAuth } from "../../hooks/useAuth";
import { Colours } from "../../constants/Colours";

export default function DeleteAccountModal() {
	const { logoutUser } = useAuth();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Confirm Account Deletion</Text>
			<Text style={styles.modalText}>
				Are you sure you want to delete your account? This action is
				irreversible!
			</Text>
			<Button
				title="Confirm"
				style={{ backgroundColor: Colours.red, borderColor: Colours.red }}
				onPress={logoutUser}
			/>
			<Button
				title="Cancel"
				style={{ backgroundColor: "transparent" }}
				onPress={() => router.push("/account/")}
				isDark={false}
			/>

			<StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colours.backgroundOffWhite,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 30,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	modalText: {
		marginVertical: 20,
		color: "#555",
		textAlign: "center",
	},
});
