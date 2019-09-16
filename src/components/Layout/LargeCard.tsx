import React from 'react'
import styled from 'styled-components'
import media from '#/tools/mediaQuery'
import { Link } from 'react-router-dom'

interface Props {
  content: LayoutLargeCard
}

const LayoutLargeCard = ({ content }: Props) => {
  if (process.env.NODE_ENV === 'storybook') {
    return (
      <Image src={content.image_url} />
    )
  } else {
    return (
      <Link to={content.link}>
        <Frame>
          <Icon src='https://prizz.jp/assets/img/twitter_icon.svg' />
          <Image src={content.image_url} />
        </Frame>
      </Link>
    )
  }
}

const Frame = styled.div`
  display: block;
  position: relative;
  width: 90vw;
  margin: 15px auto 60px auto;
  ${media.greaterThan('large')`
    width: 40%;
    margin: 10px auto 30px auto;
  `}
  height: auto;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 6px rgba(0,0,0,0.1);
  }
`
const Image = styled.img`
  width: 100%;
`
const Icon = styled.img`
  display: block;
  position: absolute;
  width: 15vw;
  ${media.greaterThan('large')`
    width: 17%;
  `}
  top: 38%;
  left: 3%;
  animation: swing 2s ease infinite;
  @keyframes swing {
    80% {
      transform: rotate(0deg)
    }
    90% {
      transform: rotate(10deg)
    }
    100% {
      transform: rotate(0deg)
    }
  }
`

export default LayoutLargeCard
