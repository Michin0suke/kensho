export const setCategoryList = (categoryList: {}) => ({
  type: 'SET_CATEGORY_LIST',
  categoryList
})

const initialState = process.env.NODE_ENV === 'stotybook'
  ? {
    'appliance': '家電・パソコン',
    'baby': 'ベビー・キッズ',
    'books': '本・CD・DVD',
    'cash': '現金',
    'cosmetics': 'コスメ・美容',
    'daily': '日用品',
    'fashion': 'ファッション',
    'foods': '食料品・ドリンク',
    'gift': '商品券・ギフト券',
    'goods': '雑貨・インテリア',
    'kitchen': 'キッチン用品',
    'movie': '映画・試写会',
    'sports': '健康・スポーツ',
    'stationery': '文具',
    'ticket': '招待・優待券',
    'toy': 'ゲーム・おもちゃ',
    'travel': '旅行・宿泊',
    'vehicle': '車・バイク・自転車',
    'other': 'その他'
  }
  : {}

interface Action {
  type: string
  categoryList: {}
}

const categoryList = (state = initialState, { type, categoryList }: Action) => {
  switch (type) {
    case 'SET_CATEGORY_LIST': return categoryList
    default: return state
  }
}

export default categoryList
