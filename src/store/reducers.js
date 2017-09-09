import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import modules from '../modules';
import { reducer as navigationReducer, REDUCER_NAME as NAV_REDUCER_NAME } from '../router';

const reducers = {
  [NAV_REDUCER_NAME]: navigationReducer,
  form: formReducer,
};

export default () => {
  const allReducers = modules.reduce((reducers, module) => {
    if (module.reducer) {
      reducers[module.name] = module.reducer;
    }

    return reducers;
  }, reducers);

  return combineReducers(allReducers);
};
