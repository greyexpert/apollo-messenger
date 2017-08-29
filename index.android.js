import React from 'react';
import { AppRegistry } from 'react-native';

import configureStore from './src/store/configureStore';
const store = configureStore();

import App from './src';

AppRegistry.registerComponent('ApolloMessenger', () => () => <App store={store} />);
