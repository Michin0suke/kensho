import React, { useEffect } from 'react'
import styled from 'styled-components'
import resolveEndpoint from '#/tools/resolveEndpoint'

interface Props {
  isLoggedIn: boolean
  user: UserInfo
  setTwitterLoggedIn: (user: UserInfo) => null
}

interface UserInfo {
  'profile_image_url_https': string
  'name': string
}

const TwitterLogin = ({ isLoggedIn, user, setTwitterLoggedIn }: Props) => {
  useEffect(() => {
    if (!isLoggedIn) {
      fetch(resolveEndpoint('https://api.prizz.jp/login/twitter/is_logged_in'), { credentials: 'include' })
        .then(res => res.json())
        .then(json => {
          if (json['is_logged_in']) {
            setTwitterLoggedIn(json.user)
          }
        })
    }
  }, [])
  const onClick = () => {
    location.href = resolveEndpoint('https://api.prizz.jp/login/twitter')
  }
  console.log(isLoggedIn)
  if (isLoggedIn) {
    return (
      <UserIcon src={user['profile_image_url_https']}/>
    )
  } else {
    return (
      <LoginButton onClick={() => onClick()}>
        Twitterにログイン
      </LoginButton>
    )
  }
}

const UserStatus = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 100px;
  z-index: 500;
`
const UserIcon = styled.img`
  position: fixed;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  z-index: 500;
`

const LoginButton = styled.button`
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
