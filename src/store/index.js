import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';

export default (initialState) => {

  const middleware = [thunk];
  const enhancers = [];

  const store = createStore(
    createRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextCreateRootReducer = require('./reducers').default;
      store.replaceReducer(nextCreateRootReducer());
    });
  }

  return store
};