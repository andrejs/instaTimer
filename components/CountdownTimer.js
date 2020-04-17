import React, { Component } from 'react';
import {
  View, Text, Image, Animated, Easing, TouchableOpacity,
} from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import InputSpinner from "react-native-input-spinner";
import styles from './styles';

const colorPrimary = '#e63b09';
const colorSecondaryDark = '#1e2326';
const colorSecondaryLight = '#394349';

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
          backgroundColor={colorSecondaryDark}
          progress={progress}
          progressColor={colorPrimary}
          strokeWidth={70}
          cornerRadius={1}
        />
        <InputSpinner
          max={600}
          min={15}
          step={15}
          textColor={"#fff"}
          colorMax={colorSecondaryLight}
          colorMin={colorSecondaryLight}
          editable={true}
          value={this.props.from}
          onChange={(num) => {
            this.updateFrom(num);
          }}
          style={styles.spinner}
        />
        <TouchableOpacity
          style={styles.resetButton}
          onPress={this.resetCountdown}
          underlayColor='#fff'>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CountdownTimer
