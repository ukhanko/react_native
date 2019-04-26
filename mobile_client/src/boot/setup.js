import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RobotoFont from 'native-base/Fonts/Roboto.ttf';
import RoboteMediumFont from 'native-base/Fonts/Roboto_medium.ttf';
import { App } from '../App';

export default class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  componentDidMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: RobotoFont,
      Roboto_medium: RoboteMediumFont,
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }
    return (
      <App />
    );
  }
}
