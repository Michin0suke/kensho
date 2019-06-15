import React from 'react'
import styled from 'styled-components'

const HorizontalScroll = props => {
  console.log('HorizontalScroll', props)
  let contents = []
  for (let i = 0; i < props.contents.length; i++) {
    contents.push(
      <OuterTile key={'OuterTile' + i}>
        <Tile
          key={'Tile' + i}
          style={{ backgroundImage: `url(${props.contents[i].imageURL})` }}>
          <Link href={props.contents[i].imageURL} />
        </Tile>
        <Name key={'Name' + i}>{props.contents[i].title}</Name>
      </OuterTile>
    )
  }
  console.log(contents)
  return (
    <div>
      <Heading>{props.heading}</Heading>
      <HorizontalSchrollBox>
        {contents}
      </HorizontalSchrollBox>
    </div>
  )
}

const Heading = styled.h1`
  display: inline;
  font-size: 24px;
  color: dimgray;
  margin-left: 20px;
`
const HorizontalSchrollBox = styled.ul`
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  border-top: 2px solid #DDD;
  border-bottom: 2px solid #DDD;
  padding: 10px 20px;
  margin: 0;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  `
const OuterTile = styled.li`
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
