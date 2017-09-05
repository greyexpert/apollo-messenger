import { connect } from 'react-redux';
import SignInScreen from './SignInScreen';

import { showSignUp } from '../../ducks'

const mapDispatchToProps = {
  showSignUp
};

export default connect(null, mapDispatchToProps)(SignInScreen);