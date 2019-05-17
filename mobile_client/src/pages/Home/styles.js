import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    padding: 15,
  },
});

const buttons = StyleSheet.create({
  check: {
    alignSelf: 'center',
    marginTop: 20,
  },
  camera: {
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});

export { styles, buttons };
