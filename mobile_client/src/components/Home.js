import React from 'react';
import {
  Container,
  Content,
  Form,
  Header,
  Input,
  Item,
  Label,
  Button,
  Text,
  Icon,
} from 'native-base';

export const Home = ({
  barCode,
  onBarCodeChange,
  toBarCodeDetails,
  toBarCodeScanner,
}) => (
  <Container>
    <Header />
    <Content>
      <Form>
        <Item stackedLabel>
          <Label>Введите штрих код</Label>
          <Input
            value={barCode}
            onChangeText={onBarCodeChange}
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
