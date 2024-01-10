import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { router, Link } from "expo-router";
import getLoyaltyCardsByUser from "../../utils/getLoyaltyCardsByUser";
import getSortByCompletionLoyaltyCards from "../../utils/getSortByCompletionLoyaltyCards";
import { Picker } from "@react-native-picker/picker";
import getSortByDateLoyaltyCards from "../../utils/getSortByDateLoyaltyCards";
import getSortByCompletionLoyaltyCardsAsc from "../../utils/getSortByCompletionLoyaltyCardsASC";
import getSortByDateLoyaltyCardsAsc from "../../utils/getSortByDateLoyaltyCardsASC";

export default function LoyaltyCardListScreen() {
  const [loyaltyCards, setLoyaltycards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    getLoyaltyCardsByUser().then((data) => {
      setLoyaltycards(data);
      setLoading(false);
    });
  }, []);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "default") {
      getLoyaltyCardsByUser().then((data) => {
        setLoyaltycards(data);
      });
    } else if (category === "most complete") {
      getSortByCompletionLoyaltyCards().then((data) => {
        setLoyaltycards(data);
      });
    } else if (category === "least complete") {
      getSortByCompletionLoyaltyCardsAsc().then((data) => {
        setLoyaltycards(data);
      });
    } else if (category === "earliest start date") {
      getSortByDateLoyaltyCards().then((data) => {
        setLoyaltycards(data);
      });
    } else if (category === "latest start date") {
      getSortByDateLoyaltyCardsAsc().then((data) => {
        setLoyaltycards(data);
      });
    }
  };

  if (loading)
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Loyalty Cards</Text>
      <View style={styles.separator} />
      <ScrollView style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => handleCategoryChange(itemValue)}
        >
          <Picker.Item
            label="default"
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
      {loyaltyCards.map((loyaltyCard) => (
        <TouchableOpacity
          style={styles.button}
          key={loyaltyCard.id}
          onPress={() => router.push(`/cards/${loyaltyCard.id}`)}
        >
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{loyaltyCard.name}</Text>
            <Text style={styles.buttonText}>
              {loyaltyCard.points}/{loyaltyCard.required_points}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
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
  pickerContainer: {
    marginBottom: 35,
  },
  picker: {
    height: 30,
    width: 150,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
});
