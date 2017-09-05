import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

import getRoot from './root';

export const REDUCER_NAME = 'navigation';

const Navigator = getRoot();
const initialState = Navigator.router.getStateForAction(NavigationActions.init());

export const reducer = (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);

  return nextState || state;
};

class AppNavigator extends Component {
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