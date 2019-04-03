import React from 'react';
import { View, AppRegistry, Text, NativeModules } from 'react-native';
import Header from './src/components/Header';
import apiCall from './src/apiCall';

const UsageStats = NativeModules.UsageStats;

UsageStats.testToast(UsageStats.SHORT);

const App =  () => {
  return (
    <View>
      <Header />
      <Text>Hello World!</Text>
    </View>
  );
}

AppRegistry.registerComponent('focusApp', () => App);
