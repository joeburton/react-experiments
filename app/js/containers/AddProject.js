import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { addProject } from '../actions/actions'

let AddProject = ({ dispatch }) => {
    let input

        return (
            <div className="add-project">
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return;
                    } else {
                        dispatch(addProject({
                            text: input.value,
                            id: 100, //@todo need to increment
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

AddProject = connect()(AddProject)

export default AddProject;