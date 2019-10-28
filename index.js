/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import HandlingTextInput from './more/HandlingTextInput';
import HandlingTouches from './more/HandlingTouches';
import ScrollView from './more/ScrollView';
import ListViews from './more/ListViews';
import Networking from './more/Networking';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => HandlingTextInput);
// AppRegistry.registerComponent(appName, () => HandlingTouches);
// AppRegistry.registerComponent(appName, () => ScrollView);
// AppRegistry.registerComponent(appName, () => ListViews);
AppRegistry.registerComponent(appName, () => Networking);