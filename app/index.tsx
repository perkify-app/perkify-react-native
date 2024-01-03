import { StyleSheet, Text, View } from "react-native";

import LoginScreenInfo from "../screens/LoginScreenInfo";

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Example Login Screen</Text>
			<LoginScreenInfo />
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
});
