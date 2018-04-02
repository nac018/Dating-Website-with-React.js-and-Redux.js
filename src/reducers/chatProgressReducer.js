import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatProgressReducer(state = initialState.chatProgress, action) {
  switch (action.type) {
    case types.LOAD_CHAT_PROGRESS:
      return action.chatProgress;

    case types.SAVE_MESSAGE:
      return [
        ...state, Object.assign({}, action.message)
      ];

    default:
      return state;
  }
}
