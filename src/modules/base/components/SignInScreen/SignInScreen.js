import React, { Component } from 'react';
import { Container, Content, Button, Text, View } from 'native-base';

export default class SignInScreen extends Component {
  render() {

    const { goToSignUp, goToChannels } = this.props;

    return (
      <View>
        <View>
          <Text>
            Sign In
          </Text>

          <Button onPress={goToSignUp}>
            <Text>
              Next
            </Text>
          </Button>

          <Button onPress={goToChannels}>
            <Text>
              To Channels
            </Text>
          </Button>
        </View>
      </View>
    );
  }
}