import React, { Component } from 'react';
import { HOST } from '../../constants';
import { BarCodeDetails } from './BarCodeDetails';

export class BarCodeDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    const { navigation: { getParam } } = this.props;
    const barCode = getParam('data', null);
    return fetch(`${HOST}/api/bar-codes/${barCode}`)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson.data,
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { isLoading, data } = this.state;
    const { navigation: { navigate } } = this.props;
    return (
      <BarCodeDetails
        isLoading={isLoading}
        data={data}
        toMaterialDetails={id => navigate('MaterialDetails', { data: id })}
      />
    );
  }
}
