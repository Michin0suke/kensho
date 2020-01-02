import React from 'react'
import styled from 'styled-components'
import Header from '#/components/styled/Header'
import { Link } from 'react-router-dom'
import Goback from '#/components/styled/icon_goback'

interface Props {
  match: {
    params: {
      contents: {
        contents: string
      }
    }
  }
}

const Contents = ({ match: { params: { contents } } }: Props) => (
  <div>
    <Header>contents</Header>
    <Link to='/'><Goback/></Link>
    <Body src={`/contents_dir/${contents}.html`}/>
  </div>
)

const Body = styled.iframe`
  width: 100vw;
  height: 100vh;
  border: none;
  animation: appear .5s .5s ease both;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export default Contents
