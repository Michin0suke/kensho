import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import media from '#/tools/mediaQuery'
import resolveEndpoint from '#/tools/resolveEndpoint'
import parseTwitterAction, { actionToJapaneseLong, TwitterURL } from '#/tools/parseTwitterAction'
import { setNextTimeClickable } from '#/module/id'
import dateCal from '#/tools/dateCal'

interface Props {
  hideId: () => null
  setLimit: (limit: Date) => null
  setCountdown: (limit: Date) => null
  goCategory: (url: string) => null,
  setNextTimeClickable: (nextTime: Date) => null,
  nextTimeClickable: Date,
  selectedId: number,
  isShow: boolean,
  content: IdContent,
  categoryList: {[key: string]: string},
  limit: string,
  countdown: string
  isTwitterLogin: boolean
}

interface TwitterActions {
  isDone: boolean,
  isFetching: boolean,
  title: string,
}

const Id = (props: Props) => {
  // const [twitterActions, setTwitterActions] = useState([])

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

  function fetchTwitterActions () {
    const alertList: string[] = []
    if (new Date() < props.nextTimeClickable) {
      alert('❌ワンクリックで応募機能は3分に一度しか使えません！\n少し待ってからご利用ください🙇‍')
      return
    }
    if (props.content['twitter_way'] && window.confirm('・' + props.content['twitter_way'].map((x: string) => actionToJapaneseLong(x)).join('\n・') + '\nを実行してよろしいですか？')) {
      const length = props.content['twitter_way'].length
      props.content['twitter_way'].forEach((way: string) => {
        const { url, japanese, param }: TwitterURL = parseTwitterAction(way)
        fetch(resolveEndpoint(url), param)
          .then(res => res.json())
          .then(json => {
            if (json.status === 'success') {
              alertList.push(`🙆${japanese}しました！`)
            } else if (json.error && json.error === 'You have already done any actions to this Tweet') {
              alertList.push(`😳すでに${japanese}しています！`)
            } else {
              alertList.push(`❌${japanese}できませんでした！\nリプライはまだ実装してません！\n${json.error}`)
            }
            if (length === alertList.length) {
              alert(alertList.join('\n'))
            }
          })
          .then(() => props.setNextTimeClickable(dateCal.minutes(new Date(), 3)))
          .catch(e => console.log(e))
      })
    }
  }

  // const twitterActions: any[] = []
  // if (props.content.is_oneclick === true && props.content.twitter_way) {
  //   props.content['twitter_way'].map((action: string, i: number) => {
  //     twitterActions.push(
  //       <TwitterActionButton onClick={() => fetchTwitterActions(parseTwitterAction(action))} key={i}>
  //         {actionToJapanese(action)}
  //       </TwitterActionButton>
  //     )
  //   })
  // }

  return (
    <Wrapper>
      <Helmet
        title={`Prizz 懸賞まとめ | ${props.content.name}`}
        meta={[
          { name: 'twitter:card', content: 'summary' },
          { property: 'og:image', content: props.content.image_url },
          { property: 'og:title', content: props.content.name },
          { property: 'og:description', content: `当選人数：${props.content.winner} 締め切り：${props.limit} 企画：${props.content.provider} 応募方法：${props.content.way}` },
          { property: 'og:url', content: `https://prizz.jp/id/${props.selectedId}` }
        ]}
      />
      <Background onClick={() => props.hideId()}/>
      <ContentBox>
        <ClossIcon onClick={() => props.hideId()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.57 25.57"><circle cx="12.79" cy="12.79" r="12.79" style={{ fill: '#b2b2b2' }}/><line x1="7" y1="7" x2="18.57" y2="18.57" style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '2px' }}/><line x1="7" y1="18.57" x2="18.57" y2="7" style={{ fill: 'none', stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '2px' }}/></ClossIcon>
        <Image src={props.content.image_url} alt={props.content.name} style={{ backgroundImage: 'url(https://prizz.jp/assets/img/defaultImg.svg)' }}/>
        <Name>{props.content.name}</Name>
        <Winner>当選人数: {props.content.winner}人</Winner>
        <Way>応募方法: {props.content.way}</Way>
        <Time>
          <Limit>締め切り: {props.limit}</Limit><CountDown>{props.countdown}</CountDown>
        </Time>
        <Provider>企画: {props.content.provider}</Provider>
        <Category>カテゴリ: {categories}</Category>
        {props.content.is_oneclick
          ? <TwitterActionButton onClick={() => {
            if (props.isTwitterLogin) {
              fetchTwitterActions()
            } else {
              alert('ワンクリックで応募はツイッターでログインしないと利用できません！')
            }
          }} >
            ワンクリックで応募！
          </TwitterActionButton> : ''
        }
        <Button>応募ページへ！<ExLink href={props.content.link} target='_brank' /></Button>
      </ContentBox>
    </Wrapper>
  )
}

export default Id

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 1000;
  
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
const ClossIcon = styled.svg`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
`
const ContentBox = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 85%;
  ${media.greaterThan('large')`
    width: 50%;
  `}
  height: auto;
  max-height: 82%;
  border-radius: 10px;
  margin: 0 auto;
  padding: 16px;
  background-color: white;
  z-index: 110;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`
const Image = styled.img`
  width: auto;
  height: 30vw;
  ${media.greaterThan('large')`
    width: auto;
    height: 16vw;
  `}
  display: block;
  margin: 0 auto;
  /* border: solid 2px whitesmoke; */
  border-radius: 10px;
  color: rgba(0,0,0,0);
  background-size: contain;
  background-repeat: no-repeat;
`
const Name = styled.h1`
  font-size: 20px;
`
const Winner = styled.p`
  font-size: 14px;
`
const Way = styled.p`
  font-size: 14px;
`
const Time = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Limit = styled.p`
  font-size: 14px;
  margin: 0;
`
const CountDown = styled.p`
  font-size: 14px;
  margin: 0;
`
const Provider = styled.p`
  font-size: 14px;
`
const Category = styled.div`
  font-size: 14px;
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
const TwitterActionButton = styled.div`
  display: table;
  text-align: center;
  font-weight: bold;
  padding: 14px 30px;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  border-radius: 3px;
  margin: 10px auto 0;
  text-decoration: none;
  border-radius: 10px;
`
const Button = styled.div`
  position: relative;
  width: 50%;
  height: 40px;
  margin: 0 auto;
  margin-top: 10px;
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
