import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from './';

describe('rendering', () => {
  it('will render an input', () => {
    const wrapper = shallow(<CheckboxWithLabel value={true}/>);
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('renders label text', () => {
    const wrapper = shallow(<CheckboxWithLabel labelText='Hello!' value={true}/>);
    expect(wrapper.find('label').text()).toEqual('Hello!');
  });
});
