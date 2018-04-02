import UserApi from '../api/mockUserApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAccountsSuccess(accounts) {
  return {type: types.LOAD_ACCOUNTS, accounts};
}

export function createAccountSuccess(account) {
  return {type: types.SAVE_ACCOUNTS, account};
}

export function loadAccounts() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return UserApi.getAllAccounts().then(accounts => {
      dispatch(loadAccountsSuccess(accounts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveAccount(account) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return UserApi.saveAccount(account).then(account => {
      dispatch(createAccountSuccess(account));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

