import React, { Component } from 'react';
import { View, Text, Button } from 'native-base';

export default class ChannelsScreen extends Component {
  render() {
    const { startAuthentication, openMessenger } = this.props;

    return (
      <View>
        <Text>ChannelsScreen</Text>

        <Button onPress={startAuthentication}>
          <Text>Sign out</Text>
        </Button>
      </View>
    );
  }
}