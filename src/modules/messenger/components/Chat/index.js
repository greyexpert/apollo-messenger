import { connect } from 'react-redux';
import { graphql, gql, compose } from 'react-apollo';

import Chat from './Chat';
import ChannelItem from '../ChannelItem';

const messageFragment = gql`  
fragment ChatMessage on Message {
  id
  text
  user {
    id
    name
  }
}
`;

const messagesQuery = gql`
${messageFragment}

query channelMessages($channelId: ID!) {
  allMessages(
    filter: {
      channel: {
        id: $channelId
      }
    }
    orderBy: updatedAt_DESC
  ) {
    ...ChatMessage
  }
}
`;

const userQuery = gql`
query User($userId: ID!){
  User(id: $userId) {
    id
    name
  }
}
`;

const newMessageMutation = gql`
${messageFragment}

mutation createMessage($userId: ID!, $channelId: ID!, $text: String!) {
  createMessage(
    userId: $userId
    channelId: $channelId
    text: $text
  ) {
    ...ChatMessage
  }
}
`;

export default compose(
  connect(),

  graphql(messagesQuery, {
    props: ({ data }) => {

      return {
        messages: data.allMessages || [],
        loading: data.loading
      };
    },

    options: ({ channelId }) => ({
      variables: {
        channelId
      },

      pollInterval: 5000
    })
  }),

  graphql(userQuery, {
    props: ({ data }) => {

      return {
        user: data.User || {
          id: 'cj6jd7fk2kver0124unux3co3'
        }
      };
    },

    options: () => ({
      variables: {
        userId: 'cj6jd7fk2kver0124unux3co3'
      }
    })
  }),

  graphql(newMessageMutation, {
    props: ({ mutate, ownProps: { channelId } }) => {
      return {
        onSend(messages) {
          return Promise.all(messages.map(async ({ user, text }) => {
            const {
              data: {
                createMessage: message
              }
            } = await mutate({
              variables: {
                channelId,
                userId: user.id,
                text
              },

              update(store, { data: { createMessage: message } }) {
                const variables = {
                  channelId
                };

                const data = store.readQuery({ query: messagesQuery, variables });

                data.allMessages.unshift(message);
                store.writeQuery({ query: messagesQuery, data, variables });
              }
            });

            return message;
          }));
        }
      }
    }
  })
)((Chat));