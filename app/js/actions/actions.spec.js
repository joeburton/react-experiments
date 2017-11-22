import * as actions from './actions'

describe('Project actions', () => {
  it('should call addProject', () => {
    expect(actions.addProject('Use Redux')).toEqual({
      type: 'ADD_PROJECT',
      id: 2,
      text: 'Use Redux'
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
