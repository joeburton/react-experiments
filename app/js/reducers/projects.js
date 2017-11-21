let initialState = [
    {
        id: 0,
        text: 'Learn Jest.',
        completed: false
    }
];

alert('test..');

const projects = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            console.log('ADD_PROJECT: ', state, action)
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_PROJECT':
            console.log('TOGGLE_PROJECT: ', state, action)
            return state.map(project =>
                (project.id === action.id) ? { ...project, completed: !project.completed } : project
            )
        default:
            return state
    }
}

export default projects;
