import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import Agent from './Agent';
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
    saving: false
  };

  let store = mockStore(initialState);
  return mount(<Provider store={store}><Agent/></Provider>);
}

it('renders sort', () => {
  const wrapper = setup();
  expect(wrapper.find('.sortby').text()).toEqual('Sort By: ');
});

it('renders header', () => {
  const wrapper = setup();
  expect(wrapper.find('.content').find('h1').text()).toEqual('Find an Agent');
});
