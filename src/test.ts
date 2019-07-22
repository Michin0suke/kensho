const func = () => {
  const first = (...args: string[]) => {
    console.log(args)
  }
}

func.first('hello world')
