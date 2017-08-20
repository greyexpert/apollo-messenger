import React, { Component } from 'react'
import { Container, Tabs, Tab, Text, TabHeading } from 'native-base'

import Me from './MeTab';
import Users from './UsersTab';
import Channels from './ChannelsTab';

export default class App extends Component {
  render() {
    return (
        <Container>
          <Tabs tabBarPosition="top">
            <Tab heading={ <TabHeading><Text>Me</Text></TabHeading> }>
              <Me />
            </Tab>
            
            <Tab heading={ <TabHeading><Text>Chanels</Text></TabHeading> }>
              <Channels />
            </Tab>
          </Tabs>
        </Container>
    )
  }
}
