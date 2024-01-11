import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	ImageBackground,
} from "react-native";

import { Button } from "./components/Button";
import { useAuth } from "../hooks/useAuth";
import { QR } from "./components/QR";
import { Loading } from "./components/Loading";
import { Colours } from "../constants/Colours";

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

	if (loading) return <Loading />;

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>My Account</Text>
			<View style={styles.seperator}>
				<Text style={styles.subHeading}>Name</Text>
				<Text style={styles.accountInfo}>{user.name}</Text>
			</View>
			<View style={styles.seperator}>
				<Text style={styles.subHeading}>Email</Text>
				<Text style={styles.accountInfo}>{user.email}</Text>
			</View>
			<ImageBackground
				source={require("../assets/images/qr-bg.png")}
				imageStyle={{
					resizeMode: "contain",
					top: -100,
					left: -20,
				}}
				style={{
					justifyContent: "center",
					alignItems: "center",
					width: "110%",
				}}
			>
				<QR userId={user.id} />
			</ImageBackground>
			<Button title="Sign Out" onPress={logoutUser} />
			<Button
				title="Delete My Account"
				onPress={() => router.replace("/delete-account")}
				style={{ backgroundColor: "transparent" }}
				isDark={false}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colours.backgroundOffWhite,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 30,
	},
	seperator: {
		marginBottom: 25,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 24,
		paddingTop: 35,
	},
	subHeading: {
		fontWeight: "700",
		textAlign: "center",
		marginBottom: 5,
	},
	accountInfo: {
		backgroundColor: "white",
		borderRadius: 14,
		fontSize: 16,
		textAlign: "center",
		paddingVertical: 12,
		color: "gray",
		width: 250,
	},
});
