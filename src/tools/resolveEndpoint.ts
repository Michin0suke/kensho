const resolveEndpoint = (e: string, testNodeEnv?: string): string => {
  // テスト用
  let env = ''
  if (process.env.NODE_ENV) env = process.env.NODE_ENV
  else if (testNodeEnv) env = testNodeEnv
  else {
    console.log('error: env is not valid (in resolveEndpoint.ts)')
    return e
  }

  let ip = ''
  if (process.env.IP_ADDRESS) ip = process.env.IP_ADDRESS
  else {
    ip = 'http://localhost:9000'
  }

  switch (env) {
    case 'development':
      if (e.match(/api\.prizz\.jp/)) return e.replace('api', 'devapi')
      break
    case 'none':
      if (e.match(/https:\/\/api\.prizz\.jp/)) return e.replace('https://api.prizz.jp', ip)
      break
  }
  return e
}

export default resolveEndpoint
