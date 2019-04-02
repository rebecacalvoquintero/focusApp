import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

const App =  () => {
  return (
    <Header />
  );
}

AppRegistry.registerComponent('Focus-phone-app', () => App);
