import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import CheckboxWithLabel from './components/CheckboxWithLabel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with enzyme', () => {
  const wrapper = shallow(<App />);
  const h1 = wrapper.find('h1');
  expect(h1.contains('Checkbox with label')).toEqual(true);
});

it('renders my checkbox', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<CheckboxWithLabel value={false}/>)).toEqual(true);
});
