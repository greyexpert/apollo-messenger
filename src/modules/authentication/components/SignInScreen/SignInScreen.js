import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';

export default class SignInScreen extends Component {
  render() {
    const { showSignUp } = this.props;

    return (
      <View>
        <Text>SignInScreen</Text>
        <Button onPress={showSignUp}>
          <Text>Show SignUp</Text>
        </Button>
      </View>
    );
  }
}