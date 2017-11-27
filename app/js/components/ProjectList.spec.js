import React from 'react';

import { shallow, mount, render } from 'enzyme';

import { ProjectList } from './ProjectList'
import { Project } from './Project'

describe('ProjectList', () => {

    let mockFunction;
    let props;
    let wrapper;

    beforeEach(() => {
        mockFunction = jest.fn();

        props = {
            onProjectClick: mockFunction,
            projects: [{
                id: 1,
                completed: false,
                text: 'a note 1'
            },
            {
                id: 2,
                completed: true,
                text: 'a note 2'
            },
            {
                id: 3,
                completed: false,
                text: 'a note 3'
            }]
        }

        wrapper = mount(<ProjectList {...props} />)
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should render a <ProjectList /> component', () => {

        expect(wrapper.type()).toEqual(ProjectList);

        expect(wrapper.find('ul').hasClass('project-list')).toBe(true);

        // console.log(wrapper.find(Project).at(0).props());
        // console.log(wrapper.find(ProjectList).at(0))
        console.log(wrapper.debug());
    });

    it('should render three nested Project components', () => {
        expect(wrapper.find(Project).at(0).props().text).toBe('a note 1');
        expect(wrapper.find(Project).at(1).props().text).toBe('a note 2');
        expect(wrapper.find(Project).at(2).props().text).toBe('a note 3');
    });


    it('should call onProjectClick when a project list item is clicked', () => {
        wrapper.find(Project).at(0).simulate('click');
        wrapper.find(Project).at(0).simulate('click');
        expect(mockFunction.mock.calls.length).toEqual(2);
        expect(mockFunction).toHaveBeenCalled();
    });

});