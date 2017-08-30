import { combineReducers } from 'redux';

import modules from '../modules';

export default () => {
  const reducers = modules.reduce((reducers, module) => {
    reducers[module.name] = module.reducer;

    return reducers;
  }, {});

  return combineReducers(reducers);
};
