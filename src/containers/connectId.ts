import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { hideId, setCountdown } from '../module/id'
import { goBack } from 'connected-react-router'
import Id from '../components/Id/Id'
import CountDown from '../components/Id/CountDown'

const controller1 = new AbortController()
const controller2 = new AbortController()

const mapStateToProps = ({ categoryList, id, home }: {categoryList: {}, id: any, home: any}) => ({
  showId: id.id,
  isShow: id.isShow,
  content: id.content,
  categoryList,
  controller1,
  controller2,
  countdown: id.countdown
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  hideId: () => {
    dispatch(hideId())
    dispatch(goBack())
  },
  setCountdown: (limit: Date) => {
    dispatch(setCountdown(CountDown(limit)))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Id)
