import { StyleSheet, Text, View } from "react-native";
import StampCard from "../../../screens/components/StampCard";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import getLoyaltyCardById from "../../utils/getLoyaltyCardbyId";
import { ScrollView } from "react-native-gesture-handler";
import { QR } from "../../../screens/components/QR";
import { useAuth } from "../../../hooks/useAuth";
import { Loading } from "../../../screens/components/Loading";

interface loyaltyCard {
	loyalty_program_id?: number;
	user_id?: number;
	points?: number;
	created_at?: string;
	company_name?: string;
	required_points?: number;
}

export default function LoyaltyCardScreenInfo() {
	const id = useLocalSearchParams();

	const [loyaltyCard, setLoyaltyCard] = useState<loyaltyCard | null>(null);
	const [loading, setLoading] = useState(true);

	const { user, setUser, getUser } = useAuth();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userData = await getUser();
				const cardData = await getLoyaltyCardById(id.id);

				setLoyaltyCard(cardData);
				setUser(userData);
				setLoading(false);
			} catch (error) {
				console.error("Failed to fetch data:", error);
			}
		};

		fetchData();
	}, []);

	const merchantName = loyaltyCard
		? loyaltyCard.company_name
		: "Unknown Merchant";

	if (loading) return <Loading />;

	return (
		<ScrollView>
			<View style={styles.exampleContainer}>
				<QR userId={user.id} showId={false} />
				<View style={styles.separator} />
				<Text style={styles.exampleText}>Merchant: {merchantName} </Text>
				<Text style={styles.exampleText}>
					You've got {loyaltyCard.points} stamp
					{loyaltyCard.points === 1 ? "" : "s"}!
				</Text>
				<StampCard
					stamps={loyaltyCard.points}
					requiredPoints={loyaltyCard.required_points}
				/>
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	exampleContainer: {
		marginTop: 50,
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 50,
	},
	exampleText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: "center",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
	back: {
		marginTop: 50,
		marginLeft: 20,
	},
});
