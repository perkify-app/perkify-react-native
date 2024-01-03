import { StyleSheet, Text, View } from 'react-native';

import AccountScreenInfo from '../../../screens/AccountScreenInfo';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Account</Text>
      <View style={styles.separator} />
      <AccountScreenInfo />
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 25,
    height: 1,
    width: '80%',
  },
});
