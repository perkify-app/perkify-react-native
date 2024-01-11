import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

import { InputField } from "./components/InputField";
import { Button } from "./components/Button";
import { useAuth } from "../hooks/useAuth";

export default function LoginScreenInfo() {
	const [email, setEmail] = useState("customer@example.com");
	const [pass, setPass] = useState("password123");
	const { loginUser } = useAuth();

	const login = async () => {
		try {
			const customerTest = {
				id: "U5",
				name: "Sam Junior",
				email: "customer@example.com",
			};
			const merchantTest = {
				id: "U1",
				name: "Jonny Smith",
				email: "merchant@example.com",
			};

			if (email === "customer@example.com") {
				loginUser(customerTest);
				router.replace("/merchants/");
			} else if (email === "merchant@example.com") {
				loginUser(merchantTest);
				router.replace("/merchants/");
			}
		} catch (e) {
			console.log("ERROR!", e);
		}
	};

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
				<Button title="Login" onPress={login} />
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
		width: "85%",
		maxWidth: 600,
		padding: 25,
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
