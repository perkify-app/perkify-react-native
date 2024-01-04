import { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";

export default function CreateAccountForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [confirmPass, setConfirmPass] = useState("");
	const [isChecked, setChecked] = useState(false);
	const [isValidated, setValidated] = useState(false);

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
            setValidated(false)
        }
	}, [name, email, pass, confirmPass, isChecked]);

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<Text style={styles.inputHeading}>Email</Text>
				<TextInput value={email} onChangeText={setEmail} style={styles.input} />
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputHeading}>Full Name</Text>
				<TextInput value={name} onChangeText={setName} style={styles.input} />
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputHeading}>Password</Text>
				<TextInput
					value={pass}
					onChangeText={setPass}
					style={styles.input}
					secureTextEntry={true}
				/>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputHeading}>Confirm Password</Text>
				<TextInput
					value={confirmPass}
					onChangeText={setConfirmPass}
					style={styles.input}
					secureTextEntry={true}
				/>
			</View>
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
				disabled={!isChecked}
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
	inputContainer: {
		marginTop: 10,
		width: "100%",
	},
	inputHeading: {
		fontWeight: "600",
		fontSize: 18,
	},
	input: {
		height: 40,
		marginVertical: 12,
		borderWidth: 1,
		borderColor: "darkgray",
		paddingVertical: 20,
		paddingHorizontal: 10,
		fontSize: 16,
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
