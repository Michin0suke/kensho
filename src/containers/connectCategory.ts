import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { showId } from '../module/id'
import { setCategoryContents } from '../module/category'
import { setCategoryList } from '../module/categoryList'
import Category from '../components/Category/Category'

const controller = new AbortController()

interface Props {
  categoryList: {}
  category: {
    contents: {
      [key: string]: []
    }
  }
}

const mapStateToProps = ({ category, id, categoryList }: {category: any, id: any, categoryList: any}) => ({
  categoryList,
  contents: category.contents,
  selectedId: id.selectedId,
  isShow: id.isShow,
  controller
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showId: (id: number) => {
    dispatch(push(`/id/${id}`))
    fetch(`https://api.prizz.jp/search/${id}`, { signal: controller.signal })
      .then(responce => responce.json())
      .then(json => {
        const content = JSON.parse(JSON.stringify(json)).contents[0]
        dispatch(showId(id, content))
      })
      .catch(ex => console.log('parsing failed :: showId in connectHomeLayout.ts', ex))
  },

  fetchCategoryContents: (c: string, offset = 0) => {
    const limit = 18
    fetch(`https://api.prizz.jp/category/${c}?limit=${offset},${limit}`)
      .then(responce => responce.json())
      .then(json => {
        let contents: {[key: string]: [{}]} = {}
        contents[c] = JSON.parse(JSON.stringify(json)).contents
        // キャメルケースにする
        dispatch(setCategoryContents(contents, c))
      })
      .catch(ex => console.log('parsing failed', ex))
  },

  fetchCategoryList: (categoryList: {}) => {
    if (JSON.stringify(categoryList) === '{}') {
      fetch('https://prizz.jp/categoryList.json')
        .then(responce => responce.json())
        .then(json => {
          const categoryList = JSON.parse(JSON.stringify(json))
          console.log(categoryList)
          dispatch(setCategoryList(categoryList))
        })
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
