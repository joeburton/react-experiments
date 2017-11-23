import React from 'react';

import { shallow, mount, render } from 'enzyme';

import Navigation from './Navigation'
import NavigationPrivate from './NavigationPrivate'
import NavigationPublic from './NavigationPublic'
import Header from './Header'

describe('Navigation', () => {

    it('should render a <Navigation /> component', () => {

        const wrapper = shallow(<Navigation />)

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.hasClass('navigation')).toBe(true);

        expect(wrapper.find(Header)).toBeTruthy();
        expect(wrapper.find(Header).length).toEqual(1);
        expect(wrapper.find(Header).at(0).props().toggleNav).toBeTruthy();

        expect(wrapper.find(NavigationPrivate)).toBeTruthy();
        expect(wrapper.find(NavigationPrivate).length).toEqual(1);

        expect(wrapper.find(NavigationPublic)).toBeTruthy();
        expect(wrapper.find(NavigationPublic).length).toEqual(1);
        expect(wrapper.find(NavigationPublic).at(0).props().amActive).toBe(false);

        // console.log(wrapper.debug());
    });

    it('should toggle the nav state #toggleNav', () => {
        const wrapper = mount(<Navigation />);
        const toogleNavSpy = jest.spyOn(wrapper.instance(), 'toggleNav');

        wrapper.instance().toggleNav();
        
        expect(wrapper.state().publicNavigation.amActive).toBe(true);
        wrapper.instance().toggleNav();
        expect(wrapper.state().publicNavigation.amActive).toBe(false);

        expect(toogleNavSpy).toHaveBeenCalled();
    })

    it('should spyOn on a component method but also force a different return value, useful :)', () => {
        const wrapper = mount(<Navigation />);
        
        jest.spyOn(wrapper.instance(), 'toggleNav').mockImplementation(() => {
            return 'crackers';
        });

        // console.log(wrapper.debug());
        expect(wrapper.state().publicNavigation.amActive).toBe(false);

    })

    it('should include an instance of <NavigationPrivate />', () => {
        const wrapper = shallow(<NavigationPrivate />)

        expect(wrapper.type()).toEqual('ul');
        expect(wrapper.hasClass('navigation-private')).toBe(true);
    })

    it('should include an instance of <NavigationPublic />', () => {
        const wrapper = mount(<NavigationPublic />)

        expect(wrapper.find('.navigation-public').length).toBe(1);
        expect(wrapper.find('.navigation-public ul li').length).toBe(3);
        expect(wrapper.find('.navigation-public ul').childAt(0).text()).toBe('Home');
        expect(wrapper.find('.navigation-public ul').childAt(1).text()).toBe('Products');
        expect(wrapper.find('.navigation-public ul').childAt(2).text()).toBe('Contact');
    })
    
});