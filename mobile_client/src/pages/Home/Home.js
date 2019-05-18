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
import { FormInput } from '../../reduxForm/components/FormInput';
import { onlyNumbers } from '../../reduxForm/validators';
import { screens } from '../../strings.json';
import { styles, buttons } from './styles';

const strings = screens.home;

export const Home = ({
  toBarCodeDetails,
  toBarCodeScanner,
  invalid,
}) => (
  <Container>
    <Header />
    <Content style={styles.content}>
      <Form>
        <FormInput
          name="barCode"
          keyboardType="numeric"
          required
          placeholder={strings.barCodePlaceholder}
          validate={[onlyNumbers]}
        />
      </Form>
      <Button
        rounded
        success
        style={buttons.check}
        disabled={invalid}
        onPress={toBarCodeDetails}
      >
        <Text>{strings.checkButtonText}</Text>
      </Button>
      <Button
        style={buttons.camera}
        onPress={toBarCodeScanner}
      >
        <Icon name="camera" />
      </Button>
    </Content>
  </Container>
);
