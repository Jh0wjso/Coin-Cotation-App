import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/components/routes';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}
