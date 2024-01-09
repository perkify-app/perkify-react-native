import { Pressable, Platform } from "react-native";
import { useEffect } from "react";
import { router, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FAIcon } from "../screens/components/FAIcon";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Inter: require("../assets/fonts/Inter-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="(modals)/delete-account"
				options={{
					presentation: "modal",
					title: "My Account",
					headerLeft: () => (
						<Pressable onPress={() => router.push("/account/")}>
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
			<Stack.Screen
				name="(modals)/customer-welcome"
				options={{
					presentation: "modal",
					title: "Welcome!",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="index"
				options={{ headerShown: false, navigationBarHidden: true }}
			/>
			<Stack.Screen
				name="create-account"
				options={{
					title: "Login",
					headerShown: true,
					navigationBarHidden: true,
					headerLeft: () => (
						<Pressable onPress={() => router.push("/")}>
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
