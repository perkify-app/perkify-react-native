import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

import { useEffect, useState } from "react";
import { Users } from "../../../constants/mock-data/Users";
import getAllMerchants from "../../utils/getMerchants";

import { router } from "expo-router";

export default function MerchantListScreen() {
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllMerchants().then((data) => {
      setMerchants(data);
      setLoading(false);
    });
  }, []);
  console.log(merchants);

  if (loading)
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />;
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
      {merchants.map((merchant) => (
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
    borderRadius: 7,
    fontSize: 24,
    width: 200,
    textAlign: "center",
    paddingVertical: 10,
    marginTop: 5,
    marginBottom: 30,
  },
});
