/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import media from '#/tools/mediaQuery'
import Heading, { HeadingBox, HeadingSub } from '#/components/styled/Heading'

interface Props {
  content: LayoutQuadCards
  showId: (id: number) => void
}

const LayoutQuadCards = ({ content, content: { contents }, showId }: Props) => {
  const items = []
  for (let i in contents) {
    items.push(
      <OuterTile key={i} display={Number(i) >= 4 ? '@media(max-width: 960px){display: none}' : ''}>
        <Tile style={{ backgroundImage: 'url(https://prizz.jp/assets/img/defaultImg.svg)' }}>
          <Link onClick={() => showId(contents[i].id)} />
          <Image src={contents[i].image_url} alt={contents[i].name} />
        </Tile>
        <VisitedIcon href={`/id/${contents[i].id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 552.43 552.43">
            <polygon points="236.51 348.75 139.75 243.25 97.05 295.34 244.29 442.58 479.72 198.06 441.75 160.09 236.51 348.75" style={{ fill: '#fff' }}/>
          </svg>
        </VisitedIcon>
        <Name>{contents[i].name}</Name>
      </OuterTile>
    )
  }
  return (
    <div>
      <HeadingBox>
        <Heading>{content.heading}</Heading>
        <HeadingSub>{content.heading_sub}</HeadingSub>
      </HeadingBox>
      <ContentBox>
        <QuadBox>
          {items}
        </QuadBox>
      </ContentBox>
    </div>
  )
}

const ContentBox = styled.div`
  position: relative;
  margin: 10px 10px;
  ${media.greaterThan('large')`
    width: 80%;
    margin: 10px auto;
  `}
`
const QuadBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  height: auto;
`
const OuterTile: any = styled.div`
  position: relative;
  width: 48%;
  ${media.greaterThan('large')`
    width: 22%;
  `}
  ${(props: any) => props.display}
  margin: 10px 0;
  &:hover {
    transform: scale(1.05)
  }
`
const Tile = styled.div`
  position: relative;
  width: 100%;
  height: 47vw;
  ${media.greaterThan('large')`
    height: 15vw;
  `}
  margin: 0 auto;
  border: solid 1px #DDD;
  /* border-radius: 5px; */
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
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
  font-size: 0.68rem;
  font-weight: 800;
  color: #666;
  /* text-align: center; */
  width: 100%;
  padding-top: 3px;
`
const VisitedIcon = styled.a`
  position: absolute;
  width: 20px;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  z-index: 30;
  &:visited {
    background-color: #E70D6E;
  }
`
export default LayoutQuadCards
