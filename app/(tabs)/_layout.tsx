import { useCallback, useState } from "react";
import { Tabs, useFocusEffect } from "expo-router";
import { Feather, Entypo, MaterialIcons } from "@expo/vector-icons";

import { useAuth } from "../../hooks/useAuth";
import { Loading } from "../../screens/components/Loading";
import { Colours } from "../../constants/Colours";

export default function TabLayout() {
	const [loading, setLoading] = useState(true);
	const { user, setUser, getUser } = useAuth();

	useFocusEffect(
		useCallback(() => {
			const fetchData = async () => {
				try {
					const userData = await getUser();
					setUser(userData);
					setLoading(false);
				} catch (error) {
					console.error("Failed to fetch data:", error);
				}
			};

			fetchData();
		}, [])
	);

	if (loading) return <Loading />;

	return (
		<Tabs
			screenOptions={{
				tabBarInactiveTintColor: Colours.purple,
				tabBarActiveTintColor: Colours.pink,
				tabBarStyle: {
					borderTopColor: "lightblue",
					borderTopWidth: 1,
				},
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="merchants"
				options={{
					title: "Merchants",
					tabBarIcon: ({ color }) => (
						<Entypo name="shop" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="cards"
				options={{
					title: "Cards",
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="loyalty" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="camera"
				options={{
					title: "Scan",
					href: user?.id === "U1" ? "/camera" : null,
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="qr-code-scanner" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="account"
				options={{
					title: "Account",
					tabBarIcon: ({ color }) => (
						<Feather name="user" size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
