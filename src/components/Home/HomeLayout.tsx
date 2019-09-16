import React, { useEffect } from 'react'
import CategoryList from '#/components/Layout/CategoryList'
import TopCarousel from '#/components/Layout/TopCarousel'
import TotalNumber from '#/components/Layout/TotalNumber'
import TopImage from '#/components/Layout/TopImage'
import HorizontalScroll from '#/components/Layout/HorizontalScroll'
import LargeCard from '#/components/Layout/LargeCard'
import QuadCards from '#/components/Layout/QuadCards'
import ThreeCards from '#/components/Layout/ThreeCards'
import CinraHeader from '#/components/Layout/CinraHeader'

interface Props {
  contents: { [key: number]: HomeContents }
  categoryList: CategoryList
  layout: HomeLayout
  showId: (id: number) => void
  setHomeContents: (layout: HomeContents) => null
  setHomeTopCarouselIndex: (nextIndex: number, contentNo: number) => null
  addHomeTopCarouselIndex: (contentsLength: number, contentNo: number) => null
}

const HomeLayout = ({ contents, categoryList, showId, setHomeContents, setHomeTopCarouselIndex, addHomeTopCarouselIndex, layout }: Props) => {
  useEffect(() => {
    if (!(layout.no in contents)) setHomeContents(layout)
  }, [])

  const content = contents[layout.no]
  if (content !== undefined) {
    switch (content.renderType) {
      case 'cinraHeader':
        return <CinraHeader />
      case 'topCarousel':
        return <TopCarousel content={content as LayoutTopCarousel} setTopCarouselIndex={setHomeTopCarouselIndex} addTopCarouselIndex={addHomeTopCarouselIndex} showId={showId}/>
      case 'totalNumber':
        return <TotalNumber content={content as TotalNumber}/>
      case 'categoryList':
        return <CategoryList content={content as LayoutCategoryList} categoryList={categoryList} isTwitter={false}/>
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
