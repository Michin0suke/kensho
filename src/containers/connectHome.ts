import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { setHomeLayout, setHomeContents } from '../module/home'
import { setCategoryList } from '../module/categoryList'
import { push } from 'connected-react-router'
import { showId } from '../module/id'
import Home from '../components/Home/Home'

interface InContents {
  'id': number,
  'name': string,
  'winner': number,
  'image_url': string,
  'image_bin': string,
  'created_at': string,
  'updated_at': string,
  'limit_date': string,
  'link': string,
  'provider': string,
  'way': string,
  'category': string[]
}
interface Contents {
  'contents'?: InContents[],
  'no': number,
  'renderType': string,
  'heading'?: string,
  'image_url'?: string,
  'link'?: string
}

interface State {
  id: number,
  home: {
    contents: [],
    layout: [],
  },
  categoryList: {}
}

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
        const content = JSON.parse(JSON.stringify(json)).contents[0]
        dispatch(showId(id, content))
      })
      .catch(ex => console.log('parsing failed :: showId in connectHomeLayout.ts', ex))
  },

  fetchHomeLayout: () => fetch('https://prizz.jp/homeLayout.json')
    .then(responce => responce.json())
    .then(json => {
      let layouts = JSON.parse(JSON.stringify(json))
      dispatch(setHomeLayout(layouts))
      return layouts
    })
    .catch(ex => console.log('parsing failed', ex)),

  fetchCategoryList: () => fetch('https://prizz.jp/categoryList.json')
    .then(responce => responce.json())
    .then(json => {
      const categoryList = JSON.parse(JSON.stringify(json))
      dispatch(setCategoryList(categoryList))
    }),

  setHomeContents: (layout: any) => {
    if ('endpoint' in layout) {
      fetch(`https://api.prizz.jp/${layout.endpoint}`)
        .then(response => response.json())
        .then(json => JSON.parse(JSON.stringify(json)))
        .then(content => dispatch(setHomeContents(content, layout.no)))
        .catch(ex => console.log('setHomeContent is parsing failed', ex))
    } else {
      dispatch(setHomeContents(layout, layout.no))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
