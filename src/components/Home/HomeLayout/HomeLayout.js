import React from 'react'
import HorizontalScroll from './HorizontalScroll'
import LargeCard from './LargeCard'
import QuadCards from './QuadCards'

const HomeLayout = props => {
  switch (props.items.contentType) {
    case 'horizontalScroll':
      return <HorizontalScroll heading={props.items.heading} contents={props.items.contents} />
    case 'largeCard':
      return <LargeCard heading={props.items.heading} imageURL={props.items.imageURL} />
    case 'quadCards':
      return <QuadCards heading={props.items.heading} contents={props.items.contents} />
    default:
      return <dev></dev>
  }
}

export default HomeLayout
