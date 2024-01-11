import { useEffect } from "react";
import { Pressable } from "react-native";
import { router, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";

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
		"Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
		"Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
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
					animation: "slide_from_right",
					headerLeft: () => (
						<Pressable onPress={() => router.push("/account/")}>
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
