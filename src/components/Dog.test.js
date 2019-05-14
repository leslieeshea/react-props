import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog Component', () => {
  it('renders a dog', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
