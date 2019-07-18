import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import CountDown from './CountDown'

type IdProps = {
  contents: {
    id: number,
    name: string,
    winner: number,
    image_url: string,
    limit_date: Date,
    link: string,
    provider: string,
    way: string,
    category: string[]
  }
  onClick: (id: number) => void
}

export default class Id extends React.Component<IdProps> {
  state: { contents: never[]; countDown: string;};
  constructor (props: IdProps) {
    super(props)
    this.state = {
      contents: [],
      countDown: ''
    }
  }

  controller1 = new AbortController()
  controller2 = new AbortController()

  componentDidMount () {
    // const id = this.props.match.params.id
    const id = this.props.contents.id
    console.log(`https://api.prizz.jp/search/${id}`)

    fetch(`https://api.prizz.jp/search/${id}`, { signal: this.controller1.signal })
      .then(responce => responce.json())
      .then(json => {
        const contents = JSON.parse(JSON.stringify(json)).contents
        this.setState({ contents: contents })
      })
      .catch(ex => console.log('parsing failed', ex))

    fetch('https://prizz.jp/categoryList.json', { signal: this.controller2.signal })
      .then(responce => responce.json())
      .then(json => {
        const categoryList = JSON.parse(JSON.stringify(json))
        this.setState({ categoryList: categoryList })
      })

    const limit = new Date(this.props.contents.limit_date)
    this.setState({ countDown: CountDown(limit) })
    setInterval(() => this.setState({ countDown: CountDown(limit) }), 1000)
  }

  componentWillUnmount () {
    this.controller1.abort()
    this.controller2.abort()
  }

  render = () => {
    const c: IdProps['contents'] = this.props.contents
    const l = new Date(c.limit_date)
    const month = l.getMonth() + 1 + '月'
    let date: string
    let hours: string
    if (l.getHours() - 9 === 0) {
      date = l.getDate() + '日'
      hours = ''
    } else {
      if (l.getHours() >= 9) {
        date = l.getDate().toString() + '日'
        hours = ' ' + (l.getHours() - 9).toString() + '時'
      } else {
        date = (l.getDate() - 1).toString() + '日'
        hours = ' ' + (l.getHours() - 9 + 24).toString() + '時'
      }
    }

    return (
      <Wrapper onClick={() => this.props.onClick()}>
        <ContentBox>
          <Image style={{ backgroundImage: `url(${c.image_url})` }} />
          <Name>{c.name}</Name>
          <Winner>当選人数: {c.winner}人</Winner>
          <Way>応募方法: {c.way}</Way>
          <Limit>締め切り: {month}{date}{hours}（あと {this.state.countDown}）</Limit>
          <Provider>企画: {c.provider}</Provider>
          <Category>カテゴリ: {c.category.map((cg, i) =>
            <Link key={i} to={`/category/${cg}`}><CategoryButton>{cg}</CategoryButton></Link>
          )}</Category>
          <Button>応募する！<ExLink href={c.link} /></Button>
        </ContentBox>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.4);
  /*
  animation: fade-in 0.3s ease forwards;
  &:active {
    animation: fade-out 0.3s ease forwards;
  }
  @keyframes fade-in {
    0%   { opacity: 0 }
    100% { opacity: 1 }
  }
  @keyframes fade-out {
    0%   { opacity: 1 }
    100% { opacity: 0 }
  }
  */
`
const ContentBox = styled.div`
  position: relative;
  width: 85%;
  ${media.greaterThan('medium')`
    width: 50%;
  `}
  height: auto;
  border-radius: 10px;
  margin: 30px auto;
  padding: 16px;
  background-color: white;
  z-index: 110;
`
const Image = styled.img`
  width: 35vw;
  height: 35vw;
  ${media.greaterThan('medium')`
    width: 20vw;
    height: 20vw;
  `}
  display: block;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border: solid 2px whitesmoke;
  border-radius: 10px;
`
const Name = styled.h1`
  font-size: 20px;
`
const Winner = styled.p`
  font-size: 16px;
`
const Way = styled.p`
  font-size: 16px;
`
const Limit = styled.p`
  font-size: 16px;
`
const Provider = styled.p`
  font-size: 16px;
`
const Category = styled.div`
  font-size: 16px;
`
const CategoryButton = styled.p`
  display: inline-block;
  padding: 4px 7px;
  background-color: #FF7EAA;
  color: white;
  border-radius: 3px;
  margin: 0;
  margin-left: 7px;
`
const Button = styled.div`
  position: relative;
  width: 50%;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  padding-top: 10px;
  font-size: 20px;
  color: white;
  text-align: center;
  background-color: #29344B;
  border-radius: 10px;
`
const ExLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
