import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { InputField } from "./components/InputField";
import { Button } from "./components/Button";

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
				<Button
					title="Login"
					onPress={() => router.replace("/(tabs)/merchants")}
				/>
				<Button
					title="Create Account"
					onPress={() => router.push("/create-account")}
					style={{ backgroundColor: "gray" }}
				/>
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
});
