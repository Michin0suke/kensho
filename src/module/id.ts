import { combineReducers } from 'redux'

export const showId = (selectedId: number, content: {}) => ({
  type: 'SHOW_ID',
  selectedId,
  content
})
export const hideId = () => ({
  type: 'HIDE_ID'
})
export const setCountdown = (countdown: string) => ({
  type: 'SET_COUNTDOWN',
  countdown
})

const isShow = (state = false, { type }: {type: string}) => {
  switch (type) {
    case 'SHOW_ID': return true
    case 'HIDE_ID': return false
    default: return state
  }
}
const selectedId = (state = 0, { type, selectedId }: {type: string, selectedId: number}) => {
  switch (type) {
    case 'SHOW_ID': return selectedId
    default: return state
  }
}
const content = (state = {}, { type, content }: {type: string, content: {}}) => {
  switch (type) {
    case 'SHOW_ID': return content
    default: return state
  }
}
const countdown = (state = '', { type, countdown }: {type: string, countdown: string}) => {
  switch (type) {
    case 'SET_COUNTDOWN': return countdown
    default: return state
  }
}

// const id = (state = initialState, action: Action) => {
//   combineReducers({
//     isShow,
//     selectedId,
//     content
//   })(state, action)
// }

// export default id

export default combineReducers({
  isShow,
  selectedId,
  content,
  countdown
})
