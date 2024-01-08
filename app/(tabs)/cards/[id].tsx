import { StyleSheet, Text, View, Pressable } from "react-native";
import { LoyaltyCards } from "../../../constants/mock-data/LoyaltyCards";
import StampCard from "../../../screens/components/StampCard";
import QRCode from "react-native-qrcode-svg";
import { useLocalSearchParams, Link } from "expo-router";
import { useEffect, useState } from "react";
import getLoyaltyCardById from "../../utils/getLoyaltyCardbyId";

export default function LoyaltyCardScreenInfo() {
  interface loyaltyCard {
    loyalty_program_id?: number;
    user_id?: number;
    points?: number;
    created_at?: string;
    name?: string;
    required_points?: number;
  }

  const id = useLocalSearchParams();

  const loyaltyCardId = id.id;

  const [loyaltyCard, setLoyaltyCard] = useState<loyaltyCard>({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getLoyaltyCardById(loyaltyCardId).then((data) => {
      setLoyaltyCard(data);
      setLoading(false);
    });
  }, []);

  const merchantName = loyaltyCard ? loyaltyCard.name : "Unknown Merchant";

  return (
    <View>
      <Pressable style={styles.back}>
        <Link href="/cards">Back</Link>
      </Pressable>
      <View style={styles.exampleContainer}>
        <QRCode size={200} value="https://www.google.com" />
        <View style={styles.separator} />
        <Text style={styles.exampleText}>Merchant: {merchantName} </Text>
        <Text style={styles.exampleText}>
          You've got {loyaltyCard.points} stamp
          {loyaltyCard.points === 1 ? "" : "s"}!
        </Text>
        <StampCard stamps={loyaltyCard.points} />
      </View>
    </View>
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
