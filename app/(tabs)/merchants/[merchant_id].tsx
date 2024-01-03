import { Text, View, StyleSheet } from "react-native";
import { Merchants, Merchant } from "../../../constants/mock-data/Merchants";
import { useLocalSearchParams } from "expo-router";

const singleMerchant = () => {
  const id = useLocalSearchParams();

  const filteredMerchant = Merchants.filter((merchant: Merchant) => {
    return merchant.merchant_id === Number(id.merchant_id);
  });

  const correctMerchant = filteredMerchant[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{correctMerchant.company_name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    marginLeft: 30,
  },
});

export default singleMerchant;
