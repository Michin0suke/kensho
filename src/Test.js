import React from 'react'

const Test = () => {
  return fetch('/HomeLayoutList.json')
    .then(responce => {
      console.log('responce', responce.body)
      return responce.json()
    })
    .then(json => {
      console.log('paresed json', JSON.parse(JSON.stringify(json)))
      return <p>{ JSON.parse(JSON.stringify(json)) }</p>
    })
    .catch(ex => {
      console.log('parsing failed', ex)
    })
}

export default Test
