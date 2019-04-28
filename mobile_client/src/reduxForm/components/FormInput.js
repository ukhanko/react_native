import React from 'react';
import { Field } from 'redux-form';
import { Input, Item, Icon, Text } from 'native-base';
import { requiredCheck, dummyCheck } from '../validators';

const renderInput = ({
  input,
  meta: { touched, error },
  ...rest
}) => {
  const hasError = Boolean(touched && error);
  return (
    <React.Fragment>
      <Item
        rounded
        error={hasError}
      >
        <Input
          {...input}
          {...rest}
        />
        {hasError && <Icon name="information-circle" />}

      </Item>
      {hasError && <Text style={{ marginLeft: 15, color: 'red', fontSize: 12 }}>{error}</Text>}
    </React.Fragment>
  );
};

export const FormInput = (props) => {
  const { validate, required, ...rest } = props;
  const validateArray = validate || [];
  const isRequired = required ? requiredCheck : dummyCheck;
  return (
    <Field
      component={renderInput}
      validate={[...validateArray, isRequired]}
      required={required}
      {...rest}
    />
  );
};
