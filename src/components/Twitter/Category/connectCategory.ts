import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { showId } from '#/module/id'
import { setTwitterCategoryContents } from '#/module/twitterCategory'
import { setCategoryList } from '#/module/categoryList'
import Category from '#/components/Twitter/Category/Category'
import join from '#/tools/joinQuery'

const controller = new AbortController()

const mapStateToProps = ({ twitterCategory, id, categoryList }: {twitterCategory: Category, id: Id, categoryList: CategoryList}) => ({
  categoryList,
  contents: twitterCategory.contents,
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
        const content = JSON.parse(JSON.stringify(json))
        dispatch(showId(id, content))
      })
      .catch(ex => console.log('parsing failed :: showId in connectHomeLayout.ts', ex))
  },

  fetchCategoryContents: (c: string, offset = 0) => {
    const limit = 18
    const params = {
      category: c,
      limit: `${offset},${limit}`,
      order: 'deadline',
      way: 'twitter'
    }
    fetch(join('https://api.prizz.jp/contents', params))
      .then(responce => responce.json())
      .then(json => {
        let contents: {[key: string]: [{}]} = {}
        contents[c] = JSON.parse(JSON.stringify(json))
        dispatch(setTwitterCategoryContents(contents, c))
      })
      .catch(ex => console.log('parsing failed', ex))
  },

  fetchCategoryList: (categoryList: {}) => {
    if (JSON.stringify(categoryList) === '{}') {
      fetch('https://prizz.jp/assets/layout/categoryList.json')
        .then(responce => responce.json())
        .then(json => {
          const categoryList = JSON.parse(JSON.stringify(json))
          dispatch(setCategoryList(categoryList))
        })
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
