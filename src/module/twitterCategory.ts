import { combineReducers } from 'redux'

export const setTwitterCategoryContents = (contents: {}, category: string) => ({
  type: 'SET_TWITTER_CATEGORY_CONTENTS',
  contents,
  category
})

interface Action {
  type: string
  contents: CategoryContents
  category: string
}

const contents = (state: CategoryContents = {}, { type, contents, category }: Action) => {
  switch (type) {
    case 'SET_TWITTER_CATEGORY_CONTENTS':
      if (state !== {} && state[category]) {
        const newState = Object.assign({}, state)
        newState[category] = state[category].concat(contents[category])
        return newState
      } else {
        return Object.assign({}, state, contents)
      }
    default: return state
  }
}

export default combineReducers({ contents })
