import { createAction } from 'redux-actions';

import { INCREMENT } from '../actionTypes';

const increment = createAction(INCREMENT);

export default () => dispatch => {
  dispatch(increment(5));
}