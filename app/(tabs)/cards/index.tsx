import { useState, useCallback } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from "react-native";

import { router, useFocusEffect } from "expo-router";
import getLoyaltyCardsByUser from "../../utils/getLoyaltyCardsByUser";
import getSortByCompletionLoyaltyCards from "../../utils/getSortByCompletionLoyaltyCards";
import { Picker } from "@react-native-picker/picker";
import getSortByDateLoyaltyCards from "../../utils/getSortByDateLoyaltyCards";
import getSortByCompletionLoyaltyCardsAsc from "../../utils/getSortByCompletionLoyaltyCardsASC";
import getSortByDateLoyaltyCardsAsc from "../../utils/getSortByDateLoyaltyCardsASC";
import { useAuth } from "../../../hooks/useAuth";
import { Loading } from "../../../screens/components/Loading";

export default function LoyaltyCardListScreen() {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [loyaltyCards, setLoyaltycards] = useState([]);
	const [loading, setLoading] = useState(true);

	const { user, setUser, getUser } = useAuth();

	useFocusEffect(
		useCallback(() => {
			const fetchData = async () => {
				try {
					const userData = await getUser();
					const loyaltyCardsData = await getLoyaltyCardsByUser(userData.id);

					setUser(userData);
					setLoyaltycards(loyaltyCardsData);
					setLoading(false);
				} catch (error) {
					console.error("Failed to fetch data:", error);
				}
			};

			fetchData();
		}, [])
	);

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);

		if (category === "default") {
			getLoyaltyCardsByUser(user.id).then((data) => {
				setLoyaltycards(data);
			});
		} else if (category === "most complete") {
			getSortByCompletionLoyaltyCards(user.id).then((data) => {
				setLoyaltycards(data);
			});
		} else if (category === "least complete") {
			getSortByCompletionLoyaltyCardsAsc(user.id).then((data) => {
				setLoyaltycards(data);
			});
		} else if (category === "earliest start date") {
			getSortByDateLoyaltyCards(user.id).then((data) => {
				setLoyaltycards(data);
			});
		} else if (category === "latest start date") {
			getSortByDateLoyaltyCardsAsc(user.id).then((data) => {
				setLoyaltycards(data);
			});
		}
	};

	if (loading) return <Loading />;

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>My Loyalty Cards</Text>
			<View style={styles.separator} />
			<ScrollView style={styles.pickerContainer}>
				<Picker
					style={styles.picker}
					selectedValue={selectedCategory}
					onValueChange={(itemValue) => handleCategoryChange(itemValue)}
				>
					<Picker.Item
						label="default"
						value="default"
						style={{ fontSize: 15 }}
					/>
					<Picker.Item
						label="most complete"
						value="most complete"
						style={{ fontSize: 15 }}
					/>
					<Picker.Item
						label="least complete"
						value="least complete"
						style={{ fontSize: 15 }}
					/>
					<Picker.Item
						label="earliest start date"
						value="earliest start date"
						style={{ fontSize: 15 }}
					/>
					<Picker.Item
						label="latest start date"
						value="latest start date"
						style={{ fontSize: 15 }}
					/>
				</Picker>
			</ScrollView>
			{loyaltyCards.map((loyaltyCard) => (
				<TouchableOpacity
					style={styles.button}
					key={loyaltyCard.id}
					onPress={() => router.push(`/cards/${loyaltyCard.id}`)}
				>
					<View style={styles.buttonContainer}>
						<Text style={styles.buttonText}>{loyaltyCard.company_name}</Text>
						<Text style={styles.buttonText}>
							{loyaltyCard.points}/{loyaltyCard.required_points}
						</Text>
					</View>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 50,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	button: {
		backgroundColor: "#DDDDDD",
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
		width: 300,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	buttonText: {
		fontSize: 16,
		color: "#000000",
		padding: 5,
		textAlign: "center",
	},
	pickerContainer: {
		marginBottom: 35,
	},
	picker: {
		height: 30,
		width: 150,
		backgroundColor: "white",
		borderWidth: 1,
		borderRadius: 10,
	},
});
