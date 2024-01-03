import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../components/Themed";
import QRCode from "react-native-qrcode-svg";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <QRCode value="https://www.google.com" />
      <Text style={styles.title}>View Merchants with promotions</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Merchant 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Merchant 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Merchant 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Merchant 4</Text>
      </TouchableOpacity>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
  },
  buttonText: {
    fontSize: 16,
    color: "#000000",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
