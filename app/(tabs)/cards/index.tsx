import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LoyaltyCardScreenInfo from "../../../screens/LoyaltyCardScreenInfo";
import { LoyaltyPrograms } from "../../../constants/mock-data/LoyaltyPrograms";

export default function LoyaltyCardListScreen() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}> My Loyalty Cards</Text>
      <View style={styles.separator} />
      <TouchableOpacity>
        <Text>Loyalty Card 1</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
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
});
