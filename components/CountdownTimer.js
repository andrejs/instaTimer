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
        count: prevState.count - 0.1
      }))
    }, 100);

    setTimeout(() => {
      clearInterval(this.countdownInterval);
    }, this.props.from * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  render () {
    const count = this.state.count;
    const seconds = Math.round(count);
    const progress = 1 - count / this.props.from;

    return (
      <View style={styles.container}>
        <Text style={styles.number}>{seconds}</Text>
        <Text style={styles.text}>seconds</Text>
        <View style={styles.clock} />
        <ProgressCircle
          style={{ height: 420}}
          backgroundColor={'#1e2326'}
          progress={progress}
          progressColor={'#e63b09'}
          strokeWidth={60}
          cornerRadius={1}
        />
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
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginTop: -20,
  },
  clock: {
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#394349',
    borderRadius: 350/2,
    height: 350,
    justifyContent: 'center',
    left: -115,
    marginTop: 80,
    position: 'absolute',
    top: 100,
    width: 350,
  },

});

export default CountdownTimer
