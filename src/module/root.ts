import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import H from 'history'
import home from '#/module/home'
import id from '#/module/id'
import categoryList from '#/module/categoryList'
import category from '#/module/category'
// import twitter from '#/module/twitter'

export default (history: H.History) => combineReducers(
  {
    router: connectRouter(history),
    home,
    id,
    categoryList,
    category
  }
)
