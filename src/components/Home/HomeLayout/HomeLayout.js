import React from 'react'
import CategoryList from './CategoryList'
import TopImage from './TopImage'
import HorizontalScroll from './HorizontalScroll'
import LargeCard from './LargeCard'
import QuadCards from './QuadCards'

const HomeLayout = props => {
  switch (props.layout.renderType) {
    case 'categoryList':
      return <CategoryList layout={props.layout} categoryList={props.categoryList}/>
    case 'topImage':
      return <TopImage layout={props.layout} content={props.content}/>
    case 'horizontalScroll':
      return <HorizontalScroll layout={props.layout} content={props.content} onClick={props.onClick}/>
    case 'largeCard':
      return <LargeCard content={props.content}/>
    case 'quadCards':
      return <QuadCards layout={props.layout} content={props.content} onClick={props.onClick}/>
    default:
      return <div>unknown renderType</div>
  }
}

export default HomeLayout
