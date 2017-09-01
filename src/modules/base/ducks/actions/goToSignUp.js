import { NavigationActions } from 'react-navigation'

import { SIGN_UP_ROUTE } from '../../routes';

const goToSignUp = (params = {}) => NavigationActions.navigate({
  routeName: SIGN_UP_ROUTE,
  params
});

export default () => dispatch => {
  console.log('goToSignUp');
  dispatch(goToSignUp());
}