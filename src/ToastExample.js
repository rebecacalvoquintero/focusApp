import { NativeModules } from 'react-native';

console.log("inside examples", NativeModules.ToastExample);
console.log("stats", NativeModules.UsageStats);

export default NativeModules.ToastExample;
