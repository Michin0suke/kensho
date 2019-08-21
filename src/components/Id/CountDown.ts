const dateCal = {
  year: (date: Date, num: number): Date => new Date(date.setFullYear(date.getFullYear() + num)),
  month: (date: Date, num: number): Date => new Date(date.setMonth(date.getMonth() + num)),
  date: (date: Date, num: number): Date => new Date(date.setDate(date.getDate() + num)),
  hours: (date: Date, num: number): Date => new Date(date.setHours(date.getHours() + num)),
  minutes: (date: Date, num: number): Date => new Date(date.setMinutes(date.getMinutes() + num)),
  seconds: (date: Date, num: number): Date => new Date(date.setSeconds(date.getSeconds() + num))
}

const dateToStr = (date: Date) => {
  let year = date.getFullYear().toString()
  let month = (date.getMonth() + 1).toString()
  let day = date.getDate().toString()
  let hours = date.getHours().toString()

  if (date.getHours() === 0) {
    hours = ''
  } else {
    hours += '時'
  }

  return `${year}年${month}月${day}日 ${hours} `
}

const CountDown = (utcLimit: Date) => {
  const now = Date.now()
  const limit = dateCal.hours(utcLimit, -9)
  const limitNum: number = limit.getTime()
  let diff: number = limitNum - now

  if (diff < 0) {
    return '終了しました。'
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  diff = diff % (1000 * 60 * 60 * 24)
  const hours = Math.floor(diff / (1000 * 60 * 60))
  diff = diff % (1000 * 60 * 60)
  const minutes = Math.floor(diff / (1000 * 60))
  diff = diff % (1000 * 60)
  const seconds = Math.floor(diff / (1000))

  let disp = ''

  if (days !== 0) {
    disp += `${days}日`
  }
  if (hours !== 0) {
    disp += `${hours}時間`
  }
  if (minutes !== 0) {
    disp += `${minutes}分`
  }
  disp += `${seconds}秒`

  return `締め切り: ${dateToStr(limit)}（あと ${disp}）`
}

// test
// const limit = new Date('2019-08-31T15:00:00Z')
// console.log(limit)
// console.log(CountDown(limit))

// setInterval(() => console.log(CountDown(limit)), 1000)

export default CountDown
