import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { showId } from '#/module/id'
import { setHomeContents, setHomeTopCarouselIndex, addHomeTopCarouselIndex } from '#/module/home'
import HomeLayout from '#/components/Home/HomeLayout'

const controller = new AbortController()

const mapStateToProps = ({ home, categoryList }: {home: Home, categoryList: CategoryList}) => ({
  categoryList,
  contents: home.contents,
  controller
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showId: (id: number) => {
    dispatch(push(`/id/${id}`))
    console.log(id)
    fetch(`https://api.prizz.jp/search/${id}`, { signal: controller.signal })
      .then(responce => responce.json())
      .then(json => {
        const content = JSON.parse(JSON.stringify(json))
        dispatch(showId(id, content))
      })
      .catch(ex => console.log('parsing failed :: showId in connectHomeLayout.ts', ex))
  },

  setHomeContents: (layout: HomeLayout) => {
    if (layout.endpoint) {
      fetch(layout.endpoint)
        .then(response => response.json())
        .then(json => JSON.parse(JSON.stringify(json)))
        .then(contents => {
          const content = Object.assign(layout, { contents })
          dispatch(setHomeContents(content, layout.no))
        })
        .catch(ex => console.log('setHomeContent is parsing failed', ex))
    } else {
      dispatch(setHomeContents(layout, layout.no))
    }
  },

  setHomeTopCarouselIndex: (nextIndex: number, contentNo: number) => {
    dispatch(setHomeTopCarouselIndex(nextIndex, contentNo))
  },

  addHomeTopCarouselIndex: (contentsLength: number, contentNo: number) => {
    dispatch(addHomeTopCarouselIndex(contentsLength, contentNo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout)
