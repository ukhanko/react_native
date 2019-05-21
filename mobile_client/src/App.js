import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { BarcodeScanner } from './pages/BarCodeScanner';
import { BarCodeDetails } from './pages/BarCodeDetails';
import { MaterialDetails } from './pages/MaterialDetails';
import { Home } from './pages/Home';
import { store } from './store';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    BarcodeScanner: { screen: BarcodeScanner },
    BarCodeDetails: { screen: BarCodeDetails },
    MaterialDetails: { screen: MaterialDetails },
    AddInformation: { screen: Home },
  },
  {
    // initialRouteName: 'Home',
    initialRouteName: 'BarCodeDetails',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
