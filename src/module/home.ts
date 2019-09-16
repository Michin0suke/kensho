import { combineReducers } from 'redux'

export const setHomeContents = (content: {}, no: number) => ({
  type: 'SET_HOME_CONTENTS',
  content,
  no
})
export const setHomeLayout = (layout: []) => ({
  type: 'SET_HOME_LAYOUT',
  layout
})
export const setHomeTopCarouselIndex = (nextIndex: number, no: number) => ({
  type: 'SET_HOME_TOPCAROUSEL_INDEX',
  nextIndex,
  no
})
export const addHomeTopCarouselIndex = (contentsLength: number, no: number) => ({
  type: 'ADD_HOME_TOPCAROUSEL_INDEX',
  contentsLength,
  no
})

interface Action {
  type: string,
  content: {},
  no: number,
  nextIndex: number,
  contentsLength: number
}

const contents = (state: { [key: string]: { contents: { showedIndex: number } } } = {}, { type, content, no, nextIndex, contentsLength }: Action) => {
  switch (type) {
    case 'SET_HOME_CONTENTS': return {
      ...state,
      [no]: content
    }
    case 'SET_HOME_TOPCAROUSEL_INDEX': return {
      ...state,
      [no]: {
        ...state[no],
        contents: {
          ...state[no].contents,
          showedIndex: nextIndex
        }
      }
    }
    case 'ADD_HOME_TOPCAROUSEL_INDEX':
      return {
        ...state,
        [no]: {
          ...state[no],
          contents: {
            ...state[no].contents,
            showedIndex: (state[no].contents.showedIndex + 1) % contentsLength
          }
        }
      }
    default: return state
  }
}
const layout = (state = [], { type, layout }: {type: string, layout: []}) => {
  switch (type) {
    case 'SET_HOME_LAYOUT': return layout
    default: return state
  }
}

export default combineReducers({
  contents,
  layout
})
