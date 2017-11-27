import React from 'react'
import PropTypes from 'prop-types'

export const Project = ({ onClick, completed, text }) => (
  <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
    {text}
  </li>
)

Project.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}