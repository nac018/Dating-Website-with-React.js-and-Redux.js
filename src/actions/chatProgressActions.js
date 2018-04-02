import ChatProgressApi from '../api/mockChatProgressApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadChatProgressSuccess(chatProgress) {
  return {type: types.LOAD_CHAT_PROGRESS, chatProgress};
}

export function saveMessageSuccess(message) {
  return {type: types.SAVE_MESSAGE, message};
}

export function saveMessage(currUsername, friendUsername, message) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return ChatProgressApi.saveMessage(currUsername, friendUsername, message).then(message => {
      dispatch(saveMessageSuccess(message));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function loadChatProgress() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return ChatProgressApi.getAllChatProgress().then(chatProgress => {
      dispatch(loadChatProgressSuccess(chatProgress));
    }).catch(error => {
      throw(error);
    });
  };
}
