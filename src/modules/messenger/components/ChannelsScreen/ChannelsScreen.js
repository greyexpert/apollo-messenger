import React, { Component } from 'react';
import { Container, Content, Header, Body, Title, Left, Icon, Right, View, Text, Button } from 'native-base';

export default class ChannelsScreen extends Component {
  render() {
    const { startAuthentication, openMessenger } = this.props;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>

          <Body>
            <Title>Chats</Title>
          </Body>

          <Right />
        </Header>
        <Content>
          <Text>ChannelsScreen</Text>
        </Content>
      </Container>
    );
  }
}