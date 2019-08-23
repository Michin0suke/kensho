import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import Twitter from '../components/Twitter/Twitter'
import { setTwitterContents } from '../module/twitter'

const mapStateToProps = ({ twitter: { contents } }: {twitter: {contents: string}}) => ({ contents })

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTwitterContents: () => {
    fetch('https://prizz.jp/twitter.txt')
      .then(res => res.text())
      .then(contents => dispatch(setTwitterContents(contents)))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Twitter)
