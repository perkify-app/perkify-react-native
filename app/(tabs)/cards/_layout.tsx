import { Stack } from "expo-router";
import { Pressable } from "react-native";
import { router } from "expo-router";

import { FAIcon } from "../../../screens/components/FAIcon";

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="[id]"
				options={{
					headerShown: true,
					title: "Loyalty Cards",
					headerLeft: () => (
						<Pressable onPress={() => router.push("/cards")}>
							<FAIcon
								name="arrow-left"
								color="darkgray"
								size={20}
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
