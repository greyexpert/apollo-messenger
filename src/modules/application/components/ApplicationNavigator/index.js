import { StackNavigator } from 'react-navigation';

import { AUTHENTICATION_ROUTE, MESSENGER_ROUTE, LAUNCH_ROUTE } from '../../constants';
import { AuthenticationNavigator } from '../../../authentication';
import { MessengerNavigator } from '../../../messenger';
import LaunchScreen from '../LaunchScreen';

export default StackNavigator({
  [LAUNCH_ROUTE]: {
    screen: LaunchScreen
  },

  [AUTHENTICATION_ROUTE]: {
    screen: AuthenticationNavigator
  },

  [MESSENGER_ROUTE]: {
    screen: MessengerNavigator
  }
}, {
  initialRouteName: LAUNCH_ROUTE,
  headerMode: 'none'
});