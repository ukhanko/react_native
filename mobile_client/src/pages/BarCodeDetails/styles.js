import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  notFoundContainer: {
    display: 'flex',
    minHeight: '100%',
    padding: 15,
    flexDirection: 'column',
  },
  notFoundContent: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexGrow: 1,
  },
  notFoundFooter: {
    height: '20%',
  },
});

const buttons = StyleSheet.create({
  add: {
    borderRadius: 50,
    width: 70,
    height: 70,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
});

export { styles, buttons };
