import React, { Component } from 'react';
import { Container, Content, Button, Text, View } from 'native-base';

import { SIGN_UP_ROUTE } from '../../routes';

export default class SignInScreen extends Component {
  render() {

    const { navigate } = this.props.navigation;

    return (
      <View>
        <View>
          <Text>
            Sign In
          </Text>

          <Button onPress={() => navigate(SIGN_UP_ROUTE)}>
            <Text>
              Next
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}