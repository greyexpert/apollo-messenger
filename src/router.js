import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';

import { AuthNavigator } from './modules/base';

export const LAUNCH_ROUTE = 'launch';
export const REDUCER_NAME = 'navigation';

const Navigator = StackNavigator({
  [LAUNCH_ROUTE]: {
    screen: AuthNavigator,
  }
}, {
  initialRouteName: LAUNCH_ROUTE,
  headerMode: 'none'
});

const initialState = Navigator.router.getStateForAction(NavigationActions.init());

export const reducer = (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);

  return nextState || state;
};

class AppNavigator extends Component {
  /**
   *
   * TODO: Think of how to handle back button in sub routes
   */
  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  // }
  //
  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  // }

  // onBackPress = () => {
  //   const { dispatch, navigation: state } = this.props;
  //   console.log('Back', state);
  //
  //   if (state.index === 0) {
  //     return false;
  //   }
  //
  //   dispatch(NavigationActions.back());
  //
  //   return true;
  // };

  render() {
    const { dispatch, navigation: state } = this.props;

    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch,
        state,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  navigation: state[REDUCER_NAME]
});

export default connect(mapStateToProps)(AppNavigator);