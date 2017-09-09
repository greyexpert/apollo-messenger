import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';

export default class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  render() {
    const { openMessenger } = this.props;

    return (
      <View>
        <Text>SignUpScreen</Text>
        <Button onPress={openMessenger}>
          <Text>Show SignUp</Text>
        </Button>
      </View>
    );
  }
}