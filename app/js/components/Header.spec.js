import React from 'react';

import { shallow, mount, render } from 'enzyme';

import { Header } from './Header'

describe('Header', () => {
    it('should render a <Header /> component', () => {

        const mockFunction = jest.fn();

        const props = {
            toggleNav: mockFunction
        }
        
        const wrapper = shallow(<Header {...props} />)
        
        // test component wrapper
        expect(wrapper.type()).toEqual('header');
        expect(wrapper.hasClass('main-header')).toBe(true);

        expect(wrapper.find('h1').text()).toBe('Dev experiments');

        expect(mockFunction.mock.calls.length).toEqual(0);
        wrapper.find('.toggle-nav').simulate('click');
        wrapper.find('.toggle-nav').simulate('click');
        expect(mockFunction.mock.calls.length).toEqual(2);

        console.log(wrapper.state());
        console.log(wrapper.debug());
    })
})