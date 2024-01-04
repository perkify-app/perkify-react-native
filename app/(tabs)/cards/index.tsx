import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LoyaltyCardScreenInfo from "../../../screens/LoyaltyCardScreenInfo";
import { LoyaltyPrograms } from "../../../constants/mock-data/LoyaltyPrograms";
import { LoyaltyCards } from "../../../constants/mock-data/LoyaltyCards";

export default function LoyaltyCardListScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Loyalty Cards</Text>
      <View style={styles.separator} />
      {LoyaltyPrograms.map((loyaltyprogram) => (
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{loyaltyprogram.name}</Text>
            <Text style={styles.buttonText}>0/{loyaltyprogram.points}</Text>
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
