import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";

import { InputField } from "./InputField";
import { Button } from "./Button";

export default function CreateAccountForm() {
	const [name, setName] = useState("Billy Bob");
	const [email, setEmail] = useState("billy_bob@example.com");
	const [pass, setPass] = useState("password123");
	const [confirmPass, setConfirmPass] = useState("password123");
	const [isChecked, setChecked] = useState(false);
	const [isValidated, setValidated] = useState(false);

	useEffect(() => {
		if (
			name &&
			email &&
			pass &&
			confirmPass &&
			isChecked &&
			pass === confirmPass
		) {
			setValidated(true);
		} else {
			setValidated(false);
		}
	}, [name, email, pass, confirmPass, isChecked]);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.title}>Create Account</Text>
				<InputField header="Email" state={email} onChange={setEmail} />
				<InputField header="Full Name" state={name} onChange={setName} />
				<InputField
					header="Password"
					state={pass}
					onChange={setPass}
					hide={true}
				/>
				<InputField
					header="Confirm Password"
					state={confirmPass}
					onChange={setConfirmPass}
					hide={true}
				/>
				<View style={styles.termsContainer}>
					<Checkbox
						style={styles.checkbox}
						value={isChecked}
						onValueChange={setChecked}
					/>
					<Text>Accept terms and conditions</Text>
				</View>
				<Button
					title="Sign Up"
					style={{
						backgroundColor: isValidated ? "black" : "lightgray",
						marginTop: 20,
					}}
					disabled={!isValidated}
					onPress={() => router.replace("/customer-welcome")}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		padding: 25,
		margin: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 24,
	},
	checkbox: {
		margin: 8,
		padding: 13,
	},
	termsContainer: {
		flexDirection: "row",
		alignItems: "center",
		textAlign: "left",
		marginTop: 10,
	},
});
