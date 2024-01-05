import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

import { InputField } from "./components/InputField";

// Use Supabase Auth React Native components here. All other screens and
// main-nav should not be accessible unless user isAuthenticated. If user
// is already logged in, should redirect to merchants/overview screen

export default function LoginScreenInfo() {
	const [email, setEmail] = useState("johndoe@gmail.com");
	const [pass, setPass] = useState("password123");

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<InputField header="Email" state={email} onChange={setEmail} />
			<InputField
				header="Password"
				state={pass}
				onChange={setPass}
				hide={true}
			/>
			<View style={styles.btnContainer}>
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
	container: {
		backgroundColor: "white",
		alignItems: "center",
		width: "75%",
		maxWidth: 600,
		padding: 30,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 24,
	},
	loginText: {
		padding: 20,
		fontSize: 17,
		lineHeight: 30,
		textAlign: "center",
	},
	btnContainer: {
		marginTop: 10,
	},
	btn: {
		backgroundColor: "black",
		paddingVertical: 20,
		paddingHorizontal: 35,
		marginVertical: 10,
		borderRadius: 10,
		minWidth: 200,
	},
	btnText: {
		color: "white",
		textAlign: "center",
	},
	registerBtn: {
		backgroundColor: "gray",
	},
});
