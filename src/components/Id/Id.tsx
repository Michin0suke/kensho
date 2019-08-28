import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import media from '#/components/MediaQuery'

interface Props {
  hideId: () => null
  setLimit: (limit: Date) => null
  setCountdown: (limit: Date) => null
  goCategory: (url: string) => null,
  showId: number,
  isShow: boolean,
  content: IdContent,
  categoryList: {[key: string]: string},
  limit: string,
  countdown: string
}

const Id = (props: Props) => {
  let countdown: number

  useEffect(() => {
    // タイムラグをなくすためにsetIntervalなしも必要
    props.setLimit(new Date(props.content.limit_date))
    props.setCountdown(new Date(props.content.limit_date))
    countdown = setInterval(() => props.setCountdown(new Date(props.content.limit_date)), 1000)
  }, [])

  useEffect(() => () => {
    clearInterval(countdown)
  }, [])

  const categories = props.content.category.map((cg: string, i: number) =>
    <Link key={i} to={`/category/${cg}`} onClick={() => props.goCategory(`/category/${cg}`)}>
      <CategoryButton>{props.categoryList[cg]}</CategoryButton>
    </Link>
  )

  return (
    <Wrapper onClick={() => props.hideId()}>
      <ContentBox>
        <Image style={{ backgroundImage: `url(${props.content.image_url})` }} />
        <Name>{props.content.name}</Name>
        <Winner>当選人数: {props.content.winner}人</Winner>
        <Way>応募方法: {props.content.way}</Way>
        <Time>
          <Limit>締め切り: {props.limit}</Limit><CountDown>{props.countdown}</CountDown>
        </Time>
        <Provider>企画: {props.content.provider}</Provider>
        <Category>カテゴリ: {categories}</Category>
        <Button>応募する！<ExLink href={props.content.link} target='_brank' /></Button>
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
const Time = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Limit = styled.p`
  font-size: 16px;
  margin: 0;
`
const CountDown = styled.p`
  font-size: 16px;
  margin: 0;
`
const Provider = styled.p`
  font-size: 16px;
`
const Category = styled.div`
  font-size: 16px;
`
const CategoryButton = styled.div`
  display: inline-block;
  padding: 5px 5px 4px;
  background-color: #FF7EAA;
  color: white;
  font-size: 13px;
  border-radius: 3px;
  margin: 2px 0px 2px 7px;
  text-decoration: none;
`
const Button = styled.div`
  position: relative;
  width: 50%;
  height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  background-color: #FFDD00;
  border-radius: 10px;
`
const ExLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
