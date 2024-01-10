import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import QRCode from "react-native-qrcode-svg";

import { Users } from "../../../constants/mock-data/Users";
import getAllMerchants from "../../utils/getMerchants";

export default function MerchantListScreen() {
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredMerchants, setFilteredMerchants] = useState([]);

  useEffect(() => {
    getAllMerchants().then((data) => {
      setMerchants(data);
      setLoading(false);
      setFilteredMerchants(data);
    });
  }, []);

  const filterMerchants = (input) => {
    setInput(input);
    if (input.trim() === "") {
      setFilteredMerchants(merchants);
    } else {
      const filtered = merchants.filter((merchant) =>
        merchant.company_name.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredMerchants(filtered);
    }
  };

  const handleInputChange = (inputText) => {
    filterMerchants(inputText);
  };

  const handleClearInput = () => {
    setInput("");
    filterMerchants("");
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all items") {
      getAllMerchants().then((data) => {
        setMerchants(data);
      });
    } else {
      getAllMerchants().then((data) => {
        const filteredCategory = data.filter(
          (merchant) => merchant.category === category
        );
        setMerchants(filteredCategory);
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
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <QRCode size={200} value="https://www.google.com" />
      <View style={styles.separator}>
        <Text style={styles.sub_heading}>User ID</Text>
        <Text style={styles.account_userId}>{Users[0].id}</Text>
      </View>
      <Text style={styles.title}>View Merchants with promotions</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="search..."
          placeholderTextColor={"grey"}
          onChangeText={handleInputChange}
          value={input}
        />
        {input !== "" && (
          <TouchableOpacity
            onPress={handleClearInput}
            style={styles.clearButton}
          >
            <Text style={styles.clearButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => handleCategoryChange(itemValue)}
        >
          <Picker.Item
            label="all categories"
            value="all items"
            style={{ fontSize: 15 }}
          />
          <Picker.Item label="coffee" value="coffee" style={{ fontSize: 15 }} />
          <Picker.Item label="bakery" value="bakery" style={{ fontSize: 15 }} />
        </Picker>
      </View>
      {filteredMerchants.map((merchant) => (
        <TouchableOpacity
          style={styles.button}
          key={merchant.id}
          onPress={() => router.push(`/merchants/${merchant.id}`)}
        >
          <Text style={styles.buttonText}>{merchant.company_name}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.separator} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: 300,
  },
  buttonText: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    alignItems: "center",
  },
  sub_heading: {
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },
  account_userId: {
    backgroundColor: "white",
    color: "black",
    borderRadius: 7,
    fontSize: 24,
    width: 200,
    textAlign: "center",
    height: 35,
    marginTop: 5,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },
  inputField: {
    height: 40,
    width: 300,
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    color: "black",
    borderRadius: 10,
  },
  clearButtonText: {
    color: "black",
    fontSize: 12,
  },
  clearButton: {
    padding: 5,
    borderRadius: 50,
    marginLeft: -25,
    backgroundColor: "#DDDDDD",
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
