import React, { Component } from 'react';

import { Container, Content, Button, Text } from 'native-base';

import { HOME_ROUTE, APPLICATION_ROUTE, CHANNELS_ROUTE } from '../../routes';

export default class SignUpScreen extends Component {
  render() {

    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Content>
          <Text>
            Sign Up
          </Text>

          <Button onPress={() => navigate(HOME_ROUTE)}>
            <Text>
              Home
            </Text>
          </Button>

          <Button onPress={() => navigate(APPLICATION_ROUTE)}>
            <Text>
              APP
            </Text>
          </Button>

          <Button onPress={() => navigate(CHANNELS_ROUTE)}>
            <Text>
              Channels
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}