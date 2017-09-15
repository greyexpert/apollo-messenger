import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
  Container,
  Content,
  Text,
  Spinner,
  Header,
  Button,
  Left,
  Icon,
  Body,
  Right,
  Title
} from 'native-base';

export default class ChannelScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const {
      loading,
      channel,
      navigation
    } = this.props;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigation.goBack(null)}>
              <Icon name="arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>
              {
                channel && channel.recipients.map(({ name }) => name).join(', ')
              }
            </Title>
          </Body>

          <Right/>
        </Header>
        <Content>
          {
            loading && (
              <Spinner color='blue' />
            )
          }
        </Content>
      </Container>
    );
  }
}