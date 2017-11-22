import React from 'react';

import { shallow, mount, render } from 'enzyme';

import FilterLinks from './FilterLinks'
import FilterLink from '../containers/FilterLink'

const wrapper = shallow(<FilterLinks />)

describe('FilterLinks', () => {
    it('should render a <FilterLinks /> component', () => {

        // test component wrapper
        expect(wrapper.type()).toEqual('section');
        expect(wrapper.hasClass('filter-links')).toBe(true);

        // test first child
        expect(wrapper.childAt(0).type()).toEqual('span');
        // test first child html content
        expect(wrapper.childAt(0).containsMatchingElement(<span>Show: </span>)).toEqual(true);
        // test first child html content text
        expect(wrapper.childAt(0).text()).toEqual('Show: ');

        // check number of nested components
        expect(wrapper.find(FilterLink).length).toEqual(3);

        // test prop values
        expect(wrapper.find(FilterLink).at(0).props().filter).toBe('SHOW_ALL');
        expect(wrapper.find(FilterLink).at(1).props().filter).toBe('SHOW_ACTIVE');
        expect(wrapper.find(FilterLink).at(2).props().filter).toBe('SHOW_COMPLETED');

    })
})