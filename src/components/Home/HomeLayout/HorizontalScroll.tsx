/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import styled from 'styled-components'
// import media from 'styled-media-query'

interface Props {
  layout: any
  content: any
  onClick: (id: number) => void
}

const HorizontalScroll = (props: Props) => {
  let layout = props.layout
  let content = props.content.contents
  let items = []
  const adNumber = layout.ad_number
  for (let i in content) {
    if (i === adNumber) {
      items.push(
        <OuterTile key={'AD' + i}>
          <Tile>
            <NLink href={layout.ad_link} target="_blank" rel="nofollow" />
            <AdImg alt={layout.ad_name} src={layout.ad_image} />
            <img width="1" height="1" src={layout.ad_tracking} alt="" />
          </Tile>
          <Name key={'Name' + i}>{layout.ad_name + '\n　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　'}</Name>
        </OuterTile>
      )
    }
    // safariでNameの表示が崩れるのを防ぐ
    const name = content[i].name + '\n　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　'
    items.push(
      <OuterTile key={i}>
        <Tile>
          <NLink onClick={() => props.onClick(content[i].id)} />
          <Img alt={content[i].name} src={content[i].image_url} />
          <a href={content[i].link} />
        </Tile>
        <Name>{name}</Name>
      </OuterTile>
    )
  }
  /*
  items.push(
    <OuterTile key={1000}>
      <Link to={`/${layout.endpoint}`}>
        <Tile>
          <MoreText>もっとみる</MoreText>
        </Tile>
        <Name>{name}</Name>
      </Link>
    </OuterTile>
  )
  */
  return (
    <div>
      <Heading>{layout.heading}</Heading>
      <HorizontalSchrollBox>
        {items}
      </HorizontalSchrollBox>
    </div>
  )
}

const Heading = styled.h1`
  display: inline-block;
  font-size: 24px;
  color: dimgray;
  margin: 0px 20px;
`
const HorizontalSchrollBox = styled.ul`
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  border-top: 2px solid #DDD;
  border-bottom: 2px solid #DDD;
  padding: 10px 0;
  margin: 0;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  `
const OuterTile = styled.li`
  display: inline-block;
  position: relative;
  width: 40vw;
  /* ${media.greaterThan('medium')`
    width: 14vw;
  `} */
  height: auto;
  margin: 10px;
`
const Tile = styled.article`
  /* 広告用 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* API用 */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  text-align: center;
  width: 100%;
  height: 40vw;
  /* ${media.greaterThan('medium')`
    height: 14vw;
  `} */
  margin: 0;
  color: white;
  border: solid 3px #DDD;
  border-radius: 10px;
  overflow: hidden;
`
const Name = styled.p`
  display: block;
  font-size: 16px;
  line-height: 26px;
  color: dimgray;
  text-align: center;
  width: 100%;
  height: 48px;
  white-space: normal;
  overflow: hidden;
  padding-left: 3px;
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
  height: auto;
  border: 0;
`
const AdImg = styled.img`
  width: 100%;
  height: auto;
  border: 0;
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

export default HorizontalScroll
