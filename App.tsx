import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GluestackUIProvider} from "@gluestack-ui/themed";

export default function App() {
	return (
		<GluestackUIProvider>
			<View style={styles.container}>
				<Text>Open up App.tsx to start working on your app!</Text>
				<StatusBar style="auto" />
			</View>
		</GluestackUIProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
