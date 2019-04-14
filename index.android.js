import React from 'react';
import {AppRegistry, NativeModules, Text, View} from 'react-native';
import Header from './src/components/Header';
import ToastExample from "./src/ToastExample";
import UsageStatsManager from "./src/components/UsageStatsManager";

const UsageStats = NativeModules.UsageStats;

UsageStats.testToast(UsageStats.SHORT);

console.log('ToastExample', ToastExample);
ToastExample.show('Awesome', ToastExample.SHORT);

const App = () => {
    return (
        <View>
            <Header/>
            <Text>Hello World!</Text>
            <UsageStatsManager/>
        </View>
    );
}

AppRegistry.registerComponent('focusApp', () => App);
