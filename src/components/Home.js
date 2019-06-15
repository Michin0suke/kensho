import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import HomeLayoutList from './Home/HomeLayout/HomeLayoutList'
import HomeLayout from './Home/HomeLayout/HomeLayout'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      countOfItems: 2,
      LayoutListLength: HomeLayoutList.length,
      items: HomeLayoutList.filter((_, index) => index < 2 + 1),
      homeContents: []
    }
  }

  fetchMoreData = () => {
    const startIndex = this.state.countOfItems % this.state.LayoutListLength
    const lastIndex = this.state.countOfItems % this.state.LayoutListLength + 1
    this.setState({
      countOfItems: this.state.countOfItems + 2,
      items: this.state.items.concat(HomeLayoutList.filter(
        (_, index) => startIndex <= index || index <= lastIndex
      ))
    })
  }

  render = () => (
    <Wrapper>
      <Title>Infinity Test</Title>
      <hr/>
      <InfiniteScroll
        dataLength={this.state.items.length}
        next={this.fetchMoreData}
        hasMore={true}
      >
        {this.state.items.map((elem, index) => <HomeLayout key={index} items={elem}/>)}
      </InfiniteScroll>
    </Wrapper>
  )
}

const Title = styled.h1`
  text-align: center;
  color: dimgray;
  margin-top: 30px;
  font-size: 50px;
`
const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`
