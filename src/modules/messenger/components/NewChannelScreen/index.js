import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { graphql, gql } from 'react-apollo';

import NewChannelScreen from './NewChannelScreen';
import { searchUsers, getUserSearchPhrase } from '../../ducks';

const usersQuery = gql`
query Users($keyword: String!){
  allUsers(
    filter: {
      name_starts_with: $keyword
    }
  ) {
    id,
    name,
    email,
    password
  }
}
`;

const NewChannelScreenWithData = graphql(usersQuery, {
  options: props => ({
    variables: {
      keyword: props.searchPhrase
    }
  })
})(NewChannelScreen);

const mapStateToProps = createStructuredSelector({
  searchPhrase: getUserSearchPhrase
});

const mapDispatchToProps = {
  searchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewChannelScreenWithData);