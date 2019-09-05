import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { setTopCarouselIndex } from '#/module/home'
import TopCarousel from '#/components/Layout/TopCarousel'

const mapStateToProps = ({ home }: State) => ({
  contentsFromRedux: home.contents
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTopCarouselIndex: (nextIndex: number, contentNo: number) => {
    dispatch(setTopCarouselIndex(nextIndex, contentNo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TopCarousel)
