import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import CategoryContent from './CategoryContent'
import media from 'styled-media-query'
import { Link, RouteComponentProps } from 'react-router-dom'
import Id from '../Id/Id'

interface CategoryRouterProps {
  category: any
}

interface Props extends RouteComponentProps<CategoryRouterProps> {
}

interface State {
  contents: any[]
  isId: number
  categoryList: []
}

export default class Category extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      contents: [],
      isId: 0,
      categoryList: []
    }
  }

  componentDidMount () {
    const category = this.props.match.params.category
    const limit = 12

    fetch(`https://api.prizz.jp/category/${category}?limit=${limit}`)
      .then(responce => responce.json())
      .then(json => {
        const contents = JSON.parse(JSON.stringify(json)).contents
        this.setState({ contents: contents })
      })
      .catch(ex => console.log('parsing failed', ex))

    fetch('https://prizz.jp/categoryList.json')
      .then(responce => responce.json())
      .then(json => {
        const categoryList = JSON.parse(JSON.stringify(json))
        this.setState({ categoryList: categoryList })
      })

    // iOSのSafariでInfiniteScrollのバグを回避
    const scriptTag = document.querySelector('script')
    const script = document.createElement('script')
    const text = document.createTextNode(`console.log(document.querySelector('.infinite-scroll-component '))
    document.querySelector('.infinite-scroll-component ').removeAttribute('style')`)
    script.appendChild(text)
    if (scriptTag) {
      scriptTag.after(script)
    }
  }

  prizzSvg = (
    <g id="prizz" data-name="prizz">
      <path d="M61.08,11.34a3.55,3.55,0,1,1,7.1,0,3.55,3.55,0,1,1-7.1,0Z" />
      <path d="M54.81,26.37l2.64-4.8a17.21,17.21,0,0,0-3.82-.44c-9.61,0-17.41,3.75-17.41,23.46V62.2H41.4V44.59c0-16,5.47-18.28,12.23-18.28A11.51,11.51,0,0,1,54.81,26.37Z" />
      <path d="M21.58,0H0V62.2H5.8v-29H21.58A16.61,16.61,0,1,0,21.58,0Zm-.32,27.38-15.46,0V5.8H21.26a10.79,10.79,0,0,1,0,21.58Z" />
      <path d="M112.73,57.28H91.84L110,25.91h0l2.76-4.78H74.56l-2.75,4.76v0H92.6L84.86,39.32l-13,22.6v.13H110ZM80,57.27l18.1-31.36h6.3L86.32,57.27Z" />
      <rect x="61.96" y="21.13" width="5.33" height="41.07" />
    </g>
  )

  fetchMoreData = () => {
    const category = this.props.match.params.category
    const offset = this.state.contents.length
    const limit = 4
    fetch(`https://api.prizz.jp/category/${category}?limit=${offset},${limit}`)
      .then(responce => responce.json())
      .then(json => {
        const nowContents = this.state.contents.slice()
        const fetchedContents = JSON.parse(JSON.stringify(json)).contents
        this.setState({ contents: nowContents.concat(fetchedContents) })
      })
  }

  onClickId = (id: number | undefined) => {
    if (id !== undefined) {
      this.setState({ isId: id })
    } else {
      // setTimeout(() => this.setState({ isId: 0 }), 300)
      this.setState({ isId: 0 })
    }
  }

  render = () => {
    let header: string = this.props.match.params.category
    if (this.state.categoryList) {
      header = this.state.categoryList[this.props.match.params.category]
    }
    let id = []
    if (this.state.isId !== 0) {
      let contents = this.state.contents
        .filter(c => c.id === this.state.isId)
        .filter(c => c !== undefined)[0]
      if (contents !== undefined) {
        id.push(
          <Id
            key={this.state.isId}
            contents={contents}
            onClick={this.onClickId}
          />
        )
      } else {
        console.log(`contents in Category.js : ${contents}`)
      }
    }
    return (
      <Wrapper>
        <Header>{header}</Header>
        <Link to="/">
          <PrizzLogo
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 112.73 62.2"
          >
            {this.prizzSvg}
          </PrizzLogo>
        </Link>
        <Margin />
        <InfiniteScroll
          dataLength={this.state.contents.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={''}
        >
          {this.state.contents.map((elem, index) => (
            <CategoryContent
              key={index}
              content={elem}
              onClick={this.onClickId}
            />
          ))}
        </InfiniteScroll>
        {id}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`
const Header = styled.h1`
  font-size: 6vw;
  height: 9vw;
  padding: 3vw 0 2vw;
  ${media.greaterThan('medium')`
    font-size: 3vw;
    height: 3vw;
    padding: 0.7vw 0 2vw;
  `}
  margin: 0;
  margin-bottom: 2vw;
  position: fixed;
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #e7c296;
  border-bottom: solid 3px #e7c296;
  background-color: #29344b;
  z-index: 10;
`
const PrizzLogo = styled.svg`
  width: 8vw;
  top: 5vw;
  left: 3vw;
  ${media.greaterThan('medium')`
    width: 4vw;
    top: 1.5vw;
    left: 1.5vw;
  `}
  position: fixed;
  fill: #e7c296;
  z-index: 20;
`
const Margin = styled.div`
  width: 100%;
  height: 15vw;
  ${media.greaterThan('medium')`
    height: 5vw;
  `}
`
/*
const ContentsBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  height: auto;
`
*/
