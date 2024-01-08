import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Link, useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import getMerchantById from "../../utils/getMerchantById";

interface merchant {
  merchant_id?: number;
  company_name?: string;
  logo_url?: string;
  description?: string;
  address?: string;
  phone_no?: string;
}

const singleMerchant = () => {
  const [merchant, setMerchant] = useState<merchant>({});
  const [loading, setLoading] = useState(true);
  const id = useLocalSearchParams();

  const merchantId = id.id;

  useEffect(() => {
    getMerchantById(merchantId).then((data) => {
      setMerchant(data);
      setLoading(false);
    });
  }, [merchantId]);

  if (loading)
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />;
      </View>
    );

  return (
    <View style={styles.container}>
      <Pressable style={styles.back}>
        <Link href="/merchants">Back</Link>
      </Pressable>
      <Text style={styles.logo}>{merchant.company_name} Logo placeholder</Text>
      <Text style={styles.title}>{merchant.company_name}</Text>
      <View style={styles.mapPlaceholder}>
        <Text>Map/Image placeholder</Text>
      </View>
      <Text style={styles.description}>{merchant.description}</Text>
      <Text style={styles.description}>{merchant.phone_no}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push(`/(tabs)/cards/2`);
        }}
      >
        <Text style={styles.btnText}>View Loyalty Card</Text>
      </TouchableOpacity>
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
  mapPlaceholder: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 300,
    backgroundColor: "#DDDDDD",
    marginTop: 20,
    marginBottom: 20,
  },
  back: {
    marginLeft: 15,
  },
  description: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    marginBottom: 10,
    width: 300,
    alignSelf: "center",
    borderRadius: 7,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});

export default singleMerchant;
