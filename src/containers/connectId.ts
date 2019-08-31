import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { hideId, setLimit, setCountdown } from '../module/id'
import { push, goBack } from 'connected-react-router'
import Id from '../components/Id/Id'
import countDown, { dateToStr } from '../components/Id/CountDown'

const mapStateToProps = ({ categoryList, id }: {categoryList: {}, id: any, home: any}) => ({
  selectedId: id.selectedId,
  isShow: id.isShow,
  content: id.content,
  categoryList,
  limit: id.limit,
  countdown: id.countdown
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  goCategory: (url: string) => {
    dispatch(push(url))
    dispatch(hideId())
  },

  hideId: () => {
    dispatch(goBack())
    dispatch(hideId())
  },

  setLimit: (limit: Date) => {
    dispatch(setLimit(dateToStr(limit)))
  },

  setCountdown: (limit: Date) => {
    dispatch(setCountdown(countDown(limit)))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Id)
