import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Spinner } from 'native-base';
import { HOST } from './../constants';

export class BarCodeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount() {
    const barCode = this.props.navigation.getParam('data', null);
    return fetch(`${HOST}/api/bar-codes/${barCode}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson.data
        })
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { isLoading, data } = this.state;

    if (isLoading) {
      return (
        <Spinner
          color='green'
        />
      )
    }

    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
      }}
      >
        {(data.length === 0)
          ? (<Text>Ничего не найдено</Text>)
          : (data.map(el => (
            <Text key={el.id}>{el.name}</Text>
          )))
        }
      </View>
    )
  }
}