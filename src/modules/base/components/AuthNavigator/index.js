import { StackNavigator } from 'react-navigation';

import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import AppNavigator from '../AppNavigator';

import { SIGN_IN_ROUTE, SIGN_UP_ROUTE, APPLICATION_ROUTE } from '../../routes';

export default StackNavigator({
  [SIGN_UP_ROUTE]: {
    screen: SignUpScreen,
  },

  [SIGN_IN_ROUTE]: {
    screen: SignInScreen,
  },

  [APPLICATION_ROUTE]: {
    screen: AppNavigator
  }
}, {
  initialRouteName: SIGN_IN_ROUTE
});
