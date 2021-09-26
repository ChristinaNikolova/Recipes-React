import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import {act} from "react-dom/test-utils";

import CategoriesList from './CategoriesList';
import SingleCategory from '../SingleCategory/SingleCategory';

describe("CategoriesList", () => {
    let wrapper;
    // let categories;

    beforeEach(() => {
        wrapper = shallow(<CategoriesList />);
    });

    it('should render CategoriesList component', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("should render the count of the categories", async () => {
        await act(async () => {
            await Promise.resolve(wrapper);
            await new Promise(resolve => setImmediate(resolve));
            wrapper.update();
        });
        console.log(wrapper.debug());
    });
});

