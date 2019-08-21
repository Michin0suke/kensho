import CountDown from '../src/components/Id/CountDown'

const limit = new Date('2019-08-31T15:00:00Z')
setInterval(() => console.log(CountDown(limit)), 1000)
