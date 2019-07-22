import { css } from 'styled-components'

/**
 * Default media breakpoints
 * @type {Object}
 */

interface Breakpoints {
  [key: string]: string
}

export const breakpoints: Breakpoints = {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px'
}

const getSizeFromBreakpoint = (breakpointValue: string) => {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue]
  }
}

/**
 * Media query generator
 * @param {Object} breakpoints - Map labels to breakpoint sizes
 * @return {Object} - Media generators for each breakpoint
 */
export const generateMedia = () => {
  const lessThan = (breakpoint: string) => (...args: string[]) => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint)}) {
      ${css(...args)}
    }
  `

  const greaterThan = (breakpoint) => (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
      ${css(...args)}
    }
  `

  const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(firstBreakpoint, breakpoints)}) and
      (max-width: ${getSizeFromBreakpoint(secondBreakpoint, breakpoints)}) {
      ${css(...args)}
    }
  `

  return {
    lessThan,
    greaterThan,
    between
  }
}

/**
 * Media object with default breakpoints
 * @return {object} - Media generators for each size
 */
export default generateMedia()

/**
 * Usage: styled.div` ${media.from.medium`background: #000;`} `;
 * With this code, background for small and medium sizes will be `default` and for more than medium, will be `#000`
 */
