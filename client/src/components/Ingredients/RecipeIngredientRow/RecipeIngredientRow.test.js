import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RecipeIngredientRow from './RecipeIngredientRow';

it('should render RecipeIngredientRow component', () => {
    const wrapper = shallow(<RecipeIngredientRow />);
    expect(toJson(wrapper)).toMatchSnapshot();
});