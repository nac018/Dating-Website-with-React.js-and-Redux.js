import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import Matched from './Matched';

require.extensions['.svg'] = () => {};

function setup() {
    return mount(<Matched/>);
}

describe('Matched via Enzyme', () => {
    it('renders h3', () => {
      const wrapper = setup();
      expect(wrapper.find('h1').text()).toEqual('Client Matched Successfully!');
    });

    it('renders button', () => {
        const wrapper = setup();
        expect(wrapper.find('button').text()).toEqual('Cancel Matchmaking');
    });
  
});