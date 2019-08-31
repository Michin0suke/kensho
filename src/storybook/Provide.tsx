import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '#/module/root'
import '#/style.css'

const history = createBrowserHistory()

const middlewares = [logger, routerMiddleware(history)]

export const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

const Provide = (component: any) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router history={history}>
        <Route component={component} />
      </Router>
    </ConnectedRouter>
  </Provider>
)

export default Provide
