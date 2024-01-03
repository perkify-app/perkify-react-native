import { StyleSheet, Text, View } from "react-native";
import { LoyaltyCards } from "../constants/mock-data/LoyaltyCards";
import StampCard from "./components/StampCard";

export default function LoyaltyCardScreenInfo() {
  const card = LoyaltyCards[2]; // mocked data for now
  return (
    <View style={styles.exampleContainer}>
      {/* <Text style={styles.exampleText}>Loyalty Program ID: {card.loyalty_program_id}</Text> */}
      <Text style={styles.exampleText}>  You've got {card.points} stamp{card.points === 1 ? '' : 's'}!</Text>
      {/* <Text style={styles.exampleText}>Created At: {card.created_at}</Text> */}
      <StampCard stamps={card.points} />
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