import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import UserSignUp from './UserSignup';

require.extensions['.svg'] = () => {};

function setup(saving) {
  return mount(<UserSignUp/>);
}

describe('UserSignup via Enzyme', () => {

});
