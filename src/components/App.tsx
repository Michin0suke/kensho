import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import H from 'history'
import Home from '#/components/Home/connectHome'
import Category from '#/components/Category/connectCategory'
// import Twitter from '#/containers/connectTwitter'

const App = ({ history }: { history: H.History }) => (
  <ConnectedRouter history={history}>
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/id/:id' render={(props) => <Home routerId={props.match.params.id} />} />
      <Route path='/category/:category' component={Category} />
    </Router>
  </ConnectedRouter>
)

export default App
