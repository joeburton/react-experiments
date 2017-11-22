import React from 'react';

import { shallow, mount, render } from 'enzyme';

import Footer from './Footer'

describe('Footer', () => {
    it('should render a <Footer /> component', () => {

        const mockFunction = jest.fn();

        const props = {
            items: [{
                description: 'React 16 prototype',
                item1: 'Jest',
                item2: 'Joe Burton'
            }]
        }

        const wrapper = shallow(<Footer {...props} />)
        
        console.log(wrapper.instance().props);
        console.log(wrapper.debug());

        // test component wrapper
        expect(wrapper.type()).toEqual('section');
        expect(wrapper.hasClass('footer')).toBe(true);
        expect(wrapper.find('ul').length).toBe(1);

        // prop content rendered properly
        expect(wrapper.find('ul').childAt(0).text()).toBe('React 16 prototype');
        expect(wrapper.find('ul').childAt(2).text()).toBe('Jest');
        expect(wrapper.find('ul').childAt(3).text()).toBe('Joe Burton');
        expect(wrapper.find('ul li').length).toEqual(3);

    })
})