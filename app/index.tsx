import { StyleSheet, Text, View } from "react-native";

import LoginScreenInfo from "../screens/LoginScreenInfo";


export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.logo}>Perkify</Text>
			</View>
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
	logo: {
		fontSize: 42,
		fontWeight: "700",
		marginBottom: 75,
	},
});
