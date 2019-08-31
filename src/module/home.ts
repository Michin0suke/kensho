import { combineReducers } from 'redux'

export const setHomeContents = (content: {}, no: number) => ({
  type: 'SET_HOME_CONTENTS',
  content,
  no
})
export const setHomeLayout = (layout: []) => ({
  type: 'SET_HOME_LAYOUT',
  layout
})

const initialContents = process.env.NODE_ENV === 'storybook'
  ? {
    '0': {
      no: 0,
      renderType: 'topImage',
      heading: '懸賞を、もっと楽しく',
      'image_url': 'https://prizz.jp/assets/img/awesome_min.jpg'
    },
    '1': {
      no: 1,
      renderType: 'horizontalScroll',
      heading: 'もうすぐ締め切り！',
      endpoint: 'deadline?limit=30',
      'ad_link': 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
      'ad_image': 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
      'ad_tracking': 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
      'ad_name': '【AD】ワゴンRが当たる！',
      'ad_number': '1000',
      contents: [
        {
          id: 8729,
          name: 'ビオリス ヘアマスク',
          winner: 50,
          'image_url': 'https://www.chance.com/image/prizeimg/5d5e144e5c4ea.jpg',
          'created_at': '2019-08-26T22:42:19Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/kosecosmeport',
          provider: 'コーセーコスメポート',
          way: 'Twitter',
          category: [
            'cosmetics'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8731,
          name: '乃木坂46 井上小百合 サイン入りチェキ',
          winner: 1,
          'image_url': 'https://www.chance.com/image/prizeimg/5d5e0700d8f81.jpg',
          'created_at': '2019-08-26T22:42:20Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/thetvjp/status/1164371865068068865',
          provider: 'KADOKAWA ザ テレビジョン',
          way: 'Twitter',
          category: [
            'other'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8997,
          name: 'Amazonギフト券500円分',
          winner: 100,
          'image_url': 'https://pbs.twimg.com/media/ECwySLGUcAEc9As.jpg',
          'created_at': '2019-08-27T00:40:38Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/1234617955/status/1165361695365062657',
          provider: '小学館 じゃじゃじゃじゃん®',
          way: 'Twitter',
          category: [
            'gift'
          ],
          'is_oneclick': true,
          'twitter_way': [
            'フォロー',
            'リツイート'
          ],
          'twitter_raw': ''
        },
        {
          id: 8999,
          name: 'モンテール9月の新作スイーツBOXとクリスタルガイザー700ml24本',
          winner: 5,
          'image_url': 'https://pbs.twimg.com/media/ECS1mN7UwAAZdJ9.jpg',
          'created_at': '2019-08-27T00:40:38Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/2534700114/status/1163254278208647168',
          provider: 'シュークリーム先輩【モンテール公式】',
          way: 'Twitter',
          category: [
            'foods'
          ],
          'is_oneclick': true,
          'twitter_way': [
            '@CG_jp をフォロー',
            'フォロー',
            'リツイート'
          ],
          'twitter_raw': ''
        },
        {
          id: 9014,
          name: 'Amazonギフト券500円分',
          winner: 100,
          'image_url': 'https://pbs.twimg.com/media/EC7EFQcUEAE9rus.jpg',
          'created_at': '2019-08-27T21:40:01Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/1234617955/status/1166084952879845376',
          provider: '小学館 じゃじゃじゃじゃん®',
          way: 'Twitter',
          category: [
            'gift'
          ],
          'is_oneclick': true,
          'twitter_way': [
            'フォロー',
            'リツイート'
          ],
          'twitter_raw': ''
        },
        {
          id: 5437,
          name: 'ガソリン1年分(10万円相当)',
          winner: 75,
          'image_url': 'https://www.chance.com/image/prizeimg/5d42470f60143.jpg',
          'created_at': '2019-08-01T22:05:18Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://www.kobayashi.co.jp/brand/sawaday_parfum/parfum-campaign/?utm_source=aimsnet_08',
          provider: '小林製薬株式会社',
          way: 'コンテスト',
          category: [
            'gift',
            'goods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8768,
          name: '松本穂香 サイン入りチェキ',
          winner: 1,
          'image_url': 'https://www.chance.com/image/prizeimg/5d5e075edecc5.jpg',
          'created_at': '2019-08-26T22:42:38Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/thetvjp/status/1164371614009417729',
          provider: 'KADOKAWA ザ テレビジョン',
          way: 'Twitter',
          category: [
            'other'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9027,
          name: 'Amazonギフト券500円分',
          winner: 100,
          'image_url': 'https://pbs.twimg.com/media/EC_8rTcUYAMpKna.jpg',
          'created_at': '2019-08-28T19:25:01Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/1234617955/status/1166428653682479104',
          provider: '小学館 じゃじゃじゃじゃん®',
          way: 'Twitter',
          category: [
            'gift'
          ],
          'is_oneclick': true,
          'twitter_way': [
            'フォロー',
            'リツイート'
          ],
          'twitter_raw': ''
        },
        {
          id: 9034,
          name: 'ハワイ ペア旅行、トートバッグ',
          winner: 19,
          'image_url': 'https://www.chance.com/image/prizeimg/5d664f4092f38.jpg',
          'created_at': '2019-08-29T12:36:18Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'http://shiro-t-audition.hanesjapan.com/',
          provider: 'ヘインズブランズ ジャパン',
          way: 'Twitter',
          category: [
            'goods',
            'travel'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 3915,
          name: 'ガソリン1年分(10万円相当)',
          winner: 75,
          'image_url': 'https://www.chance.com/image/prizeimg/5d1973ed74891.jpg',
          'created_at': '2019-07-14T21:11:56Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://www.kobayashi.co.jp/brand/sawaday_parfum/parfum-campaign/?utm_source=aimsnet_07',
          provider: '小林製薬株式会社',
          way: 'コンテスト',
          category: [
            'gift',
            'goods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 7499,
          name: 'Amazonギフト券10万円分',
          winner: 13,
          'image_url': 'https://www.chance.com/image/prizeimg/5d53e2e2066c6.jpg',
          'created_at': '2019-08-19T21:56:10Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://i-sedai.tokyocameraclub.com/contest2019/',
          provider: 'SBIいきいき少額短期保険株式会社',
          way: 'Instagram',
          category: [
            'gift',
            'goods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9069,
          name: '本気野菜オリジナル ノートブック',
          winner: 100,
          'image_url': 'https://www.chance.com/image/prizeimg/5d65cdc162425.jpg',
          'created_at': '2019-08-29T12:36:37Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://snscp.suntory.co.jp/imgcp/flower/homegardens/#/boards/homegardens_fan_2019',
          provider: 'サントリー',
          way: '',
          category: [
            'stationery'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9070,
          name: 'バンホーテンココア詰め合わせ',
          winner: 5,
          'image_url': 'https://www.chance.com/image/prizeimg/5d65cb0516f73.jpg',
          'created_at': '2019-08-29T12:36:38Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/vanhouten190th/status/1164386959566835713',
          provider: '片岡物産 バンホーテンココア',
          way: 'Twitter',
          category: [
            'foods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9085,
          name: '[大阪]映画『記憶にございません！』試写会招待券',
          winner: 700,
          'image_url': 'https://www.chance.com/image/prizeimg/5d64b812630af.jpg',
          'created_at': '2019-08-29T12:36:43Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://www.mbs.jp/movie/preview/1565252939.shtml',
          provider: '毎日放送',
          way: '応募が簡単',
          category: [
            'movie',
            'ticket'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9603,
          name: 'Amazonギフト券500円分',
          winner: 100,
          'image_url': 'https://pbs.twimg.com/media/EDFtznJU4AAmQKM.jpg',
          'created_at': '2019-08-29T20:30:01Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/1234617955/status/1166834515563577345',
          provider: '小学館 じゃじゃじゃじゃん®',
          way: 'Twitter',
          category: [
            'gift'
          ],
          'is_oneclick': true,
          'twitter_way': [
            'フォロー',
            'リツイート'
          ],
          'twitter_raw': ''
        },
        {
          id: 9094,
          name: 'コイケヤ人気商品詰め合わせ',
          winner: 100,
          'image_url': 'https://www.chance.com/image/prizeimg/5d65cc0c1a6c3.jpg',
          'created_at': '2019-08-29T12:36:47Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://koikeya.co.jp/campaign/oyatsu20190801/index.html',
          provider: '湖池屋',
          way: '会員登録',
          category: [
            'foods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 6298,
          name: '房総えびせんべい',
          winner: 3,
          'image_url': 'https://www.chance.com/image/prizeimg/5d48e3dd92c60.jpg',
          'created_at': '2019-08-10T22:08:59Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://tori-dori.com/kanto/2019/08/02/58213/',
          provider: '株式会社バドインターナショナル トリドリ',
          way: 'Twitter',
          category: [
            'foods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9124,
          name: '[大阪]映画『王様になれ』試写会招待券',
          winner: 45,
          'image_url': 'https://www.chance.com/image/prizeimg/5d64b78c2edf1.jpg',
          'created_at': '2019-08-29T12:36:57Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://funky802.com/pages/pickup_detail/5809',
          provider: 'FM802',
          way: '応募が簡単',
          category: [
            'movie',
            'ticket'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9125,
          name: 'お食事券4000円分',
          winner: 10,
          'image_url': 'https://www.chance.com/image/prizeimg/5d64b82c28c11.jpg',
          'created_at': '2019-08-29T12:36:57Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/gusto_official/status/1164736786461077504',
          provider: 'すかいらーく ガスト',
          way: 'Twitter',
          category: [
            'foods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9126,
          name: 'ピップエレキバン、ピップマグネループ',
          winner: 20,
          'image_url': 'https://www.chance.com/image/prizeimg/5d64b71236033.jpg',
          'created_at': '2019-08-29T12:36:57Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://elekiban.com/special/contract/',
          provider: 'ピップ株式会社',
          way: 'Twitter',
          category: [
            'sports'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 7364,
          name: '「ルックプラス」アイテム一式',
          winner: 3,
          'image_url': 'https://www.chance.com/image/prizeimg/5d4a59f34957a.png',
          'created_at': '2019-08-19T21:52:39Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://genki-mama.com/articles/etAua',
          provider: '株式会社YE Communications',
          way: '応募が簡単',
          category: [
            'daily'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9160,
          name: 'ルックプラス 4アイテムセット',
          winner: 3,
          'image_url': 'https://www.chance.com/image/prizeimg/5d637324cda24.jpg',
          'created_at': '2019-08-29T12:37:22Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://les.living.jp/app/user/SPUSC010.php?eid=EN00045081uFirPz&jncpg=on',
          provider: 'サンケイリビング新聞社',
          way: '会員登録',
          category: [
            'daily'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8138,
          name: 'ROAST MASTER 豆',
          winner: 5,
          'image_url': 'https://www.chance.com/image/prizeimg/5d57fa4e71983.jpg',
          'created_at': '2019-08-24T01:00:02Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://www.bs-tbs.co.jp/present/form.html?id=1109',
          provider: 'BS-TBS',
          way: '応募が簡単',
          category: [
            'foods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8149,
          name: '羽毛肌掛け布団、枕',
          winner: 204,
          'image_url': 'https://www.chance.com/image/prizeimg/5d56771496085.jpg',
          'created_at': '2019-08-24T01:00:07Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://monipla.com/toyoumo/campaigns/23367',
          provider: '東洋羽毛工業株式会社',
          way: '会員登録',
          category: [
            'gift',
            'goods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8150,
          name: 'おいしい減塩 さきいか',
          winner: 30,
          'image_url': 'https://www.chance.com/image/prizeimg/5d567620eef02.jpg',
          'created_at': '2019-08-24T01:00:07Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://monipla.com/goshoku/campaigns/23435',
          provider: '株式会社合食',
          way: '会員登録',
          category: [
            'foods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 7399,
          name: '[栃木]全室離れの宿 楓音 ペア宿泊券',
          winner: 2,
          'image_url': 'https://www.chance.com/image/prizeimg/5d55118b63050.jpg',
          'created_at': '2019-08-19T21:52:54Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://prize.travel.rakuten.co.jp/frt/detail.do?f_no=158803',
          provider: '塩原温泉 全室離れの宿 楓音',
          way: '会員登録',
          category: [
            'travel'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 7400,
          name: '[栃木]塩原温泉 四季味亭ふじや 宿泊券',
          winner: 2,
          'image_url': 'https://www.chance.com/image/prizeimg/5d551034b2d46.jpg',
          'created_at': '2019-08-19T21:52:55Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://prize.travel.rakuten.co.jp/frt/detail.do?f_no=68477',
          provider: '塩原温泉 四季味亭ふじや',
          way: '会員登録',
          category: [
            'travel'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8699,
          name: 'Amazonギフト券500円分',
          winner: 40,
          'image_url': 'https://www.chance.com/image/prizeimg/5d5f954b6259e.jpg',
          'created_at': '2019-08-26T22:42:06Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/coroMonta/status/1164759270195208196',
          provider: '株式会社ナンバーナイン',
          way: 'Twitter',
          category: [
            'gift'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8191,
          name: 'ご当地シャトル付きソウルorプサンツアー',
          winner: 2,
          'image_url': 'https://www.chance.com/image/prizeimg/5d566d6d54c22.jpg',
          'created_at': '2019-08-24T01:00:26Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/airtrip_corp/status/1162272801891373058',
          provider: '株式会社エアトリ',
          way: 'Twitter',
          category: [
            'travel'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 7373,
          name: 'カゴメ商品詰め合わせセット',
          winner: 30,
          'image_url': 'https://www.chance.com/image/prizeimg/5d565280a8471.jpg',
          'created_at': '2019-08-19T21:52:43Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T18:00:00Z',
          link: 'https://www.kagome.co.jp/campaign/linefriend/',
          provider: 'カゴメ',
          way: 'LINE',
          category: [
            'foods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        }
      ]
    },
    '2': {
      no: 2,
      renderType: 'largeCard',
      heading: 'おいしい食べ物を当てよう',
      'image_url': 'https://prizz.jp/assets/img/foods_min.jpg',
      link: '/category/foods'
    },
    '3': {
      no: 3,
      renderType: 'threeCards',
      heading: '旅行に行こう',
      endpoint: 'category/travel?limit=9',
      contents: [
        {
          id: 7400,
          name: '[栃木]塩原温泉 四季味亭ふじや 宿泊券',
          winner: 2,
          'image_url': 'https://www.chance.com/image/prizeimg/5d551034b2d46.jpg',
          'created_at': '2019-08-19T21:52:55Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://prize.travel.rakuten.co.jp/frt/detail.do?f_no=68477',
          provider: '塩原温泉 四季味亭ふじや',
          way: '会員登録',
          category: [
            'travel'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8191,
          name: 'ご当地シャトル付きソウルorプサンツアー',
          winner: 2,
          'image_url': 'https://www.chance.com/image/prizeimg/5d566d6d54c22.jpg',
          'created_at': '2019-08-24T01:00:26Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://twitter.com/airtrip_corp/status/1162272801891373058',
          provider: '株式会社エアトリ',
          way: 'Twitter',
          category: [
            'travel'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9034,
          name: 'ハワイ ペア旅行、トートバッグ',
          winner: 19,
          'image_url': 'https://www.chance.com/image/prizeimg/5d664f4092f38.jpg',
          'created_at': '2019-08-29T12:36:18Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'http://shiro-t-audition.hanesjapan.com/',
          provider: 'ヘインズブランズ ジャパン',
          way: 'Twitter',
          category: [
            'goods',
            'travel'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 7399,
          name: '[栃木]全室離れの宿 楓音 ペア宿泊券',
          winner: 2,
          'image_url': 'https://www.chance.com/image/prizeimg/5d55118b63050.jpg',
          'created_at': '2019-08-19T21:52:54Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://prize.travel.rakuten.co.jp/frt/detail.do?f_no=158803',
          provider: '塩原温泉 全室離れの宿 楓音',
          way: '会員登録',
          category: [
            'travel'
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
          id: 9173,
          name: '[三重]里創人 熊野倶楽部 ペア宿泊券',
          winner: 2,
          'image_url': 'https://www.chance.com/image/prizeimg/5d62806492c0f.jpg',
          'created_at': '2019-08-29T12:37:30Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://prize.travel.rakuten.co.jp/frt/detail.do?f_no=79395',
          provider: '里創人 熊野倶楽部',
          way: '会員登録',
          category: [
            'travel'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 4016,
          name: '豪華客船「飛鳥」1泊2日クルーズ旅行',
          winner: 4,
          'image_url': 'https://www.chance.com/image/prizeimg/5cff9bdf10f7f.jpg',
          'created_at': '2019-07-14T21:12:47Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'http://www.simmons.co.jp/2019spring/',
          provider: 'シモンズ株式会社',
          way: 'アンケート',
          category: [
            'travel'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 6301,
          name: '[福島]若松屋旅館宿泊券',
          winner: 2,
          'image_url': 'https://www.chance.com/image/prizeimg/5d48e0757058a.jpg',
          'created_at': '2019-08-10T22:09:00Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'http://www.fun.ne.jp/utsukushima/enquete.htm',
          provider: 'ナフメディア株式会社',
          way: 'クイズ',
          category: [
            'travel'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8136,
          name: '[栃木]ウェルネスの森 那須 ペア宿泊券',
          winner: 2,
          'image_url': 'https://www.chance.com/image/prizeimg/5d58b446e664c.jpg',
          'created_at': '2019-08-24T01:00:01Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://prize.travel.rakuten.co.jp/frt/detail.do?f_no=28693',
          provider: '那須温泉 ウェルネスの森 那須',
          way: '会員登録',
          category: [
            'travel'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        }
      ]
    },
    '4': {
      no: 4,
      renderType: 'horizontalScroll',
      heading: '大量当選！',
      endpoint: 'winner',
      'ad_link': 'https://px.a8.net/svt/ejp?a8mat=3591N0+7KOLDU+3NEK+609HT',
      'ad_image': 'https://www25.a8.net/svt/bgt?aid=190218636458&wid=003&eno=01&mid=s00000017030001009000&mc=1',
      'ad_tracking': 'https://www11.a8.net/0.gif?a8mat=3591N0+7KOLDU+3NEK+609HT',
      'ad_name': '【AD】Android限定！モニター募集中！',
      'ad_number': '1000',
      contents: [
        {
          id: 8717,
          name: '紅茶花伝 ロイヤルミルクティー',
          winner: 80000,
          'image_url': 'https://www.chance.com/image/prizeimg/5d5e39db17000.jpg',
          'created_at': '2019-08-26T22:42:13Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-02T00:00:00Z',
          link: 'https://c.cocacola.co.jp/kochakaden/campaign/teaser.html',
          provider: '日本コカ･コーラ',
          way: 'Twitter',
          category: [
            'foods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 7509,
          name: 'キュレル ボディウォッシュ サンプル',
          winner: 50000,
          'image_url': 'https://www.chance.com/image/prizeimg/5d42661b647a0.jpg',
          'created_at': '2019-08-19T21:56:15Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-10-01T00:00:00Z',
          link: 'https://www.kao.co.jp/curel/special/19bodywash/',
          provider: '花王',
          way: 'アンケート',
          category: [
            'daily'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 6285,
          name: 'キュレル リップケア サンプルセット',
          winner: 50000,
          'image_url': 'https://www.chance.com/image/prizeimg/5d4265970d034.jpg',
          'created_at': '2019-08-10T22:08:48Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-30T00:00:00Z',
          link: 'https://www.kao.co.jp/curel/special/19lipcare/',
          provider: '花王',
          way: 'アンケート',
          category: [
            'cosmetics'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 4417,
          name: '「森永ピノ」無料引き換え電子クーポン',
          winner: 30000,
          'image_url': 'https://www.chance.com/image/prizeimg/5d2fe92952f9a.jpg',
          'created_at': '2019-07-23T05:40:45Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://rurubu.jp/andmore/article/8212?utm_source=chance-it&utm_medium=referral&utm_campaign=id-registration201907',
          provider: 'JTBパブリッシング',
          way: '会員登録',
          category: [
            'foods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 7990,
          name: 'ロボット掃除機、コードレスクリーナー',
          winner: 10020,
          'image_url': 'https://www.chance.com/image/prizeimg/5d5e04c8591e0.jpg',
          'created_at': '2019-08-24T00:58:38Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-11-01T00:00:00Z',
          link: 'https://park.sjnk.co.jp/campaign/ins_201909-10_enq/index.html',
          provider: '損害保険ジャパン日本興亜株式会社',
          way: '会員登録',
          category: [
            'appliance',
            'foods',
            'toy'
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
          id: 9039,
          name: 'ロリエ スリムガード 3日間体験サンプル',
          winner: 10000,
          'image_url': 'https://www.chance.com/image/prizeimg/5d6634574c292.jpg',
          'created_at': '2019-08-29T12:36:19Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://www.kao.co.jp/laurier/slim/',
          provider: '花王',
          way: 'アンケート',
          category: [
            'daily'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 4803,
          name: '新PYUAN全5種サンプルセット',
          winner: 10000,
          'image_url': 'https://www.chance.com/image/prizeimg/5d2d23b2752df.jpg',
          'created_at': '2019-07-29T22:03:34Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://twitter.com/PYUAN_official',
          provider: '花王',
          way: 'Twitter',
          category: [
            'daily'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 6372,
          name: '中性重炭酸入浴剤 BARTH',
          winner: 10000,
          'image_url': 'https://www.chance.com/image/prizeimg/5d468a04817c4.jpg',
          'created_at': '2019-08-10T22:09:40Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://barth.jp/lp/bath_before_bed/',
          provider: '株式会社ＴＷＯ',
          way: 'Twitter',
          category: [
            'daily'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8673,
          name: 'GACKTと2ショット撮影体験',
          winner: 3020,
          'image_url': 'https://www.chance.com/image/prizeimg/5d6341116f711.jpg',
          'created_at': '2019-08-26T22:41:53Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-10-16T00:00:00Z',
          link: 'https://www.sumifru-shop.jp/fs/sumifru/sumifru-products/detail_k_premium_2?a8=4HmERHely_WYB_LgD7-dWYYcmNNA-lqBc7WHr2jirc9ly_mdtBjisBjqr_FKjKO-UcMBLkmqUHmEzs00000020133001',
          provider: '株式会社スミフルジャパン',
          way: '商品購入',
          category: [
            'gift',
            'other'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        }
      ]
    },
    '5': {
      no: 5,
      renderType: 'threeCards',
      heading: '最新ゲームを手に入れよう！',
      endpoint: 'category/toy?limit=8',
      contents: [
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
          id: 9097,
          name: 'Nintendo Switch',
          winner: 33,
          'image_url': 'https://www.chance.com/image/prizeimg/5d652c5174d48.jpg',
          'created_at': '2019-08-29T12:36:48Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://twitter.com/hottomotto_com/status/1162876859840962560',
          provider: 'プレナス ほっともっと',
          way: 'Twitter',
          category: [
            'foods',
            'toy'
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
          id: 8011,
          name: '読売新聞オリジナル ピカチュウフィギュア',
          winner: 20,
          'image_url': 'https://www.chance.com/image/prizeimg/5d5d33f588b8a.jpg',
          'created_at': '2019-08-24T00:58:49Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://yomipo.yomiuri.co.jp/present/detail/1983',
          provider: '読売新聞社',
          way: '会員登録',
          category: [
            'toy'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9002,
          name: 'はらぺこあおむし ストレージチェア',
          winner: 2,
          'image_url': 'https://pbs.twimg.com/media/ECu1jeFU8AAxd1n.jpg',
          'created_at': '2019-08-27T00:40:38Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-02T00:00:00Z',
          link: 'https://twitter.com/371711140/status/1165226022666559489',
          provider: 'kodomoe（コドモエ）',
          way: 'Twitter',
          category: [
            'goods',
            'toy'
          ],
          'is_oneclick': true,
          'twitter_way': [
            'フォロー',
            'リツイート'
          ],
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
        }
      ]
    },
    '6': {
      no: 6,
      renderType: 'largeCard',
      heading: 'Amazonカードを当てよう！',
      'image_url': 'https://prizz.jp/assets/img/amazon-card_min.jpg',
      link: '/category/gift'
    },
    '7': {
      no: 7,
      renderType: 'quadCards',
      heading: '車を当てよう！',
      endpoint: 'category/vehicle?limit=8',
      contents: [
        {
          id: 4836,
          name: 'ホンダ N-BOX（新車）',
          winner: 1,
          'image_url': 'https://www.chance.com/image/prizeimg/5d3964b4b185d.gif',
          'created_at': '2019-07-29T22:04:00Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-12-26T00:00:00Z',
          link: 'https://www.carseven.co.jp/cmp/2019nbox',
          provider: 'カーセブン',
          way: 'クイズ',
          category: [
            'vehicle'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        }
      ]
    },
    '9': {
      no: 9,
      renderType: 'threeCards',
      heading: '服を当てよう！',
      endpoint: 'category/fashion?limit=8',
      contents: [
        {
          id: 4018,
          name: 'アヒージョ鍋、オラメヒコBAG',
          winner: 120,
          'image_url': 'https://www.chance.com/image/prizeimg/5cff316c467b5.jpg',
          'created_at': '2019-07-14T21:12:48Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'http://www.oldelpaso.jp/',
          provider: 'オールドエルパソ',
          way: '商品購入',
          category: [
            'fashion',
            'gift',
            'kitchen'
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
          id: 3882,
          name: 'MONOリュック、MONOスニーカー',
          winner: 60,
          'image_url': 'https://www.chance.com/image/prizeimg/5d19a1ce2ff0b.jpg',
          'created_at': '2019-07-14T21:11:38Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://www.tombow.com/cp/mono50th/?utm_source=luckle&amp;utm_medium=link&amp;utm_campaign=mono50',
          provider: '株式会社トンボ鉛筆',
          way: 'Twitter',
          category: [
            'fashion'
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
          id: 7994,
          name: 'CASIO Baby-G「G-LIDE」',
          winner: 3,
          'image_url': 'https://www.chance.com/image/prizeimg/5d5e00dc1bb97.jpg',
          'created_at': '2019-08-24T00:58:40Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://www.instagram.com/p/B1Kw2OZgKAc/',
          provider: '株式会社　阪急交通社',
          way: 'Instagram',
          category: [
            'fashion'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 9048,
          name: 'スポーツブラ、フラットフィットパンツ',
          winner: 13,
          'image_url': 'https://www.chance.com/image/prizeimg/5d66216c23454.jpg',
          'created_at': '2019-08-29T12:36:23Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://member.wacoal.jp/campaigns/17537',
          provider: 'ワコール',
          way: '会員登録',
          category: [
            'fashion',
            'goods',
            'other',
            'ticket'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 7493,
          name: 'MONOオリジナルグッズ',
          winner: 60,
          'image_url': 'https://www.chance.com/image/prizeimg/5d5502f1c006e.jpg',
          'created_at': '2019-08-19T21:56:07Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://www.tombow.com/cp/mono50th/#utm_source=Kensho&utm_medium=link&utm_campaign=mono50',
          provider: '株式会社トンボ鉛筆',
          way: 'Twitter',
          category: [
            'fashion',
            'goods'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        }
      ]
    },
    '11': {
      no: 11,
      renderType: 'quadCards',
      heading: '日用品を当てよう！',
      endpoint: 'category/daily?limit=4',
      contents: [
        {
          id: 9160,
          name: 'ルックプラス 4アイテムセット',
          winner: 3,
          'image_url': 'https://www.chance.com/image/prizeimg/5d637324cda24.jpg',
          'created_at': '2019-08-29T12:37:22Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://les.living.jp/app/user/SPUSC010.php?eid=EN00045081uFirPz&jncpg=on',
          provider: 'サンケイリビング新聞社',
          way: '会員登録',
          category: [
            'daily'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 7364,
          name: '「ルックプラス」アイテム一式',
          winner: 3,
          'image_url': 'https://www.chance.com/image/prizeimg/5d4a59f34957a.png',
          'created_at': '2019-08-19T21:52:39Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-08-31T00:00:00Z',
          link: 'https://genki-mama.com/articles/etAua',
          provider: '株式会社YE Communications',
          way: '応募が簡単',
          category: [
            'daily'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 3867,
          name: '健康アイテム詰合せ',
          winner: 170,
          'image_url': 'https://www.chance.com/image/prizeimg/5d1ab7716224b.jpg',
          'created_at': '2019-07-14T21:11:31Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'http://www.jsmi.jp/present/1907/',
          provider: '日本OTC医薬品協会',
          way: 'アンケート',
          category: [
            'cosmetics',
            'daily',
            'foods',
            'sports'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        },
        {
          id: 8094,
          name: 'ウォシュボ ハーバル薬用ハンドソープ',
          winner: 5,
          'image_url': 'https://www.chance.com/image/prizeimg/5d57b08d20b66.jpg',
          'created_at': '2019-08-24T00:59:39Z',
          'updated_at': '0001-01-01T00:00:00Z',
          'limit_date': '2019-09-01T00:00:00Z',
          link: 'https://www.kids-station.com/tv/present/detail.aspx?topic=6289',
          provider: '株式会社キッズステーション',
          way: 'アンケート',
          category: [
            'daily'
          ],
          'is_oneclick': false,
          'twitter_way': null,
          'twitter_raw': ''
        }
      ]
    },
    '101': {
      no: 101,
      renderType: 'categoryList',
      heading: 'カテゴリ一覧'
    }
  }
  : {}

const initialLayout = process.env.NODE_ENV === 'storybook'
  ? [
    {
      'no': 0,
      'renderType': 'topImage',
      'heading': '懸賞を、もっと楽しく',
      'image_url': 'https://prizz.jp/assets/img/awesome_min.jpg'
    },
    {
      'no': 1,
      'renderType': 'horizontalScroll',
      'heading': 'もうすぐ締め切り！',
      'endpoint': 'deadline?limit=30',
      'ad_link': 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
      'ad_image': 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
      'ad_tracking': 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
      'ad_name': '【AD】ワゴンRが当たる！',
      'ad_number': '1000'
    },
    {
      'no': 2,
      'renderType': 'largeCard',
      'heading': 'おいしい食べ物を当てよう',
      'image_url': 'https://prizz.jp/assets/img/foods_min.jpg',
      'link': '/category/foods'
    },
    {
      'no': 101,
      'renderType': 'categoryList',
      'heading': 'カテゴリ一覧'
    },
    {
      'no': 3,
      'renderType': 'threeCards',
      'heading': '旅行に行こう',
      'endpoint': 'category/travel?limit=9'
    },
    {
      'no': 4,
      'renderType': 'horizontalScroll',
      'heading': '大量当選！',
      'endpoint': 'winner',
      'ad_link': 'https://px.a8.net/svt/ejp?a8mat=3591N0+7KOLDU+3NEK+609HT',
      'ad_image': 'https://www25.a8.net/svt/bgt?aid=190218636458&wid=003&eno=01&mid=s00000017030001009000&mc=1',
      'ad_tracking': 'https://www11.a8.net/0.gif?a8mat=3591N0+7KOLDU+3NEK+609HT',
      'ad_name': '【AD】Android限定！モニター募集中！',
      'ad_number': '1000'
    },
    {
      'no': 5,
      'renderType': 'threeCards',
      'heading': '最新ゲームを手に入れよう！',
      'endpoint': 'category/toy?limit=8'
    },
    {
      'no': 6,
      'renderType': 'largeCard',
      'heading': 'Amazonカードを当てよう！',
      'image_url': 'https://prizz.jp/assets/img/amazon-card_min.jpg',
      'link': '/category/gift'
    },
    {
      'no': 7,
      'renderType': 'quadCards',
      'heading': '車を当てよう！',
      'endpoint': 'category/vehicle?limit=8'
    },
    {
      'no': 8,
      'renderType': 'horizontalScroll',
      'heading': '雑貨を当てよう！',
      'endpoint': 'category/goods?limit=30',
      'ad_link': 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
      'ad_image': 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
      'ad_tracking': 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
      'ad_name': '【AD】ワゴンRが当たる！',
      'ad_number': '1000'
    },
    {
      'no': 9,
      'renderType': 'threeCards',
      'heading': '服を当てよう！',
      'endpoint': 'category/fashion?limit=8'
    },
    {
      'no': 10,
      'renderType': 'horizontalScroll',
      'heading': '当選人数が多い順！！！',
      'endpoint': 'winner?limit=30',
      'ad_link': 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
      'ad_image': 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
      'ad_tracking': 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
      'ad_name': '【AD】ワゴンRが当たる！',
      'ad_number': '1000'
    },
    {
      'no': 11,
      'renderType': 'quadCards',
      'heading': '日用品を当てよう！',
      'endpoint': 'category/daily?limit=4'
    },
    {
      'no': 12,
      'renderType': 'horizontalScroll',
      'heading': 'Twitter懸賞！',
      'endpoint': 'way/twitter?limit=30',
      'ad_link': 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
      'ad_image': 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
      'ad_tracking': 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
      'ad_name': '【AD】ワゴンRが当たる！',
      'ad_number': '1000'
    },
    {
      'no': 101,
      'renderType': 'categoryList',
      'heading': 'カテゴリ一覧'
    }
  ]
  : []

const contents = (state = initialContents, { type, content, no }: {type: string, content: {}, no: number}) => {
  switch (type) {
    case 'SET_HOME_CONTENTS': return {
      ...state,
      [no]: content
    }
    default: return state
  }
}
const layout = (state = initialLayout, { type, layout }: {type: string, layout: []}) => {
  switch (type) {
    case 'SET_HOME_LAYOUT': return layout
    default: return state
  }
}

export default combineReducers({
  contents,
  layout
})
