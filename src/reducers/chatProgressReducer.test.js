import expect from 'expect';
import chatProgressReducer from './chatProgressReducer';
import * as actions from '../actions/chatProgressActions';

describe('Task Reducer', () => {
  it('should add a message when passed SAVE_MESSAGE_SUCCESS', () => {
    // arrange
    const initialState = [
      {
        "users": ["user", "agent0"],
        "sender": "user",
        "message": "Hello there!",
        "timestamp": "11:00:02 AM"
      },
      {
        "users": ["user", "agent0"],
        "sender": "agent0",
        "message": "Hi, how are you? How can I help you!",
        "timestamp": "11:00:02 AM"
      },
      {
        "users": ["user", "agent0"],
        "sender": "user",
        "message": "Hello there!",
        "timestamp": "11:00:02 AM"
      }
    ];

    const newMessage = {
      "message": "hey, how's it going?"
    };

    const action = actions.saveMessageSuccess(newMessage);

    //act
    const newState = chatProgressReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(4);
    expect(newState[0].message).toEqual('Hello there!');
    expect(newState[1].message).toEqual('Hi, how are you? How can I help you!');
    expect(newState[2].message).toEqual('Hello there!');
    expect(newState[3].message).toEqual('hey, how\'s it going?');
  });
});
