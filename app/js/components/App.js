import React from 'react'

// Components
import Header from './Header'
import Navigation from './Navigation'
import Content from './content'
import Filters from './Filters'

// Containers
import AddProject from '../containers/AddProject'
import VisibleProjectList from '../containers/VisibleProjectList'

let items = [{
  description: 'React 16 prototype',
  testframework: 'Jest',
  developer: 'Joe Burton'
}];

const App = () => (
  <div>
    <Navigation />
    <AddProject />
    <VisibleProjectList />
    <Content items={items} />
    <Filters />
  </div>
)

export default App