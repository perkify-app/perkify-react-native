import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LoginScreenInfo() {
	return (
		<View>
			<View style={styles.loginContainer}>
				<Text style={styles.loginText}>
					Use Supabase Auth React Native components here. All other screens and
					main-nav should not be accessible unless user isAuthenticated. If user
					is already logged in, should redirect to merchants/overview screen
				</Text>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => router.replace("/(tabs)/merchants")}
				>
					<Text style={styles.btnText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ ...styles.btn, ...styles.registerBtn }}
					onPress={() => router.push("/create-account")}
				>
					<Text style={styles.btnText}>Create an Account</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	loginContainer: {
		alignItems: "center",
		marginHorizontal: 50,
	},
	loginText: {
		padding: 20,
		fontSize: 17,
		lineHeight: 30,
		textAlign: "center",
	},
	btn: {
		backgroundColor: "black",
		paddingVertical: 17,
		paddingHorizontal: 35,
		marginVertical: 10,
		borderRadius: 10,
	},
	btnText: {
		color: "white",
	},
	registerBtn: {
		backgroundColor: "gray",
	},
});
