import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { hideId, setLimit, setCountdown, setNextTimeClickable } from '../../module/id'
import { push, goBack } from 'connected-react-router'
import Id from './Id'
import countDown, { dateToStr } from './CountDown'

const mapStateToProps = ({ categoryList, id, login }: {categoryList: {}, id: any, home: Home, login: any}) => ({
  selectedId: id.selectedId,
  isShow: id.isShow,
  content: id.content,
  categoryList,
  limit: id.limit,
  countdown: id.countdown,
  nextTimeClickable: id.nextTimeClickable,
  isTwitterLogin: login.twitter.isLoggedIn
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
  },

  setNextTimeClickable: (nextTime: Date) => {
    dispatch(setNextTimeClickable(nextTime))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Id)
