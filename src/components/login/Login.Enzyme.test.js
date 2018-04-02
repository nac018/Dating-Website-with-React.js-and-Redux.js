import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import LoginForm from './LoginForm';

require.extensions['.svg'] = () => {};

function setup() {

  const props = {
    form: {},
    handleInputChange: () => {},
    onSubmit: () => {}
  };

  return shallow(<LoginForm {...props}/>);
}

describe('LoginForm via Enzyme', () => {
  it('renders form', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('input fields should be filled properly', () => {
    const wrapper = setup();
    const credentials = {username: "user", password: "1234"};

    expect(wrapper.find('#username').length).toBe(1);

    const usernameInput = wrapper.find('#username');
    usernameInput.value = credentials.username;
    expect(usernameInput.value).toBe('user');

    const passwordInput = wrapper.find('#password');
    passwordInput.value = credentials.password;
    expect(passwordInput.value).toBe('1234');

  });

});
