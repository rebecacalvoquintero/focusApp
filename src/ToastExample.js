import {NativeModules} from 'react-native';

console.log("inside toas", NativeModules);
console.log("inside examples", NativeModules.ToastExample);
module.exports = NativeModules.ToastExample;
