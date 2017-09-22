import React, { Component } from 'react';
import { uniqueId } from 'lodash';
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
  Title,
  View
} from 'native-base';

import Chat from '../Chat';

const Wrapper = styled(View)`
  flex: 1;
`;

export default class ChannelScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    messages: []
  };

  onSend(messages = []) {

    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length) {
      this.onReceive(messages[0].text);
    }
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Roma',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),
      };
    });
  }

  renderChat() {
    const { channel } = this.props;

    return (
      <Chat channelId={channel.id} />
    )
  }

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
        <Wrapper>
          {
            loading || !channel ? (
              <Spinner color='blue' />
            ) : this.renderChat()
          }
        </Wrapper>
      </Container>
    );
  }
}