import React from "react";
import { Image } from "react-native";
import styled from 'styled-components/native';
import { Container, Content, Text, View, Button, List, ListItem } from "native-base";

import avatarImage from './avatar.jpg';

const Avatar = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  margin-bottom: 10px;
`;

const Wrapper = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const Head = styled(View)`
  align-items: center;
  margin: 10px;
  flex: 2;
`;

const Middle = styled(View)`
  flex: 4;
`;

const Bottom = styled(View)`
  flex: 1;
  justify-content: center;
  margin: 0px 20px;
`;

export default class Sidebar extends React.Component {
  render() {
    const { user, loading, signOut } = this.props;

    return (
      <Container>
        <Wrapper>
          <Head>
            <Avatar source={avatarImage} />
            <Text>{ user && user.name }</Text>
          </Head>

          <Middle>

          </Middle>
          <Bottom>
            <Button block bordered onPress={signOut}>
              <Text>Sign out</Text>
            </Button>
          </Bottom>
        </Wrapper>
      </Container>
    );
  }
}
