import React, { Component } from 'react'
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
      <View>
        <Text style={styles.container}>Stop talking in {count} seconds</Text>
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
