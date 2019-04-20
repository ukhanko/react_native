import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import { BarcodeScanner } from './components/BarCodeScanner';
import { BarCodeDetails } from './components/BarCodeDetails';
import { Home } from "./components/Home";
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    BarcodeScanner: { screen: BarcodeScanner },
    BarCodeDetails: { screen: BarCodeDetails },
  },
  {
    initialRouteName: 'Home',
    headerMode: "none",
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}