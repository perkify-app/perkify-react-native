import { Text, View, StyleSheet, Pressable } from "react-native";
import { Merchants, Merchant } from "../../../constants/mock-data/Merchants";
import { Link, useLocalSearchParams } from "expo-router";
import MapView from "react-native-maps";

const singleMerchant = () => {
  const id = useLocalSearchParams();

  const filteredMerchant = Merchants.filter((merchant: Merchant) => {
    return merchant.merchant_id === Number(id.merchant_id);
  });

  const correctMerchant = filteredMerchant[0];

  return (
    <View style={styles.container}>
      <Pressable style={styles.back}>
        <Link href="/merchants">Back</Link>
      </Pressable>
      <Text style={styles.logo}>
        {correctMerchant.company_name} Logo placeholder
      </Text>
      <Text style={styles.title}>{correctMerchant.company_name}</Text>
      <View style={styles.mapPlaceholder}>
        <Text>Map placeholder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  logo: {
    fontSize: 15,
    textAlign: "right",
    marginRight: 15,
  },

  title: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
  map: {
    width: "50%",
    height: "50%",
  },
  mapPlaceholder: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 300,
    backgroundColor: "#DDDDDD",
    marginTop: 20,
  },
});

export default singleMerchant;
