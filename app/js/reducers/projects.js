
// import initialState from '../data/notes';

const initialState = [
    {
        id: 0,
        text: 'Learn Jest',
        completed: false
    },
    {
        id: 1,
        text: 'Upgrade Webpack',
        completed: false
    }
];

const projects = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROJECTS':

            console.log('GET_PROJECTS: ', state, action)
            var newState = Object.assign({}, state)
            newState.projects = action.projects;

            return newState;

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
