/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

const QuadCards = props => {
  const layout = props.layout
  const contents = props.content.contents
  const items = []
  for (let i in contents) {
    items.push(
      <OuterTile key={i}>
        <Tile key={i} style={{ backgroundImage: `url(${contents[i].image_url})` }}>
          <Link key={i} onClick={() => props.onClick(contents[i].id)} />
        </Tile>
        <Name key={'Name' + i}>{contents[i].name}</Name>
      </OuterTile>
    )
  }
  return (
    <ContentsBox>
      <Heading>{layout.heading}</Heading>
      <QuadBox>
        {items}
      </QuadBox>
    </ContentsBox>
  )
}

const ContentsBox = styled.div`
  position: relative;
  margin: 30px 10px;
`
const Heading = styled.h1`
  font-size: 24px;
  color: dimgray;
  margin: 8px 13px;
`
const QuadBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  height: auto;
`
const OuterTile = styled.div`
  position: relative;
  width: 47%;
  ${media.greaterThan('medium')`
    width: 23%;
  `}
  margin: 10px 0;
`
const Tile = styled.div`
  position: relative;
  width: 100%;
  height: 40vw;
  ${media.greaterThan('medium')`
    height: 22vw;
  `}
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: solid 3px #DDD;
  border-radius: 10px;
  overflow: hidden;
`
const Link = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`
const Name = styled.div`
  display: inline-block;
  font-size: 16px;
  color: dimgray;
  text-align: center;
  width: 100%;
`

export default QuadCards
