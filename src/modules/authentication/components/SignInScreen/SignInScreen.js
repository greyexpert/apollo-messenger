import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';

export default class SignInScreen extends Component {
  static navigationOptions = {
    title: 'Sign In',
    header: null,
  };

  render() {
    const { showSignUp } = this.props;

    return (
      <View>
        <Text>SignInScreen</Text>
        <Button onPress={showSignUp}>
          <Text>SignUp</Text>
        </Button>
      </View>
    );
  }
}