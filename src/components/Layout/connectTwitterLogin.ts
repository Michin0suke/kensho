import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { setTwitterLoggedIn } from '#/module/login'
import TwitterLogin from './TwitterLogin'

interface Props {
  login: {
    twitter: {
      isLoggedIn: string
      user: object
    }
  }
}

const mapStateToProps = ({ login: { twitter: { isLoggedIn, user } } }: Props) => ({
  isLoggedIn,
  user
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTwitterLoggedIn: (user: object) => {
    dispatch(setTwitterLoggedIn(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TwitterLogin)
