import React from 'react'
import PropTypes from 'prop-types'
import Project from './Project'

const ProjectList = ({ projects, onProjectClick }) => (
  <ul className="project-list">
    {projects.map(project =>
      <Project
        key={project.id}
        {...project}
        onClick={() => onProjectClick(project.id)}
      />
    )}
  </ul>
)

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onProjectClick: PropTypes.func.isRequired
}

export default ProjectList