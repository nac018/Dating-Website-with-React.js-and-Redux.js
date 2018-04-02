import expect from 'expect';
import loginReducer from './loginReducer';
import * as actions from '../actions/loginActions';

describe('User Reducer', () => {
  it('it should login successfully', () => {
    // arrange
    const initialState = {};

    const currUser = {username: 'C'};

    const action = actions.saveCurrUserSuccess(currUser);

    //act
    const newState = loginReducer(initialState, action);

    //assert
    expect(newState.username).toEqual('C');
  });
});
