import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('screen');
const sizeScreen = width * 0.9;
const colorPositive = '#fff';
const colorPrimary = '#e63b09';
const colorSecondary = '#1c3742';
const colorSecondaryLight = '#22444f';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorSecondary,
    flex: 1,
    alignSelf: 'stretch',
  },
  containerCounter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 140,
  },
  counterNr: {
    color: colorPositive,
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  counterText: {
    color: colorPositive,
    fontSize: 14,
    textAlign: 'center',
    marginTop: -15,
  },
  containerClock: {
    justifyContent: 'center',
    top: 100,
    marginBottom: 250,
  },
  containerPointers: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -75,
    zIndex: 1,
  },
  clock: {
    borderWidth: 5,
    borderColor: colorSecondaryLight,
    borderRadius: sizeScreen / 0.4,
    height: sizeScreen * 0.9,
    width: sizeScreen * 0.9,
    position: 'absolute',
  },
  pointer: {
    backgroundColor: colorPositive,
    height: 110,
    left: -3,
    position: 'absolute',
    top: -110,
    width: 6,
  },
  pointerDot: {
    backgroundColor: '#e56445',
    borderRadius: sizeScreen / 0.4,
    height: sizeScreen / 20,
    position: 'absolute',
    width: sizeScreen / 20,
  },
  pointerDotSm: {
    backgroundColor: colorPositive,
    borderRadius: sizeScreen / 0.4,
    height: sizeScreen / 35,
    position: 'absolute',
    width: sizeScreen / 35,
  },
  logo: {
    position: 'absolute',
    top: -137,
    left: -20,
    height: 40,
    width: 40,
  },
  containerButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 70,
  },
  setTimer: {
    top: 30,
    width: sizeScreen * 0.9,
  },
  setTimerButtons: {
    borderWidth: 3,
    borderColor: colorPositive,
    borderRadius: sizeScreen,
    height: 50,
    width: 50,
  },
  resetButton: {
    backgroundColor: colorPrimary,
    borderRadius: 3,
    width: sizeScreen * 0.9,
  },
  resetText: {
    color: colorPositive,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default styles;
