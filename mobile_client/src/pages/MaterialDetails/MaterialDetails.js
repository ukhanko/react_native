import React from 'react';
import { Text, View } from 'react-native';
import {
  Container,
  Header,
  H2,
  List,
  ListItem,
} from 'native-base';
import { styles } from './styles';
import { screens } from '../../strings.json';
import { LoadingContainer } from '../../utils/LoadingContainer';

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
  return (
    <Container>
      <Header />
      <LoadingContainer isLoading={isLoading}>
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
      </LoadingContainer>
    </Container>
  );
};
