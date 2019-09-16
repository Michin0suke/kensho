import React from 'react'
import styled from 'styled-components'
import media from '#/tools/mediaQuery'

interface Props {
  content: {
    'image_url': string
    'id': number
    'name': string
  }
  showId: (id: number) => void
}

const CategoryContent = ({ content, showId }: Props) => {
  const imageUrl = content.image_url
  const { id, name } = content

  return (
    <OuterTile>
      <Tile style={{ backgroundImage: `url(${imageUrl})` }}>
        <Link onClick={() => showId(id)} />
      </Tile>
      <Name>{name}</Name>
      <VisitedIcon href={`/id/${id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 552.43 552.43">
          <polygon points="236.51 348.75 139.75 243.25 97.05 295.34 244.29 442.58 479.72 198.06 441.75 160.09 236.51 348.75" style={{ fill: '#fff' }}/>
        </svg>
      </VisitedIcon>
    </OuterTile>
  )
}

const OuterTile = styled.div`
  width: 30%;
  margin: 2vw 1.5%;
  ${media.greaterThan('large')`
    width: 10%;
    height: 17vw;
    margin: 0;
    padding : 10px 1.24vw 30px;
  `}
  float: left;
  position: relative;
  animation: appear 0.5s ease both;
  @keyframes appear {
    from { opacity: 0 }
    to { opacity: 1 }
  }
`
const Tile = styled.div`
  position: relative;
  width: 100%;
  height: 30vw;
  ${media.greaterThan('large')`
    height: 10vw;
  `}
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: solid 1px #DDD;
  border-radius: 3px;
  overflow: hidden;
`
const Name = styled.div`
  display: inline-block;
  font-size: 11px;
  color: #333;
  text-align: center;
  width: 100%;
  height: 30px;
  margin-top: 3px;
`
const Link = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const VisitedIcon = styled.a`
  position: absolute;
  width: 20px;
  top: -10px;
  right: -10px;
  ${media.greaterThan('large')`
    top: -5px;
    right: -5px;
  `}
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  &:visited {
    background-color: #E70D6E;
  }
`

export default CategoryContent
