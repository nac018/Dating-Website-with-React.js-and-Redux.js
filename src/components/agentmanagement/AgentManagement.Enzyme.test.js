import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import AgentManagement from './AgentManagement';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'; //ES6 modules

const middlewares = [];
const mockStore = configureStore(middlewares);

require.extensions['.svg'] = () => {};

function setup() {
  const initialState = {
    accounts: []
  };

  let store = mockStore(initialState);
  return mount(<Provider store={store}><AgentManagement/></Provider>);
}

it('renders search place holder', () => {
    const wrapper = setup();
    const search_text = "John";

    expect(wrapper.find('.searchText').length).toBe(1);
});

it('renders search place holder 2', () => {
    const wrapper = setup();
    const search_text = "John";
    const searchTextInput = wrapper.find('.searchText');
    searchTextInput.value = search_text;
    expect(searchTextInput.value).toBe("John");
});
