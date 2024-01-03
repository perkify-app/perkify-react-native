import { StyleSheet, Text, View } from "react-native";
import { LoyaltyCards } from "../constants/mock-data/LoyaltyCards";
import StampCard from "./components/StampCard";
import { Merchants } from "../constants/mock-data/Merchants";

console.log(Merchants);

export default function LoyaltyCardScreenInfo() {
    const card = LoyaltyCards[1]; // mocked data for now
    const merchant = Merchants.find(m => m.merchant_id === card.loyalty_program_id);
    const merchantName = merchant ? merchant.company_name : 'Unknown Merchant';
  
    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.exampleText}>Merchant: {merchantName}</Text>
        <Text style={styles.exampleText}>You've got {card.points} stamp{card.points === 1 ? '' : 's'}!</Text>
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