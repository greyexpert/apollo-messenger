import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';

export default class LaunchScreen extends Component {
  render() {
    const { startAuthentication, openMessenger } = this.props;

    return (
      <View>
        <Button onPress={openMessenger}>
          <Text>Hello World</Text>
        </Button>
      </View>
    );
  }
}