
const generateId = () => {
    let id = document.querySelectorAll('.project-list li').length;
    return id++;
}

export const addProject = (text) => ({
    type: 'ADD_PROJECT',
    id: generateId(),
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