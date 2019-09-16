import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { setHomeLayout } from '#/module/home'
import { setCategoryList } from '#/module/categoryList'
import { showId } from '#/module/id'
import Home from '#/components/Home/Home'

const controller = new AbortController()

const mapStateToProps = ({ categoryList, home, id }: State) => ({
  id,
  contents: home.contents,
  layout: home.layout,
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
      .catch(ex => console.log('parsing failed :: showId in connectHomeLayout.ts', ex))
  },

  fetchHomeLayout: () => fetch(process.env.NODE_ENV === 'development' ? 'https://prizz.jp/assets/layout/home/layout_dev.json' : 'https://prizz.jp/assets/layout/home/layout.json')
    .then(responce => responce.json())
    .then(json => {
      let layouts = JSON.parse(JSON.stringify(json))
      dispatch(setHomeLayout(layouts))
    })
    .catch(ex => console.log('parsing failed', ex)),

  fetchCategoryList: () => fetch('https://prizz.jp/assets/layout/categoryList.json')
    .then(responce => responce.json())
    .then(json => {
      const categoryList = JSON.parse(JSON.stringify(json))
      dispatch(setCategoryList(categoryList))
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
