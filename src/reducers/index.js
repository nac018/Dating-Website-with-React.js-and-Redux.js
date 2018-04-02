import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import accounts from './userReducer';
import currUser from './loginReducer';
import chatProgress from './chatProgressReducer';
import tasks from './taskReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  accounts,
  currUser,
  chatProgress,
  tasks,
  ajaxCallsInProgress
});

export default rootReducer;
