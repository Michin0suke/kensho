const CountDown = (limit: Date) => {
  const now = new Date()
  const nowNum: number = now.setHours(now.getHours() + 9)

  const limitNum: number = limit.getTime()

  let diff: number = limitNum - nowNum

  if (diff < 0) {
    return '終了しました。'
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  diff = diff % (1000 * 60 * 60 * 24)
  const hours = Math.floor(diff / (1000 * 60 * 60))
  diff = diff % (1000 * 60 * 60)
  const minutes = Math.floor(diff / (1000 * 60))

  let disp = ''

  if (days !== 0) {
    disp += `${days}日`
    disp += `${hours}時間`
  } else if (hours !== 0) {
    disp += `${hours}時間`
  }
  disp += `${minutes}分`

  return disp
}

export default CountDown
