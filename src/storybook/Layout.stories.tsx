import { storiesOf } from '@storybook/react'
import React from 'react'
import CategoryList from '#/components/Layout/CategoryList'
import HorizontalScroll from '#/components/Layout/HorizontalScroll'
import LargeCard from '#/components/Layout/LargeCard'
import QuadCards from '#/components/Layout/QuadCards'
import ThreeCards from '#/components/Layout/ThreeCards'
import TopCarousel from '#/components/Layout/TopCarousel'
import TopImage from '#/components/Layout/TopImage'

const layoutTopImage = {
  no: 0,
  renderType: 'topImage',
  heading: '懸賞を、もっと楽しく',
  'image_url': 'https://prizz.jp/assets/img/awesome_min.jpg'
}

const layoutCategoryList = {
  no: 101,
  renderType: 'categoryList',
  heading: 'カテゴリ一覧'
}

const categoryList = {
  'appliance': '家電・パソコン',
  'baby': 'ベビー・キッズ',
  'books': '本・CD・DVD',
  'cash': '現金',
  'cosmetics': 'コスメ・美容',
  'daily': '日用品',
  'fashion': 'ファッション',
  'foods': '食料品・ドリンク',
  'gift': '商品券・ギフト券',
  'goods': '雑貨・インテリア',
  'kitchen': 'キッチン用品',
  'movie': '映画・試写会',
  'sports': '健康・スポーツ',
  'stationery': '文具',
  'ticket': '招待・優待券',
  'toy': 'ゲーム・おもちゃ',
  'travel': '旅行・宿泊',
  'vehicle': '車・バイク・自転車',
  'other': 'その他'
}

const layoutHorizontalScroll = {
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
}

const layoutLargeCard = {
  no: 2,
  renderType: 'largeCard',
  heading: 'おいしい食べ物を当てよう',
  'image_url': 'https://prizz.jp/assets/img/foods_min.jpg',
  link: '/category/foods'
}

const layoutThreeCards = {
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
}

const layoutQuadCards = {
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
    },
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
    },
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
    },
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
}

const showId = () => ({})

storiesOf('Layout', module)
  .add('TopCarousel', () => <TopCarousel />)
  .add('TopImage', () => <TopImage content={layoutTopImage as LayoutTopImage}/>)
  .add('CategoryList', () => <CategoryList content={layoutCategoryList as LayoutCategoryList} categoryList={categoryList}/>)
  .add('HorizontalScroll', () => <HorizontalScroll content={layoutHorizontalScroll as any} showId={showId}/>)
  .add('LargeCard', () => <LargeCard content={layoutLargeCard as LayoutLargeCard}/>)
  .add('ThreeCards', () => <ThreeCards content={layoutThreeCards as LayoutThreeCards} showId={showId}/>)
  .add('QuadCards', () => <QuadCards content={layoutQuadCards as LayoutQuadCards} showId={showId}/>)
