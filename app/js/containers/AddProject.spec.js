import React from 'react';

import configureStore from 'redux-mock-store';
import { shallow, mount, render } from 'enzyme';

import AddProject from './AddProject'
import ProjectList from '../components/ProjectList'
import { addProject } from '../actions/actions'

describe('AddProject', () => {

    let preventDefault;
    let wrapper;
    let store;
    let form;
    let props;
    let spy;
    
    beforeEach(() => {
        store = configureStore()({ projects: [] });
        store.dispatch = jest.fn();
        wrapper = mount(<AddProject store={store} />);
        preventDefault = jest.fn();
        form = wrapper.find('form');
    
        return {
            store,
            wrapper
        };

        spy = jest.spyOn(wrapper.instance(), 'addProject')
    });

    xit('should render a <AddProject /> component', () => {
        expect(wrapper.type()).toEqual(AddProject);
        expect(wrapper.find('div').hasClass('add-project')).toBe(true);
    });

    xit('on onSubmit calls preventDefault to stop form submit', () => {
        form.find('input').instance().value = '';
        form.simulate('submit', { preventDefault});

        expect(preventDefault).toHaveBeenCalled();
        console.log(wrapper.debug());
    });

    xit('on onSubmit if input field has value call dispatch', () => {
        form.find('input').instance().value = 'new project details';
        form.simulate('submit', { preventDefault});
        expect(preventDefault).toHaveBeenCalled();
        console.log(wrapper.props());
    });

    xit('spyOn', () => {
        const App = class extends React.Component {
            constructor(props) {
                super(props);
                this.handleButtonClick = this.handleButtonClick.bind(this);
            }
            handleButtonClick (e) {
                console.log(e.target.innerHTML)
            }
            render () {
                return (
                    <button onClick={this.handleButtonClick}>something</button>
                )
            }
        }
        const spy = jest.spyOn(App.prototype, 'handleButtonClick');
        const test = mount(<App />);
        test.find('button').simulate('click', 'using prototype');
        test.find('button').simulate('click', 'using prototype');
        expect(spy).toHaveBeenCalled();
        expect(spy.mock.calls.length).toEqual(2);
    });

    it('should call store.dispatch with a new project', () => {

        // call 1
        form.find('input').instance().value = 'new project details 1';
        form.simulate('submit', { preventDefault});

        expect(store.dispatch).toHaveBeenCalled();

        expect(store.dispatch).toHaveBeenCalledWith({
            "id": 0, 
            "text": "new project details 1", 
            "type": "ADD_PROJECT",
            "completed": false
        });

        // call 2
        form.find('input').instance().value = 'new project details 2';
        form.simulate('submit', { preventDefault});

        expect(store.dispatch).toHaveBeenCalled();

        expect(store.dispatch).toHaveBeenCalledWith({
            "id": 1, 
            "text": "new project details 2", 
            "type": "ADD_PROJECT",
            "completed": false
        });

        expect(store.dispatch.mock.calls.length).toEqual(2);

        expect(form.find('input').instance().value).toEqual('');

    });

});