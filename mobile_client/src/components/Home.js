import React from 'react';
import {
  Container,
  Content,
  Form,
  Header,
  Button,
  Text,
  Icon,
} from 'native-base';
import { FormInput } from '../reduxForm/components/FormInput';
import { onlyNumbers } from '../reduxForm/validators';

export const Home = ({
  toBarCodeDetails,
  toBarCodeScanner,
  invalid,
}) => (
  <Container>
    <Header />
    <Content
      style={{
        padding: 15,
      }}
    >
      <Form>
        <FormInput
          name="barCode"
          keyboardType="numeric"
          required
          placeholder="Введите штрих код"
          validate={[onlyNumbers]}
        />
      </Form>
      <Button
        rounded
        success
        style={{
          alignSelf: 'center',
          marginTop: 20,
        }}
        disabled={invalid}
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
        }}
        onPress={toBarCodeScanner}
      >
        <Icon name="camera" />
      </Button>
    </Content>
  </Container>
);
