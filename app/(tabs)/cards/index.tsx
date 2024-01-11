import { useState, useCallback } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import { router, useFocusEffect } from "expo-router";
import getLoyaltyCardsByUser from "../../utils/getLoyaltyCardsByUser";
import getSortByCompletionLoyaltyCards from "../../utils/getSortByCompletionLoyaltyCards";
import { Picker } from "@react-native-picker/picker";
import getSortByDateLoyaltyCards from "../../utils/getSortByDateLoyaltyCards";
import getSortByCompletionLoyaltyCardsAsc from "../../utils/getSortByCompletionLoyaltyCardsASC";
import getSortByDateLoyaltyCardsAsc from "../../utils/getSortByDateLoyaltyCardsASC";
import { useAuth } from "../../../hooks/useAuth";
import { Loading } from "../../../screens/components/Loading";
import { Colours } from "../../../constants/Colours";
import { Feather } from "@expo/vector-icons";
import { Button } from "../../../screens/components/Button";

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

	if (loyaltyCards.length === 0) {
		return (
			<View
				style={{
					...styles.page,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Entypo name="emoji-sad" size={120} color={Colours.lightpurple} />
				<Text
					style={{
						fontWeight: "bold",
						fontSize: 16,
						paddingVertical: 10,
						marginTop: 20,
					}}
				>
					No Loyalty Cards Yet!
				</Text>
				<Text style={{ paddingBottom: 20, color: "gray" }}>
					Select a Merchant and activate a card to see it here!
				</Text>
				<Button
					title="Go to Merchants"
					onPress={() => router.push("/merchants/")}
				/>
			</View>
		);
	}

	return (
		<ScrollView contentContainerStyle={styles.page}>
			<View style={styles.container}>
				<Text style={styles.title}>My Loyalty Cards</Text>
				<ScrollView style={styles.pickerContainer}>
					<Picker
						style={styles.picker}
						selectedValue={selectedCategory}
						onValueChange={(itemValue) => handleCategoryChange(itemValue)}
					>
						<Picker.Item
							label="Sort By"
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
				<Feather
					name="arrow-down"
					size={24}
					color={Colours.pink}
					style={{ marginBottom: 15 }}
				/>
				<ScrollView style={{ marginBottom: 50 }}>
					{loyaltyCards.map((loyaltyCard) => (
						<TouchableOpacity
							style={styles.button}
							key={loyaltyCard.id}
							onPress={() => router.push(`/cards/${loyaltyCard.id}`)}
						>
							<View style={styles.buttonContainer}>
								<Text style={styles.buttonText}>
									{loyaltyCard.company_name}
								</Text>
								<Text style={styles.buttonText}>
									{loyaltyCard.points}/{loyaltyCard.required_points}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: Colours.backgroundOffWhite,
		paddingTop: 50,
		paddingBottom: 30,
	},
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	button: {
		backgroundColor: "white",
		paddingVertical: 20,
		borderRadius: 7,
		marginBottom: 12,
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
		paddingVertical: 30,
		marginBottom: 10,
	},
	picker: {
		height: 30,
		width: 300,
		backgroundColor: "white",
		borderWidth: 1,
		borderRadius: 16,
	},
});
