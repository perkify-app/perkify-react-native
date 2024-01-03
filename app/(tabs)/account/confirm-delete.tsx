import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you sure you want to delete your account?</Text>
      <View style={styles.separator} />
      <View style={styles.buttons_container}>
      <TouchableOpacity style={styles.btn} onPress={() => router.replace("/")}>
        <Text>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => router.replace("/(tabs)/account")}>
        <Text>Cancel</Text>
      </TouchableOpacity>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttons_container: {
    flexDirection: "row",
  },
  btn: {
    backgroundColor: "gray",
    padding: 20,
    paddingHorizontal: 40,
    margin: 10
  }
});
