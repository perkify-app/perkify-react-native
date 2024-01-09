import { router } from "expo-router";
import React, { useEffect, useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import axios from "axios";
import { Users } from "../constants/mock-data/Users";
import { Button } from "./components/Button";

export default function AccountScreenInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://perkify-api.onrender.com/api/users/U2"
        );
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.seperator}>
          <Text style={styles.subHeading}>Full Name</Text>
          <Text style={styles.accountInfo}>{user ? user.name : 'Loading...'}</Text>        </View>
        <View style={styles.seperator}>
          <Text style={styles.subHeading}>Email</Text>
          <Text style={styles.accountInfo}>{Users[0].email}</Text>
        </View>
        <View style={styles.qrCode}>
          <QRCode
              value={user ? user.name : 'Loading...'} 

            size={200}
            backgroundColor="transparent"
          />
        </View>
        <View style={styles.seperator}>
          <Text style={styles.subHeading}>User ID</Text>
          {user && <Text style={styles.accountUserId}>{user.id}</Text>}        </View>
      </View>
      <Button title="Sign Out" onPress={() => router.replace("/")} />
      <Button
        title="Delete My Account"
        onPress={() => router.replace("/delete-account")}
        style={{ backgroundColor: "red" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  seperator: {
    marginBottom: 25,
  },
  qrCode: {
    marginTop: 15,
    marginBottom: 25,
  },
  subHeading: {
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },
  accountInfo: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  accountUserId: {
    backgroundColor: "white",
    borderRadius: 7,
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 10,
    marginTop: 5,
    marginBottom: 15,
  },
});
