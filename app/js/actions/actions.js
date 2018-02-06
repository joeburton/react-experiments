
export const addProject = (action) => ({
    type: 'ADD_PROJECT',
    id: action.id,
    text: action.text,
    completed: action.completed
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleProject = (id) => ({
    type: 'TOGGLE_PROJECT',
    id
})