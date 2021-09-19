import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SingleComment from './SingleComment';

it('should render SingleComment component', () => {
    const wrapper = shallow(<SingleComment />);
    expect(toJson(wrapper)).toMatchSnapshot();
});