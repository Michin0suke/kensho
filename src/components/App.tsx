import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import H from 'history'
import Home from '#/components/Home/connectHome'
import Twitter from '#/components/Twitter/connectTwitter'
import TwitterCategory from '#/components/Twitter/Category/connectCategory'
import Category from '#/components/Category/connectCategory'
import CinraHeader from '#/components/Layout/CinraHeader'
// import TwitterLogin from '#/components/Layout/TwitterLogin'
import Contents from '#/components/Contents'

const App = ({ history }: { history: H.History }) => (
  <ConnectedRouter history={history}>
    <Router>
      <Route component={CinraHeader}/>
      {/* <Route component={TwitterLogin}/> */}
      <Route exact path='/' component={Home} />
      <Route path='/category/:category' component={Category} />
      <Route exact path='/twitter' component={Twitter} />
      <Route path='/twitter/category/:category' component={TwitterCategory} />
      <Route path='/id/:id' render={(props) => <Home routerId={props.match.params.id} />} />
      <Route path='/contents/:contents' component={Contents} />
    </Router>
  </ConnectedRouter>
)

export default App
