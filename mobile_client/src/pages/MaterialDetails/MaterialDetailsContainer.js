import React, { Component } from 'react';
import { HOST } from '../../constants';
import { MaterialDetails } from './MaterialDetails';

export class MaterialDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    const { navigation: { getParam } } = this.props;
    const materialId = getParam('data', null);
    return fetch(`${HOST}/api/material/${materialId}`)
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
    return (
      <MaterialDetails
        isLoading={isLoading}
        data={data}
      />
    );
  }
}
