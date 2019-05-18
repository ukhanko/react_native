import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'native-base';
import { styles, buttons } from './styles';
import { screens } from '../../strings.json';

const strings = screens.barCodeDetails;

export const NotFoundPage = ({ toAddInformation }) => (
  <View style={styles.notFoundContainer}>
    <View style={styles.notFoundContent}>
      <Text>{strings.notFound}</Text>
    </View>
    <View style={styles.notFoundFooter}>
      <Button
        style={buttons.add}
        onPress={toAddInformation}
      >
        <Icon name="add" />
      </Button>
    </View>
  </View>
);
