import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { BarcodeScanner } from './components/BarCodeScanner';
import { BarCodeDetails } from './components/BarCodeDetails';
import { MaterialDetails } from './components/MaterialDetails';
import { Home } from './components/Home';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    BarcodeScanner: { screen: BarcodeScanner },
    BarCodeDetails: { screen: BarCodeDetails },
    MaterialDetails: { screen: MaterialDetails },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export const App = () => (
  <AppContainer />
);
