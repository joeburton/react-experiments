const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            console.log('SET_VISIBILITY_FILTER: ', state, action)
            return action.filter
        default:
            return state
    }

}

export default visibilityFilter;