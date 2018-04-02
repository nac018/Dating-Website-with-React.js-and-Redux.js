import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import ChooseAgent from './ChooseAgent';

import configureStore from 'redux-mock-store'; //ES6 modules

const middlewares = [];
const mockStore = configureStore(middlewares);

require.extensions['.svg'] = () => {
};

function setup() {
  const initialState = {
    accounts: [],
    id: ''
  };

  const props = {
    id: '',
    params: [],
    currAgent: {}
  };

  let store = mockStore(initialState);
  return mount(<Provider store={store}><ChooseAgent {...props}/></Provider>);
}

// describe('ChooseAgent via Enzyme', () => {
//   it('renders request', () => {
//     const wrapper = setup();
//     expect(wrapper.find('.request_button').text()).toEqual('Request');
//   });
//
//   it('renders back', () => {
//     const wrapper = setup();
//     expect(wrapper.find('.back_button').text()).toEqual('Back');
//   });
// });
