import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  Container,
  Content,
  Text,
  Spinner
} from 'native-base';

export default class ChannelScreen extends Component {
  render() {
    const {
      loading,
      channel
    } = this.props;

    return (
      <Container>
        <Content>
          {
            loading ? (
              <Spinner color='blue' />
            ) : channel.recipients.map(({ name }) => (
                <Text>{name}</Text>
            ))
          }
        </Content>
      </Container>
    );
  }
}