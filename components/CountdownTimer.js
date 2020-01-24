import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';

class CountdownTimer extends Component {
  render () {
    return (
      <View>
        <Text style={styles.container}>Stop talking in 30 seconds</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    color: '#fff',
  },
});

export default CountdownTimer
