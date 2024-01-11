import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Colours } from "../../constants/Colours";

export const Loading = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={Colours.pink} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
});
