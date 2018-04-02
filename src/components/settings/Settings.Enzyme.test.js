import expect from 'expect';
import React from 'react';
import {mount} from 'enzyme';
import Settings from './Settings';

require.extensions['.svg'] = () => {};

function setup() {
  return mount(<Settings/>);
}

describe('SettingsForm via Enzyme', () => {
  it('renders form', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });

  it('renders h3', () => {
    const wrapper = setup();
    expect(wrapper.find('h3').text()).toEqual('Account Settings');
  });

  it('input fields should be filled properly', () => {
    const wrapper = setup();
    const credentials = {name: "user", password: "1234", password_repeat: "1234"};

    expect(wrapper.find('#name').length).toBe(1);

    const usernameInput = wrapper.find('#name');
    usernameInput.value = credentials.name;
    expect(usernameInput.value).toBe('user');

    const passwordInput = wrapper.find('#password');
    passwordInput.value = credentials.password;
    expect(passwordInput.value).toBe('1234');

    const repeatPasswordInput = wrapper.find('#password_repeat');
    repeatPasswordInput.value = credentials.password_repeat;
    expect(repeatPasswordInput.value).toBe('1234');

  });

});
