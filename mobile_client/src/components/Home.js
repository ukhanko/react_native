import React from 'react';
import {
  Container,
  Content,
  Form,
  Header,
  Item,
  Label,
  Button,
  Text,
  Icon,
} from 'native-base';
import { FormInput } from '../reduxForm/components/FormInput';

export const Home = ({
  toBarCodeDetails,
  toBarCodeScanner,
}) => (
  <Container>
    <Header />
    <Content>
      <Form>
        <Item stackedLabel>
          <Label>Введите штрих код</Label>
          <FormInput
            name="barCode"
            keyboardType="numeric"
          />
        </Item>
      </Form>
      <Button
        rounded
        success
        style={{
          alignSelf: 'center',
          margin: 15,
          marginTop: 50,
        }}
        onPress={toBarCodeDetails}
      >
        <Text>Check it</Text>
      </Button>
      <Button
        style={{
          borderRadius: 50,
          width: 70,
          height: 70,
          justifyContent: 'center',
          alignSelf: 'flex-end',
          marginRight: 15,
        }}
        onPress={toBarCodeScanner}
      >
        <Icon name="camera" />
      </Button>
    </Content>
  </Container>
);
