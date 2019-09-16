import styled from 'styled-components'
import media from '#/tools/mediaQuery'

const Header = styled.h1`
  position: fixed;
  font-size: 20px;
  color: #333;
  margin: 0;
  top: 10px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 500;
  pointer-events: none;
  
  ${media.greaterThan('large')`
  `}
`

export default Header
