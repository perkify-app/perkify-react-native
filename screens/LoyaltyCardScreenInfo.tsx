import { StyleSheet, Text, View } from "react-native";
import { LoyaltyCards } from "../constants/mock-data/LoyaltyCards";

export default function LoyaltyCardScreenInfo() {
  const card = LoyaltyCards[0]; // mocked data for now
  console.log('Card:', card);
  return (
    <View style={styles.exampleContainer}>
      <Text style={styles.exampleText}>Loyalty Program ID: {card.loyalty_program_id}</Text>
      <Text style={styles.exampleText}>Points: {card.points}</Text>
      <Text style={styles.exampleText}>Created At: {card.created_at}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  exampleContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  exampleText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});