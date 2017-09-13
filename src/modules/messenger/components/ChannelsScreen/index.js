import { connect } from 'react-redux';
import { StackNavigator, NavigationActions } from 'react-navigation';

import ChannelsScreen from './ChannelsScreen';
import UsersScreen from '../UsersScreen';

const USERS_ROUTE = 'messenger/users';
const CHANNELS_ROUTE = 'messenger/channels/index';

const mapDispatchToProps = {
  showUsers: () => NavigationActions.navigate({
    routeName: USERS_ROUTE
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
  [USERS_ROUTE]: {
    screen: UsersScreen
  }
}, {
  initialRouteName: CHANNELS_ROUTE
});