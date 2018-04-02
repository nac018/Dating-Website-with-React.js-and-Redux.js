import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case types.LOAD_TASKS:
      return action.tasks;

    case types.SAVE_TASKS:
      return [
        ...state,
        Object.assign({}, action.task)
      ];

    case types.DELETE_TASK:
      return [
        ...state.filter(task => task.id !== action.id)
      ];

    default:
      return state;
  }
}
