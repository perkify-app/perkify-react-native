import { StyleSheet, Text, View } from "react-native";
import LoyaltyCardScreenInfo from "../../../screens/LoyaltyCardScreenInfo";



export default function LoyaltyCardListScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Loyalty Cards</Text>
			<View style={styles.separator} />
			<LoyaltyCardScreenInfo />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
