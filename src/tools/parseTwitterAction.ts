export interface TwitterURL {
  url: string
  type: string
  japanese: string
  param: any
  // {
  //   method: string
  //   credentials: string
  //   body: {
  //     id?: number
  //     status?: string
  //   }
  // }
}

export const actionToJapaneseLong = (action: string): string => {
  const list = ['フォロー', 'リツイート', 'いいね', 'リプライ']
  const decoration = ['対象のツイートをしたユーザを', '対象のツイートを', '対象のツイートに', '対象のツイートに']
  let str = action.split(';')[2]
  if (list.includes(str)) str = decoration[list.indexOf(str)] + str
  return str
}

export const actionToJapanese = (action: string): string => {
  switch (action.split(';')[0]) {
    case 'follow': return 'フォロー'
    case 'retweet': return 'リツイート'
    case 'favorite': return 'いいね'
    case 'reply': return 'リプライ'
    default:
      console.log(`error in ActionToJapanese.ts (${action})`)
      return ''
  }
}

const parseTwitterAction = (action: string): TwitterURL => {
  let [way, to, japanese, status] = action.split(/[;()]/)
  const method = way === 'reply' ? 'POST' : 'GET'
  if (method === 'GET') {
    return {
      url: `https://api.prizz.jp/twitter/${way}/${to}`,
      type: actionToJapanese(action),
      japanese,
      param: {
        method,
        credentials: 'include'
      }
    }
  } else {
    return {
      url: `https://api.prizz.jp/twitter/${way}`,
      type: actionToJapanese(action),
      japanese,
      param: {
        method,
        credentials: 'include',
        body: {
          id: parseInt(to),
          status
        }
      }
    }
  }
}

export default parseTwitterAction
