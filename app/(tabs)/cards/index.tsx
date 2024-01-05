import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { LoyaltyPrograms } from "../../../constants/mock-data/LoyaltyPrograms";
import { LoyaltyCards } from "../../../constants/mock-data/LoyaltyCards";
import { router, Link } from "expo-router";
import getLoyaltyCards from "../../utils/getLoyaltyCards";

export default function LoyaltyCardListScreen() {
  const [LoyaltyCards, setLoyaltycards] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getLoyaltyCards().then((data) => {
      console.log(data);
      setLoyaltycards(data);
      setLoading(false);
    });
  }, []);
  if (loading)
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />;
      </View>
    );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Loyalty Cards</Text>
      <View style={styles.separator} />
      {LoyaltyPrograms.map((loyaltyProgram) => (
        <TouchableOpacity
          style={styles.button}
          key={loyaltyProgram.id}
          onPress={() => router.push(`/cards/${loyaltyProgram.id}`)}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{loyaltyProgram.name}</Text>
            <Text style={styles.buttonText}>/{loyaltyProgram.points}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});
