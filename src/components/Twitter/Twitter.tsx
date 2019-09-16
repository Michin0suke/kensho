import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Id from '#/components/Id/connectId'
import Layout from '#/components/Twitter/connectTwitterLayout'
import Goback from '#/components/styled/icon_goback'
import Header from '#/components/styled/Header'

interface Props {
  // from Redux
  id: Id,
  contents: TwitterContents[],
  layout: TwitterLayout[],
  categoryList: CategoryList,
  showId: (id: number) => null,
  fetchTwitterLayout: () => null,
  fetchCategoryList: () => null
  // from Router
  routerId: number
}

const Twitter = ({
  id,
  contents,
  layout,
  categoryList,
  showId,
  fetchTwitterLayout,
  fetchCategoryList,
  routerId
}: Props) => {
  useEffect(() => {
    if (routerId) showId(routerId)
  }, [])

  if (JSON.stringify(categoryList) === '{}') fetchCategoryList()
  if (layout.length === 0) fetchTwitterLayout()

  let renderContents: JSX.Element[] = []

  if (id.isShow) {
    renderContents.push(<Id key={-1} content={contents[id.selectedId]} />)
  }

  layout.forEach((layout: TwitterLayout, index: number) => {
    renderContents.push(
      <Layout
        key={index}
        layout={layout}
      />
    )
  })

  return (
    <Wrapper>
      <Helmet
        title={'Prizz | 日本で一番使って楽しい懸賞まとめサイト'}
        meta={[
          { name: 'twitter:card', content: 'summary' },
          { property: 'og:image', content: 'https://prizz.jp/assets/img/tag/twitter-card.png' },
          { property: 'og:title', content: 'Prizz | 日本で一番使って楽しい懸賞まとめサイト' },
          { property: 'og:description', content: '懸賞を、もっと楽しく！日本で一番使って楽しい懸賞まとめサイト' },
          { property: 'og:url', content: 'https://prizz.jp/' }
        ]}
      />
      <Link to='/'><Goback/></Link>
      <Header>Twitter 懸賞</Header>
      <AddToPrizz>誰でも簡単！Prizzに懸賞を追加してみよう！<Link to='/contents/add_to_prizz' style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}/></AddToPrizz>
      {renderContents}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
`
const AddToPrizz = styled.div`
  padding: 5px 20px;
  margin: 15px auto 10px;
  background-color: pink;
  color: white;
  text-align: center;
  text-decoration: none;
  display: table;
`

export default Twitter
