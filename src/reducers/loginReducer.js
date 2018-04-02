import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.currUser, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.currUser;

    default:
      return state;
  }
}
