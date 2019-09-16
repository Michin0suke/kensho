import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { setHomeLayout } from '#/module/home'
import { setCategoryList } from '#/module/categoryList'
import { showId } from '#/module/id'
import Home from '#/components/Home/Home'

const controller = new AbortController()

const mapStateToProps = ({ categoryList, home, id }: State) => ({
  id,
  contents: home.contents,
  layout: home.layout,
  categoryList
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showId: (id: number) => {
    dispatch(push(`/id/${id}`))
    fetch(`https://api.prizz.jp/search/${id}`, { signal: controller.signal })
      .then(responce => responce.json())
      .then(json => {
        const content = JSON.parse(JSON.stringify(json))
        dispatch(showId(id, content))
      })
      .catch(ex => console.log('parsing failed :: showId in connectHomeLayout.ts', ex))
  },

  fetchHomeLayout: () => fetch(process.env.NODE_ENV === 'development' ? 'https://prizz.jp/homeLayoutDev.json' : 'https://prizz.jp/homeLayout.json')
    .then(responce => responce.json())
    .then(json => {
      let layouts = JSON.parse(JSON.stringify(json))
      dispatch(setHomeLayout(layouts))
    })
    .catch(ex => console.log('parsing failed', ex)),

  fetchCategoryList: () => fetch('https://prizz.jp/assets/layout/categoryList.json')
    .then(responce => responce.json())
    .then(json => {
      const categoryList = JSON.parse(JSON.stringify(json))
      dispatch(setCategoryList(categoryList))
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)



import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Id from '#/components/Id/connectId'
import HomeLayout from '#/components/Layout/Layout'

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

const name = (
  <g>
    <path d="M2.94,0C5,0,6,.89,6,2.46S4.91,5,2.85,5H1V8.84H0V0ZM1,4.16H2.81c1.45,0,2.11-.62,2.11-1.69S4.32.84,2.88.84H1Z"/>
    <path d="M10,3.53c-.76,0-1.5.59-1.89,1.8V8.84h-1V2.71H8V4.27c.45-1.18,1.18-1.69,2-1.69Z"/>
    <path d="M12.58,1.54h-1.2V.35h1.2Zm-.11,7.3h-1V2.71h1Z"/>
    <path d="M18.47,3.35,15.14,8.12h3.41v.72h-4.5V8.19l3.31-4.75H14.24V2.71h4.23Z"/>
    <path d="M23.93,3.35,20.6,8.12H24v.72h-4.5V8.19l3.31-4.75H19.7V2.71h4.23Z"/>
  </g>
)

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
      <Name xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.01 8.84">{name}</Name>
      {renderContents}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
`
const Name = styled.svg`
  position: fixed;
  height: 25px;
  top: 12px;
  left: 60px;
  z-index: 500;
  fill: #333;
`

export default Home
