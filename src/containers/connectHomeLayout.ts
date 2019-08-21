import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { showId } from '../module/id'
import { setHomeContents } from '../module/home'
import HomeLayout from '../components/Home/HomeLayout/HomeLayout'

const controller1 = new AbortController()
const controller2 = new AbortController()

const mapStateToProps = ({ home, categoryList }: {home: any, id: any, categoryList: any}) => ({
  categoryList,
  contents: home.contents,
  controller1,
  controller2
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showId: (id: number) => {
    dispatch(push(`/id/${id}`))
    fetch(`https://api.prizz.jp/search/${id}`, { signal: controller1.signal })
      .then(responce => responce.json())
      .then(json => {
        const content = JSON.parse(JSON.stringify(json)).contents[0]
        dispatch(showId(id, content))
      })
      .catch(ex => console.log('parsing failed :: showId in connectHomeLayout.ts', ex))
  },

  setHomeContents: (layout: any) => {
    if ('endpoint' in layout) {
      fetch(`https://api.prizz.jp/${layout.endpoint}`)
        .then(response => response.json())
        .then(json => JSON.parse(JSON.stringify(json)))
        .then(c => {
          const content = Object.assign(layout, c)
          dispatch(setHomeContents(content, layout.no))
        })
        .catch(ex => console.log('setHomeContent is parsing failed', ex))
    } else {
      dispatch(setHomeContents(layout, layout.no))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout)
