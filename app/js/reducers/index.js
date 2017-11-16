import { combineReducers } from 'redux'
import projects from './projects'
import visibilityFilter from './visibilityFilter'

const projectsApp = combineReducers({
    projects,
    visibilityFilter
})

export default projectsApp