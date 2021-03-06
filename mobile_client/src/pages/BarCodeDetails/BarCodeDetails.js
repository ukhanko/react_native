import React from 'react';
import { Text, View } from 'react-native';
import {
  Container,
  H3,
  Header,
  List,
  ListItem,
} from 'native-base';
import { styles } from './styles';
import { NotFoundPage } from './NotFoundPage';
import { LoadingContainer } from '../../utils/LoadingContainer';

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
  toAddInformation,
}) => (
  <Container>
    <Header />
    <LoadingContainer isLoading={isLoading}>
      {(data.length === 0)
        ? <NotFoundPage toAddInformation={toAddInformation} />
        : (
          <View style={styles.container}>
            {data.map(el => renderDetails(el, toMaterialDetails))}
          </View>
        )
      }
    </LoadingContainer>
  </Container>
);
