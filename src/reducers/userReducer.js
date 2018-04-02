import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.accounts, action) {
  switch (action.type) {
    case types.LOAD_ACCOUNTS:
      return action.accounts;

    case types.SAVE_ACCOUNTS:
      return [
        ...state,
        Object.assign({}, action.account)
      ];
    default:
      return state;
  }
}
