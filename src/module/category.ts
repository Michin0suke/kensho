import { combineReducers } from 'redux'

export const setCategoryContents = (contents: {}, category: string) => ({
  type: 'SET_CATEGORY_CONTENTS',
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
    case 'SET_CATEGORY_CONTENTS':
      if (state[category]) {
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
