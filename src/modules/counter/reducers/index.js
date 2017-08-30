import { combineReducers } from 'redux';

import reducer, * as counterSelectors from './counter';

export const getCount = state => {
  console.log(state);

  return counterSelectors.getCount(state.counter);
};

export default reducer;