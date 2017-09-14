import { connect } from 'react-redux';
import { StackNavigator, NavigationActions } from 'react-navigation';

import ChannelsScreen from './ChannelsScreen';
import NewChannelScreen from '../NewChannelScreen';
import ChannelScreen from '../ChannelScreen';

const NEW_CHANNEL_ROUTE = 'messenger/channels/new';
const CHANNELS_ROUTE = 'messenger/channels/index';
const CHANNEL_ROUTE = 'messenger/channels/view';

const mapDispatchToProps = {
  showChannelCreation: () => NavigationActions.navigate({
    routeName: NEW_CHANNEL_ROUTE
  })
};

const ConnectedChannelsScreen = connect(null, mapDispatchToProps)(ChannelsScreen);

export default StackNavigator({
  [CHANNELS_ROUTE]: {
    screen: ConnectedChannelsScreen,
    navigationOptions: {
      header: null
    }
  },

  [NEW_CHANNEL_ROUTE]: {
    screen: NewChannelScreen
  },

  [CHANNEL_ROUTE]: {
    screen: ChannelScreen
  }
}, {
  initialRouteName: CHANNELS_ROUTE
});