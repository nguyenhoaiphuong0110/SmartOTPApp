/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import App2 from './App2';




AppRegistry.registerComponent(appName, () => () => <App2 />);                        
