import React, { Component } from "react";
import { AppLoading, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import App from "../App";

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <App />
    )
  }
}