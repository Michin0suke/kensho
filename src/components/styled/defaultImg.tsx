import React from 'react'

const defaultImg = (color: string, backgroundColor: string) => (
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.56 34.56">
    <rect width="34.56" height="34.56" style="fill:${backgroundColor}"/>
    <path d="M26.37,18.44h0L20,22.17l0-12.87h0v-2L8.18,14.16v1.95h0l6.39-3.71,0,5.5,0,9.27,0,0L26.38,20.4Zm-10,5.85,0-12.87,1.93-1.13.05,12.87Z" style="fill:${color}"/>
  </svg>`
)

export default defaultImg
