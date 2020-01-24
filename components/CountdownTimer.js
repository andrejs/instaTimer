import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
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
        <ProgressCircle
          style={{ height: 200 }}
          progress={progress}
          progressColor={'rgb(134, 65, 244)'}
          strokeWidth={69}
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
