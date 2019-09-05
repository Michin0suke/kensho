import joinQuery from '../src/tools/joinQuery'

const url = 'https://api.prizz.jp/contents'

const params = {
  order: 'deadline',
  category: 'travel',
  way: 'アンケート',
  limit: '2'
}

console.log(joinQuery(url, params))
