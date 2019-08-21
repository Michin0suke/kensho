import React, { useEffect } from 'react'
import styled from 'styled-components'
import media from '../MediaQuery'
import { Link } from 'react-router-dom'

interface Props {
  hideId: () => null
  /* showId: (id: number) => null */
  fetchCategoryList: () => null
  setCountdown: (countdown: Date) => null
  showId: number,
  isShow: boolean,
  content: any,
  categories: any,
  id: number,
  controller1: AbortController,
  controller2: AbortController,
  countdown: string
}

interface State {
  categoryList: {}
  countDown: string
}

const Id = (props: Props) => {
  let countdown: number

  useEffect((): any => {
    // タイムラグをなくすためにsetIntervalなしも必要
    props.setCountdown(new Date(props.content.limit_date))
    countdown = setInterval(() => props.setCountdown(new Date(props.content.limit_date)), 1000)
  }, [])

  useEffect(() => () => {
    clearInterval(countdown)
    props.controller1.abort()
    props.controller2.abort()
  }, [])

  // if (!props.isShow) {
  //   return <div></div>
  // }

  return (
    <Wrapper key={props.id} onClick={() => props.hideId()}>
      <ContentBox>
        <Image style={{ backgroundImage: `url(${props.content.image_url})` }} />
        <Name>{props.content.name}</Name>
        <Winner>当選人数: {props.content.winner}人</Winner>
        <Way>応募方法: {props.content.way}</Way>
        <Limit>{props.countdown}</Limit>
        <Provider>企画: {props.content.provider}</Provider>
        <Category>カテゴリ: {props.content.category.map((cg: string, i: number) =>
          <Link key={i} to={`/category/${cg}`}><CategoryButton>{cg}</CategoryButton></Link>
        )}</Category>
        <Button>応募する！<ExLink href={props.content.link} /></Button>
      </ContentBox>
    </Wrapper>
  )
}

export default Id

const Wrapper = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.4);
  /*
  animation: fade-in 0.3s ease forwards;
  &:active {
    animation: fade-out 0.3s ease forwards;
  }
  @keyframes fade-in {
    0%   { opacity: 0 }
    100% { opacity: 1 }
  }
  @keyframes fade-out {
    0%   { opacity: 1 }
    100% { opacity: 0 }
  }
  */
`
const ContentBox = styled.div`
  position: relative;
  width: 85%;
  ${media.greaterThan('medium')`
    width: 50%;
  `}
  height: auto;
  max-height: 80%;
  border-radius: 10px;
  margin: 30px auto;
  padding: 16px;
  background-color: white;
  z-index: 110;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`
const Image = styled.img`
  width: 35vw;
  height: 35vw;
  ${media.greaterThan('medium')`
    width: 20vw;
    height: 20vw;
  `}
  display: block;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border: solid 2px whitesmoke;
  border-radius: 10px;
`
const Name = styled.h1`
  font-size: 20px;
`
const Winner = styled.p`
  font-size: 16px;
`
const Way = styled.p`
  font-size: 16px;
`
const Limit = styled.p`
  font-size: 16px;
`
const Provider = styled.p`
  font-size: 16px;
`
const Category = styled.div`
  font-size: 16px;
`
const CategoryButton = styled.p`
  display: inline-block;
  padding: 4px 7px;
  background-color: #FF7EAA;
  color: white;
  border-radius: 3px;
  margin: 2px 0px 2px 7px;
`
const Button = styled.div`
  position: relative;
  width: 50%;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  padding-top: 10px;
  font-size: 20px;
  color: white;
  text-align: center;
  background-color: #29344B;
  border-radius: 10px;
`
const ExLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
