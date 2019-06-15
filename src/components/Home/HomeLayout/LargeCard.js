import React from 'react'
import styled from 'styled-components'

const LargeCard = props => (
  <Tile style={{ backgroundImage: `url(${props.imageURL})` }}>
    <Link href={props.imageURL} />
    <Heading>{props.heading}</Heading>
  </Tile>
)

const Tile = styled.div`
  position: relative;
  width: 70vw;
  height: calc(70vw/1.6);
  margin: 30px auto;
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
const Heading = styled.h1`
  position: absolute;
  bottom: 0;
  display: inline-block;
  font-size: 7vw;
  width: 100%;
  text-align: center;
  user-select: none;
  color: whitesmoke;
  margin: 0;
`

export default LargeCard
