import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";

import { InputField } from "./InputField";

export default function CreateAccountForm() {
	const [name, setName] = useState("Billy Bob");
	const [email, setEmail] = useState("billy_bob@example.com");
	const [pass, setPass] = useState("password123");
	const [confirmPass, setConfirmPass] = useState("password123");
	const [isChecked, setChecked] = useState(false);
	const [isValidated, setValidated] = useState(false);

	// FORM VALIDATION
	// if form is validated, setValidated(true) and allow form to be submitted
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
			<TouchableOpacity
				style={{
					...styles.btn,
					backgroundColor: isValidated ? "black" : "lightgray",
				}}
				disabled={!isValidated}
				onPress={() => router.replace("/customer-welcome")}
			>
				<Text style={styles.btnText}>Sign Up</Text>
			</TouchableOpacity>
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
	btn: {
		paddingVertical: 20,
		paddingHorizontal: 40,
		marginTop: 30,
	},
	btnText: {
		color: "white",
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
