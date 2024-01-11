import { Image, StyleSheet, View } from "react-native";

import LoginScreenInfo from "../screens/LoginScreenInfo";
import { Colours } from "../constants/Colours";

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/images/perkify-logo-hv.png")}
				resizeMode="contain"
				style={styles.logo}
			/>
			<LoginScreenInfo />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colours.backgroundOffWhite,
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: 250,
		justifyContent: "center",
		alignItems: "center",
	},
});
