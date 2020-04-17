import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Button, Animated, Easing} from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
const DURATION = 6000;

class CountdownTimer extends Component {
  spinValue = new Animated.Value(0);

  constructor (props) {
    super(props);

    this.state = {
      count: 0,
      progress: 0
    }
  }

  componentDidMount() {
    this.resetCountdown(this.props.from);
  }

  componentDidUpdate() {
    if (this.state.count <= 0) {
      clearInterval(this.countdownInterval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  resetCountdown = (from) => {
    !this.countdownInterval || clearInterval(this.countdownInterval);

    this.setState({
      count: from,
      progress: 0
    });

    this.countdownInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 0.1,
        progress: 1 - (prevState.count - 0.1) / from
      }))
    }, 100);

    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: DURATION,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  };

  render () {
    const count = this.state.count;
    const progress = this.state.progress;
    const seconds = Math.round(count);
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>
        <Text style={styles.number}>{seconds}</Text>
        <Text style={styles.text}>seconds</Text>
        <View style={styles.clock}>
          <Animated.View style={{transform: [{rotate: spin}] }}>
            <View style={[styles.pointer]} />
            <Image
              style={styles.logo}
              source={require('../assets/logo.png')}
            />
          </Animated.View>

        </View>
        <ProgressCircle
          style={{ height: 420}}
          backgroundColor={'#1e2326'}
          progress={progress}
          progressColor={'#e63b09'}
          strokeWidth={56}
          cornerRadius={1}
        />
        <Button
            onPress={this.resetCountdown.bind(this.props.from)}
            title="Reset"
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
    zIndex: 1,
  },
  pointer: {
    backgroundColor: '#fff',
    height: 100,
    left: -5,
    position: 'absolute',
    marginTop: -13,
    width: 6,
  },
  logo: {
    position: 'absolute',
    top: 80,
    left: -20,
    height: 40,
    width: 40,
  },
});

export default CountdownTimer
