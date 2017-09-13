import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { graphql, gql } from 'react-apollo';

import UsersScreen from './UsersScreen';
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

const UsersScreenWithData = graphql(usersQuery, {
  options: props => ({
    variables: {
      keyword: props.searchPhrase
    }
  })
})(UsersScreen);

const mapStateToProps = createStructuredSelector({
  searchPhrase: getUserSearchPhrase
});

const mapDispatchToProps = {
  searchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreenWithData);