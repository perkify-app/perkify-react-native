import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen
				name="confirm-delete"
				options={{
					presentation: "fullScreenModal",
					headerShown: true
				}}
			/>
		</Stack>
	);
}
