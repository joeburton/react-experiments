import React from 'react';

import { shallow, mount, render } from 'enzyme';

import { Link } from './Link'

describe('Link', () => {

    it('should render an href tag', () => {

        const mockFunction = jest.fn();

        const props = {
            onClick: mockFunction,
            active: false,
            children: 'All'
        }

        const wrapper = shallow(<Link {...props} />)

        expect(wrapper.type()).toEqual('a');
        expect(wrapper.hasClass('link')).toBe(true);

        expect(mockFunction.mock.calls.length).toEqual(0);
        wrapper.find('a').simulate('click');
        wrapper.find('a').simulate('click');
        expect(mockFunction.mock.calls.length).toEqual(2);
    });


    it('should render a span tag', () => {

        const mockFunction = jest.fn();

        const props = {
            onClick: mockFunction,
            active: true,
            children: 'Disabled'
        }

        const wrapper = shallow(<Link {...props} />)

        expect(wrapper.type()).toEqual('span');
        expect(wrapper.hasClass('none')).toBe(true);
    });

});