import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { showId } from '#/module/id'
import { setTwitterContents, setTwitterTopCarouselIndex, addTwitterTopCarouselIndex } from '#/module/twitter'
import TwitterLayout from '#/components/Twitter/TwitterLayout'
import resolveEndpoint from '#/tools/resolveEndpoint'

const controller = new AbortController()

const mapStateToProps = ({ twitter, categoryList }: {twitter: Twitter, categoryList: CategoryList}) => ({
  categoryList,
  contents: twitter.contents,
  controller
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showId: (id: number) => {
    dispatch(push(`/id/${id}`))
    fetch(resolveEndpoint(`https://api.prizz.jp/search/${id}?raw=true`), { signal: controller.signal })
      .then(responce => responce.json())
      .then(json => {
        const content = JSON.parse(JSON.stringify(json))
        dispatch(showId(id, content))
      })
      .catch(ex => console.log('parsing failed :: showId in connectTwitterLayout.ts', ex))
  },

  setTwitterContents: (layout: TwitterLayout) => {
    if (layout.endpoint) {
      fetch(resolveEndpoint(layout.endpoint))
        .then(response => response.json())
        .then(json => JSON.parse(JSON.stringify(json)))
        .then(contents => {
          const content = Object.assign(layout, { contents })
          dispatch(setTwitterContents(content, layout.no))
        })
        .catch(ex => console.log('setTwitterContent is parsing failed', ex))
    } else {
      dispatch(setTwitterContents(layout, layout.no))
    }
  },

  setTwitterTopCarouselIndex: (nextIndex: number, contentNo: number) => {
    dispatch(setTwitterTopCarouselIndex(nextIndex, contentNo))
  },

  addTwitterTopCarouselIndex: (contentsLength: number, contentNo: number) => {
    dispatch(addTwitterTopCarouselIndex(contentsLength, contentNo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TwitterLayout)
