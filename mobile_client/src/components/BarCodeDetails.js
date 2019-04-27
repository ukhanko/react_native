import React from 'react';
import { Text, View } from 'react-native';
import {
  Spinner,
  H3,
  List,
  ListItem,
} from 'native-base';

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
        : (data.map(el => renderDetails(el, toMaterialDetails)))
      }
    </View>
  );
};
