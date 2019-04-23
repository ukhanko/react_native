import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Spinner, H2, List, ListItem } from 'native-base';
import { HOST } from './../constants';

export class MaterialDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount() {
    const materialId = this.props.navigation.getParam('data', null);
    return fetch(`${HOST}/api/material/${materialId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson.data
        })
      })
      .catch((error) => console.error(error));
  }

  renderAdrees(address) {
    const { city, building, street } = address;
    return (
      <Text>{city}, {building}, {street}</Text>
    )
  }

  render() {
    const { isLoading, data } = this.state;
    const { addresses = [] } = data;

    if (isLoading) {
      return (
        <Spinner
          color='green'
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
          }}
        />
      )
    }

    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        marginLeft: 10
      }}
      >
        <H2>{data.name}</H2>
        <Text>{data.description}</Text>
        {(addresses.length === 0)
          ? (<Text>Пунктов приема не найдено</Text>)
          : (<List>
              {addresses.map(el => (
                <ListItem key={el.id}>
                  {this.renderAdrees(el)}
                </ListItem>
              ))}
            </List>)
        }
      </View>
    )
  }
}