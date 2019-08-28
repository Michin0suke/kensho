import React, { useEffect } from 'react'
import CategoryList from '#/components/Layout/CategoryList'
import TopImage from '#/components/Layout/TopImage'
import HorizontalScroll from '#/components/Layout/HorizontalScroll'
import LargeCard from '#/components/Layout/LargeCard'
import QuadCards from '#/components/Layout/QuadCards'
import ThreeCards from '#/components/Layout/ThreeCards'

interface Props {
  contents: { [key: number]: HomeContents }
  categoryList: CategoryList
  layout: HomeLayout
  showId: (id: number) => void
  setHomeContents: (layout: HomeContents) => null
}

const HomeLayout = ({ contents, categoryList, showId, setHomeContents, layout }: Props) => {
  useEffect(() => {
    if (!(layout.no in contents)) setHomeContents(layout)
  }, [])

  const content = contents[layout.no]
  if (content !== undefined) {
    switch (content.renderType) {
      case 'categoryList':
        return <CategoryList content={content as LayoutCategoryList} categoryList={categoryList}/>
      case 'topImage':
        return <TopImage content={content as LayoutTopImage}/>
      case 'horizontalScroll':
        return <HorizontalScroll content={content as LayoutHorizontalScroll} showId={showId}/>
      case 'largeCard':
        return <LargeCard content={content as LayoutLargeCard}/>
      case 'quadCards':
        return <QuadCards content={content as LayoutQuadCards} showId={showId}/>
      case 'threeCards':
        return <ThreeCards content={content as LayoutThreeCards} showId={showId}/>
      default:
        return <div>unknown renderType :{content.renderType}</div>
    }
  }
  return <div></div>
}

export default HomeLayout
