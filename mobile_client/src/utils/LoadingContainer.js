import React from 'react';
import { ActivityIndicator } from 'react-native';

export const LoadingContainer = ({ isLoading, children }) => (
  isLoading
    ? (
      <ActivityIndicator
        size="large"
        color="#00ff00"
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      />
    )
    : (
      children
    )
);
