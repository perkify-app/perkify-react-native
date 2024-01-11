import { Stack, router } from "expo-router";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{ headerShown: false, animation: "slide_from_left" }}
			/>
			<Stack.Screen
				name="[id]"
				options={{
					headerShown: true,
					title: "Loyalty Cards",
					animation: "slide_from_right",
					headerLeft: () => (
						<Pressable onPress={() => router.push("/cards")}>
							<Feather
								name="arrow-left"
								size={24}
								color="darkgray"
								style={{
									paddingLeft: 0,
									paddingRight: 10,
									margin: 0,
								}}
							/>
						</Pressable>
					),
				}}
			/>
		</Stack>
	);
}
