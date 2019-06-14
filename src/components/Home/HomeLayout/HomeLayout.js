import React from 'react'
import HorizontalScroll from './HorizontalScroll'
import styled from 'styled-components'

const HomeLayout = props => {
  if (props.items.contentType === 'horizontalScroll') {
    return <HorizontalScroll contents={props.items.contents} />
  }
  return <div></div>
}

const Name = styled.p`
  font-size: 30px;
  color: dimgray;
`

export default HomeLayout
