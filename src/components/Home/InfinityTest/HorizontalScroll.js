import React from 'react'
import styled from 'styled-components'
import HorizontalInfiniteScroll from 'react-infinite-scroll-component'

const HorisontalScroll = props => {
  console.log(props)
  return (
    <div>
      <HorizontalInfiniteScroll
        dataLength={props.items.length}
        next={() => {
          props.onScroll()
          console.log(props)
        }}
        hasMore={true}
      >
        <HorisontalScrollBox>
          {props.items.map((_, index) =>
            <Tile key={index}>
              #{index}
            </Tile>
          )}
        </HorisontalScrollBox>
      </HorizontalInfiniteScroll>
    </div>
  )
}

export default HorisontalScroll

const HorisontalScrollBox = styled.ul`
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
`
const Tile = styled.li`
  display: inline-block;
  width: 180px;
  height: 300px;
  margin: 30px;
  background-color: dodgerblue;
`