import React, { useEffect } from 'react'
import styled from 'styled-components'
import media from '#/tools/mediaQuery'

// 100:64

interface Props {
  content: LayoutTopCarousel,
  setTopCarouselIndex: (nextIndex: number, no: number) => null,
  addTopCarouselIndex: (contentsLength: number, no: number) => null,
  showId: (id: number) => void
}

const TopCarousel = ({
  content,
  setTopCarouselIndex,
  addTopCarouselIndex,
  showId
}: Props) => {
  let autoSlide: number
  const slides = content.contents.slides
  const { no } = content
  const { showedIndex } = content.contents
  const showedSlide = slides[showedIndex]
  const showedImage = showedSlide['image_url']
  const showedHeading = showedSlide['heading']
  const showedId = showedSlide['show_id']

  // const featureBorder = (
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.01 8.84">
  //     <path d="M2.94,0C5,0,6,.89,6,2.46S4.91,5,2.85,5H1V8.84H0V0ZM1,4.16H2.81c1.45,0,2.11-.62,2.11-1.69S4.32.84,2.88.84H1Z"/>
  //     <path d="M10,3.53c-.76,0-1.5.59-1.89,1.8V8.84h-1V2.71H8V4.27c.45-1.18,1.18-1.69,2-1.69Z"/>
  //     <path d="M12.58,1.54h-1.2V.35h1.2Zm-.11,7.3h-1V2.71h1Z"/>
  //     <path d="M18.47,3.35,15.14,8.12h3.41v.72h-4.5V8.19l3.31-4.75H14.24V2.71h4.23Z"/>
  //     <path d="M23.93,3.35,20.6,8.12H24v.72h-4.5V8.19l3.31-4.75H19.7V2.71h4.23Z"/>
  //   </svg>
  // )

  useEffect(() => {
    autoSlide = setInterval(() => {
      addTopCarouselIndex(slides.length, no)

      // TODO: TopCarouselの画像の事前読み込み
      // slides.forEach((elem, i: number) => {
      //   const slideImages = new Image()
      //   slideImages.src = elem['image_url']
      // })
    }, 4500)
  }, [])

  useEffect(() => () => {
    clearInterval(autoSlide)
  }, [])

  const buttons = []

  for (let i = 0; i < slides.length; i++) {
    buttons.push(<Button
      key={i}
      onClick={() => setTopCarouselIndex(i, no)}
      style={{
        backgroundColor: i === showedIndex ? '#333' : '#FFF',
        boxShadow: '0 2px 0 -1px #333 inset'
      }}
    />)
  }
  if (showedHeading === '') return (<Frame/>)

  return (
    <Frame>
      <BackTile/>
      <div onClick={showedId ? () => showId(showedId) : () => null}>
        <ImageFrame>
          <Image src={showedImage} alt={showedHeading} />
        </ImageFrame>
        <Heading>
          <Feature>FEATURE</Feature>
          <HeadingContents>{showedHeading}</HeadingContents>
          <VisitedIcon href={`/id/${showedId}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 552.43 552.43">
              <polygon points="236.51 348.75 139.75 243.25 97.05 295.34 244.29 442.58 479.72 198.06 441.75 160.09 236.51 348.75" style={{ fill: '#fff' }}/>
            </svg>
          </VisitedIcon>
        </Heading>
      </div>
      <ButtonBox>{buttons}</ButtonBox>
    </Frame>
  )
}

const Frame = styled.div`
  position: relative;
  width: 100%;
  height: 80vw;
  margin: 0;
  background-color: #f5f7f8;
  overflow: hidden;
  ${media.greaterThan('large')`
    height: 45vw;
    max-height: 92vh;
    width: 100%;
  `}
  animation: appear 1s ease both;
  @keyframes appear {
    from {
      transform: translateY(-100vh)
    }
    to {
      transform: translateY(0px)
    }
  }
`
const BackTile = styled.div`
  /* background-image: url("https://prizz.jp/assets/img/marble-sp.png"); */
  /* background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 93%;
  z-index: 10;
  margin: 0;
  padding: 0;
  ${media.greaterThan('large')`
    top: -15%;
    right: -10%;
    bottom: auto;
    left: auto;
  `} */
  /* position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 130%;
  z-index: 10;
  margin: 0;
  padding: 0; */
  ${media.greaterThan('large')`
    top: -60%;
    right: -120%;
    bottom: auto;
    left: auto;
    background-color: #F8C862;
    border-radius: 35% 35% 35% 35% / 35% 35% 35% 35%;
  `}
`
const ImageFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 80%;
  width: 100%;
  z-index: 20;
  ${media.greaterThan('large')`
    position: absolute;
    height: 40vw;
    width: 60vw;
    top: auto;
    right: auto;
    bottom: 6%;
    left: 7%;
    overflow-x: hidden;
  `}
`
const Image = styled.img`
  height: 100%;
  width: auto;
`
const Heading = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 12vw;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: inline-block;
  width: 82%;
  max-width: 450px;
  padding: 12px 16px;
  color: #333;
  border-top: 2px solid #000;
  background: #fff;
  box-shadow: 0 0 6px rgba(0,0,0,.2);
  z-index: 30;
  ${media.greaterThan('large')`
    height: auto;
    width: 25vw;
    top: 10vw;
    right: 5vw;
    bottom: auto;
    left: auto;
    border-top: 4px solid #000;
    padding: 24px 30px;
    margin: 0;
  `}
`
const Feature = styled.h1`
  display: none;
  ${media.greaterThan('large')`
    display: inline;
    font-size: 17px;
    font-weight: 1;
    margin: 0;
 `}
  /* &::before {
    z-index: 50;
    width: 100%; */
    /* background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.01 8.84"><title>アセット 1</title><g id="レイヤー_2" data-name="レイヤー 2"><g id="レイヤー_1-2" data-name="レイヤー 1"><path d="M2.94,0C5,0,6,.89,6,2.46S4.91,5,2.85,5H1V8.84H0V0ZM1,4.16H2.81c1.45,0,2.11-.62,2.11-1.69S4.32.84,2.88.84H1Z" style="fill:#231815"/><path d="M10,3.53c-.76,0-1.5.59-1.89,1.8V8.84h-1V2.71H8V4.27c.45-1.18,1.18-1.69,2-1.69Z" style="fill:#231815"/><path d="M12.58,1.54h-1.2V.35h1.2Zm-.11,7.3h-1V2.71h1Z" style="fill:#231815"/><path d="M18.47,3.35,15.14,8.12h3.41v.72h-4.5V8.19l3.31-4.75H14.24V2.71h4.23Z" style="fill:#231815"/><path d="M23.93,3.35,20.6,8.12H24v.72h-4.5V8.19l3.31-4.75H19.7V2.71h4.23Z" style="fill:#231815"/></g></g></svg>'); */
    /* background-image: url('https://prizz.jp/assets/img/featureBorder.svg');
    background-size: auto 8px;
    background-repeat: repeat;
    content: '';
  } */
`
const HeadingContents = styled.p`
  font-size: 16px;
  line-height: 1.25;
  margin: 0;

  ${media.greaterThan('large')`
    font-size: 25px;
    line-height: 1.85;
    margin-top: 8px;
  `}
`

const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  right: 0;
  bottom: 6vw;
  left: 0;
  margin: 0 auto;
  width: 35vw;
  ${media.greaterThan('large')`
    top: auto;
    right: 10vw;
    bottom: 6vw;
    left: auto;
    width: 13vw;
  `}
`
const Button = styled.div`
  width: 10px;
  height: 10px;
  margin: 10px;
  border-radius: 50%;
  z-index: 20;
`
const VisitedIcon = styled.a`
  position: absolute;
  width: 20px;
  top: 3px;
  right: 3px;
  border-radius: 50%;
  background-color: white;
  pointer-events: none;
  z-index: 30;
  &:visited {
    background-color: #E70D6E;
  }
`
export default TopCarousel
