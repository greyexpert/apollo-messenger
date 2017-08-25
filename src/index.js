import React, { Component } from 'react';
import { Container, Text } from 'native-base';

export default class App extends Component {
  state = {
    c: 0
  };

  componentDidMount() {
    window.setInterval(() => this.setState({ c: this.state.c + 1 }), 1000);
  }

  render() {
    return (
        <Container>
          <Text>Hello Grey {this.state.c}</Text>
        </Container>
    )
  }
}
