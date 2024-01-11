import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	View,
	ScrollView,
} from "react-native";

import { Button } from "./components/Button";
import { useAuth } from "../hooks/useAuth";
import { QR } from "./components/QR";

export default function AccountScreenInfo() {
	const [loading, setLoading] = useState(true);
	const { user, setUser, logoutUser, getUser } = useAuth();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await getUser();
				setUser(userData);
				setLoading(false);
			} catch (error) {
				console.error("Failed to fetch user data:", error);
			}
		};

		fetchUser();
	}, []);

	if (loading)
		return (
			<View>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={{ marginTop: 30 }}>
				<View style={styles.seperator}>
					<Text style={styles.subHeading}>Full Name</Text>
					<Text style={styles.accountInfo}>{user.name}</Text>
				</View>
				<View style={styles.seperator}>
					<Text style={styles.subHeading}>Email</Text>
					<Text style={styles.accountInfo}>{user.email}</Text>
				</View>
				<QR userId={user.id} />
			</View>
			<Button title="Sign Out" onPress={logoutUser} />
			<Button
				title="Delete My Account"
				onPress={() => router.replace("/delete-account")}
				style={{ backgroundColor: "red" }}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginHorizontal: 50,
	},
	seperator: {
		marginBottom: 25,
	},
	subHeading: {
		fontWeight: "700",
		textAlign: "center",
		marginBottom: 5,
	},
	accountInfo: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: "center",
	},
});
