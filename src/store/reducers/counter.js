import { handleAction } from 'redux-actions';

import { INCREMENT } from '../actionTypes';

export const getCount = state => state;

export default handleAction(INCREMENT, (state, { payload }) => state + payload, 0);