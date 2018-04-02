import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import Chat from './Chat';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'; //ES6 modules

const middlewares = [];
const mockStore = configureStore(middlewares);

require.extensions['.svg'] = () => {};

function setup() {
  const initialState = {
    accounts: [],
    currUser: {},
    chatText: '',
    currFriend: {},
    saving: false,
    chatProgress: []
  };

  const props = {
    chatProgress: []
  };

  let store = mockStore(initialState);
  return mount(<Provider store={store}><Chat {...props}/></Provider>);
  // return shallow(<LoginForm {...props}/>);
}

describe('Chat via Enzyme', () => {
  it('renders default friends list', () => {
    const wrapper = setup();
    expect(wrapper.find('.user_select').length).toBe(0);
  });

  it('renders default messages', () => {
    const wrapper = setup();
    expect(wrapper.find('.user_message').length).toBe(0);
    expect(wrapper.find('.friend_message').length).toBe(0);
  });

  it('chat input should work properly', () => {
    const wrapper = setup();
    const chatText = "abc123";

    expect(wrapper.find('#chat_text').length).toBe(1);

    const chatTextInput = wrapper.find('#chat_text');
    chatTextInput.value = chatText;
    expect(chatTextInput.value).toBe("abc123");
  });
});
