import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GluestackUIProvider } from "@gluestack-ui/themed";

import { Button, ButtonSpinner, ButtonText } from "@gluestack-ui/themed"

let count: number = 0

export default function App() {
	return (
		<GluestackUIProvider>
			<View style={styles.container}>
				<Button isDisabled={true} bg="$darkBlue600" p="$3">
					<ButtonSpinner mr="$1" />
					<ButtonText fontWeight="$medium" fontSize="$sm">
						Please wait...
					</ButtonText>
				</Button><Button />
				<Text>Open up App.tsx to start working on your app! fsdfsdfsgfdfdgfdggfddfsdf</Text>
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
