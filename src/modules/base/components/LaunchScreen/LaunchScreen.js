import React, { Component } from 'react';
import { Container, Content, Button, Text, View } from 'native-base';

import AuthNavigator from '../AuthNavigator';

export default class LaunchScreen extends Component {
  render() {
    return (
      <AuthNavigator />
    );
  }
}