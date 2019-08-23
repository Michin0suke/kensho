export const setTwitterContents = (twitterContents: string) => ({
  type: 'SET_TWITTER_CONTENTS',
  twitterContents
})

interface Action {
  type: string
  twitterContents: string
}

const twitter = (state = {}, { type, twitterContents }: Action) => {
  switch (type) {
    case 'SET_TWITTER_CONTENTS': return {
      ...state,
      contents: twitterContents
    }
    default: return state
  }
}

export default twitter
