import React from 'react';
import { StyleSheet, View } from 'react-native';
import CountdownTimer from './components/CountdownTimer'

export default function App() {
  return (
    <View style={styles.container}>
      <CountdownTimer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: '#2c3339',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
