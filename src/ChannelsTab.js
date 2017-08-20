import React, { Component } from 'react'
import { Content, Text, Fab, Icon, Button, View } from 'native-base'

export default class App extends Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
          <Text>Chanels</Text>
          <Fab
            active={false}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => {}}>

            <Icon name="add" />

            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
    );
  }
}
