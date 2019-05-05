import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import { Home } from './Home';

const FORM_NAME = 'Home';

const HomeClass = (props) => {
  const {
    navigation: { navigate },
    formValues = {},
  } = props;
  const { barCode } = formValues;
  return (
    <Home
      toBarCodeDetails={() => navigate('BarCodeDetails', { data: barCode })}
      toBarCodeScanner={() => navigate('BarcodeScanner')}
      {...props}
    />
  );
};

const mapStateToProps = state => ({
  formValues: getFormValues(FORM_NAME)(state),
});

export const HomeContainer = connect(mapStateToProps)(reduxForm({
  form: FORM_NAME,
  initialValues: {
    barCode: '4603771220101',
  },
})(HomeClass));
