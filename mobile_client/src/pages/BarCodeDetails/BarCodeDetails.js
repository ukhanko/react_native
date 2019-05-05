import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import {
  H3,
  List,
  ListItem,
} from 'native-base';
import { screens } from '../../strings.json';

const strings = screens.barCodeDetails;

const renderDetails = (product, toMaterialDetails) => {
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
              onPress={() => toMaterialDetails(material.id)}
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
};

export const BarCodeDetails = ({
  isLoading,
  data,
  toMaterialDetails,
}) => {
  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        color="#00ff00"
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
        ? (<Text>{strings.notFound}</Text>)
        : (data.map(el => renderDetails(el, toMaterialDetails)))
      }
    </View>
  );
};
