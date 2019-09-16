import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { setTwitterLayout } from '#/module/twitter'
import { setCategoryList } from '#/module/categoryList'
import { showId } from '#/module/id'
import Twitter from '#/components/Twitter/Twitter'

const controller = new AbortController()

const mapStateToProps = ({ categoryList, twitter, id }: State) => ({
  id,
  contents: twitter.contents,
  layout: twitter.layout,
  categoryList
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
      .catch(ex => console.log('parsing failed :: showId in connectTwitterLayout.ts', ex))
  },

  fetchTwitterLayout: () => fetch(process.env.NODE_ENV === 'development' ? 'https://prizz.jp/assets/layout/twitter/layout_dev.json' : 'https://prizz.jp/assets/layout/twitter/layout.json')
    .then(responce => responce.json())
    .then(json => {
      let layouts = JSON.parse(JSON.stringify(json))
      dispatch(setTwitterLayout(layouts))
    })
    .catch(ex => console.log('parsing failed', ex)),

  fetchCategoryList: () => fetch('https://prizz.jp/assets/layout/categoryList.json')
    .then(responce => responce.json())
    .then(json => {
      const categoryList = JSON.parse(JSON.stringify(json))
      dispatch(setCategoryList(categoryList))
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Twitter)
