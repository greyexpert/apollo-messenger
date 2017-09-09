import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import Router from './router';

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj6c2woax14vh0121lbgkx6wc' });
const client = new ApolloClient({
  networkInterface
});

export default class Root extends Component {
  render() {
    const { store } = this.props;

    return (
      <ApolloProvider store={store} client={client}>
        <Router />
      </ApolloProvider>
    );
  }
}