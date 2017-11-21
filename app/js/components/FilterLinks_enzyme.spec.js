import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

import React from 'react';
import FilterLinks from './FilterLinks'
import FilterLink from '../containers/FilterLink'

const wrapper = shallow(<FilterLinks />)

describe('components', () => {
    describe('FilterLinks', () => {
        it('should render correctly', () => {
            expect(wrapper.childAt(0).type()).toEqual('span');
            expect(wrapper.type()).toEqual('section');
            expect(wrapper.childAt(0).containsMatchingElement(<span>Show:</span>)).toEqual(true);
            expect(wrapper.childAt(0).text()).toEqual('Show:');
            expect(wrapper.find(FilterLink).length).toEqual(3);
        })
    })
})
