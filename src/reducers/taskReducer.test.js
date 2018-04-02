import expect from 'expect';
import taskReducer from './taskReducer';
import * as actions from '../actions/taskActions';

describe('Task Reducer', () => {
  it('should add a task when passed SAVE_TASKS_SUCCESS', () => {
    // arrange
    const initialState = [
      {
        "id": "1",
        "users": ["user", "agent0"],
        "task": "Task 1"
      },
      {
        "id": "2",
        "users": ["user", "agent0"],
        "task": "Task 2"
      }
    ];

    const newTask = {
      "task": "Task hello"
    };

    const action = actions.saveTaskSuccess(newTask);

    //act
    const newState = taskReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].task).toEqual('Task 1');
    expect(newState[1].task).toEqual('Task 2');
    expect(newState[2].task).toEqual('Task hello');
  });

  it('should delete a task when passed DELETE_TASKS_SUCCESS', () => {
    // arrange
    const initialState = [
      {
        "id": "1",
        "users": ["user", "agent0"],
        "task": "Task 1"
      },
      {
        "id": "2",
        "users": ["user", "agent0"],
        "task": "Task 2"
      }
    ];

    const action = actions.deleteTaskSuccess("2");

    //act
    const newState = taskReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(1);
    expect(newState[0].task).toEqual('Task 1');
  });
});
