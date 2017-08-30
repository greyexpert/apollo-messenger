import { NAME } from './constants';
import reducer from './ducks';

export {
  // Public components
  Counter
} from './components';

export {
  // Public selectors
  getCount,

  // Public actions
  increment,

  // Public action types
  INCREMENT
} from './ducks';

/**
 * Module descriptor
 */
export default {
  name: NAME,
  reducer
};