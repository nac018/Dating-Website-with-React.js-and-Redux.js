import expect from 'expect';
import userReducer from './userReducer';
import * as actions from '../actions/userActions';

describe('User Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {username: 'A'},
      {username: 'B'}
    ];

    const newUser = {username: 'C'};

    const action = actions.createAccountSuccess(newUser);

    //act
    const newState = userReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].username).toEqual('A');
    expect(newState[1].username).toEqual('B');
    expect(newState[2].username).toEqual('C');
  });
});
