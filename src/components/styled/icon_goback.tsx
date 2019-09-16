import React from 'react'
import styled from 'styled-components'

const goback = () => <Goback xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.04 51.08"><polyline points="25.54 3.5 3.5 25.54 25.54 47.58"/></Goback>

const Goback = styled.svg`
  position: fixed;
  top: 13px;
  left: 17px;
  height: 25px;
  z-index: 500;
  fill:#fff;
  stroke:#231815;
  stroke-linecap:round;
  stroke-linejoin:round;
  stroke-width:7px;
`

export default goback
