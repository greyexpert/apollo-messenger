import { connect } from 'react-redux';
import { graphql, gql, compose } from 'react-apollo';

import ChannelScreen from './ChannelScreen';

const channelQuery = gql`
query Channel($channelId: ID!){
  Channel(id: $channelId) {
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
      console.log('data', data);

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