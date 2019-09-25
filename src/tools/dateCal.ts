const dateCal = {
  year: (date: Date, num: number): Date => new Date(date.setFullYear(date.getFullYear() + num)),
  month: (date: Date, num: number): Date => new Date(date.setMonth(date.getMonth() + num)),
  date: (date: Date, num: number): Date => new Date(date.setDate(date.getDate() + num)),
  hours: (date: Date, num: number): Date => new Date(date.setHours(date.getHours() + num)),
  minutes: (date: Date, num: number): Date => new Date(date.setMinutes(date.getMinutes() + num)),
  seconds: (date: Date, num: number): Date => new Date(date.setSeconds(date.getSeconds() + num))
}

export default dateCal
