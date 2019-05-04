import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { screens } from '../strings.json';

const strings = screens.barCodeDetails;

export class BarcodeScanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
    };
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    const { navigation: { navigate } } = this.props;

    if (hasCameraPermission === null) {
      return <Text>{strings.nullPermission}</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>{strings.falsePermission}</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={({ type, data }) => navigate('BarCodeDetails', {
            type,
            data,
          })}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}
