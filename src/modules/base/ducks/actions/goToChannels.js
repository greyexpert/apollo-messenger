import { NavigationActions } from 'react-navigation'

import { CHANNELS_ROUTE } from '../../routes';

const goToChannels = (params = {}) => NavigationActions.navigate({
  routeName: CHANNELS_ROUTE,
  params
});

export default () => dispatch => {
  console.log('goToChannels');
  dispatch(goToChannels());
}