import React from 'react';
import { Field } from 'redux-form';
import { Input } from 'native-base';

const renderInput = ({ input, ...rest }) => {
  return (
    <Input {...input} {...rest} />
  );
};

export const FormInput = (props) => {
  return (
    <Field
      component={renderInput}
      {...props}
    />
  );
};
