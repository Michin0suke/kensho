import React, { useEffect } from 'react'
import Id from '../../containers/connectId'
import HomeLayout from '../../containers/connectHomeLayout'
import styled from 'styled-components'

interface Layouts {
  'no': number,
  'renderType': string,
  'heading': string,
  'image_url': string,
  'endpoint': string,
  'ad_link'?: string,
  'ad_image'?: string,
  'ad_tracking'?: string,
  'ad_name'?: string,
  'ad_number'?: number
}

interface InContents {
  'id': number,
  'name': string,
  'winner': number,
  'image_url': string,
  'image_bin': string,
  'created_at': string,
  'updated_at': string,
  'limit_date': string,
  'link': string,
  'provider': string,
  'way': string,
  'category': string[]
}
interface Contents {
  'contents'?: InContents[],
  'no': number,
  'renderType': string,
  'heading'?: string,
  'image_url'?: string,
  'link'?: string
}
interface State {
  'layouts': Layouts[],
  'contents': Contents[],
  'categoryList': { [key: string]: string }
}

// Idのため
interface IdContents {
  'contents': InContents[],
  'no': number,
  'renderType': string,
  'heading'?: string,
}

interface Props {
  routerId?: number,
  showId: (id?: number) => null,
  fetchHomeLayout: () => null,
  fetchCategoryList: () => null,
  setHomeContents: (layout: any) => null,
  id: {
    isShow: boolean,
    showedId: number,
    content: {}
  },
  contents: [],
  layout: [],
  categoryList: {}
}

const Home = (props: Props) => {
  useEffect(() => {
    if (props.routerId) props.showId(props.routerId)
  }, [])

  if (JSON.stringify(props.categoryList) === '{}') props.fetchCategoryList()
  if (props.layout.length === 0) props.fetchHomeLayout()

  let renderContents: any[] = []

  if (props.id.isShow) {
    renderContents.push(<Id key={-1} content={props.contents[props.id.showedId]} />)
  }

  props.layout.forEach((layout: any, index: number) => {
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
