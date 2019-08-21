import React, { useEffect } from 'react'
import CategoryList from './CategoryList'
import TopImage from './TopImage'
import HorizontalScroll from './HorizontalScroll'
import LargeCard from './LargeCard'
import QuadCards from './QuadCards'

interface Props {
  contents: any
  categoryList: {
    [key: string]: string
  }
  layout: any
  showId: (id: number) => void
  setHomeContents: (layout: any) => null
}

const HomeLayout = ({ contents, categoryList, showId, setHomeContents, layout }: Props) => {
  useEffect(() => {
    if (!(layout.no in contents)) setHomeContents(layout)
  }, [])

  const content = contents[layout.no]
  if (content !== undefined) {
    switch (content.renderType) {
      case 'categoryList':
        return <CategoryList content={content} categoryList={categoryList}/>
      case 'topImage':
        return <TopImage content={content}/>
      case 'horizontalScroll':
        return <HorizontalScroll content={content} showId={showId}/>
      case 'largeCard':
        return <LargeCard content={content}/>
      case 'quadCards':
        return <QuadCards content={content.contents} showId={showId}/>
      default:
        return <div>unknown renderType :{content.renderType}</div>
    }
  }
  return <div></div>
}

export default HomeLayout
