import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Button, Animated, Dimensions, Easing} from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import InputSpinner from "react-native-input-spinner";

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.spinValue = new Animated.Value(0);

    this.state = {
      count: 0,
      progress: 0,
      from: this.props.from
    }
  }

  componentDidMount() {
    this.resetCountdown();
  }

  componentDidUpdate() {
    if (this.state.count <= 0) {
      clearInterval(this.countdownInterval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.countdownInterval);
  }

  updateFrom = (from) => {
    this.setState(prevState => (
      Object.assign({}, prevState, {
        from: from
      })
    ));
  };

  resetCountdown = () => {
    !this.countdownInterval || clearInterval(this.countdownInterval);

    const from = this.state.from;

    this.setState({
      count: from,
      progress: 0
    });

    this.countdownInterval = setInterval(() => {
      this.setState(prevState => (
        Object.assign({}, prevState, {
          count: prevState.count - 0.1,
          progress: 1 - (prevState.count - 0.1) / from
        })
      ));
    }, 100);

    this.spinValue = new Animated.Value(0);

    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: from * 1085,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  };

  render() {
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
        <View style={styles.containerAlign}>
          <View style={styles.clock} />
          <Animated.View style={{transform: [{rotate: spin}] }}>
            <View style={[styles.pointer]} />
            <Image
              style={styles.logo}
              source={require('../assets/logo.png')}
            />
          </Animated.View>
          <View style={styles.pointerDot} />
          <View style={styles.pointerDotTrans} />
        </View>

        <ProgressCircle
          style={{ height: 420}}
          backgroundColor={'#1e2326'}
          progress={progress}
          progressColor={'#e63b09'}
          strokeWidth={70}
          cornerRadius={1}
        />

        <InputSpinner
          max={600}
          min={15}
          step={15}
          textColor={"#fff"}
          colorMax={"#f04048"}
          colorMin={"#40c5f4"}
          editable={true}
          value={this.props.from}
          onChange={(num) => {
            this.updateFrom(num);
          }}
          style={styles.spinner}
        />
        <Button
            onPress={this.resetCountdown}
            title="Reset"
        />
      </View>
    )
  }
}

const {width} = Dimensions.get('screen');
const SIZE = width * 0.9;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c343a',
  },
  containerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    top: 210,
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
    borderWidth: 5,
    borderColor: '#394349',
    borderRadius: SIZE / 0.4,
    height: SIZE * 0.9,
    width: SIZE * 0.9,
    position: 'absolute',
  },
  pointer: {
    backgroundColor: '#fff',
    height: 100,
    left: -3,
    position: 'absolute',
    top: -100,
    width: 6,
  },
  pointerDotTrans: {
    backgroundColor: '#fff',
    borderRadius: SIZE / 0.4,
    height: SIZE / 20,
    opacity: 0.3,
    position: 'absolute',
    width: SIZE / 20,
  },
  pointerDot: {
    backgroundColor: '#fff',
    borderRadius: SIZE / 0.4,
    height: SIZE / 35,
    position: 'absolute',
    width: SIZE / 35,
  },
  logo: {
    position: 'absolute',
    top: -127,
    left: -20,
    height: 40,
    width: 40,
  },
  spinner: {
    top: -15,
  }
});

export default CountdownTimer
