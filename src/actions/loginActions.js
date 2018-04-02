import LoginApi from '../api/mockLoginApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function saveCurrUserSuccess(currUser) {
  return {type: types.LOGIN_SUCCESS, currUser};
}

export function login(account) {
  return function (dispatch, getState) {
    console.log(account);
    dispatch(beginAjaxCall());
    return LoginApi.login(account).then(account => {
      dispatch(saveCurrUserSuccess(account));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
