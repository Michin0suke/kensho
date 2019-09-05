/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'
import Heading, { HeadingBox, HeadingSub } from '#/components/styled/Heading'

interface Props {
  categoryList: CategoryList
  content: LayoutCategoryList
}

const arrow = (color: string = '#f2b146') => (
  <g>
    <rect width="553.19" height="553.19" rx="276.6" style={{ fill: color }}/>
    <polygon points="454.83 276.6 291.04 112.81 291.04 221.6 127.26 221.6 127.26 331.6 291.04 331.6 291.04 440.38 454.83 276.6" style={{ fill: '#fff' }}/>
  </g>
)

const LayoutCategoryList = (props: Props) => {
  let categories = props.categoryList
  let content = props.content
  let items: JSX.Element[] = []
  Object.keys(categories).forEach((key, i) => {
    if (process.env.NODE_ENV === 'storybook') {
      items.push(
        <OuterTile key={i}>
          <Tile>
            <Img src={`https://prizz.jp/assets/img/categoryList/${key}.jpg`} />
            <Name>{categories[key]}</Name>
          </Tile>
          <Name>{categories[key]}</Name>
        </OuterTile>
      )
    } else {
      items.push(
        <OuterTile key={i}>
          <Link to={`/category/${key}`}>
            <Tile>
              <Img src={`https://prizz.jp/assets/img/categoryList/${key}.jpg`} />
            </Tile>
            <Name>{categories[key]}</Name>
          </Link>
        </OuterTile>
      )
    }
  })
  return (
    <div style={{ position: 'relative' }}>
      <HeadingBox>
        <Heading>{content.heading}</Heading>
        <HeadingSub>{content.heading_sub}</HeadingSub>
      </HeadingBox>
      <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 553.19 553.19">{arrow('#0085E7')}</Arrow>
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
  height: 160px;
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
  margin: 7px;
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
const Img = styled.img`
  width: 100%;
  height: 100px;
  border: 0;
`
const Name = styled.p`
  display: block;
  position: absolute;
  top: 100px;
  font-size: 11px;
  font-weight: bold;
  line-height: 16px;
  color: #666;
  text-align: center;
  width: 100%;
  height: 48px;
  white-space: normal;
  overflow: hidden;
  padding-left: 3px;
  margin-top: 5px;
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

export default LayoutCategoryList
