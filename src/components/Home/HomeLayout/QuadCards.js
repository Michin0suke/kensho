import React from 'react'
import styled from 'styled-components'

const QuadCards = props => {
  console.log(props)
  const contents = []
  for (let i = 0; i < props.contents.length; i++) {
    contents.push(
      <OuterTile>
        <Tile key={i} style={{ backgroundImage: `url(${props.contents[i].imageURL})` }}>
          <Link key={i} href={props.contents[i].imageURL} />
        </Tile>
        <Name key={'Name' + i}>{props.contents[i].title}</Name>
      </OuterTile>
    )
  }
  return (
    <ContentsBox>
      <Heading>{props.heading}</Heading>
      <QuadBox>
        {contents}
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
  margin-left: 20px;
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
  width: 45%;
  margin: 10px;
`
const Tile = styled.div`
  position: relative;
  width: 100%;
  height: 40vw;
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
  font-size: 20px;
  color: dimgray;
  text-align: center;
  width: 100%;
`

export default QuadCards
