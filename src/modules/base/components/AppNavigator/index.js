import { DrawerNavigator } from 'react-navigation';

import HomeScreen from '../HomeScreen';
import ChannelsScreen from '../ChannelsScreen';

import { HOME_ROUTE, CHANNELS_ROUTE } from '../../routes';

export default DrawerNavigator({
  [HOME_ROUTE]: {
    screen: HomeScreen,
  },

  [CHANNELS_ROUTE]: {
    screen: ChannelsScreen,
  }
}, {
  initialRouteName: HOME_ROUTE
});
