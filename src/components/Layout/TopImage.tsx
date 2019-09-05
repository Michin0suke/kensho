import React from 'react'
import styled from 'styled-components'
import media from '#/tools/mediaQuery'

const prizzSvg =
  <g id="prizz" data-name="prizz">
    <path d="M61.08,11.34a3.55,3.55,0,1,1,7.1,0,3.55,3.55,0,1,1-7.1,0Z"/>
    <path d="M54.81,26.37l2.64-4.8a17.21,17.21,0,0,0-3.82-.44c-9.61,0-17.41,3.75-17.41,23.46V62.2H41.4V44.59c0-16,5.47-18.28,12.23-18.28A11.51,11.51,0,0,1,54.81,26.37Z"/>
    <path d="M21.58,0H0V62.2H5.8v-29H21.58A16.61,16.61,0,1,0,21.58,0Zm-.32,27.38-15.46,0V5.8H21.26a10.79,10.79,0,0,1,0,21.58Z"/>
    <path d="M112.73,57.28H91.84L110,25.91h0l2.76-4.78H74.56l-2.75,4.76v0H92.6L84.86,39.32l-13,22.6v.13H110ZM80,57.27l18.1-31.36h6.3L86.32,57.27Z"/>
    <rect x="61.96" y="21.13" width="5.33" height="41.07"/>
  </g>

const LayoutTopImage = ({ content }: {content: LayoutTopImage}) => {
  return (
    <Frame>
      <Background />
      <PrizzLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.73 62.2">{prizzSvg}</PrizzLogo>
      <Image style={{ backgroundImage: `url(${content.image_url})` }}/>
      <Heading>{content.heading}</Heading>
      <TopLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.73 62.2">{prizzSvg}</TopLogo>
    </Frame>
  )
}

const Frame = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vw / 1.8);
  ${media.greaterThan('large')`
    height: 100vh;
  `}
  margin: 0;
  margin-bottom: 30px;
  padding: 0;
  box-sizing: border-box;
`
const Image = styled.div`
  width: 100%;
  height: 100%;
  background: no-repeat;
  background-position: center center;
  background-size: cover;
`
const Heading = styled.h1`
  font-size: 5vw;
  margin-bottom: 10px;
  ${media.greaterThan('large')`
    font-size: 3vw;
    margin-bottom: 20px;
  `}
  position: absolute;
  color: white;
  text-align: center;
  width: 100%;
  bottom: 0;
`
const PrizzLogo = styled.svg`
  position: absolute;
  width: 25%;
  top: 35%;
  left: 38%;
  fill: #eeccbb;
  z-index: -10;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #33333a;
  z-index: -20;
`
const TopLogo = styled.svg`
  position: absolute;
  fill: white;
  top: 4%;
  left: 3%;
  width: 10%;
  ${media.greaterThan('large')`
    width: 5%;
  `}
`

export default LayoutTopImage
