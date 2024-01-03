import { StyleSheet, Text, View } from "react-native";

export default function LoyaltyCardScreenInfo() {
	return (
		<View>
			<View style={styles.exampleContainer}>
				<Text style={styles.exampleText}>
					I AM A LOYALTY CARD
				</Text>
				<Text style={styles.exampleText}>
					Change any of the text, save the file, and your app will automatically
					update.
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	exampleContainer: {
		alignItems: "center",
		marginHorizontal: 50,
	},
	exampleText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: "center",
	},
});
