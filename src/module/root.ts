import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import H from 'history'
import home from './home'
import id from './id'
import categoryList from './categoryList'
import category from './category'

export default (history: H.History) => combineReducers(
  {
    router: connectRouter(history),
    home,
    id,
    categoryList,
    category
  }
)
