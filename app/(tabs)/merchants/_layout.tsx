import { Pressable, Text } from "react-native";
import { Stack, router } from "expo-router";
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
					title: "Merchants",
					animation: "slide_from_right",
					headerLeft: () => (
						<Pressable onPress={() => router.push("/merchants/")}>
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
