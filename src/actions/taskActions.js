import TaskApi from '../api/mockTaskApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadTasksSuccess(tasks) {
  return {type: types.LOAD_TASKS, tasks};
}

export function saveTaskSuccess(task) {
  return {type: types.SAVE_TASKS, task};
}

export function deleteTaskSuccess(id) {
  return {type: types.DELETE_TASK, id};
}

export function saveTask(task) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return TaskApi.saveTask(task).then(task => {
      dispatch(saveTaskSuccess(task));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function loadTasks() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TaskApi.getAllTasks().then(tasks => {
      dispatch(loadTasksSuccess(tasks));
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteTask(taskId) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return TaskApi.deleteTask(taskId).then(taskId => {
      dispatch(deleteTaskSuccess(taskId));
    }).catch(error => {
      throw(error);
    });
  };
}
