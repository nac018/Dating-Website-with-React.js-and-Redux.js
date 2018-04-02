import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import ProgressForm from './ProgressForm';

require.extensions['.svg'] = () => {
};

function setup() {

  const props = {
    taskText: '',
    handleInputChange: () => {},
    addNewTask: () => {}
  };

  return shallow(<ProgressForm{...props}/>);
}

describe('Progress Form Screen via Enzyme', () => {
  it('renders form', () => {
    const wrapper = setup();
    expect(wrapper.find('form').length).toBe(1);
  });
});
