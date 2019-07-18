import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home/Home'
import Category from './Category/Category'
import Id from './Id/Id'

const App = () => (
  <Router>
    <Route exact path='/' component={Home} />
    <Route path='/category/:category' component={Category} />
    <Route path='/id/:id' component={Id} />
    <Route component={NotFound} />
  </Router>
)

export default App
