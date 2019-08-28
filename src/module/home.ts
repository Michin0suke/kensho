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

const contents = (state = {}, { type, content, no }: {type: string, content: {}, no: number}) => {
  switch (type) {
    case 'SET_HOME_CONTENTS': return {
      ...state,
      [no]: content
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
