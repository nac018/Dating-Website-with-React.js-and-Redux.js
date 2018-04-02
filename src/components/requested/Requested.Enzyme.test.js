import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import Requested from './Requested';

require.extensions['.svg'] = () => {};

function setup() {
    return mount(<Requested/>);
}

describe('Requested via Enzyme', () => {
    it('renders h1', () => {
      const wrapper = setup();
      expect(wrapper.find('h1').text()).toEqual('Agent Requested Successfully!');
    });

    it('renders button', () => {
        const wrapper = setup();
        expect(wrapper.find('button').text()).toEqual('Cancel Request');
    });
  
});