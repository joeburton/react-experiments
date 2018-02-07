import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { addProject } from '../actions/actions'

let AddProject = ({ dispatch, ...props }) => {
    let input

        return (
            <div className="add-project">
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return;
                    } else {
                        // console.log(props);
                        dispatch(addProject({
                            text: input.value,
                            id: props.numberProjects++,
                            completed: false
                        }))
                        input.value = ''
                    }
                }}>
                    <input ref={node => {
                        input = node
                    }} />
                    <button type="submit">
                        Add Todo
            </button>
                </form>
            </div>
        )
}

const stateToProps = function(state) {
    return {
        numberProjects: state.projects.length
    }
}

export default connect(stateToProps,)(AddProject)