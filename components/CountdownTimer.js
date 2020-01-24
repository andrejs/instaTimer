import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class CountdownTimer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: props.from
    }
  }

  componentDidMount() {
    this.countdownInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }, 1000);

    setTimeout(() => {
      clearInterval(this.countdownInterval);
    }, this.props.from * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  render () {
    const count = this.state.count;

    return (
      <View style={styles.container}>
        <Text style={styles.number}>{count}</Text>
        <Text style={styles.text}>seconds</Text>
        <View style={styles.clock}>
          <View style={styles.seconds} />
          <View style={styles.pointer} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c343a',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  number: {
    color: '#fff',
    fontSize: 120,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  clock: {
    borderWidth: 5,
    borderColor: '#394349',
    borderRadius: 350/2,
    height: 350,
    width: 350,
  },
  seconds: {
    backgroundColor: '#e63b09',
    width: 200,
    height: 200,
    borderRadius: 200/2
  },
  pointer: {
    backgroundColor: '#fff',
    height: 5,
    width: 300,
  },
});

export default CountdownTimer
