const dateCal = {
  year: (date: Date, num: number): Date => new Date(date.setFullYear(date.getFullYear() + num)),
  month: (date: Date, num: number): Date => new Date(date.setMonth(date.getMonth() + num)),
  date: (date: Date, num: number): Date => new Date(date.setDate(date.getDate() + num)),
  hours: (date: Date, num: number): Date => new Date(date.setHours(date.getHours() + num)),
  minutes: (date: Date, num: number): Date => new Date(date.setMinutes(date.getMinutes() + num)),
  seconds: (date: Date, num: number): Date => new Date(date.setSeconds(date.getSeconds() + num))
}

export const dateToStr = (date: Date) => {
  date = dateCal.hours(date, -9)
  let year: string
  let month: string
  let day: string
  let hours: string

  if (date.getHours() === 0) {
    hours = ''
    dateCal.date(date, -1)
  } else {
    hours = `${date.getHours().toString()}時`
  }

  year = date.getFullYear().toString()
  month = (date.getMonth() + 1).toString()
  day = date.getDate().toString()

  return `${year}年${month}月${day}日 ${hours} `
}

const countDown = (limit: Date) => {
  const now = dateCal.hours(new Date(), 9).getTime()
  const limitNum: number = limit.getTime()
  let diff: number = limitNum - now

  if (diff < 0) {
    return '< 終了しました >'
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

  return `（あと ${disp}）`
}

export default countDown
