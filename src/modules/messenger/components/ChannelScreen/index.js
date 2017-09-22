import { connect } from 'react-redux';
import { graphql, gql, compose } from 'react-apollo';

import ChannelScreen from './ChannelScreen';

const channelQuery = gql`
query channelItem($channelId: ID!){
  Channel(id: $channelId) {
    id
    recipients {
      id
      name
    }
  }
}
`;

export default compose(
  connect(),

  graphql(channelQuery, {
    props: ({ data }) => {
      return {
        channel: data.Channel,
        loading: data.loading
      };
    },

    options: ({ navigation }) => ({
      variables: {
        channelId: navigation.state.params.channelId
      }
    })
  })
)((ChannelScreen));