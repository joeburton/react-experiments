import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'
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