import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from '#/components/App'
import rootReducer from '#/module/root'
import '#/style.css'

const history = createBrowserHistory()

const middlewares = [logger, routerMiddleware(history)]

export const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('app')
)
