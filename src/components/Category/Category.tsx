import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import media from '#/components/MediaQuery'
import CategoryContent from '#/components/Category/CategoryContent'
import Id from '#/containers/connectId'

interface Props {
  match: { params: { category: string }}
  categoryList: {[key: string]: string}
  contents: {[key: string]: []}
  selectedId: number
  isShow: boolean
  showId: (id: number) => null
  fetchCategoryContents: (category: string, offset?: number) => null
  fetchCategoryList: (categoryList: {}) => null
}

const Category = ({
  match: { params: { category } },
  categoryList,
  contents,
  selectedId,
  isShow,
  showId,
  fetchCategoryContents,
  fetchCategoryList
}: Props) => {
  useEffect(() => {
    fetchCategoryContents(category)
    fetchCategoryList(categoryList)

    // iOSのSafariでInfiniteScrollのバグを回避
    const scriptTag = document.querySelector('script')
    const script = document.createElement('script')
    const text = document.createTextNode(`console.log(document.querySelector('.infinite-scroll-component '))
    document.querySelector('.infinite-scroll-component ').removeAttribute('style')`)
    script.appendChild(text)
    if (scriptTag) {
      scriptTag.after(script)
    }
  }, [])

  const prizzSvg = (
    <g id="prizz" data-name="prizz">
      <path d="M61.08,11.34a3.55,3.55,0,1,1,7.1,0,3.55,3.55,0,1,1-7.1,0Z" />
      <path d="M54.81,26.37l2.64-4.8a17.21,17.21,0,0,0-3.82-.44c-9.61,0-17.41,3.75-17.41,23.46V62.2H41.4V44.59c0-16,5.47-18.28,12.23-18.28A11.51,11.51,0,0,1,54.81,26.37Z" />
      <path d="M21.58,0H0V62.2H5.8v-29H21.58A16.61,16.61,0,1,0,21.58,0Zm-.32,27.38-15.46,0V5.8H21.26a10.79,10.79,0,0,1,0,21.58Z" />
      <path d="M112.73,57.28H91.84L110,25.91h0l2.76-4.78H74.56l-2.75,4.76v0H92.6L84.86,39.32l-13,22.6v.13H110ZM80,57.27l18.1-31.36h6.3L86.32,57.27Z" />
      <rect x="61.96" y="21.13" width="5.33" height="41.07" />
    </g>
  )

  const header = categoryList ? categoryList[category] : ''
  const data = contents[category] || []
  const id = isShow ? <Id key={-1} content={data[selectedId]} /> : <div></div>
  const categoryLength = contents[category] ? contents[category].length : 0

  return (
    <Wrapper>
      <Helmet
        title={`Prizz 懸賞まとめ | ${header}`}
        meta={[
          { name: 'twitter:card', content: 'summary' },
          { property: 'og:image', content: `https://prizz.jp/assets/img/categoryList/${category}.jpg` },
          { property: 'og:title', content: `カテゴリ：${header}` },
          { property: 'og:description', content: `もうすぐ締め切りの${header}の懸賞を今すぐチェック！！` },
          { property: 'og:url', content: `https://prizz.jp/category/${category}` }
        ]}
      />
      {id}
      <Header>{`${header} (${data.length})`}</Header>
      <Link to="/">
        <PrizzLogo
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 112.73 62.2"
        >
          {prizzSvg}
        </PrizzLogo>
      </Link>
      <Margin />
      <InfiniteScroll
        dataLength={data.length}
        next={() => fetchCategoryContents(category, categoryLength)}
        hasMore={true}
        loader={''}
      >
        {data.map((elem, index) => (
          <CategoryContent
            key={index}
            content={elem}
            showId={showId}
          />
        ))}
      </InfiniteScroll>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #eee;
`
const Header = styled.h1`
  font-size: 6vw;
  height: 9vw;
  padding: 3vw 0 2vw;
  
  ${media.greaterThan('medium')`
    font-size: 3vw;
    height: 3vw;
    padding: 0.7vw 0 2vw;
  `}
 
  margin: 0;
  margin-bottom: 2vw;
  position: fixed;
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #333;
  border-bottom: solid 3px #333;
  background-color: #FFDD00;
  z-index: 10;
`
const PrizzLogo = styled.svg`
  width: 8vw;
  top: 5vw;
  left: 3vw;
  ${media.greaterThan('medium')`
    width: 4vw;
    top: 1.5vw;
    left: 1.5vw;
  `}
  position: fixed;
  fill: #333;
  z-index: 20;
`
const Margin = styled.div`
  width: 100%;
  height: 15vw;
  ${media.greaterThan('medium')`
    height: 5vw;
  `}
`
/*
const ContentsBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
  height: auto;
`
*/

export default Category
