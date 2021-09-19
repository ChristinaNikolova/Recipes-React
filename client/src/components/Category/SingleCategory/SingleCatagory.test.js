import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SingleCategory from './SingleCategory';

it('should render SingleCategory component', () => {
    const wrapper = shallow(<SingleCategory />);
    expect(toJson(wrapper)).toMatchSnapshot();
});