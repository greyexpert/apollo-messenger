import { combineReducers } from 'redux';

import counter, * as counterSelectors from './counter';

export const getCount = state => counterSelectors.getCount(state.counter);

export default combineReducers({
  counter
});