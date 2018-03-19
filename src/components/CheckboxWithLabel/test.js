import React from 'react';
import { shallow } from 'enzyme';
import CheckboxWithLabel from './';

describe('rendering', () => {
  it('will render an input', () => {
    const wrapper = shallow(<CheckboxWithLabel/>);
    expect(wrapper.find('input').length).toEqual(1);
  });
});
