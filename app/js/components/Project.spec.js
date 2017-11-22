import React from 'react';

import { shallow, mount, render } from 'enzyme';

import Project from './Project'

describe('Project', () => {

    it('should render a <Project /> component', () => {

        const mockFunction = jest.fn();

        const props = {
            onClick: mockFunction,
            completed: false,
            text: 'some string'
        }

        const wrapper = mount(<Project {...props} />)

        expect(wrapper.find(Project).at(0).props().completed).toBeFalsy();
        expect(wrapper.find(Project).at(0).props().text).toBe('some string');

        expect(wrapper.find(Project).at(0).find('li').length).toEqual(1);
        expect(wrapper.find(Project).at(0).find('li').text()).toEqual('some string');

        // wrapper.instance().onClick();
        // expect(wrapper.state().publicNavigation.amActive).toBe(false);
        // expect(mockFunction).toHaveBeenCalled();

        console.log(wrapper.find(Project).at(0))
        console.log(wrapper.find(Project).at(0).props());
        console.log(wrapper.debug());
    });

});