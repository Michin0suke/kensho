import React from 'react'
import styled from 'styled-components'

const HorizontalScroll = props => {
  console.log('HorizontalScroll', props)
  let contents = []
  for (let i = 0; i < props.contents.length; i++) {
    contents.push(
      <OutTile>
        <Tile
          key={i}
          style={{ backgroundImage: `url(${props.contents[i].imageURL})` }}>
          <Link href={props.contents[i].imageURL} />
        </Tile>
        <Name>{props.contents[i].title}</Name>
      </OutTile>
    )
  }
  console.log(contents)
  return (
    <HorizontalSchrollBox>
      {contents}
    </HorizontalSchrollBox>
  )
}

const HorizontalSchrollBox = styled.ul`
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  width: 100vw;
  border-top: 2px solid #DDD;
  border-bottom: 2px solid #DDD;
  padding: 10px 20px;
  `
const OutTile = styled.li`
  display: inline-block;
  width: 420px;
  height: auto;
  margin: 15px;
`
const Tile = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  display: block;
  text-align: center;
  width: 420px;
  height: 420px;
  margin: 0;
  color: white;
  font-size: 60px;
  border: solid 3px #DDD;
  border-radius: 10px;
  overflow: hidden;
`
const Name = styled.div`
  display: inline-block;
  font-size: 30px;
  color: dimgray;
  text-align: center;
  width: 100%;
`
const Link = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export default HorizontalScroll
