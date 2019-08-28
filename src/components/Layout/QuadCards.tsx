/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import media from '#/components/MediaQuery'

interface Props {
  content: LayoutQuadCards
  showId: (id: number) => void
}

const LayoutQuadCards = ({ content, content: { contents }, showId }: Props) => {
  const items = []
  for (let i in contents) {
    items.push(
      <OuterTile key={i}>
        <Tile key={i} style={{ backgroundImage: `url(${contents[i].image_url})` }}>
          <Link key={i} onClick={() => showId(contents[i].id)} />
        </Tile>
        <Name key={'Name' + i}>{contents[i].name}</Name>
      </OuterTile>
    )
  }
  return (
    <ContentBox>
      <Heading>{content.heading}</Heading>
      <QuadBox>
        {items}
      </QuadBox>
    </ContentBox>
  )
}

const ContentBox = styled.div`
  position: relative;
  margin: 30px 10px;
`
const Heading = styled.h1`
  font-size: 1.125rem;
  color: #333;
  margin: 0px 13px;
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
  background-color: #FBFA8A;
  border: solid 1px #DDD;
  border-radius: 5px;
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
  font-size: 11px;
  color: #333;
  text-align: center;
  width: 100%;
  padding-top: 3px;
`

export default LayoutQuadCards
