import React from 'react'

// Components
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'
import Content from './content'

// Containers
import AddProject from '../containers/AddProject'
import VisibleProjectList from '../containers/VisibleProjectList'

let items = [{
  description: 'Transfer from EUR',
  conversionRate: 1,
  transactionCurrency: 'EUR',
  billAmount:  1.3
}, {
  description: 'Transfer from GBP',
  conversionRate: 2,
  transactionCurrency: 'GBP',
  billAmount:  1.1
}];

const App = () => (
  <div>
    <Navigation />
    <AddProject />
    <VisibleProjectList />
    <Content items={items} />
    <Footer />
  </div>
)

export default App