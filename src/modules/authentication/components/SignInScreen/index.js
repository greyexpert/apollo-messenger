import { connect } from 'react-redux';
import { submit } from 'redux-form'

import SignInScreen from './SignInScreen';
import { FORM_NAME } from '../SignInForm';

import { showSignUp } from '../../ducks'
import { openMessenger } from '../../../application'

const mapDispatchToProps = {
  openMessenger,
  showSignUp,
  submitForm: () => submit(FORM_NAME)
};

export default connect(null, mapDispatchToProps)(SignInScreen);