import { combineReducers } from 'redux'

export const setTwitterLoggedIn = (user: object) => ({
  type: 'SET_TWITTER_LOGGED_IN',
  user
})

interface Action {
  type: string,
  user: {}
}

const initialState = {
  isLoggedIn: false,
  user: {}
}

const twitter = (state = initialState, { type, user }: Action) => {
  switch (type) {
    case 'SET_TWITTER_LOGGED_IN': return {
      isLoggedIn: true,
      user
    }
    default: return state
  }
}

export default combineReducers({ twitter })
