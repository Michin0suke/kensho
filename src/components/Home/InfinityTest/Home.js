import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import HorizontalScroll from './Home/HorizontalScroll'
// import HomeLayout from './Home/HomeLayout'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      verticalItems: Array.from({ length: 5 }),
      horizontalItems: Array.from({ length: 5 })
    }
    this.horizontalCounter = 0
    this.verticalCounter = 0
  }

  componentDidUpdate () {
  }

  fetchMoreVerticalData = () => {
    this.verticalCounter += 1
    this.setState({
      verticalItems: this.state.verticalItems.concat(Array.from({ length: 3 }))
    })
  }

  fetchMoreHorizontalData = () => {
    this.horizontalCounter += 1
    this.setState({
      horizontalItems: this.state.horizontalItems.concat(Array.from({ length: 3 }))
    })
  }

  render = () => (
    <div>
      <Title>Infinity Test</Title>
      <hr/>
      <p>horizontalItems : {this.state.horizontalItems.length}</p>
      <p>verticalItems : {this.state.verticalItems.length}</p>
      <p>count of fetchMoreHorizontalData : {this.horizontalCounter}</p>
      <p>count of fetchMoreVerticalData : {this.verticalCounter}</p>
      <HorizontalScroll onScroll={() => this.fetchMoreHorizontalData()} items={this.state.horizontalItems}/>
      <InfiniteScroll
        dataLength={this.state.verticalItems.length}
        next={this.fetchMoreVerticalData}
        hasMore={true}
      >
        {this.state.verticalItems.map((_, index) =>
          <Tile key={index}>
            #{index}
          </Tile>
        )}
      </InfiniteScroll>
    </div>
  )
}

const Title = styled.h1`
  text-align: center;
  color: dimgray;
`
const Tile = styled.div`
  width: 90%;
  height: 80px;
  margin: 10px auto;
  background-color: pink;
`