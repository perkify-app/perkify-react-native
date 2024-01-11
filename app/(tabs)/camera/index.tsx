import { StyleSheet, View } from "react-native";
import CameraComponent from "../../../screens/components/CameraComponent";
import { Colours } from "../../../constants/Colours";

export default function CameraScreen() {
	return (
		<View style={styles.container}>
			<CameraComponent />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colours.backgroundOffWhite,
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
	button: {
		backgroundColor: "#DDDDDD",
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
		width: 300,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	buttonText: {
		fontSize: 16,
		color: "#000000",

		padding: 5,
		textAlign: "center",
	},
});
