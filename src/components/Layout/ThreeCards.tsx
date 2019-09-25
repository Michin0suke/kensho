/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import media from '#/tools/mediaQuery'
import Heading, { HeadingBox, HeadingSub } from '#/components/styled/Heading'
import defaultImage from '#/components/styled/defaultImg'

interface Props {
  content: LayoutThreeCards
  showId: (id: number) => void
}

const LayoutQuadCards = ({ content, content: { contents }, showId }: Props) => {
  const items = []
  for (let i in contents) {
    items.push(
      <OuterTile key={i} display={Number(i) >= 9 ? '@media(max-width: 960px){display: none}' : ''} >
        <Tile style={{ backgroundImage: 'url(https://prizz.jp/assets/img/defaultImg.svg)' }}>
          <Image src={contents[i].image_url} alt={contents[i].name}/>
          <Link onClick={() => showId(contents[i].id)} />
        </Tile>
        <VisitedIcon href={`/id/${contents[i].id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 552.43 552.43">
            <polygon points="236.51 348.75 139.75 243.25 97.05 295.34 244.29 442.58 479.72 198.06 441.75 160.09 236.51 348.75" style={{ fill: '#fff' }}/>
          </svg>
        </VisitedIcon>
        {/* <IsOneClick>ONECLICK!</IsOneClick> */}
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
        <ThreeBox>
          {items}
        </ThreeBox>
      </ContentBox>
    </div>
  )
}

const ContentBox = styled.div`
  height: 100%;
  padding: 0;
  width: 100%;
  margin: 10px 0 0;
  ${media.greaterThan('large')`
    width: 80%;
    margin: 25px auto 0;
  `}
`
const ThreeBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 96%;
  margin: 0 auto;
  height: auto;
`
const OuterTile: any = styled.div`
  position: relative;
  width: 28%;
  padding: 10px 2%;
  margin: 0;
  ${media.greaterThan('large')`
    width: 13%;
    padding: 10px 1.5%;
  `}
  ${(props: any) => props.display}
  &:hover {
    transform: scale(1.05)
  }
`
const Tile = styled.div`
  position: relative;
  width: 100%;
  height: 28vw;
  ${media.greaterThan('large')`
    height: 10vw;
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
  top: -5px;
  right: -5px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  z-index: 30;
  &:visited {
    background-color: #E70D6E;
  }
`

// <rect x="0.5" y="0.5" width="551.43" height="551.43" rx="275.71" style={{ fill: '#FF7EAA' }}/>

export default LayoutQuadCards
