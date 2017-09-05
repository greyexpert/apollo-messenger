import { NAME } from './constants';

import { ApplicationNavigator } from './components';

export {
  openMessenger,
  startAuthentication
} from './ducks';

/**
 * Module descriptor
 */
export default {
  name: NAME,
  root: ApplicationNavigator,
};