import React from 'react';
import { View, AppRegistry, Text } from 'react-native';
import Header from './src/components/Header';


const App =  () => {
  return (
    <View>
      <Header />
      <Text>Hello World!</Text>
    </View>
  );
}

AppRegistry.registerComponent('focusApp', () => App);
