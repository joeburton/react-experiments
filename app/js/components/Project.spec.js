import React from 'react';

import { shallow, mount, render } from 'enzyme';

import { Project } from './Project'

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

        expect(wrapper.find(Project).at(0).find('li').simulate('click'));
        expect(mockFunction.mock.calls.length).toEqual(1);
        expect(mockFunction).toHaveBeenCalled();

        // console.log(wrapper.find(Project).at(0))
        // console.log(wrapper.find(Project).at(0).props());
        console.log(wrapper.debug());
    });

    it('should set the list item to have the text-decoration property of line-through', () => {
        const mockFunction = jest.fn();
        
        const props = {
            onClick: mockFunction,
            completed: true,
            text: 'some string'
        }

        const wrapper = mount(<Project {...props} />)
        
        // console.log(wrapper.debug());
        // console.log(wrapper.find(Project).at(0).find('li').get(0).props.style);
        expect(wrapper.find(Project).at(0).find('li').get(0).props.style.textDecoration).toBe('line-through');

    });

    it('should set the list item to have the text-decoration property of none', () => {
        const mockFunction = jest.fn();
        
        const props = {
            onClick: mockFunction,
            completed: false,
            text: 'some string'
        }

        const wrapper = mount(<Project {...props} />)
        wrapper.find('li').simulate('click');
        expect(wrapper.find(Project).at(0).find('li').get(0).props.style.textDecoration).toBe('none');

        // console.log(wrapper.find(Project).at(0).props().text);

    });

});