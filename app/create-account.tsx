import { StyleSheet, Text, View } from "react-native";

import CreateAccountForm from "../screens/components/CreateAccountForm";

export default function CreateAccountScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Create Account</Text>
			<CreateAccountForm />
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
		fontSize: 24,
		fontWeight: "bold",
        marginBottom: 24,
	},
});
