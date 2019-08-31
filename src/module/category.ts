import { combineReducers } from 'redux'

export const setCategoryContents = (contents: {}, category: string) => ({
  type: 'SET_CATEGORY_CONTENTS',
  contents,
  category
})

interface Action {
  type: string
  contents: CategoryContents
  category: string
}

const initialState = process.env.NODE_ENV === 'stotybook'
  ? {
    appliance: [
      {
        id: 4430,
        name: 'ロボット掃除機、コードレスクリーナー',
        winner: 10020,
        'image_url': 'https://www.chance.com/image/prizeimg/5d3069914c296.jpg',
        'created_at': '2019-07-23T05:40:53Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://park.sjnk.co.jp/campaign/ins_201907-08_enq/index.html',
        provider: '損害保険ジャパン日本興亜株式会社',
        way: '会員登録',
        category: [
          'appliance',
          'foods',
          'goods',
          'stationery'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9137,
        name: 'セイコーデジタルウオッチ',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d637c321734c.jpg',
        'created_at': '2019-08-29T12:37:02Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/sports_seiko/status/1156841829230239744',
        provider: 'SEIKO',
        way: 'Twitter',
        category: [
          'appliance'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 3916,
        name: '10万円分のお洋服',
        winner: 200,
        'image_url': 'https://www.chance.com/image/prizeimg/5d195d787cd3a.jpg',
        'created_at': '2019-07-14T21:11:56Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://gkhb.f.msgs.jp/webapp/form/22574_gkhb_2/index.do?utm_source=aimsnet&utm_medium=banner&utm_campaign=19_i',
        provider: '小林製薬株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'fashion',
          'gift',
          'other',
          'sports'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 3856,
        name: 'おそうじギフトカード、ホットプレート',
        winner: 43,
        'image_url': 'https://www.chance.com/image/prizeimg/5d1c5ba897bc1.jpg',
        'created_at': '2019-07-14T21:11:27Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.nichiban.co.jp/campaign/roihi1907/',
        provider: 'ニチバン株式会社',
        way: '商品購入',
        category: [
          'appliance',
          'cash',
          'foods',
          'other'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 5622,
        name: '腕時計、デジタル電波時計',
        winner: 9,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4292bec370f.jpg',
        'created_at': '2019-08-04T20:16:12Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.e-tkb.com/present/index.html',
        provider: '時計美術宝飾新聞社',
        way: 'アンケート',
        category: [
          'appliance',
          'fashion',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 3751,
        name: 'ビューティチェンジ',
        winner: 200,
        'image_url': 'https://www.chance.com/image/prizeimg/5d1ee026b9cf4.jpg',
        'created_at': '2019-07-14T21:10:16Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.inochinohaha.jp/?_ga=2.142149873.2107393892.1562291245-526664661.1559651636',
        provider: '小林製薬株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'gift',
          'other',
          'travel'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 3887,
        name: '10万円分の旅行券、ネスレ製品',
        winner: 21,
        'image_url': 'https://www.chance.com/image/prizeimg/5d1b225573ff4.jpg',
        'created_at': '2019-07-14T21:11:40Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://nestle.jp/uedake-no-shokutaku/campaign/?utm_source=PRchance&utm_medium=uedake-no-shokutaku&utm_campaign=003',
        provider: 'ネスレ日本株式会社',
        way: '会員登録',
        category: [
          'appliance',
          'gift',
          'other',
          'sports'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6149,
        name: 'ホームベーカリー、トースター',
        winner: 400,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4bb9ab7814f.jpg',
        'created_at': '2019-08-10T22:07:28Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://greenwood-cp.com/',
        provider: '加藤産業　株式会社',
        way: '商品購入',
        category: [
          'appliance',
          'daily',
          'foods',
          'gift',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 4429,
        name: '10万円分のお洋服',
        winner: 200,
        'image_url': 'https://www.chance.com/image/prizeimg/5d3114c4478d4.jpg',
        'created_at': '2019-07-23T05:40:51Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.inochinohaha.jp/?utm_source=aimsnet&utm_medium=banner&utm_campaign=19_inochinohaha&utm_content=190719_banner',
        provider: '小林製薬株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'fashion',
          'gift',
          'other',
          'sports',
          'travel'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9052,
        name: 'アマゾン エコー スポット',
        winner: 17,
        'image_url': 'https://www.chance.com/image/prizeimg/5d660e282f313.jpg',
        'created_at': '2019-08-29T12:36:25Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.haba.co.jp/f/a-006001082',
        provider: '株式会社ハーバー研究所',
        way: '',
        category: [
          'appliance',
          'cosmetics'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 4580,
        name: '簡単設定のネットワーク防犯カメラ',
        winner: 6,
        'image_url': 'https://www.chance.com/image/prizeimg/5d352f70abda2.jpg',
        'created_at': '2019-07-25T11:06:43Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.js-sys.com/camp/bouhansenryu/index2019.html',
        provider: '株式会社日本防犯システム',
        way: 'コンテスト',
        category: [
          'appliance',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 3980,
        name: 'PRINCESS テーブルグリルストーン',
        winner: 100,
        'image_url': 'https://www.chance.com/image/prizeimg/5d0afd4d1cdcb.jpg',
        'created_at': '2019-07-14T21:12:29Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'http://www.moranbong.co.jp/jang2019quizandhit/',
        provider: 'モランボン株式会社',
        way: 'クイズ',
        category: [
          'appliance'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9103,
        name: 'ブルーレイディスクプレーヤー',
        winner: 1,
        'image_url': 'https://www.chance.com/image/prizeimg/5d5e106aadd70.jpg',
        'created_at': '2019-08-29T12:36:50Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/WBTV_JP/status/1157078019359379456',
        provider: 'ワーナー ブラザース ジャパン合同会社',
        way: 'Twitter',
        category: [
          'appliance'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 3860,
        name: 'バルミューダ ザ・トースター',
        winner: 333,
        'image_url': 'https://www.chance.com/image/prizeimg/5d19cc53efd04.jpg',
        'created_at': '2019-07-14T21:11:28Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'http://www.kinkan.co.jp/campaign/2019/kinkan-sanshimai/present/',
        provider: '株式会社金冠堂',
        way: 'コンテスト',
        category: [
          'appliance',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 5672,
        name: 'こしひかり、T-fal衣類スチーマー',
        winner: 250,
        'image_url': 'https://www.chance.com/image/prizeimg/5d3a938503bac.jpg',
        'created_at': '2019-08-04T20:16:57Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.anshinchodama.com/campaign/',
        provider: 'J-NET株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'foods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8166,
        name: 'デロンギコーヒーメーカー',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d552afb5daff.jpg',
        'created_at': '2019-08-24T01:00:15Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/daieiOFFICIAL/status/1156761468957650945',
        provider: 'ダイエー',
        way: 'Twitter',
        category: [
          'appliance'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7398,
        name: '一休 スパ＆エステ券月コース3万円分',
        winner: 13,
        'image_url': 'https://www.chance.com/image/prizeimg/5d55135c0d5e9.jpg',
        'created_at': '2019-08-19T21:52:53Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.instagram.com/p/B0Sy8pMAGZz/',
        provider: '日清オイリオグループ',
        way: 'Instagram',
        category: [
          'appliance',
          'cosmetics',
          'foods',
          'other'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 5436,
        name: '10万円分のお洋服',
        winner: 200,
        'image_url': 'https://www.chance.com/image/prizeimg/5d42339c68761.jpg',
        'created_at': '2019-08-01T22:05:18Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.inochinohaha.jp/?utm_source=aimsnet&utm_medium=banner&utm_campaign=19_inochinohaha&utm_content=190801_banner',
        provider: '小林製薬株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'fashion',
          'gift',
          'other',
          'sports'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 4580,
        name: '簡単設定のネットワーク防犯カメラ',
        winner: 6,
        'image_url': 'https://www.chance.com/image/prizeimg/5d352f70abda2.jpg',
        'created_at': '2019-07-25T11:06:43Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.js-sys.com/camp/bouhansenryu/index2019.html',
        provider: '株式会社日本防犯システム',
        way: 'コンテスト',
        category: [
          'appliance',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9052,
        name: 'アマゾン エコー スポット',
        winner: 17,
        'image_url': 'https://www.chance.com/image/prizeimg/5d660e282f313.jpg',
        'created_at': '2019-08-29T12:36:25Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.haba.co.jp/f/a-006001082',
        provider: '株式会社ハーバー研究所',
        way: '',
        category: [
          'appliance',
          'cosmetics'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 3980,
        name: 'PRINCESS テーブルグリルストーン',
        winner: 100,
        'image_url': 'https://www.chance.com/image/prizeimg/5d0afd4d1cdcb.jpg',
        'created_at': '2019-07-14T21:12:29Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'http://www.moranbong.co.jp/jang2019quizandhit/',
        provider: 'モランボン株式会社',
        way: 'クイズ',
        category: [
          'appliance'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9103,
        name: 'ブルーレイディスクプレーヤー',
        winner: 1,
        'image_url': 'https://www.chance.com/image/prizeimg/5d5e106aadd70.jpg',
        'created_at': '2019-08-29T12:36:50Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/WBTV_JP/status/1157078019359379456',
        provider: 'ワーナー ブラザース ジャパン合同会社',
        way: 'Twitter',
        category: [
          'appliance'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 3860,
        name: 'バルミューダ ザ・トースター',
        winner: 333,
        'image_url': 'https://www.chance.com/image/prizeimg/5d19cc53efd04.jpg',
        'created_at': '2019-07-14T21:11:28Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'http://www.kinkan.co.jp/campaign/2019/kinkan-sanshimai/present/',
        provider: '株式会社金冠堂',
        way: 'コンテスト',
        category: [
          'appliance',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 5672,
        name: 'こしひかり、T-fal衣類スチーマー',
        winner: 250,
        'image_url': 'https://www.chance.com/image/prizeimg/5d3a938503bac.jpg',
        'created_at': '2019-08-04T20:16:57Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.anshinchodama.com/campaign/',
        provider: 'J-NET株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'foods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8166,
        name: 'デロンギコーヒーメーカー',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d552afb5daff.jpg',
        'created_at': '2019-08-24T01:00:15Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/daieiOFFICIAL/status/1156761468957650945',
        provider: 'ダイエー',
        way: 'Twitter',
        category: [
          'appliance'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7398,
        name: '一休 スパ＆エステ券月コース3万円分',
        winner: 13,
        'image_url': 'https://www.chance.com/image/prizeimg/5d55135c0d5e9.jpg',
        'created_at': '2019-08-19T21:52:53Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.instagram.com/p/B0Sy8pMAGZz/',
        provider: '日清オイリオグループ',
        way: 'Instagram',
        category: [
          'appliance',
          'cosmetics',
          'foods',
          'other'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 5436,
        name: '10万円分のお洋服',
        winner: 200,
        'image_url': 'https://www.chance.com/image/prizeimg/5d42339c68761.jpg',
        'created_at': '2019-08-01T22:05:18Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.inochinohaha.jp/?utm_source=aimsnet&utm_medium=banner&utm_campaign=19_inochinohaha&utm_content=190801_banner',
        provider: '小林製薬株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'fashion',
          'gift',
          'other',
          'sports'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6412,
        name: 'テーブルグリルストーン',
        winner: 5,
        'image_url': 'https://www.chance.com/image/prizeimg/5d43de4549b7a.jpg',
        'created_at': '2019-08-10T22:09:59Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.pietro.co.jp/pickup/instagramcampaign7',
        provider: '株式会社 ピエトロ',
        way: 'Instagram',
        category: [
          'appliance',
          'foods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 4430,
        name: 'ロボット掃除機、コードレスクリーナー',
        winner: 10020,
        'image_url': 'https://www.chance.com/image/prizeimg/5d3069914c296.jpg',
        'created_at': '2019-07-23T05:40:53Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://park.sjnk.co.jp/campaign/ins_201907-08_enq/index.html',
        provider: '損害保険ジャパン日本興亜株式会社',
        way: '会員登録',
        category: [
          'appliance',
          'foods',
          'goods',
          'stationery'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9137,
        name: 'セイコーデジタルウオッチ',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d637c321734c.jpg',
        'created_at': '2019-08-29T12:37:02Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/sports_seiko/status/1156841829230239744',
        provider: 'SEIKO',
        way: 'Twitter',
        category: [
          'appliance'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 3916,
        name: '10万円分のお洋服',
        winner: 200,
        'image_url': 'https://www.chance.com/image/prizeimg/5d195d787cd3a.jpg',
        'created_at': '2019-07-14T21:11:56Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://gkhb.f.msgs.jp/webapp/form/22574_gkhb_2/index.do?utm_source=aimsnet&utm_medium=banner&utm_campaign=19_i',
        provider: '小林製薬株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'fashion',
          'gift',
          'other',
          'sports'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 3856,
        name: 'おそうじギフトカード、ホットプレート',
        winner: 43,
        'image_url': 'https://www.chance.com/image/prizeimg/5d1c5ba897bc1.jpg',
        'created_at': '2019-07-14T21:11:27Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.nichiban.co.jp/campaign/roihi1907/',
        provider: 'ニチバン株式会社',
        way: '商品購入',
        category: [
          'appliance',
          'cash',
          'foods',
          'other'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 5622,
        name: '腕時計、デジタル電波時計',
        winner: 9,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4292bec370f.jpg',
        'created_at': '2019-08-04T20:16:12Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.e-tkb.com/present/index.html',
        provider: '時計美術宝飾新聞社',
        way: 'アンケート',
        category: [
          'appliance',
          'fashion',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 3751,
        name: 'ビューティチェンジ',
        winner: 200,
        'image_url': 'https://www.chance.com/image/prizeimg/5d1ee026b9cf4.jpg',
        'created_at': '2019-07-14T21:10:16Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.inochinohaha.jp/?_ga=2.142149873.2107393892.1562291245-526664661.1559651636',
        provider: '小林製薬株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'gift',
          'other',
          'travel'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6149,
        name: 'ホームベーカリー、トースター',
        winner: 400,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4bb9ab7814f.jpg',
        'created_at': '2019-08-10T22:07:28Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://greenwood-cp.com/',
        provider: '加藤産業　株式会社',
        way: '商品購入',
        category: [
          'appliance',
          'daily',
          'foods',
          'gift',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 4429,
        name: '10万円分のお洋服',
        winner: 200,
        'image_url': 'https://www.chance.com/image/prizeimg/5d3114c4478d4.jpg',
        'created_at': '2019-07-23T05:40:51Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.inochinohaha.jp/?utm_source=aimsnet&utm_medium=banner&utm_campaign=19_inochinohaha&utm_content=190719_banner',
        provider: '小林製薬株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'fashion',
          'gift',
          'other',
          'sports',
          'travel'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      }
    ],
    baby: [
      {
        id: 6266,
        name: 'タカラトミー「アニア フレンズ」',
        winner: 10,
        'image_url': 'https://www.chance.com/image/prizeimg/5d48f14ddf297.jpg',
        'created_at': '2019-08-10T22:08:37Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://hugkum.sho.jp/72431',
        provider: '小学館 HugKum(ハグクム)',
        way: 'アンケート',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 4336,
        name: 'おもちゃ、こども商品券1万円分',
        winner: 120,
        'image_url': 'https://www.chance.com/image/prizeimg/5d33f583e3116.jpg',
        'created_at': '2019-07-23T05:39:46Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://toycard.net/',
        provider: '株式会社トイカード',
        way: '商品購入',
        category: [
          'baby',
          'gift',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8121,
        name: 'ストライダーベイビーバンドル',
        winner: 1,
        'image_url': 'https://www.chance.com/image/prizeimg/5d5a2cdb82614.jpg',
        'created_at': '2019-08-24T00:59:53Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-02T00:00:00Z',
        link: 'https://chiik.jp/articles/dEII9',
        provider: '図書印刷株式会社 Chiik!',
        way: '応募が簡単',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6388,
        name: 'おもちゃメーカーのこの夏オススメおもちゃ',
        winner: 63,
        'image_url': 'https://www.chance.com/image/prizeimg/5d44ea5f84913.jpg',
        'created_at': '2019-08-10T22:09:48Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-02T00:00:00Z',
        link: 'https://www.toynes.jp/summer/top.htm',
        provider: 'おもちゃ情報net.',
        way: 'アンケート',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6306,
        name: 'ストライダーベイビーバンドル',
        winner: 1,
        'image_url': 'https://www.chance.com/image/prizeimg/5d482808d2e25.jpg',
        'created_at': '2019-08-10T22:09:02Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-03T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/present-striderbabybundle',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8745,
        name: 'キッズ晴雨兼用折りたたみ日傘',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d5f7efc2a94b.jpg',
        'created_at': '2019-08-26T22:42:26Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-06T00:00:00Z',
        link: 'https://www.instagram.com/p/B1c6DsFjO3H/',
        provider: '株式会社social solutions',
        way: 'Instagram',
        category: [
          'baby',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7506,
        name: 'チャギントン パズルタウン',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d513e50051ac.jpg',
        'created_at': '2019-08-19T21:56:14Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-10T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentchuggington',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7505,
        name: '水ふうせんでラリー「オゴディスクH2O」',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d513b32a400c.jpg',
        'created_at': '2019-08-19T21:56:13Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-10T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentogodiskh2o',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6191,
        name: 'アンパンマン抱き人形ソフト',
        winner: 1,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4a8c5916700.jpg',
        'created_at': '2019-08-10T22:07:51Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-11T00:00:00Z',
        link: 'https://www.froebel-tsubame.jp/html/new_event.html?code=20190805051426',
        provider: 'フレーベル館オンラインショップ「つばめのおうち」',
        way: 'アンケート',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7592,
        name: 'ドラえもんはじめての英語図鑑',
        winner: 51,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4d208bd1a45.jpg',
        'created_at': '2019-08-19T21:56:55Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-11T00:00:00Z',
        link: 'https://hugkum.sho.jp/75745',
        provider: '小学館 HugKum(ハグクム)',
        way: 'アンケート',
        category: [
          'baby',
          'cosmetics',
          'foods',
          'goods',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9059,
        name: '4輪ベビーカー「ラクーナ クッション」',
        winner: 1,
        'image_url': 'https://www.chance.com/image/prizeimg/5d65ebebb9bb5.jpg',
        'created_at': '2019-08-29T12:36:31Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-20T00:00:00Z',
        link: 'https://www.babycome.ne.jp/present/detail/320/',
        provider: 'ベビカム株式会社',
        way: '会員登録',
        category: [
          'baby'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6238,
        name: 'ベビーカー、チャイルドシート',
        winner: 183,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4a3166c9f03.jpg',
        'created_at': '2019-08-10T22:08:19Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-10-01T00:00:00Z',
        link: 'https://maternity.happy-note.com/present.html',
        provider: 'ミキハウス子育て総研株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'baby',
          'books',
          'cosmetics',
          'daily',
          'foods',
          'goods',
          'sports'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6266,
        name: 'タカラトミー「アニア フレンズ」',
        winner: 10,
        'image_url': 'https://www.chance.com/image/prizeimg/5d48f14ddf297.jpg',
        'created_at': '2019-08-10T22:08:37Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://hugkum.sho.jp/72431',
        provider: '小学館 HugKum(ハグクム)',
        way: 'アンケート',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 4336,
        name: 'おもちゃ、こども商品券1万円分',
        winner: 120,
        'image_url': 'https://www.chance.com/image/prizeimg/5d33f583e3116.jpg',
        'created_at': '2019-07-23T05:39:46Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://toycard.net/',
        provider: '株式会社トイカード',
        way: '商品購入',
        category: [
          'baby',
          'gift',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6388,
        name: 'おもちゃメーカーのこの夏オススメおもちゃ',
        winner: 63,
        'image_url': 'https://www.chance.com/image/prizeimg/5d44ea5f84913.jpg',
        'created_at': '2019-08-10T22:09:48Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-02T00:00:00Z',
        link: 'https://www.toynes.jp/summer/top.htm',
        provider: 'おもちゃ情報net.',
        way: 'アンケート',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8121,
        name: 'ストライダーベイビーバンドル',
        winner: 1,
        'image_url': 'https://www.chance.com/image/prizeimg/5d5a2cdb82614.jpg',
        'created_at': '2019-08-24T00:59:53Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-02T00:00:00Z',
        link: 'https://chiik.jp/articles/dEII9',
        provider: '図書印刷株式会社 Chiik!',
        way: '応募が簡単',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6306,
        name: 'ストライダーベイビーバンドル',
        winner: 1,
        'image_url': 'https://www.chance.com/image/prizeimg/5d482808d2e25.jpg',
        'created_at': '2019-08-10T22:09:02Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-03T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/present-striderbabybundle',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8745,
        name: 'キッズ晴雨兼用折りたたみ日傘',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d5f7efc2a94b.jpg',
        'created_at': '2019-08-26T22:42:26Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-06T00:00:00Z',
        link: 'https://www.instagram.com/p/B1c6DsFjO3H/',
        provider: '株式会社social solutions',
        way: 'Instagram',
        category: [
          'baby',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7506,
        name: 'チャギントン パズルタウン',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d513e50051ac.jpg',
        'created_at': '2019-08-19T21:56:14Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-10T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentchuggington',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7505,
        name: '水ふうせんでラリー「オゴディスクH2O」',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d513b32a400c.jpg',
        'created_at': '2019-08-19T21:56:13Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-10T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentogodiskh2o',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7592,
        name: 'ドラえもんはじめての英語図鑑',
        winner: 51,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4d208bd1a45.jpg',
        'created_at': '2019-08-19T21:56:55Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-11T00:00:00Z',
        link: 'https://hugkum.sho.jp/75745',
        provider: '小学館 HugKum(ハグクム)',
        way: 'アンケート',
        category: [
          'baby',
          'cosmetics',
          'foods',
          'goods',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6191,
        name: 'アンパンマン抱き人形ソフト',
        winner: 1,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4a8c5916700.jpg',
        'created_at': '2019-08-10T22:07:51Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-11T00:00:00Z',
        link: 'https://www.froebel-tsubame.jp/html/new_event.html?code=20190805051426',
        provider: 'フレーベル館オンラインショップ「つばめのおうち」',
        way: 'アンケート',
        category: [
          'baby',
          'toy'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9059,
        name: '4輪ベビーカー「ラクーナ クッション」',
        winner: 1,
        'image_url': 'https://www.chance.com/image/prizeimg/5d65ebebb9bb5.jpg',
        'created_at': '2019-08-29T12:36:31Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-20T00:00:00Z',
        link: 'https://www.babycome.ne.jp/present/detail/320/',
        provider: 'ベビカム株式会社',
        way: '会員登録',
        category: [
          'baby'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6238,
        name: 'ベビーカー、チャイルドシート',
        winner: 183,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4a3166c9f03.jpg',
        'created_at': '2019-08-10T22:08:19Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-10-01T00:00:00Z',
        link: 'https://maternity.happy-note.com/present.html',
        provider: 'ミキハウス子育て総研株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'baby',
          'books',
          'cosmetics',
          'daily',
          'foods',
          'goods',
          'sports'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      }
    ],
    books: [
      {
        id: 8163,
        name: 'QUOカード500円分',
        winner: 1000,
        'image_url': 'https://www.chance.com/image/prizeimg/5d59f7202f0e9.jpg',
        'created_at': '2019-08-24T01:00:14Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://halmek.co.jp/present/84',
        provider: 'ハルメクWEB',
        way: '会員登録',
        category: [
          'books',
          'gift'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9040,
        name: '『トイ・ストーリー』グッズ',
        winner: 105,
        'image_url': 'https://www.chance.com/image/prizeimg/5d6631e158626.jpg',
        'created_at': '2019-08-29T12:36:19Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.seiban.co.jp/100th/toy4_campaign/',
        provider: 'セイバン',
        way: 'クイズ',
        category: [
          'books',
          'other',
          'stationery'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8148,
        name: '映画『ワイルドスピード／スーパーコンボ』オリジナルグッズ',
        winner: 7,
        'image_url': 'https://www.chance.com/image/prizeimg/5d568f0275129.jpg',
        'created_at': '2019-08-24T01:00:07Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/UNITED_CINEMAS/status/1158558307793039360',
        provider: 'ユナイテッド・シネマ',
        way: 'Twitter',
        category: [
          'books',
          'fashion',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9099,
        name: '映画『楽園』鑑賞券',
        winner: 6,
        'image_url': 'https://www.chance.com/image/prizeimg/5d652aa738cb5.jpg',
        'created_at': '2019-08-29T12:36:49Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/kadokawaeiga/status/1159011299163901952',
        provider: '株式会社KADOKAWA',
        way: 'Twitter',
        category: [
          'books',
          'foods',
          'movie',
          'ticket'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9143,
        name: '書籍『黄金夜界』',
        winner: 10,
        'image_url': 'https://www.chance.com/image/prizeimg/5d6348a4a382e.jpg',
        'created_at': '2019-08-29T12:37:08Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://yomipo.yomiuri.co.jp/present/detail/1975',
        provider: '読売新聞社',
        way: '会員登録',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7497,
        name: '書籍『犯罪学大図鑑』',
        winner: 5,
        'image_url': 'https://www.chance.com/image/prizeimg/5d535ea60b46b.jpg',
        'created_at': '2019-08-19T21:56:09Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-02T00:00:00Z',
        link: 'https://www.j-cast.com/bookwatch/2019/07/30009529.html',
        provider: '株式会社ジェイ・キャスト',
        way: 'Twitter',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8192,
        name: '映画『引っ越し大名！』オリジナルグッズ',
        winner: 20,
        'image_url': 'https://www.chance.com/image/prizeimg/5d56593a6bc39.jpg',
        'created_at': '2019-08-24T01:00:26Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-02T00:00:00Z',
        link: 'https://www.aeoncinema.com/event/hikkoshi-movie_twittercp/index.html',
        provider: 'イオンシネマ',
        way: 'Twitter',
        category: [
          'books',
          'foods',
          'other'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9150,
        name: '書籍『子どもたちがつくった問題集 こどモン～解いて！作って！思考力を伸ばそう』',
        winner: 5,
        'image_url': 'https://www.chance.com/image/prizeimg/5d6274fd732c2.jpg',
        'created_at': '2019-08-29T12:37:14Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-04T00:00:00Z',
        link: 'https://enfant.living.jp/schoolchildren/sc-pre/729055/',
        provider: 'サンケイリビング新聞社 あんふぁん',
        way: '会員登録',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9180,
        name: '書籍『「こちら秘書室」公認 接待の手土産 2019-2020』',
        winner: 5,
        'image_url': 'https://www.chance.com/image/prizeimg/5d6274972cab9.jpg',
        'created_at': '2019-08-29T12:37:34Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-04T00:00:00Z',
        link: 'https://enfant.living.jp/mama/ichioshi/729570/',
        provider: 'サンケイリビング新聞社 あんふぁん',
        way: '会員登録',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9175,
        name: 'ドラマ「偽装不倫」主題歌CD',
        winner: 30,
        'image_url': 'https://www.chance.com/image/prizeimg/5d627c48a1645.jpg',
        'created_at': '2019-08-29T12:37:31Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-05T00:00:00Z',
        link: 'https://www.ntv.co.jp/gisouhurin/articles/242q3reyl2p5nks2fx1.html',
        provider: '日本テレビ',
        way: '会員登録',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7465,
        name: '書籍『ロイヒトトゥルム1917で楽しむバレットジャーナル』',
        winner: 5,
        'image_url': 'https://www.chance.com/image/prizeimg/5d5272341b8f0.jpg',
        'created_at': '2019-08-19T21:55:50Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-05T00:00:00Z',
        link: 'https://www.j-cast.com/bookwatch/book059/2019/07/30009487.html',
        provider: '株式会社ジェイ・キャスト',
        way: 'Twitter',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9106,
        name: '書籍『栄光へのノーサイド』',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d64db0771bae.jpg',
        'created_at': '2019-08-29T12:36:51Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-07T00:00:00Z',
        link: 'https://thetv.jp/present/monthly/ec3d7f94eeea16171aa349f0327c60947b6ad54e_6/',
        provider: '株式会社KADOKAWA ザ テレビジョン',
        way: '商品購入',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8119,
        name: 'オレンジページ レシピ本 2冊セット',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d5a35590fa90.jpg',
        'created_at': '2019-08-24T00:59:51Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-17T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentorangepagebook',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7595,
        name: '書籍『みんなが欲しかった! 電験三種 はじめの一歩』',
        winner: 5,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4cd7111ddb1.jpg',
        'created_at': '2019-08-19T21:56:56Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-25T00:00:00Z',
        link: 'https://jpsk.jp/special/denken.html',
        provider: '（株）シー・ビー・ティ・ソリューションズ',
        way: 'アンケート',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9083,
        name: '書籍『ドキュメント 「令和」制定』',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d64db4d2fcb0.jpg',
        'created_at': '2019-08-29T12:36:43Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-27T00:00:00Z',
        link: 'https://thetv.jp/present/monthly/ec3d7f94eeea16171aa349f0327c60947b6ad54e_7/',
        provider: '株式会社KADOKAWA ザ テレビジョン',
        way: '商品購入',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6238,
        name: 'ベビーカー、チャイルドシート',
        winner: 183,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4a3166c9f03.jpg',
        'created_at': '2019-08-10T22:08:19Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-10-01T00:00:00Z',
        link: 'https://maternity.happy-note.com/present.html',
        provider: 'ミキハウス子育て総研株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'baby',
          'books',
          'cosmetics',
          'daily',
          'foods',
          'goods',
          'sports'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8163,
        name: 'QUOカード500円分',
        winner: 1000,
        'image_url': 'https://www.chance.com/image/prizeimg/5d59f7202f0e9.jpg',
        'created_at': '2019-08-24T01:00:14Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://halmek.co.jp/present/84',
        provider: 'ハルメクWEB',
        way: '会員登録',
        category: [
          'books',
          'gift'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9040,
        name: '『トイ・ストーリー』グッズ',
        winner: 105,
        'image_url': 'https://www.chance.com/image/prizeimg/5d6631e158626.jpg',
        'created_at': '2019-08-29T12:36:19Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://www.seiban.co.jp/100th/toy4_campaign/',
        provider: 'セイバン',
        way: 'クイズ',
        category: [
          'books',
          'other',
          'stationery'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8148,
        name: '映画『ワイルドスピード／スーパーコンボ』オリジナルグッズ',
        winner: 7,
        'image_url': 'https://www.chance.com/image/prizeimg/5d568f0275129.jpg',
        'created_at': '2019-08-24T01:00:07Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/UNITED_CINEMAS/status/1158558307793039360',
        provider: 'ユナイテッド・シネマ',
        way: 'Twitter',
        category: [
          'books',
          'fashion',
          'goods'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9099,
        name: '映画『楽園』鑑賞券',
        winner: 6,
        'image_url': 'https://www.chance.com/image/prizeimg/5d652aa738cb5.jpg',
        'created_at': '2019-08-29T12:36:49Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/kadokawaeiga/status/1159011299163901952',
        provider: '株式会社KADOKAWA',
        way: 'Twitter',
        category: [
          'books',
          'foods',
          'movie',
          'ticket'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9143,
        name: '書籍『黄金夜界』',
        winner: 10,
        'image_url': 'https://www.chance.com/image/prizeimg/5d6348a4a382e.jpg',
        'created_at': '2019-08-29T12:37:08Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-01T00:00:00Z',
        link: 'https://yomipo.yomiuri.co.jp/present/detail/1975',
        provider: '読売新聞社',
        way: '会員登録',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7497,
        name: '書籍『犯罪学大図鑑』',
        winner: 5,
        'image_url': 'https://www.chance.com/image/prizeimg/5d535ea60b46b.jpg',
        'created_at': '2019-08-19T21:56:09Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-02T00:00:00Z',
        link: 'https://www.j-cast.com/bookwatch/2019/07/30009529.html',
        provider: '株式会社ジェイ・キャスト',
        way: 'Twitter',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8192,
        name: '映画『引っ越し大名！』オリジナルグッズ',
        winner: 20,
        'image_url': 'https://www.chance.com/image/prizeimg/5d56593a6bc39.jpg',
        'created_at': '2019-08-24T01:00:26Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-02T00:00:00Z',
        link: 'https://www.aeoncinema.com/event/hikkoshi-movie_twittercp/index.html',
        provider: 'イオンシネマ',
        way: 'Twitter',
        category: [
          'books',
          'foods',
          'other'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9150,
        name: '書籍『子どもたちがつくった問題集 こどモン～解いて！作って！思考力を伸ばそう』',
        winner: 5,
        'image_url': 'https://www.chance.com/image/prizeimg/5d6274fd732c2.jpg',
        'created_at': '2019-08-29T12:37:14Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-04T00:00:00Z',
        link: 'https://enfant.living.jp/schoolchildren/sc-pre/729055/',
        provider: 'サンケイリビング新聞社 あんふぁん',
        way: '会員登録',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9180,
        name: '書籍『「こちら秘書室」公認 接待の手土産 2019-2020』',
        winner: 5,
        'image_url': 'https://www.chance.com/image/prizeimg/5d6274972cab9.jpg',
        'created_at': '2019-08-29T12:37:34Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-04T00:00:00Z',
        link: 'https://enfant.living.jp/mama/ichioshi/729570/',
        provider: 'サンケイリビング新聞社 あんふぁん',
        way: '会員登録',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9175,
        name: 'ドラマ「偽装不倫」主題歌CD',
        winner: 30,
        'image_url': 'https://www.chance.com/image/prizeimg/5d627c48a1645.jpg',
        'created_at': '2019-08-29T12:37:31Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-05T00:00:00Z',
        link: 'https://www.ntv.co.jp/gisouhurin/articles/242q3reyl2p5nks2fx1.html',
        provider: '日本テレビ',
        way: '会員登録',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7465,
        name: '書籍『ロイヒトトゥルム1917で楽しむバレットジャーナル』',
        winner: 5,
        'image_url': 'https://www.chance.com/image/prizeimg/5d5272341b8f0.jpg',
        'created_at': '2019-08-19T21:55:50Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-05T00:00:00Z',
        link: 'https://www.j-cast.com/bookwatch/book059/2019/07/30009487.html',
        provider: '株式会社ジェイ・キャスト',
        way: 'Twitter',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9106,
        name: '書籍『栄光へのノーサイド』',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d64db0771bae.jpg',
        'created_at': '2019-08-29T12:36:51Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-07T00:00:00Z',
        link: 'https://thetv.jp/present/monthly/ec3d7f94eeea16171aa349f0327c60947b6ad54e_6/',
        provider: '株式会社KADOKAWA ザ テレビジョン',
        way: '商品購入',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 8119,
        name: 'オレンジページ レシピ本 2冊セット',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d5a35590fa90.jpg',
        'created_at': '2019-08-24T00:59:51Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-17T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentorangepagebook',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 7595,
        name: '書籍『みんなが欲しかった! 電験三種 はじめの一歩』',
        winner: 5,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4cd7111ddb1.jpg',
        'created_at': '2019-08-19T21:56:56Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-25T00:00:00Z',
        link: 'https://jpsk.jp/special/denken.html',
        provider: '（株）シー・ビー・ティ・ソリューションズ',
        way: 'アンケート',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 9083,
        name: '書籍『ドキュメント 「令和」制定』',
        winner: 3,
        'image_url': 'https://www.chance.com/image/prizeimg/5d64db4d2fcb0.jpg',
        'created_at': '2019-08-29T12:36:43Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-09-27T00:00:00Z',
        link: 'https://thetv.jp/present/monthly/ec3d7f94eeea16171aa349f0327c60947b6ad54e_7/',
        provider: '株式会社KADOKAWA ザ テレビジョン',
        way: '商品購入',
        category: [
          'books'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      },
      {
        id: 6238,
        name: 'ベビーカー、チャイルドシート',
        winner: 183,
        'image_url': 'https://www.chance.com/image/prizeimg/5d4a3166c9f03.jpg',
        'created_at': '2019-08-10T22:08:19Z',
        'updated_at': '0001-01-01T00:00:00Z',
        'limit_date': '2019-10-01T00:00:00Z',
        link: 'https://maternity.happy-note.com/present.html',
        provider: 'ミキハウス子育て総研株式会社',
        way: 'アンケート',
        category: [
          'appliance',
          'baby',
          'books',
          'cosmetics',
          'daily',
          'foods',
          'goods',
          'sports'
        ],
        'is_oneclick': false,
        'twitter_way': null,
        'twitter_raw': ''
      }
    ]
  }
  : {}

const contents = (state: any = initialState, { type, contents, category }: Action) => {
  switch (type) {
    case 'SET_CATEGORY_CONTENTS':
      if (state !== {} && state[category]) {
        const newState = Object.assign({}, state)
        newState[category] = state[category].concat(contents[category])
        return newState
      } else {
        return Object.assign({}, state, contents)
      }
    default: return state
  }
}

export default combineReducers({ contents })
