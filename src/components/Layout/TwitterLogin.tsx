import React from 'react'
import styled from 'styled-components'

const TwitterLogin = () => {
  const onClick = () => {
    location.href = 'https://api.prizz.jp/contents' + location.search
    // location.href = 'https://google.com'
  }
  return (
    <Button onClick={() => onClick()}>Twitterにログイン</Button>
  )
}

const Button = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 150px;
  z-index: 500;
  background-color: #388DC7;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 3px;
`

export default TwitterLogin
