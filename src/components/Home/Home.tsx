import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Id from '#/containers/connectId'
import HomeLayout from '#/containers/connectHomeLayout'

interface Props {
  // from Redux
  id: Id,
  contents: HomeContents[],
  layout: HomeLayout[],
  categoryList: CategoryList,
  showId: (id: number) => null,
  fetchHomeLayout: () => null,
  fetchCategoryList: () => null
  // from Router
  routerId: number
}

const Home = ({
  id,
  contents,
  layout,
  categoryList,
  showId,
  fetchHomeLayout,
  fetchCategoryList,
  routerId
}: Props) => {
  useEffect(() => {
    if (routerId) showId(routerId)
  }, [])

  if (JSON.stringify(categoryList) === '{}') fetchCategoryList()
  if (layout.length === 0) fetchHomeLayout()

  let renderContents: JSX.Element[] = []

  if (id.isShow) {
    renderContents.push(<Id key={-1} content={contents[id.selectedId]} />)
  }

  layout.forEach((layout: HomeLayout, index: number) => {
    renderContents.push(
      <HomeLayout
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
      {renderContents}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #eee;
`

export default Home
