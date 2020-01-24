import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts'

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
    const progress = count / this.props.from;

    return (
      <View style={styles.container}>
        <Text style={styles.number}>{count}</Text>
        <Text style={styles.text}>seconds</Text>
        <ProgressCircle style={{ height: 200 }} progress={progress} progressColor={'rgb(134, 65, 244)'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c343a',
  },
  number: {
    color: '#fff',
    fontSize: 120,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CountdownTimer
