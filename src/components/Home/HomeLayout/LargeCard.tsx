import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'react-router-dom'

type Props = {
  content: {
    link: string,
    image_url: string,
    heading: string
  }
}

const LargeCard = (props: Props) => (
  <Link to={props.content.link}>
    <Tile style={{ backgroundImage: `url(${props.content.image_url})` }}>
      <Gradation />
      <Heading>{props.content.heading}</Heading>
    </Tile>
  </Link>
)

const Tile = styled.div`
  position: relative;
  width: 85vw;
  height: calc(85vw / 1.6);
  ${media.greaterThan('medium')`
    height: calc(85vw/3)
  `}
  margin: 30px auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: solid 3px #ddd;
  border-radius: 10px;
  overflow: hidden;
`
const Heading = styled.h1`
  position: absolute;
  bottom: 0;
  display: inline-block;
  font-size: 5vw;
  ${media.greaterThan('medium')`
    font-size: 40px;
  `}
  width: 100%;
  text-align: center;
  user-select: none;
  color: whitesmoke;
  margin: 0;
  z-index: 10;
`
const Gradation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  background: linear-gradient(rgba(0, 0, 0, 0) 70%, #444 100%);
`

export default LargeCard
