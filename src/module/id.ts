import { combineReducers } from 'redux'

export const showId = (selectedId: number, content: {}) => ({
  type: 'SHOW_ID',
  selectedId,
  content
})
export const hideId = () => ({
  type: 'HIDE_ID'
})
export const setLimit = (limit: string) => ({
  type: 'SET_LIMIT',
  limit
})
export const setCountdown = (countdown: string) => ({
  type: 'SET_COUNTDOWN',
  countdown
})

const initialContent = process.env.NODE_ENV === 'storybook'
  ? {
    id: 4430,
    name: 'ロボット掃除機、コードレスクリーナー',
    winner: 10020,
    'image_url': 'https://www.chance.com/image/prizeimg/5d3069914c296.jpg',
    'created_at': '2019-07-23T05:40:53Z',
    'updated_at': '0001-01-01T00:00:00Z',
    'limit_date': '2019-09-01T00:00:00Z',
    link: 'https://park.sjnk.co.jp/campaign/ins_201907-08_enq/index.html',
    provider: '損害保険ジャパン日本興亜株式会社',
    way: '会員登録',
    category: [
      'appliance',
      'foods',
      'goods',
      'stationery'
    ],
    'is_oneclick': false,
    'twitter_way': null,
    'twitter_raw': ''
  }
  : {}

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
const content = (state = initialContent, { type, content }: {type: string, content: {}}) => {
  switch (type) {
    case 'SHOW_ID': return content
    default: return state
  }
}
const limit = (state = '', { type, limit }: {type: string, limit: string}) => {
  switch (type) {
    case 'SET_LIMIT': return limit
    default: return state
  }
}
const countdown = (state = '', { type, countdown }: {type: string, countdown: string}) => {
  switch (type) {
    case 'SET_COUNTDOWN': return countdown
    default: return state
  }
}

export default combineReducers({
  isShow,
  selectedId,
  content,
  limit,
  countdown
})
