import React from 'react';
import { View, Text, Button, H1 } from 'native-base';

export default ({ count, increment }) => (
  <View>
    <H1>
      <Text>
        Hello Grey {count}
      </Text>
    </H1>

    <Button onPress={increment}>
      <Text>Increment</Text>
    </Button>
  </View>
);