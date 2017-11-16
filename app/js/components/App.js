import React from 'react'

// Components
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

// Containers
import AddProject from '../containers/AddProject'
import VisibleProjectList from '../containers/VisibleProjectList'

const App = () => (
  <div>
    <Navigation />
    <AddProject />
    <VisibleProjectList />
    <Footer />
  </div>
)

export default App