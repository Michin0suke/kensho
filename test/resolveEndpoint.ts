import resolveEndpoint from '../src/tools/resolveEndpoint'

const cases = ['https://api.prizz.jp/contents']

// const ipEnv = '192.168.0.1:8080'

cases.forEach(c => {
  console.log(`raw: ${c}
  development: ${resolveEndpoint(c, 'development')}
  production:  ${resolveEndpoint(c, 'production')}
  none:        ${resolveEndpoint(c, 'none')}
  `)
})
