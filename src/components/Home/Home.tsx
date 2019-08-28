import React, { useEffect } from 'react'
import styled from 'styled-components'
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
      {renderContents}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #eee;
`

export default Home
