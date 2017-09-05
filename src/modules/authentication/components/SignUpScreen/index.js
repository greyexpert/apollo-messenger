import { connect } from 'react-redux';
import SignUpScreen from './SignUpScreen';

import { openMessenger } from '../../../application'

const mapDispatchToProps = {
  openMessenger
};

export default connect(null, mapDispatchToProps)(SignUpScreen);