import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { BarcodeScanner } from './components/BarCodeScanner';
import { BarCodeDetailsContainer } from './components/BarCodeDetailsContainer';
import { MaterialDetailsContainer } from './components/MaterialDetailsContainer';
import { HomeContainer } from './components/HomeContainer';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeContainer },
    BarcodeScanner: { screen: BarcodeScanner },
    BarCodeDetails: { screen: BarCodeDetailsContainer },
    MaterialDetails: { screen: MaterialDetailsContainer },
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
