import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('screen');
const sizeScreen = width * 0.9;
const sizeBorder = sizeScreen / 70;
const colorPositive = '#fff';
const colorPrimary = '#e63b09';
const colorSecondary = '#1c3742';
const colorSecondaryLight = '#22444f';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorSecondary,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  containerCounter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 70,
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
    height: sizeScreen * 0.9,
    justifyContent: 'center',
    width: sizeScreen * 0.9,
  },
  containerPointers: {
    alignItems: 'center',
    justifyContent: 'center',
    height: sizeScreen * 0.9,
    position: 'absolute',
    width: sizeScreen * 0.9,
    zIndex: 1,
  },
  clock: {
    borderWidth: sizeBorder,
    borderColor: colorSecondaryLight,
    borderRadius: sizeScreen / 0.4,
    height: sizeScreen * 0.9,
    width: sizeScreen * 0.9,
    position: 'absolute',
  },
  pointer: {
    backgroundColor: colorPositive,
    height: sizeScreen * 0.3,
    left: -sizeBorder / 2,
    position: 'absolute',
    top: -sizeScreen * 0.3,
    width: sizeBorder,
  },
  logo: {
    position: 'absolute',
    top: -sizeScreen * 0.37,
    left: -sizeScreen / 20,
    height: sizeScreen / 10,
    width: sizeScreen / 10,
  },
  pointerDot: {
    backgroundColor: '#e56445',
    borderRadius: sizeScreen,
    height: sizeScreen / 20,
    position: 'absolute',
    width: sizeScreen / 20,
  },
  pointerDotSm: {
    backgroundColor: colorPositive,
    borderRadius: sizeScreen,
    height: sizeScreen / 35,
    position: 'absolute',
    width: sizeScreen / 35,
  },
  containerButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 70,
  },
  setTimer: {
    marginTop: 30,
    width: sizeScreen * 0.9,
  },
  setTimerButtons: {
    borderWidth: 5,
    borderColor: colorPositive,
    borderRadius: 30,
    height: 50,
    width: 50,
  },
  resetButton: {
    backgroundColor: colorPrimary,
    borderRadius: 3,
    height: 72,
    width: sizeScreen * 0.9,
  },
  resetText: {
    color: colorPositive,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
