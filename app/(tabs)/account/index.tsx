import { StyleSheet, Text, View } from 'react-native';

import ExampleScreenInfo from '../../../components/ExampleScreenInfo';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Account</Text>
      <View style={styles.separator} />
      <ExampleScreenInfo />
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
});
