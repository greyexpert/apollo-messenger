import { combineReducers } from 'redux';
import { property } from 'lodash';
import { createAction, handleAction } from 'redux-actions';
import { NAME } from '../constants';

export const getUserSearchPhrase = state => state[NAME].users.search;
export const SEARCH_USERS = 'messenger/searchUsers';
export const searchUsers = createAction(SEARCH_USERS);

const search = handleAction(SEARCH_USERS, (state, { payload }) => payload, '');

export default combineReducers({
  users: combineReducers({
    search
  })
});