import { Pressable, Text } from "react-native";
import { Stack, router } from "expo-router";
import { FAIcon } from "../../../screens/components/FAIcon";

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen
				name="[id]"
				options={{
					headerShown: true,
					title: "Merchants",
					headerLeft: () => (
						<Pressable onPress={() => router.push("/merchants/")}>
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
