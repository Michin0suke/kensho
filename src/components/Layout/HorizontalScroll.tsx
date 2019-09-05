/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import media from '#/tools/mediaQuery'
import Heading, { HeadingBox, HeadingSub } from '#/components/styled/Heading'

interface Props {
  content: LayoutHorizontalScroll
  showId: (id: number) => void
}

const arrow = (color: string = '#f2b146') => (
  <g>
    <rect width="553.19" height="553.19" rx="276.6" style={{ fill: color }}/>
    <polygon points="454.83 276.6 291.04 112.81 291.04 221.6 127.26 221.6 127.26 331.6 291.04 331.6 291.04 440.38 454.83 276.6" style={{ fill: '#fff' }}/>
  </g>
)

const LayoutHorizontalScroll = ({ content, content: { contents }, showId }: Props) => {
  let items = []
  for (let i in contents) {
    if (content.ad_number && i === content.ad_number.toString()) {
      items.push(
        <OuterTile key={'AD' + i}>
          <Tile style={{ backgroundImage: 'url(https://prizz.jp/assets/img/defaultImg.svg)' }}>
            <NLink href={content.ad_link} target="_blank" rel="nofollow" />
            <AdImg alt={content.ad_name} src={content.ad_image} />
            <img width="1" height="1" src={content.ad_tracking} alt="" />
          </Tile>
          <Name>{content.ad_name}</Name>
        </OuterTile>
      )
    }
    // safariでNameの表示が崩れるのを防ぐ
    items.push(
      <OuterTile key={i}>
        <Tile style={{ backgroundImage: 'url(https://prizz.jp/assets/img/defaultImg.svg)' }}>
          <NLink onClick={() => showId(contents[i].id)} />
          <Img alt={contents[i].name} src={contents[i].image_url} />
        </Tile>
        <Name>{contents[i].name}</Name>
        <VisitedIcon href={`/id/${contents[i].id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 552.43 552.43">
            <polygon points="236.51 348.75 139.75 243.25 97.05 295.34 244.29 442.58 479.72 198.06 441.75 160.09 236.51 348.75" style={{ fill: '#fff' }}/>
          </svg>
        </VisitedIcon>
      </OuterTile>
    )
  }
  /*
  items.push(
    <OuterTile key={1000}>
      <Link to={`/${content.}`}>
        <Tile>
          <MoreText>もっとみる</MoreText>
        </Tile>
        <Name>{name}</Name>
      </Link>
    </OuterTile>
  )
  */
  return (
    <div style={{ position: 'relative' }}>
      <HeadingBox>
        <Heading>{content.heading}</Heading>
        <HeadingSub>{content.heading_sub}</HeadingSub>
      </HeadingBox>
      <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 553.19 553.19">{arrow()}</Arrow>
      <HorizontalSchrollBox>
        {items}
      </HorizontalSchrollBox>
    </div>
  )
}

const HorizontalSchrollBox = styled.ul`
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  height: 200px;
  /*border-top: 2px solid #DDD;
  border-bottom: 2px solid #DDD;*/
  padding: 0 0 0 6px;
  margin: 10px 0 0 0;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  `
const OuterTile = styled.li`
  display: inline-block;
  position: relative;
  width: 100px;
  ${media.greaterThan('large')`
    width: 14vw;
  `}
  margin: 13px 7px 0;
  &:hover {
    transform: scale(1.05)
  }
`
const Tile = styled.article`
  /* 広告用 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* API用 */
  background-color: white;
  position: relative;
  text-align: center;
  width: 100%;
  height: 100px;
  ${media.greaterThan('large')`
    height: 14vw;
  `}
  margin: 0;
  color: white;
  border: solid 1px #DDD;
  /* border-radius: 3px; */
  overflow: hidden;
`
const Name = styled.p`
  display: block;
  position: absolute;
  top: 100px;
  font-size: 11px;
  font-weight: bold;
  line-height: 16px;
  color: #666;
  width: 100%;
  height: 48px;
  white-space: normal;
  overflow: hidden;
  padding-left: 3px;
  margin-top: 5px;
`
/*
text-overflow: ellipsis;
display: box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
*/
const NLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const Img = styled.img`
  width: 100%;
  height: 100px;
  border: 0;
`
const AdImg = styled.img`
  width: 100%;
  height: 100px;
  border: 0;
`
const Arrow = styled.svg`
  position: absolute;
  pointer-events: none;
  width: 40px;
  right: 10px;
  top: 70px;
  z-index: 10;
  animation: flash 3s ease infinite;
  @keyframes flash {
    80% {
      transform: scale(1);
    }
    90% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`
const VisitedIcon = styled.a`
  position: absolute;
  width: 20px;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  background-color: white;
  z-index: 30;
  pointer-events: none;
  &:visited {
    background-color: #E70D6E;
  }
`
/*
const MoreText = styled.p`
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding:0;
  font-size: 20px;
  color: #E7C296;
  background-color: #29344B;
`
*/

export default LayoutHorizontalScroll
