import React, { Component } from 'react';
import { gql } from 'react-apollo'
import { propType as fragmentProp } from 'graphql-anywhere';
import PropTypes from 'prop-types';

import {
  Body,
  Left,
  Text,
  Thumbnail,
  ListItem,
} from 'native-base';

import defaultAvatar from './avatar.jpg';

class ChannelItem extends Component {
  render() {
    const {
      channel: {
        id,
        recipients = [],
        messages,
      },
      onPress
    } = this.props;

    return (
      <ListItem avatar button onPress={() => onPress(id)}>
        <Left>
          <Thumbnail source={defaultAvatar} />
        </Left>

        <Body>
        <Text>
          {
            recipients.map(({ name }) => name).join(', ')
          }
        </Text>
        <Text note>
          {
            messages.length
              ? messages[0].text
              : ' '
          }
        </Text>
        </Body>
      </ListItem>
    );
  }
}

ChannelItem.fragments = {
  channel: gql`
      fragment ChannelItem on Channel {
        id
        recipients {
          name  
        }
        messages(last: 1) {
          text
        }
      }
    `
};

ChannelItem.propTypes = {
  channel: fragmentProp(ChannelItem.fragments.channel).isRequired,
  onPress: PropTypes.func.isRequired
};

export default ChannelItem;