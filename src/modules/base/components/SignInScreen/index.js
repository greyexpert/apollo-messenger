import { connect } from 'react-redux';

import SignInScreen from './SignInScreen';
import { goToSignUp, goToChannels } from '../../ducks'

const mapDispatchToProps = {
  goToSignUp,
  goToChannels
};

export default connect(null, mapDispatchToProps)(SignInScreen);