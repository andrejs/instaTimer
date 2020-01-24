import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts'

class CountdownTimer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: props.from,
      progress: 0
    }
  }

  componentDidMount() {
    this.countdownInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 0.1,
        progress: 1 - (prevState.count - 0.1) / this.props.from
      }))
    }, 100);
  }

  componentDidUpdate() {
    if (this.state.count <= 0) {
      clearInterval(this.countdownInterval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  render () {
    const count = this.state.count;
    const progress = this.state.progress;
    const seconds = Math.round(count);

    return (
      <View style={styles.container}>
        <Text style={styles.number}>{seconds}</Text>
        <Text style={styles.text}>seconds</Text>
        <View style={styles.clock}>
          <View style={styles.pointer} />
          <Image
            style={{width: 200, height: 200}}
            source={require('../assets/logo.png')}
          />
        </View>
        <ProgressCircle
          style={{ height: 420}}
          backgroundColor={'#1e2326'}
          progress={progress}
          progressColor={'#e63b09'}
          strokeWidth={55}
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
    fontSize: 15,
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
  pointer: {
    backgroundColor: '#fff',
    height: 5,
    left: 112,
    position: 'absolute',
    top: 113,
    transform: [{ rotate: '-90deg'}],
    width: 111,
  },
});

export default CountdownTimer
