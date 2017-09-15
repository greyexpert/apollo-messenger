import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Left,
  Icon,
  Right,
  View,
  Text,
  Button,
  Thumbnail,
  List,
  ListItem,
  Spinner
} from 'native-base';

import defaultAvatar from './avatar.jpg';

export default class ChannelsScreen extends Component {
  render() {
    const {
      navigation,
      showChannelCreation,
      openChannel,
      data: {
        loading,
        allChannels: channels = []
      }
    } = this.props;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>

          <Body>
            <Title>Chats</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => showChannelCreation()}>
              <Icon name="add" />
            </Button>
          </Right>
        </Header>
        <Content>
          {
            loading && !channels.length ? (
              <Spinner color='blue' />
            ) : (
              <List>
                {
                  channels.map(channel => (
                    <ListItem avatar button key={channel.id} onPress={() => openChannel(channel.id)}>
                      <Left>
                        <Thumbnail source={defaultAvatar} />
                      </Left>

                      <Body>
                      <Text>
                        {
                          channel.recipients.map(({ name }) => name).join(', ')
                        }
                      </Text>
                      <Text note>
                        {
                          channel.messages.length
                            ? channel.messages[0].text
                            : ' '
                        }
                      </Text>
                      </Body>
                    </ListItem>
                  ))
                }
              </List>
            )
          }
        </Content>
      </Container>
    );
  }
}