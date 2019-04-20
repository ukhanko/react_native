import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
import BarcodeScanner from './components/BarScaner';

export default class App extends Component {
  render() {
    return (
      <Container>
        {/* <Button>
          <Text>
            Кнопка1
          </Text>
        </Button> */}
        <BarcodeScanner />
      </Container>
    );
  }
}