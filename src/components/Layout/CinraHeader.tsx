import React from 'react'
import styled from 'styled-components'

const Header = () => {

  return (
    <div>
      <Frame/>
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
const Padding = styled.div`
  width: 100%;
  height: 50px;
`
