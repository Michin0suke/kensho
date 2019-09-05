import { css } from 'styled-components'

/**
 * Default media breakpoints
 * @type {Object}
 */

interface Breakpoints {
  [key: string]: string
}

export const breakpoints: Breakpoints = {
  huge: '1280px',
  large: '960px',
  medium: '600px',
  small: '480px'
}

// huge: '1440px',
// large: '1170px',
// medium: '768px',
// small: '450px'

const getSizeFromBreakpoint = (breakpointValue: string) => {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue]
  }
}

export const generateMedia = () => {
  const lessThan = (breakpoint: string) => (args: TemplateStringsArray) => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint)}) {
      ${css(args)}
    }
  `

  const greaterThan = (breakpoint: string) => (args: TemplateStringsArray) => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint)}) {
      ${css(args)}
    }
  `

  return {
    lessThan,
    greaterThan
  }
}

export default generateMedia()
