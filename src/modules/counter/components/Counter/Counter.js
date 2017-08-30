import React from 'react';
import { View, Text, Button } from 'native-base';

export default ({ count, increment }) => (
  <View>
    <Text>
      Hello World {count}
    </Text>

    <Button onPress={increment}>
      <Text>Increment</Text>
    </Button>
  </View>
);