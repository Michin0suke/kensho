import parseTwitterAction, { actionToJapanese, actionToJapaneseLong } from '../src/tools/parseTwitterAction'

const testArr: string[] = [
  'follow;@michinosuke;@michinosukeをフォロー',
  'follow;899681493684953088;フォロー',
  'retweet;1169644893901221888;https://t.co/HSjZ967rSLをリツイート',
  'retweet;1170277404448657409;リツイート',
  'favorite;1169644893901221888;https://t.co/HSjZ967rSLをいいね',
  'favorite;1170277404448657409;いいね',
  'reply;1170277404448657409;リプライ()',
  'reply;1170277404448657409;好きな食べ物についてリプライ(好きな食べ物について)',
  'reply;1170277404448657409;何が欲しいかリプライ(何が欲しいか)',
  'reply;1169644893901221888;https://t.co/HSjZ967rSLにリプライ()',
  'reply;1169644893901221888;https://t.co/HSjZ967rSLに好きな食べ物についてリプライ(好きな食べ物について)'
  // 'click;https;//api.twitter.com/oauth/authenticate?oauth_token=-dRU0AAAAAAA1zDZAAABbV3Bgj4;https;//t.co/1rHsFeTNQQ?amp=1をクリック'
]

testArr.forEach((test: string) => {
  console.log(parseTwitterAction(test))
})

console.log('\n\n')

testArr.forEach((test: string) => {
  console.log(actionToJapanese(test))
})

console.log('\n\n')

testArr.forEach((test: string) => {
  console.log(actionToJapaneseLong(test))
})
