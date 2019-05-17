import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import {
  H2,
  List,
  ListItem,
} from 'native-base';
import { styles } from './styles';
import { screens } from '../../strings.json';

const strings = screens.materialDetails;

const renderAddress = (address) => {
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
        style={styles.loading}
      />
    );
  }
  return (
    <View style={styles.container}>
      <H2>{data.name}</H2>
      <Text>{data.description}</Text>
      {(addresses.length === 0)
        ? (<Text>{strings.notFound}</Text>)
        : (
          <List>
            {addresses.map(el => (
              <ListItem key={el.id}>
                {renderAddress(el)}
              </ListItem>
            ))}
          </List>
        )
      }
    </View>
  );
};
