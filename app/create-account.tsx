import { StyleSheet, View } from "react-native";

import CreateAccountForm from "../screens/components/CreateAccountForm";

export default function CreateAccountScreen() {
	return (
		<View style={styles.container}>
			<CreateAccountForm />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
