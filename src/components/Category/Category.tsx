import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
// import media from '#/tools/mediaQuery'
import CategoryContent from '#/components/Category/CategoryContent'
import Id from '#/components/Id/connectId'
import Goback from '#/components/styled/icon_goback'
import Header from '#/components/styled/Header'

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
    const text = document.createTextNode('document.querySelector(".infinite-scroll-component ").removeAttribute("style")')
    script.appendChild(text)
    if (scriptTag) {
      scriptTag.after(script)
    }
  }, [])

  const header = categoryList ? categoryList[category] : ''
  const data = contents[category] || []
  const id = isShow ? <Id key={-1} content={data[selectedId]} /> : <div></div>
  const categoryLength = contents[category] ? contents[category].length : 0

  // <Header>{`${header} (${data.length})`}</Header>

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
      <Header>{header}</Header>
      <Link to='/'><Goback/></Link>
      <Margin />
      {data.length === 0 ? <p style={{ margin: '10px' }}>カテゴリ [ {header} ] には現在懸賞が登録されていません。</p> : ''}
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
  /* background-color: #eee; */
`
const Margin = styled.div`
  width: 100%;
  height: 20px;
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
