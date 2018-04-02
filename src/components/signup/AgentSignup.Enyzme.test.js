import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import AgentSignupForm from './AgentSignupForm';

require.extensions['.svg'] = () => {};

function setup() {

  const props = {
    form: {},
    handleInputChange: () => {},
    onSubmit: () => {}
  };

  return shallow(<AgentSignupForm {...props}/>);
}

describe('AgentSignup via Enzyme', () => {

});
