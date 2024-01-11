import { Tabs } from "expo-router";
import { FAIcon } from "../../screens/components/FAIcon";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Loading } from "../../screens/components/Loading";

export default function TabLayout() {
	const [loading, setLoading] = useState(true);
	const { user, setUser, getUser } = useAuth();

	useEffect(() => {
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
	}, []);

	if (loading) return <Loading />;

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "red",
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="merchants"
				options={{
					title: "Merchants",
					tabBarIcon: ({ color }) => <FAIcon name="home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="cards"
				options={{
					title: "Loyalty Cards",
					tabBarIcon: ({ color }) => <FAIcon name="dollar" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="camera"
				options={{
					title: "Camera",
					href: user.id === "U1" ? "/camera" : null,
					tabBarIcon: ({ color }) => <FAIcon name="camera" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="account"
				options={{
					title: "Account",
					tabBarIcon: ({ color }) => <FAIcon name="user" color={color} />,
				}}
			/>
		</Tabs>
	);
}
