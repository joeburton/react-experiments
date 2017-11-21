import React from 'react'

// Components
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import FilterLinks from './FilterLinks'

// Containers
import AddProject from '../containers/AddProject'
import VisibleProjectList from '../containers/VisibleProjectList'

let items = [{
  description: 'React 16 prototype',
  item1: 'Jest',
  item2: 'Joe Burton'
}];

const App = () => (
  <div>
    <Navigation />
    <AddProject />
    <VisibleProjectList />
    <FilterLinks />
    <Footer items={items} />
  </div>
)

export default App