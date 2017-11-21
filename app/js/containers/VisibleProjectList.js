import { connect } from 'react-redux'
import { toggleProject } from '../actions/actions'
import ProjectList from '../components/ProjectList'

const getVisibleProjects = (projects, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return projects
    case 'SHOW_COMPLETED':
      return projects.filter(project => project.completed)
    case 'SHOW_ACTIVE':
      return projects.filter(project => !project.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  projects: getVisibleProjects(state.projects, state.visibilityFilter)
})

const mapDispatchToProps = {
  onProjectClick: toggleProject
}

const VisibleProjectList = connect(mapStateToProps, mapDispatchToProps)(ProjectList)

export default VisibleProjectList