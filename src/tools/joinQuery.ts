// const esc = encodeURIComponent

const joinQuery = (url: string, params: {[key: string]: string}): string => {
  return (
    url + '?' + Object.keys(params)
      .map((key: string) => key + '=' + params[key])
      .join('&')
  )
}

export default joinQuery
