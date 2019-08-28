export const setCategoryList = (categoryList: {}) => ({
  type: 'SET_CATEGORY_LIST',
  categoryList
})

const initialState = {}

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
