import React, {Component} from 'react';
import { Text, View } from 'react-native';

export class BarCodeDetails extends Component {
  render() {
    const barCode = this.props.navigation.getParam('data', null);
    return (
      <View style={{
          flex:1,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text>{barCode}</Text>
      </View>
    )
  }
}