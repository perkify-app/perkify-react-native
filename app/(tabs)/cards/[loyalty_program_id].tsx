import { StyleSheet, Text, View } from "react-native";
import { LoyaltyCards } from "../../../constants/mock-data/LoyaltyCards";
import StampCard from "../../../screens/components/StampCard";
import { Merchants } from "../../../constants/mock-data/Merchants";
import QRCode from "react-native-qrcode-svg";
import { useLocalSearchParams } from "expo-router";

console.log(Merchants);

export default function LoyaltyCardScreenInfo() {
  // const card = LoyaltyCards[0]; // mocked data for now
  const id = useLocalSearchParams();
  const filteredCard = LoyaltyCards.filter((card) => {
    return card.loyalty_program_id === Number(id.loyalty_program_id);
  });
  const card = filteredCard[0];

  const merchant = Merchants.find(
    (m) => m.merchant_id === card.loyalty_program_id
  );
  const merchantName = merchant ? merchant.company_name : "Unknown Merchant";

  return (
    <View style={styles.exampleContainer}>
      <QRCode size={200} value="https://www.google.com" />
      <View style={styles.separator} />
      <Text style={styles.exampleText}>Merchant: {merchantName}</Text>
      <Text style={styles.exampleText}>
        You've got {card.points} stamp{card.points === 1 ? "" : "s"}!
      </Text>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
