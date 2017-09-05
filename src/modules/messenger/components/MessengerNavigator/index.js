import { DrawerNavigator } from 'react-navigation';

import { CHANNELS_ROUTE } from '../../constants';
import ChannelsScreen from '../ChannelsScreen';

export default DrawerNavigator({
  [CHANNELS_ROUTE]: {
    screen: ChannelsScreen
  }
});