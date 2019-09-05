import React from 'react'
import styled from 'styled-components'

const Header = () => {
  const icon = <path d="M40.92,36.15v0H20L38.14,4.78h0L40.9,0H2.74L0,4.75v0H20.79L13.05,18.19,0,40.79v.13H38.16Zm-32.71,0L26.31,4.78h6.3L14.51,36.13Z"/>
  const name = (
    <g>
      <path d="M2.94,0C5,0,6,.89,6,2.46S4.91,5,2.85,5H1V8.84H0V0ZM1,4.16H2.81c1.45,0,2.11-.62,2.11-1.69S4.32.84,2.88.84H1Z"/>
      <path d="M10,3.53c-.76,0-1.5.59-1.89,1.8V8.84h-1V2.71H8V4.27c.45-1.18,1.18-1.69,2-1.69Z"/>
      <path d="M12.58,1.54h-1.2V.35h1.2Zm-.11,7.3h-1V2.71h1Z"/>
      <path d="M18.47,3.35,15.14,8.12h3.41v.72h-4.5V8.19l3.31-4.75H14.24V2.71h4.23Z"/>
      <path d="M23.93,3.35,20.6,8.12H24v.72h-4.5V8.19l3.31-4.75H19.7V2.71h4.23Z"/>
    </g>
  )

  return (
    <div>
      <Frame>
        <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.92 40.92">{icon}</Logo>
        <Name xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.01 8.84">{name}</Name>
      </Frame>
      <Padding/>
    </div>
  )
}

export default Header

const Frame = styled.header`
  position: fixed;
  height: 50px;
  width: 100%;
  background-color: white;
  z-index: 100;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
`
const Logo = styled.svg`
  height: 100%;
  padding: 14px 20px;
  transform: rotate(-31deg);
  box-sizing: border-box;
  fill: #333;
`
const Name = styled.svg`
  height: 100%;
  padding: 13px;
  margin-left: -20px;
  box-sizing: border-box;
  fill: #333;
`
const Padding = styled.div`
  width: 100%;
  height: 50px;
`
