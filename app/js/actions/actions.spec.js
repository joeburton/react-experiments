import * as actions from './actions'

describe('Project actions', () => {
  it('should call addProject', () => {
    expect(actions.addProject({
      type: 'ADD_PROJECT',
      id: 0,
      text: 'Use Redux 1',
      completed: false
    })).toEqual({
      type: 'ADD_PROJECT',
      id: 0,
      text: 'Use Redux 1',
      completed: false
    })

    expect(actions.addProject({
      type: 'ADD_PROJECT',
      id: 1,
      text: 'Use Redux 2',
      completed: false
    })).toEqual({
      type: 'ADD_PROJECT',
      id: 1,
      text: 'Use Redux 2',
      completed: false
    })

  })

  it('should call setVisibilityFilter', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('should call toggleProject', () => {
    expect(actions.toggleProject(1)).toEqual({
      type: 'TOGGLE_PROJECT',
      id: 1
    })
  })

})
