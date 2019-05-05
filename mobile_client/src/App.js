import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { BarcodeScanner } from './pages/BarCodeScanner/BarCodeScanner';
import { BarCodeDetailsContainer } from './pages/BarCodeDetails/BarCodeDetailsContainer';
import { MaterialDetailsContainer } from './pages/MaterialDetails/MaterialDetailsContainer';
import { HomeContainer } from './pages/Home/HomeContainer';
import { store } from './store';

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
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
