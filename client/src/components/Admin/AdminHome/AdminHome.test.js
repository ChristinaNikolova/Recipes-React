import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AdminHome from './AdminHome';

it('should render AdminHome component', () => {
    const wrapper = shallow(<AdminHome />);
    expect(toJson(wrapper)).toMatchSnapshot();
});