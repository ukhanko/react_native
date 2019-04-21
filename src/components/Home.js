import React, { Component } from "react";
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

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: null
    }
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>{'Введите штрих код'}</Label>
              <Input
                value={inputValue}
                onChangeText={(text) => this.setState({
                  inputValue: text
                })}
              />
            </Item>
          </Form>
          <Button
            rounded
            success
            style={{
              alignSelf: "center",
              margin: 15,
              marginTop: 50
            }}
            onPress={() => this.props.navigation.navigate('BarCodeDetails', {
              data: inputValue,
            })}
          >
            <Text>Check it</Text>
          </Button>
          <Button
            style={{
              borderRadius: 50,
              width: 70,
              height: 70,
              justifyContent: "center",
              alignSelf: "flex-end",
              marginRight: 15
            }}
            onPress={() => this.props.navigation.navigate('BarcodeScanner')}
          >
            <Icon name='camera' />
          </Button>
        </Content>
      </Container>
    )
  }
}