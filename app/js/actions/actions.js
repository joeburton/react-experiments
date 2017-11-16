let nextProjectId = 0

export const addProject = (text) => ({
    type: 'ADD_PROJECT',
    id: nextProjectId++,
    text
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleProject = (id) => ({
    type: 'TOGGLE_PROJECT',
    id
})