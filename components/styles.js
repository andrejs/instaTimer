import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('screen');
const sizeScreen = width * 0.9;
const colorPositive = '#fff';
const colorPrimary = '#e63b09';
const colorSecondaryLight = '#394349';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    top: 210,
  },
  number: {
    color: colorPositive,
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
  },
  text: {
    color: colorPositive,
    fontSize: 15,
    textAlign: 'center',
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
    height: 100,
    left: -3,
    position: 'absolute',
    top: -100,
    width: 6,
  },
  pointerDotTrans: {
    backgroundColor: colorPositive,
    borderRadius: sizeScreen / 0.4,
    height: sizeScreen / 20,
    opacity: 0.3,
    position: 'absolute',
    width: sizeScreen / 20,
  },
  pointerDot: {
    backgroundColor: colorPositive,
    borderRadius: sizeScreen / 0.4,
    height: sizeScreen / 35,
    position: 'absolute',
    width: sizeScreen / 35,
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
  },
  resetButton: {
    backgroundColor: colorPrimary,
    borderRadius: 2,
    height: 40,
  },
  resetText: {
    color: colorPositive,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default styles;
