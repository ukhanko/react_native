import React, { Component } from 'react';
import { Home } from './Home';

export class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '4603771220101',
    };
  }

  render() {
    const { navigation: { navigate } } = this.props;
    const { inputValue } = this.state;
    return (
      <Home
        barCode={inputValue}
        onBarCodeChange={newValue => this.setState({ inputValue: newValue })}
        toBarCodeDetails={() => navigate('BarCodeDetails', { data: inputValue })}
        toBarCodeScanner={() => navigate('BarcodeScanner')}
      />
    );
  }
}
