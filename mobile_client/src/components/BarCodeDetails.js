import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  Spinner,
  H3,
  List,
  ListItem,
} from 'native-base';
import { HOST } from '../constants';

export class BarCodeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    const { navigation: { getParam } } = this.props;
    const barCode = getParam('data', null);
    return fetch(`${HOST}/api/bar-codes/${barCode}`)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson.data,
        });
      })
      .catch(error => console.error(error));
  }

  renderDetails(product) {
    const { navigation: { navigate } } = this.props;
    const { id, name, materials } = product;
    return (
      <View key={id}>
        <H3>{name}</H3>
        <List>
          {materials.map((el) => {
            const { material, name: materialName } = el;
            return (
              <ListItem
                key={material.id}
                button
                onPress={() => navigate('MaterialDetails', {
                  data: material.id,
                })}
              >
                <Text>
                  {material.name}
                  {' '}
                  {materialName}
                </Text>
              </ListItem>
            );
          })}
        </List>
      </View>
    );
  }

  render() {
    const { isLoading, data } = this.state;

    if (isLoading) {
      return (
        <Spinner
          color="green"
          style={{
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />
      );
    }

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        {(data.length === 0)
          ? (<Text>Ничего не найдено</Text>)
          : (data.map(el => this.renderDetails(el)))
        }
      </View>
    );
  }
}
