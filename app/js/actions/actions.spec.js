import * as actions from './actions'

describe('project actions', () => {
  it('addProject should create ADD_PROJECT action', () => {
    expect(actions.addProject('Use Redux')).toEqual({
      type: 'ADD_PROJECT',
      id: 2,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleProject should create TOGGLE_PROJECT action', () => {
    expect(actions.toggleProject(1)).toEqual({
      type: 'TOGGLE_PROJECT',
      id: 1
    })
  })
})
