import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Container } from 'native-base';

import { LaunchScreen } from './modules/base';

export default class Application extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <Container>
          <LaunchScreen />
        </Container>
      </Provider>
    );
  }
}