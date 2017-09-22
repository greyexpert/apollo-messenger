import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import { GiftedChat } from 'react-native-gifted-chat';

const withId = object => ({
  _id: object.id,
  ...object
});

export default class Chat extends Component {
  render() {
    const {
      messages,
      user,
      onSend
    } = this.props;

    const messagesWithId = messages.map(withId).map(({ user, ...message }) => ({
      ...message,
      user: withId(user)
    }));

    return (
      <GiftedChat messages={messagesWithId}
                  onSend={onSend}
                  user={withId(user)}
      />
    );
  }
}