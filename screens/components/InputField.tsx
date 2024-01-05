import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

interface InputProps {
	header: string;
	state: string;
	onChange(stateHandler): void;
	hide?: boolean;
}

export const InputField: React.FC<InputProps> = ({
	header,
	state,
	onChange,
	hide = false,
}: InputProps) => {
	return (
		<View style={styles.inputContainer}>
			<Text style={styles.inputHeading}>{header}</Text>
			<TextInput
				value={state}
				onChangeText={onChange}
				style={styles.input}
				secureTextEntry={hide}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
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
});
