import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import {
  H2,
  List,
  ListItem,
} from 'native-base';
import { screens } from '../strings.json';

const strings = screens.materialDetails;

const renderAdrees = (address) => {
  const { city, building, street } = address;
  return (
    <Text>
      {city}
      {', '}
      {building}
      {', '}
      {street}
    </Text>
  );
};

export const MaterialDetails = ({ isLoading, data }) => {
  const { addresses = [] } = data;
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
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      marginLeft: 10,
    }}
    >
      <H2>{data.name}</H2>
      <Text>{data.description}</Text>
      {(addresses.length === 0)
        ? (<Text>{strings.materialDetails}</Text>)
        : (
          <List>
            {addresses.map(el => (
              <ListItem key={el.id}>
                {renderAdrees(el)}
              </ListItem>
            ))}
          </List>
        )
      }
    </View>
  );
};
