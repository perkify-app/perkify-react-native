import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export const useAuth = () => {
    const [user, setUser] = useState(null)

	const loginUser = async (val) => {
		await AsyncStorage.setItem("user", JSON.stringify(val));
	};

	const logoutUser = async () => {
		await AsyncStorage.removeItem("user");
		router.replace("/");
	};

	async function getUser() {
		const response = await AsyncStorage.getItem("user");

		return JSON.parse(response);
	}

	return { user, setUser, loginUser, logoutUser, getUser };
};
