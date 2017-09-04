import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'native-base';

import { LaunchScreen } from './components';
import { AuthNavigator, AppNavigator } from '../modules/base';

export default StackNavigator({
  Launch: {
    screen: LaunchScreen
  },

  Authentication: {
    screen: AuthNavigator
  },

  Home: {
    screen: AppNavigator
  }
}, {
  initialRouteName: 'Launch',
  headerMode: 'none'
});