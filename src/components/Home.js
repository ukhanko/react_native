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
            onPress={() => this.props.navigation.navigate('BarcodeScanner')}
          >
            <Text>Lets Scan It!</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}