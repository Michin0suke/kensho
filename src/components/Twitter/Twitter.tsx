import React, { useEffect } from 'react'
import styled from 'styled-components'

interface Props{
  contents: string
  setTwitterContents: () => void
}

const Twitter = ({ contents, setTwitterContents }: Props) => {
  useEffect(() => {
    setTwitterContents()
  }, [])

  return (
    <Contents>{contents}</Contents>
  )
}

const Contents = styled.pre`
  margin: 10px;
  font-size: 11px;
`

export default Twitter
