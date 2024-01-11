import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" options={{ title: "My Account", animation: "slide_from_left" }} />
		</Stack>
	);
}
