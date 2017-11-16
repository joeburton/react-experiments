import React from 'react'
import { connect } from 'react-redux'
import { addProject } from '../actions'

let AddProject = ({ dispatch }) => {
  let input

  return (
    <div className="add-project">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addProject(input.value))
        input.value = ''
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

export default AddProject