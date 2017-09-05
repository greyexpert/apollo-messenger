import { connect } from 'react-redux';
import ChannelsScreen from './ChannelsScreen';

import { startAuthentication, openMessenger } from '../../../application'

const mapDispatchToProps = {
  startAuthentication,
  openMessenger
};

export default connect(null, mapDispatchToProps)(ChannelsScreen);