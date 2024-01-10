import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, Modal, Alert } from "react-native";

import patchLoyaltyCardByID from "../../app/utils/patchLoyaltyCardByID";
import getLoyaltyCardByUserId from "../../app/utils/getLoyaltyCardByUserId";
import StampCard from "./StampCard";

export default function CameraComponent() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);
  const [points, setPoints] = useState(0);
  const [loyaltyCardId, setLoyaltyCardId] = useState(null);
  const [requiredPoints, setRequiredPoints] = useState(null);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (scanned) {
      console.log("QR Code Scanned!");
      setModalVisible(true);
    }
  }, [scanned]);

  useEffect(() => {
    if (data) {
      const fetchLoyaltyCard = async () => {
        const loyaltyCards = await getLoyaltyCardByUserId(data);
        if (loyaltyCards.length > 0) {
          const loyaltyCard = loyaltyCards[0];
          setPoints(loyaltyCard.points);
          setLoyaltyCardId(loyaltyCard.id);
        }
      };

      fetchLoyaltyCard();
    }
  }, [data]);

  useEffect(() => {
    console.log("Points:", points);
  }, [points, loyaltyCardId]);

  const incrementPoints = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to increase points?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: () => {
            const newPoints = points + 1;
            setPoints(newPoints);
            patchLoyaltyCardByID(loyaltyCardId, { inc_points: 1 });
          } 
        }
      ]
    );
  };

  const decrementPoints = () => {
    const newPoints = points > 0 ? points - 1 : 0;
    setPoints(newPoints);
    if (newPoints < points) {
      patchLoyaltyCardByID(loyaltyCardId, { inc_points: -1 });
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to use the camera
        </Text>
        <Button
          title="Grant Permission"
          onPress={() => Camera.requestCameraPermissionsAsync()}
        />
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data);
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`
    ); // replace this with state?
    setTimeout(() => {
      setScanned(false); // wouldn't scan after the first scan without this
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.overlay}>
        <Text style={styles.text}>
          {scanned ? "QR Code Scanned! 🎉" : "Please scan QR code 🤖"}
        </Text>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>
              Customer {data}: {points} stamps
            </Text>

            <StampCard stamps={points} />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Increment" onPress={incrementPoints} />
              </View>
              <View style={styles.button}>
                <Button title="Decrement" onPress={decrementPoints} />
              </View>
            </View>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  button: {
    flex: 2,
    alignSelf: "flex-end",
    alignItems: "center",

    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    margin: 40,
  },
});
