import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { Provider } from 'react-redux'
import { store } from '../../index'

// import HorizontalScroll from './HomeLayout/HorizontalScroll'
import Home from './Home'

const contents = {
  '0': {
    no: 0,
    renderType: 'topImage',
    heading: '懸賞を、もっと楽しく',
    image_url: 'https://prizz.jp/assets/img/awesome_min.jpg'
  },
  '1': {
    no: 1,
    renderType: 'horizontalScroll',
    heading: 'もうすぐ締め切り！',
    endpoint: 'deadline?limit=30',
    ad_link: 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_image: 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
    ad_tracking: 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_name: '【AD】ワゴンRが当たる！',
    ad_number: '1000',
    contents: [
      {
        id: 6201,
        name: 'ベネフィーク ドゥース ローション',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a57e7a1248.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-22T10:00:00Z',
        link: 'https://maquia.hpplus.jp/special/mq/benefique1907/',
        provider: '集英社 MAQUIA',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 7510,
        name: '出水酒造「赤鶴」1800ml',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d51014aa81c6.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-22T10:00:00Z',
        link: 'http://www.tv-osaka.co.jp/ip4/presents/1343457_10931.html',
        provider: 'テレビ大阪',
        way: '応募が簡単',
        category: [
          'foods'
        ]
      },
      {
        id: 6258,
        name: '氷熟梅ワイン2019',
        winner: 20,
        image_url: 'https://www.chance.com/image/prizeimg/5d424362a34ae.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:34Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-22T12:00:00Z',
        link: 'http://www.choya.co.jp/campaign/umewine_2019/',
        provider: 'チョーヤ梅酒株式会社',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7395,
        name: '[東京]映画『最高の人生の見つけ方』試写会招待券',
        winner: 20,
        image_url: 'https://www.chance.com/image/prizeimg/5d5521485e7da.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:52Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-22T13:00:00Z',
        link: 'https://secure.oricon.co.jp/present/53438/',
        provider: 'オリコン株式会社',
        way: '',
        category: [
          'movie',
          'ticket'
        ]
      },
      {
        id: 7425,
        name: '映画『引っ越し大名』プレスシート',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d54fdb0938f1.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:19Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://shop.fukuske.com/sp/hikkoshi-movie/',
        provider: '福助',
        way: 'Twitter',
        category: [
          'fashion',
          'other'
        ]
      },
      {
        id: 7464,
        name: '[東京]映画『今さら言えない小さな秘密』試写会招待券',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d53ec487da04.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:55:49Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.tokyo-np.co.jp/cinema/imasaraienai/',
        provider: '東京新聞',
        way: '応募が簡単',
        category: [
          'movie',
          'ticket'
        ]
      },
      {
        id: 7479,
        name: 'フジッコ うまミネラルチャージセット',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d50d784da510.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:55:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://news.mynavi.jp/article/20190807-present02/',
        provider: '株式会社マイナビ',
        way: '会員登録',
        category: [
          'foods'
        ]
      },
      {
        id: 7487,
        name: '手づくり石けん バラとはちみつ',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d500012345b3.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.lettuceclub.net/present/1632/',
        provider: '株式会社KADOKAWA レタスクラブ',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 7518,
        name: 'Bluetoothキーボード',
        winner: 4,
        image_url: 'https://www.chance.com/image/prizeimg/5d50d735e1b53.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:19Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://news.mynavi.jp/article/20190807-present01/',
        provider: '株式会社マイナビ',
        way: '会員登録',
        category: [
          'appliance'
        ]
      },
      {
        id: 6241,
        name: '台湾往復航空券',
        winner: 9,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a2e90d6588.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:22Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.enjoytokyo.jp/feature/pr/evaair/',
        provider: 'レッツエンジョイ東京　(株式会社ぐるなび）',
        way: 'アンケート',
        category: [
          'goods',
          'travel'
        ]
      },
      {
        id: 4714,
        name: 'ジャンヌ・アルテス フレグランス',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d3848336e7eb.jpg',
        image_bin: '',
        created_at: '2019-07-26T15:53:38Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://sgs109.com/p/10474/',
        provider: '株式会社アリュクス ストリートガールズスナップ',
        way: 'Twitter',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 6267,
        name: '[東京]映画『ターミネーター：ニュー・フェイト』イベント招待券',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d48f0041edb3.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'http://www.music-lounge.jp/v2/articl/pickup/detail/?articl=2019/08/05-14:37:00_c33dd113cff04c99f27a8c89d459eabf',
        provider: 'MUSIC LOUNGE',
        way: 'アンケート',
        category: [
          'movie',
          'ticket'
        ]
      },
      {
        id: 7547,
        name: 'ペアパスタプレート+テーブルスプーン',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d50bb43c4859.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:36Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://kinmugistyle.jp/recipe/190809/',
        provider: 'サントリー',
        way: 'クイズ',
        category: [
          'goods'
        ]
      },
      {
        id: 5519,
        name: 'サンリオキャラクターズ リップスティック',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d405be4ce80d.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:06:19Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://sgs109.com/p/10471/',
        provider: '株式会社アリュクス ストリートガールズスナップ',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 7574,
        name: 'おふろであそぼう！まるぷかアンパンマン',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d4fc65c89c7f.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:49Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.babycome.ne.jp/present/detail/311/',
        provider: 'ベビカム株式会社',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 7578,
        name: 'アンパンマンふりっこリズム',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d4e7ce3cbae3.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:50Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.babycome.ne.jp/present/detail/310/',
        provider: 'ベビカム株式会社',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 7579,
        name: 'ヤーマン ボディケア美容器',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d4d43456805c.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:51Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://twitter.com/alluxeweb/status/1159760544095539201',
        provider: 'alluxeWEB公式（アリュクス）twitter',
        way: 'Twitter',
        category: [
          'appliance'
        ]
      },
      {
        id: 7356,
        name: 'ドラマ「Heaven?」ランチョンマット',
        winner: 4,
        image_url: 'https://www.chance.com/image/prizeimg/5d57a4ba21cda.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:36Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://thetv.jp/present/weekly/2692ef127511ae6cdf8478286e90df477473f4d6_1/',
        provider: '株式会社KADOKAWA ザ テレビジョン',
        way: '商品購入',
        category: [
          'goods'
        ]
      },
      {
        id: 7370,
        name: '完全ワイヤレスイヤホン専用イヤーピース',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d566cbd1d4df.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:41Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://twitter.com/biccameraE/status/1162273795555487748',
        provider: 'ビックカメラ',
        way: 'Twitter',
        category: [
          'appliance'
        ]
      },
      {
        id: 4570,
        name: '消臭ソックス',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d355cab39d66.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:06:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'http://akashi-suc.jp/company/newsrelease/webdir/119.html',
        provider: '株式会社 明石スクールユニフォームカンパニー',
        way: 'Instagram',
        category: [
          'fashion'
        ]
      },
      {
        id: 7392,
        name: 'カネボウリクイドニュアンスルージュ',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d552a209efb4.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:51Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.kanebo-global.com/jp/ja/campaign/metal-lip_1906/',
        provider: 'カネボウ化粧品',
        way: 'Twitter',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 7410,
        name: '[東京]映画『ザ・タワー』試写会招待券',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d53ec9f398b3.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:04Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.tokyo-np.co.jp/cinema/TheTower/',
        provider: '東京新聞',
        way: '応募が簡単',
        category: [
          'movie',
          'ticket'
        ]
      },
      {
        id: 7411,
        name: 'Xフライドポテト無料券',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5d5791f1bdbb7.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:04Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.ministop.co.jp/campaign/Xpotato_cp/',
        provider: 'ミニストップ株式会社',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7427,
        name: '敏感肌用クレンジング水',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d54f74221ec5.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:21Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T10:00:00Z',
        link: 'https://maquia.hpplus.jp/cosme/genre/1/item/27/item_id/149649/top',
        provider: '集英社 MAQUIA',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 4362,
        name: 'リゾートツアー、ザバスセット',
        winner: 304,
        image_url: 'https://www.chance.com/image/prizeimg/5d1ea14b035e2.jpg',
        image_bin: '',
        created_at: '2019-07-23T05:40:08Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T10:00:00Z',
        link: 'https://www.meiji.co.jp/sports/savas/cmp/open190625/',
        provider: '明治',
        way: 'Twitter',
        category: [
          'foods',
          'gift',
          'sports',
          'travel'
        ]
      },
      {
        id: 7500,
        name: 'ダイヤモンドコートパン',
        winner: 17,
        image_url: 'https://www.chance.com/image/prizeimg/5d53e1033da4e.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:10Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T10:00:00Z',
        link: 'https://www.irisplaza.co.jp/Index.php?KB=PRESENT&adver=kensho&type=kensho&utm_content=PRESENT&camp=0809kensyoPRE',
        provider: '株式会社アイリスプラザ',
        way: 'アンケート',
        category: [
          'foods',
          'goods',
          'kitchen'
        ]
      },
      {
        id: 7585,
        name: 'リンクルリップエッセンスEX',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a583b9b2be.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:53Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T10:00:00Z',
        link: 'https://maquia.hpplus.jp/cosme/genre/1/item/80/item_id/153642/top',
        provider: '集英社 MAQUIA',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 7590,
        name: 'スーパーカップ超バニラ 一生分',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d4d3018e97b7.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T10:00:00Z',
        link: 'https://www.softbank.jp/socialmedia/campaigns/list/dc_190809/',
        provider: 'ソフトバンク',
        way: 'LINE',
        category: [
          'foods',
          'gift'
        ]
      },
      {
        id: 7366,
        name: 'ゲームソフト「クラッシュ・バンディクー」',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d56741375bd4.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T13:00:00Z',
        link: 'https://secure.oricon.co.jp/present/53433/',
        provider: 'オリコン株式会社',
        way: '',
        category: [
          'toy'
        ]
      },
      {
        id: 7368,
        name: 'サイン入りTシャツ又はタオル',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d5670d112c3e.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:41Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T15:00:00Z',
        link: 'https://twitter.com/JOBSPO1',
        provider: '株式会社ダブルループ',
        way: 'Twitter',
        category: [
          'fashion',
          'goods'
        ]
      }
    ]
  },
  '2': {
    no: 2,
    renderType: 'largeCard',
    heading: 'おいしい食べ物を当てよう',
    image_url: 'https://prizz.jp/assets/img/foods_min.jpg',
    link: '/category/foods'
  },
  '3': {
    no: 3,
    renderType: 'quadCards',
    heading: '旅行に行こう',
    endpoint: 'category/travel?limit=4',
    contents: [
      {
        id: 3992,
        name: '旅行券10万円',
        winner: 105,
        image_url: 'https://www.chance.com/image/prizeimg/5d099d24e83e5.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-12-27T13:00:00Z',
        link: 'https://www.jbrc-mob.com/campaign/',
        provider: '一般社団法人JBRC',
        way: 'クイズ',
        category: [
          'gift',
          'travel'
        ]
      },
      {
        id: 4084,
        name: 'JTB旅行券10万円分',
        winner: 23,
        image_url: 'https://www.chance.com/image/prizeimg/5c92f7055f556.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:13:23Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-12-07T00:00:00Z',
        link: 'https://www.hotelwing.co.jp/campaign2019/',
        provider: '株式会社フォーブス',
        way: '会員登録',
        category: [
          'appliance',
          'foods',
          'travel'
        ]
      },
      {
        id: 3789,
        name: '旅行ギフト、QUOカードや商品詰め合わせ',
        winner: 1500,
        image_url: 'https://www.chance.com/image/prizeimg/5d1ebe8b2c3c1.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:10:42Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'http://imuraya-cp.jp/mizuyokan_cp/?utm_source=PRchance&utm_medium=netad&utm_campaign=imuraya_mizuyokan',
        provider: '井村屋',
        way: '商品購入',
        category: [
          'appliance',
          'foods',
          'gift',
          'travel'
        ]
      },
      {
        id: 3936,
        name: 'ウエディングフォト付きハワイ旅行4泊6日',
        winner: 20,
        image_url: 'https://www.chance.com/image/prizeimg/5d13085d36b2d.png',
        image_bin: '',
        created_at: '2019-07-14T21:12:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://wedding.mynavi.jp/contents/pc/fr/campaign/h/201906_hawaii/?utm_source=point&utm_medium=hawaii_referral&utm_campaign=201906hawaii&utm_content=www.chance.com',
        provider: '株式会社マイナビ',
        way: 'クイズ',
        category: [
          'other',
          'travel'
        ]
      }
    ]
  },
  '4': {
    no: 4,
    renderType: 'horizontalScroll',
    heading: '大量当選！',
    endpoint: 'winner',
    ad_link: 'https://px.a8.net/svt/ejp?a8mat=3591N0+7KOLDU+3NEK+609HT',
    ad_image: 'https://www25.a8.net/svt/bgt?aid=190218636458&wid=003&eno=01&mid=s00000017030001009000&mc=1',
    ad_tracking: 'https://www11.a8.net/0.gif?a8mat=3591N0+7KOLDU+3NEK+609HT',
    ad_name: '【AD】Android限定！モニター募集中！',
    ad_number: '7',
    contents: [
      {
        id: 7509,
        name: 'キュレル ボディウォッシュ サンプル',
        winner: 50000,
        image_url: 'https://www.chance.com/image/prizeimg/5d42661b647a0.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kao.co.jp/curel/special/19bodywash/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 6285,
        name: 'キュレル リップケア サンプルセット',
        winner: 50000,
        image_url: 'https://www.chance.com/image/prizeimg/5d4265970d034.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-30T00:00:00Z',
        link: 'https://www.kao.co.jp/curel/special/19lipcare/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 4417,
        name: '「森永ピノ」無料引き換え電子クーポン',
        winner: 30000,
        image_url: 'https://www.chance.com/image/prizeimg/5d2fe92952f9a.jpg',
        image_bin: '',
        created_at: '2019-07-23T05:40:45Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://rurubu.jp/andmore/article/8212?utm_source=chance-it&utm_medium=referral&utm_campaign=id-registration201907',
        provider: 'JTBパブリッシング',
        way: '会員登録',
        category: [
          'foods'
        ]
      },
      {
        id: 4430,
        name: 'ロボット掃除機、コードレスクリーナー',
        winner: 10020,
        image_url: 'https://www.chance.com/image/prizeimg/5d3069914c296.jpg',
        image_bin: '',
        created_at: '2019-07-23T05:40:53Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://park.sjnk.co.jp/campaign/ins_201907-08_enq/index.html',
        provider: '損害保険ジャパン日本興亜株式会社',
        way: '会員登録',
        category: [
          'appliance',
          'foods',
          'goods',
          'stationery'
        ]
      },
      {
        id: 7503,
        name: '日本で一番売れてる化粧水ミニサンプル',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d5279fec8442.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:12Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-26T00:00:00Z',
        link: 'https://jp.rohto.com/keshousui/',
        provider: 'ロート製薬',
        way: 'Twitter',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 4803,
        name: '新PYUAN全5種サンプルセット',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d23b2752df.jpg',
        image_bin: '',
        created_at: '2019-07-29T22:03:34Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/PYUAN_official',
        provider: '花王',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 6372,
        name: '中性重炭酸入浴剤 BARTH',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d468a04817c4.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://barth.jp/lp/bath_before_bed/',
        provider: '株式会社ＴＷＯ',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 3920,
        name: 'ペットフード オリジナルパッケージ',
        winner: 2200,
        image_url: 'https://www.chance.com/image/prizeimg/5d170eb1930c1.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:57Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.nisshin-pet.co.jp/lp/cp-hitotsudake-1904/',
        provider: '日清ペットフード株式会社',
        way: '商品購入',
        category: [
          'gift',
          'other'
        ]
      },
      {
        id: 6387,
        name: 'フリッジィズー、エプロン、QUOカード',
        winner: 2200,
        image_url: 'https://www.chance.com/image/prizeimg/5d44ed5555ff5.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.morinaga.co.jp/hi-chew/campaign/2019/',
        provider: '森永製菓',
        way: '商品購入',
        category: [
          'appliance',
          'gift',
          'goods'
        ]
      },
      {
        id: 4197,
        name: '[東京・大阪]オリジナル柄注染体験',
        winner: 1500,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d8b697305d.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:23:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-21T00:00:00Z',
        link: 'https://www.fujicco.co.jp/therapy/omotenashi/',
        provider: 'フジッコ株式会社',
        way: '商品購入',
        category: [
          'foods',
          'goods',
          'other',
          'ticket'
        ]
      }
    ]
  },
  '5': {
    no: 5,
    renderType: 'quadCards',
    heading: '最新ゲームを手に入れよう！',
    endpoint: 'category/toy?limit=8',
    contents: [
      {
        id: 6391,
        name: 'お好きなゲームソフト、ギフトカード',
        winner: 11,
        image_url: 'https://www.chance.com/image/prizeimg/5d43e6f4b6f7c.png',
        image_bin: '',
        created_at: '2019-08-10T22:09:49Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-11-01T00:00:00Z',
        link: 'https://www.freem.ne.jp/contents/event/p/2019_03.html',
        provider: '有限会社ふりーむ',
        way: 'アンケート',
        category: [
          'gift',
          'toy'
        ]
      },
      {
        id: 6191,
        name: 'アンパンマン抱き人形ソフト',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a8c5916700.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:07:51Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-11T00:00:00Z',
        link: 'https://www.froebel-tsubame.jp/html/new_event.html?code=20190805051426',
        provider: 'フレーベル館オンラインショップ「つばめのおうち」',
        way: 'アンケート',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 7592,
        name: 'ドラえもんはじめての英語図鑑',
        winner: 51,
        image_url: 'https://www.chance.com/image/prizeimg/5d4d208bd1a45.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-11T00:00:00Z',
        link: 'https://hugkum.sho.jp/75745',
        provider: '小学館 HugKum(ハグクム)',
        way: 'アンケート',
        category: [
          'baby',
          'cosmetics',
          'foods',
          'goods',
          'toy'
        ]
      },
      {
        id: 7505,
        name: '水ふうせんでラリー「オゴディスクH2O」',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d513b32a400c.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:13Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-10T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentogodiskh2o',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 7506,
        name: 'チャギントン パズルタウン',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d513e50051ac.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:14Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-10T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentchuggington',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 3955,
        name: '東京2020オリンピック開会式チケット他',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d118ac92221f.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:11Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-09T00:00:00Z',
        link: 'http://yamato-hd.co.jp/tokyo2020/campaign/',
        provider: 'ヤマトホールディングス株式会社',
        way: '',
        category: [
          'other',
          'ticket',
          'toy'
        ]
      },
      {
        id: 6306,
        name: 'ストライダーベイビーバンドル',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d482808d2e25.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/present-striderbabybundle',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 6388,
        name: 'おもちゃメーカーのこの夏オススメおもちゃ',
        winner: 63,
        image_url: 'https://www.chance.com/image/prizeimg/5d44ea5f84913.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://www.toynes.jp/summer/top.htm',
        provider: 'おもちゃ情報net.',
        way: 'アンケート',
        category: [
          'baby',
          'toy'
        ]
      }
    ]
  },
  '6': {
    no: 6,
    renderType: 'largeCard',
    heading: 'Amazonカードを当てよう！',
    image_url: 'https://prizz.jp/assets/img/amazon-card_min.jpg',
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
        image_url: 'https://www.chance.com/image/prizeimg/5d3964b4b185d.gif',
        image_bin: '',
        created_at: '2019-07-29T22:04:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-12-26T00:00:00Z',
        link: 'https://www.carseven.co.jp/cmp/2019nbox',
        provider: 'カーセブン',
        way: 'クイズ',
        category: [
          'vehicle'
        ]
      }
    ]
  },
  '8': {
    no: 8,
    renderType: 'horizontalScroll',
    heading: '雑貨を当てよう！',
    endpoint: 'category/goods?limit=30',
    ad_link: 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_image: 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
    ad_tracking: 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_name: '【AD】ワゴンRが当たる！',
    ad_number: '1000',
    contents: [
      {
        id: 4085,
        name: 'ネスカフェ オリジナルタンブラーセット',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5c85ab2b93dbb.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:13:23Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2020-01-01T00:00:00Z',
        link: 'https://nestle.jp/brand/nescafe/nescafe3bai/quiz/',
        provider: 'ネスレ日本',
        way: 'クイズ',
        category: [
          'goods'
        ]
      },
      {
        id: 6239,
        name: 'オリジナル湯あがりセット',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a30341b60b.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:22Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2020-01-01T00:00:00Z',
        link: 'https://www.bathlier.com/expand/home/b-supporter/event-beer',
        provider: 'バスリエ株式会社',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 7388,
        name: 'お昼寝まくら',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d56091292326.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:50Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-12-23T00:00:00Z',
        link: 'https://www.fit-labo.com/campaign2019aw/',
        provider: '西川株式会社',
        way: '',
        category: [
          'goods'
        ]
      },
      {
        id: 5479,
        name: 'かんどーくんオリジナルグッズ',
        winner: 154,
        image_url: 'https://www.chance.com/image/prizeimg/5d3e8c46d7980.gif',
        image_bin: '',
        created_at: '2019-08-01T22:05:42Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-12-01T00:00:00Z',
        link: 'https://www.oka-kk.co.jp/kandokun/kando-campaign/',
        provider: 'オカ株式会社',
        way: 'Instagram',
        category: [
          'goods'
        ]
      },
      {
        id: 3825,
        name: 'オリジナルタオル',
        winner: 300,
        image_url: 'https://www.chance.com/image/prizeimg/5d1c9a7ca02a7.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.nissei-com.co.jp/campaign/smile_soft.jsp',
        provider: '日世株式会社',
        way: 'クイズ',
        category: [
          'goods'
        ]
      },
      {
        id: 4047,
        name: '賞金5万円、2万円、カメヤマ商品',
        winner: 123,
        image_url: 'https://www.chance.com/image/prizeimg/5cf1c85823f34.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:13:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kameyama.co.jp/hitorigoto/',
        provider: 'カメヤマ株式会社',
        way: 'コンテスト',
        category: [
          'cash',
          'goods',
          'other'
        ]
      },
      {
        id: 6181,
        name: '羊毛3Dフレーム、フォトパネル',
        winner: 144,
        image_url: 'https://www.chance.com/image/prizeimg/5d4b83c7a9d92.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:07:49Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.ipetclub.jp/fun/calendar/2020/?r=ext_present',
        provider: 'アイペット損害保険株式会社',
        way: 'コンテスト',
        category: [
          'goods',
          'other'
        ]
      },
      {
        id: 6238,
        name: 'ベビーカー、チャイルドシート',
        winner: 183,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a3166c9f03.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:19Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
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
        ]
      },
      {
        id: 6305,
        name: 'Apple Watch',
        winner: 131,
        image_url: 'https://www.chance.com/image/prizeimg/5d48da3c35024.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.nobel.co.jp/cam1907/',
        provider: 'ノーベル製菓株式会社',
        way: '会員登録',
        category: [
          'appliance',
          'goods',
          'stationery'
        ]
      },
      {
        id: 6348,
        name: 'とろけるアイススプーン',
        winner: 300,
        image_url: 'https://www.chance.com/image/prizeimg/5d4921197cca1.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:25Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://bp-affairs.com/news/2019/08/20190806-9414.html',
        provider: '一般社団法人ビジネス＆パブリック アフェアーズ',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 5432,
        name: 'るなたんグッズ',
        winner: 550,
        image_url: 'https://www.chance.com/image/prizeimg/5d42a649a6310.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:17Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-30T23:00:00Z',
        link: 'https://nhg-linecp.com/nipponluna2019/',
        provider: '日本ルナ株式会社',
        way: '商品購入',
        category: [
          'goods'
        ]
      },
      {
        id: 4621,
        name: '香川県産品カタログギフト',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d359e666ab06.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:07:16Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-30T00:00:00Z',
        link: 'https://www.toshiakeudon.com/2019_pre/contest/index.php',
        provider: 'さぬきうまいもんプロジェクト実行委員会、香川県',
        way: 'コンテスト',
        category: [
          'foods',
          'goods',
          'other'
        ]
      },
      {
        id: 6203,
        name: 'マカオ旅行（2泊3日) ',
        winner: 11,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a55101eb32.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-26T00:00:00Z',
        link: 'https://macao.ownly.jp/story/7445',
        provider: 'マカオ政府観光局',
        way: '',
        category: [
          'goods',
          'travel'
        ]
      },
      {
        id: 3959,
        name: 'ことばえほん こえでABC',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d11ea441d50e.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:13Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-21T00:00:00Z',
        link: 'https://www.happy-note.com/tu/rwd/ohayo2019sm-tieup.html',
        provider: 'ミキハウス子育て総研株式会社',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 4197,
        name: '[東京・大阪]オリジナル柄注染体験',
        winner: 1500,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d8b697305d.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:23:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-21T00:00:00Z',
        link: 'https://www.fujicco.co.jp/therapy/omotenashi/',
        provider: 'フジッコ株式会社',
        way: '商品購入',
        category: [
          'foods',
          'goods',
          'other',
          'ticket'
        ]
      },
      {
        id: 3961,
        name: 'バケツ型 ミニロゴトートバッグ',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d11e1a6c9aba.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:13Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-20T00:00:00Z',
        link: 'https://www.happy-note.com/tu/rwd/daiken2019sm.html',
        provider: 'ミキハウス子育て総研株式会社',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 3960,
        name: 'ミキハウスダブルBトートバッグ',
        winner: 7,
        image_url: 'https://www.chance.com/image/prizeimg/5d11e70b72036.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:13Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-18T00:00:00Z',
        link: 'https://www.happy-note.com/tu/rwd/summer2019-yubin.html',
        provider: 'ミキハウス子育て総研株式会社',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 5473,
        name: '和ろうそくプチセット',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d3fed12cb935.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-17T12:00:00Z',
        link: 'https://www.instagram.com/p/B0h-bmjDWwB/',
        provider: '磯部ろうそく店',
        way: 'Instagram',
        category: [
          'goods'
        ]
      },
      {
        id: 7540,
        name: 'ボタニカル刺しゅうキット',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d5114951c67c.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:33Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-16T00:00:00Z',
        link: 'https://community.lavida.jp/lecien/article/article/59771/',
        provider: '株式会社ルシアン',
        way: '会員登録',
        category: [
          'goods'
        ]
      },
      {
        id: 7380,
        name: 'ポンちゃんグッズＢＯＸ',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d563fd1e9380.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:46Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-15T00:00:00Z',
        link: 'http://www.mangetupon.co.jp/gorokutoblog2/',
        provider: '株式会社　松岡製菓',
        way: '応募が簡単',
        category: [
          'goods'
        ]
      },
      {
        id: 3549,
        name: '台湾茶+お香、ケーキ+烏龍茶',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d245d7301b6c.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:07:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-11T00:00:00Z',
        link: 'https://travel-value.jp/present/backnumber/#present2400',
        provider: 'トラベルバリュー（たびゲーター）',
        way: '会員登録',
        category: [
          'foods',
          'goods'
        ]
      },
      {
        id: 4572,
        name: '銀色ツヤ消しジッポーライター',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d355038164d6.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:06:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-11T00:00:00Z',
        link: 'http://www.zippoworld.jp/present.htm',
        provider: 'ジッポー専門店 ジッポーワールド',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 7592,
        name: 'ドラえもんはじめての英語図鑑',
        winner: 51,
        image_url: 'https://www.chance.com/image/prizeimg/5d4d208bd1a45.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-11T00:00:00Z',
        link: 'https://hugkum.sho.jp/75745',
        provider: '小学館 HugKum(ハグクム)',
        way: 'アンケート',
        category: [
          'baby',
          'cosmetics',
          'foods',
          'goods',
          'toy'
        ]
      },
      {
        id: 6387,
        name: 'フリッジィズー、エプロン、QUOカード',
        winner: 2200,
        image_url: 'https://www.chance.com/image/prizeimg/5d44ed5555ff5.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.morinaga.co.jp/hi-chew/campaign/2019/',
        provider: '森永製菓',
        way: '商品購入',
        category: [
          'appliance',
          'gift',
          'goods'
        ]
      },
      {
        id: 3799,
        name: 'ジュエリーツリー',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d1d7b419b5ea.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:10:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T18:00:00Z',
        link: 'http://beautique.jp/monitor/index.html',
        provider: 'ジェイ・フリートBEAUTiQUE事業部',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 5664,
        name: 'tower マグネットバスブーツホルダー',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d4221962251e.jpg',
        image_bin: '',
        created_at: '2019-08-04T20:16:51Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://www.bathclin.co.jp/campaign/201908_bathbootholder/?utm_source=1908&utm_medium=Sweepstakes&utm_campaign=bathgoods',
        provider: '株式会社バスクリン',
        way: '会員登録',
        category: [
          'goods'
        ]
      },
      {
        id: 5478,
        name: '旅行チケット、iPad Pro',
        winner: 25,
        image_url: 'https://www.chance.com/image/prizeimg/5d3ee33c5ba39.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:41Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T10:00:00Z',
        link: 'https://www.every-photo.com/html/20190708_mapcamera/',
        provider: 'シュッピン株式会社',
        way: 'コンテスト',
        category: [
          'appliance',
          'gift',
          'goods',
          'travel'
        ]
      },
      {
        id: 3860,
        name: 'バルミューダ ザ・トースター',
        winner: 333,
        image_url: 'https://www.chance.com/image/prizeimg/5d19cc53efd04.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:28Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'http://www.kinkan.co.jp/campaign/2019/kinkan-sanshimai/present/',
        provider: '株式会社金冠堂',
        way: 'コンテスト',
        category: [
          'appliance',
          'goods'
        ]
      },
      {
        id: 3909,
        name: '「かしこまり」ジャケ写クッション',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d182dda326d0.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:50Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.snakaranavi.net/kashikomari/ivents1.php',
        provider: '一般社団法人全国カラオケ事業者協会',
        way: 'クイズ',
        category: [
          'goods'
        ]
      },
      {
        id: 3934,
        name: 'ペア宿泊券、ランチコース ペア招待券',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d143262c87a8.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://saitama-shintoshin.metropolitan.jp/feature/instacp.html',
        provider: 'ホテルメトロポリタンさいたま新都心',
        way: 'Instagram',
        category: [
          'goods',
          'ticket',
          'travel'
        ]
      }
    ]
  },
  '9': {
    no: 9,
    renderType: 'quadCards',
    heading: '服を当てよう！',
    endpoint: 'category/fashion?limit=8',
    contents: [
      {
        id: 4110,
        name: 'K-1ファイターサイン入り長袖シャツ',
        winner: 1,
        image_url: '/img/present/no_image_300x300.gif',
        image_bin: '',
        created_at: '2019-07-17T01:08:42Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.z-dragon.jp/campaign/19ss_fighters02/',
        provider: '株式会社自重堂',
        way: 'アンケート',
        category: [
          'fashion'
        ]
      },
      {
        id: 6313,
        name: 'B&GオリジナルＴシャツ',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d48cc56537d6.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:04Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.bgf.or.jp/senryu/bosyuu.html',
        provider: 'ブルーシー・アンド・グリーンランド財団（B＆G財団）',
        way: '',
        category: [
          'fashion'
        ]
      },
      {
        id: 7543,
        name: '星野リゾート宿泊券5万円分',
        winner: 12,
        image_url: 'https://www.chance.com/image/prizeimg/5d50dcc55760d.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:34Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'http://darkshiny.jp/campaign/inazuma/',
        provider: '加藤貿易株式会社',
        way: 'Instagram',
        category: [
          'fashion',
          'gift',
          'travel'
        ]
      },
      {
        id: 3809,
        name: '黒真珠ネックレス、三次ピオーネ',
        winner: 12,
        image_url: 'https://www.chance.com/image/prizeimg/5d1c3c2248828.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:10:53Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-26T00:00:00Z',
        link: 'http://www.miyoshipione.jp/',
        provider: '三次ピオーネ生産組合',
        way: 'クイズ',
        category: [
          'fashion',
          'foods'
        ]
      },
      {
        id: 7359,
        name: 'サイン入りウエア',
        winner: 4,
        image_url: 'https://www.chance.com/image/prizeimg/5d5799d3a98ce.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-21T00:00:00Z',
        link: 'https://www.jawin.jp/19aw-athlete/',
        provider: '株式会社自重堂',
        way: '',
        category: [
          'fashion'
        ]
      },
      {
        id: 6307,
        name: 'ニューバランス キッズシューズ',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d4823b0b4abd.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentnewblance313',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'fashion'
        ]
      },
      {
        id: 5659,
        name: 'Tシャツ、都内交通案内地図、QUOカード',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d424b571008d.jpg',
        image_bin: '',
        created_at: '2019-08-04T20:16:47Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T09:00:00Z',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSduKLPdjgEfLdT491m5LBFOBh06Gm4Rb8bg7HgjRL9Tf-7hWg/viewform',
        provider: '公益財団法人東京タクシーセンター',
        way: 'クイズ',
        category: [
          'fashion',
          'gift',
          'other'
        ]
      },
      {
        id: 4115,
        name: 'アニメ「ジモトがジャパン」Tシャツ',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d295e321dd75.jpg',
        image_bin: '',
        created_at: '2019-07-17T01:08:45Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://www.shopro.co.jp/tv/jimoto-anime/2019twittercp02.html',
        provider: '株式会社小学館集英社プロダクション',
        way: 'Twitter',
        category: [
          'fashion'
        ]
      }
    ]
  },
  '10': {
    no: 10,
    renderType: 'horizontalScroll',
    heading: '当選人数が多い順！！！',
    endpoint: 'winner?limit=30',
    ad_link: 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_image: 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
    ad_tracking: 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_name: '【AD】ワゴンRが当たる！',
    ad_number: '1000',
    contents: [
      {
        id: 7509,
        name: 'キュレル ボディウォッシュ サンプル',
        winner: 50000,
        image_url: 'https://www.chance.com/image/prizeimg/5d42661b647a0.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kao.co.jp/curel/special/19bodywash/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 6285,
        name: 'キュレル リップケア サンプルセット',
        winner: 50000,
        image_url: 'https://www.chance.com/image/prizeimg/5d4265970d034.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-30T00:00:00Z',
        link: 'https://www.kao.co.jp/curel/special/19lipcare/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 4417,
        name: '「森永ピノ」無料引き換え電子クーポン',
        winner: 30000,
        image_url: 'https://www.chance.com/image/prizeimg/5d2fe92952f9a.jpg',
        image_bin: '',
        created_at: '2019-07-23T05:40:45Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://rurubu.jp/andmore/article/8212?utm_source=chance-it&utm_medium=referral&utm_campaign=id-registration201907',
        provider: 'JTBパブリッシング',
        way: '会員登録',
        category: [
          'foods'
        ]
      },
      {
        id: 4430,
        name: 'ロボット掃除機、コードレスクリーナー',
        winner: 10020,
        image_url: 'https://www.chance.com/image/prizeimg/5d3069914c296.jpg',
        image_bin: '',
        created_at: '2019-07-23T05:40:53Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://park.sjnk.co.jp/campaign/ins_201907-08_enq/index.html',
        provider: '損害保険ジャパン日本興亜株式会社',
        way: '会員登録',
        category: [
          'appliance',
          'foods',
          'goods',
          'stationery'
        ]
      },
      {
        id: 7503,
        name: '日本で一番売れてる化粧水ミニサンプル',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d5279fec8442.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:12Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-26T00:00:00Z',
        link: 'https://jp.rohto.com/keshousui/',
        provider: 'ロート製薬',
        way: 'Twitter',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 4803,
        name: '新PYUAN全5種サンプルセット',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d23b2752df.jpg',
        image_bin: '',
        created_at: '2019-07-29T22:03:34Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/PYUAN_official',
        provider: '花王',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 6372,
        name: '中性重炭酸入浴剤 BARTH',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d468a04817c4.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://barth.jp/lp/bath_before_bed/',
        provider: '株式会社ＴＷＯ',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 3920,
        name: 'ペットフード オリジナルパッケージ',
        winner: 2200,
        image_url: 'https://www.chance.com/image/prizeimg/5d170eb1930c1.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:57Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.nisshin-pet.co.jp/lp/cp-hitotsudake-1904/',
        provider: '日清ペットフード株式会社',
        way: '商品購入',
        category: [
          'gift',
          'other'
        ]
      },
      {
        id: 6387,
        name: 'フリッジィズー、エプロン、QUOカード',
        winner: 2200,
        image_url: 'https://www.chance.com/image/prizeimg/5d44ed5555ff5.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.morinaga.co.jp/hi-chew/campaign/2019/',
        provider: '森永製菓',
        way: '商品購入',
        category: [
          'appliance',
          'gift',
          'goods'
        ]
      },
      {
        id: 4197,
        name: '[東京・大阪]オリジナル柄注染体験',
        winner: 1500,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d8b697305d.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:23:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-21T00:00:00Z',
        link: 'https://www.fujicco.co.jp/therapy/omotenashi/',
        provider: 'フジッコ株式会社',
        way: '商品購入',
        category: [
          'foods',
          'goods',
          'other',
          'ticket'
        ]
      },
      {
        id: 3789,
        name: '旅行ギフト、QUOカードや商品詰め合わせ',
        winner: 1500,
        image_url: 'https://www.chance.com/image/prizeimg/5d1ebe8b2c3c1.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:10:42Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'http://imuraya-cp.jp/mizuyokan_cp/?utm_source=PRchance&utm_medium=netad&utm_campaign=imuraya_mizuyokan',
        provider: '井村屋',
        way: '商品購入',
        category: [
          'appliance',
          'foods',
          'gift',
          'travel'
        ]
      },
      {
        id: 3649,
        name: '特選パウンドケーキ、原宿はちみつ',
        winner: 1100,
        image_url: 'https://www.chance.com/image/prizeimg/5d22e6cc614d0.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:08:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.colombin.co.jp/campaign/campaign2019.php',
        provider: '株式会社コロンバン',
        way: '商品購入',
        category: [
          'foods'
        ]
      },
      {
        id: 4285,
        name: 'ビール券100万円分',
        winner: 1001,
        image_url: 'https://www.chance.com/image/prizeimg/5d22d2f4a1639.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:24:07Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.itohkampo.co.jp/products/sp/shijimicp_1/',
        provider: '井藤漢方製薬',
        way: 'Twitter',
        category: [
          'foods',
          'sports'
        ]
      },
      {
        id: 5667,
        name: 'Amazonギフト券3000円分',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5d416084b36df.png',
        image_bin: '',
        created_at: '2019-08-04T20:16:52Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.homes.co.jp/trunkroom/share/lp/chanceit/',
        provider: '株式会社LIFULL SPACE',
        way: '会員登録',
        category: [
          'gift'
        ]
      },
      {
        id: 3988,
        name: '13種の焼肉のたれ小皿セット',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5d0aedcfe134a.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:35Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'http://www.moranbong.co.jp/jang2019buyandhit/?frm=chance',
        provider: 'モランボン株式会社',
        way: '商品購入',
        category: [
          'gift',
          'goods'
        ]
      },
      {
        id: 4044,
        name: '家飲みセット',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5cf21a7447d1e.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:58Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.ffa.ajinomoto.com/campaign/campaign_313suntory',
        provider: '味の素冷凍食品株式会社',
        way: '商品購入',
        category: [
          'foods'
        ]
      },
      {
        id: 4052,
        name: '日本各地の選べるグルメ',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5cf0bba0b4431.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:13:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.gabuttocp.maruha-nichiro.co.jp/',
        provider: 'マルハニチロ株式会社',
        way: '商品購入',
        category: [
          'foods',
          'gift'
        ]
      },
      {
        id: 4074,
        name: '新・一番搾り 6缶パック',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5cc0013f5106f.png',
        image_bin: '',
        created_at: '2019-07-14T21:13:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kirin.co.jp/products/beer/ichiban/campaign/2019shin_oishii/?agechk=1',
        provider: 'キリン',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7411,
        name: 'Xフライドポテト無料券',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5d5791f1bdbb7.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:04Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.ministop.co.jp/campaign/Xpotato_cp/',
        provider: 'ミニストップ株式会社',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 4616,
        name: '宝塚歌劇月組公演A席B席',
        winner: 600,
        image_url: 'https://www.chance.com/image/prizeimg/5d36a5f68d157.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:07:14Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-12T00:00:00Z',
        link: 'http://www.a2ry.com/',
        provider: 'エーツケア株式会社',
        way: 'クイズ',
        category: [
          'other'
        ]
      },
      {
        id: 3807,
        name: 'お取り寄せスイーツ',
        winner: 600,
        image_url: 'https://www.chance.com/image/prizeimg/5d1c50b8e445c.png',
        image_bin: '',
        created_at: '2019-07-14T21:10:52Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'http://www.caspia.jp/tottemooishii/',
        provider: 'フジッコ株式会社',
        way: 'LINE',
        category: [
          'appliance',
          'foods',
          'other'
        ]
      },
      {
        id: 5432,
        name: 'るなたんグッズ',
        winner: 550,
        image_url: 'https://www.chance.com/image/prizeimg/5d42a649a6310.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:17Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-30T23:00:00Z',
        link: 'https://nhg-linecp.com/nipponluna2019/',
        provider: '日本ルナ株式会社',
        way: '商品購入',
        category: [
          'goods'
        ]
      },
      {
        id: 3881,
        name: 'ザ・プレミアム・モルツ〈香る〉エール6缶',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d15766a8d1bc.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.suntory.co.jp/beer/kaoruale/campaign/2019_kaoru/',
        provider: 'サントリー',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7584,
        name: 'QUOカード 1000円分',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d4c194badfc6.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:53Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-11-01T00:00:00Z',
        link: 'https://win.kanpy-cp.com/',
        provider: '加藤産業　株式会社',
        way: '商品購入',
        category: [
          'gift'
        ]
      },
      {
        id: 6347,
        name: '現金100万円、化粧品',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d49105e75c8c.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:24Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-26T00:00:00Z',
        link: 'https://veramagazine.jp/hadato-campaign/',
        provider: '株式会社SYG',
        way: 'コンテスト',
        category: [
          'cash',
          'cosmetics',
          'gift'
        ]
      },
      {
        id: 7374,
        name: 'エスティ ローダー 美容液',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d564f595fcbb.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:44Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-28T00:00:00Z',
        link: 'https://www.cosme.net/brand/brand_id/104/tieup/00104201907-02/page/page.html',
        provider: '＠ｃｏｓｍｅ（アットコスメ）',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 7418,
        name: 'ランコム リキッドファンデーション',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d56504f69521.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:11Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-28T00:00:00Z',
        link: 'https://www.cosme.net/brand/brand_id/42/tieup/00042201907-01/page/page.html',
        provider: '＠ｃｏｓｍｅ（アットコスメ）',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 6149,
        name: 'ホームベーカリー、トースター',
        winner: 400,
        image_url: 'https://www.chance.com/image/prizeimg/5d4bb9ab7814f.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:07:28Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://greenwood-cp.com/',
        provider: '加藤産業　株式会社',
        way: '商品購入',
        category: [
          'appliance',
          'daily',
          'foods',
          'gift',
          'goods'
        ]
      },
      {
        id: 4617,
        name: '宝塚歌劇月組公演チケット S席',
        winner: 400,
        image_url: 'https://www.chance.com/image/prizeimg/5d36a5159caf8.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:07:14Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-12T00:00:00Z',
        link: 'https://www.a2-care.co.jp/store/user_data/takarazuka.php',
        provider: 'エーツケア株式会社',
        way: '商品購入',
        category: [
          'other'
        ]
      },
      {
        id: 4212,
        name: '宝塚歌劇貸切公演チケット',
        winner: 380,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d664010d35.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:23:17Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-24T00:00:00Z',
        link: 'https://www.ucc.co.jp/welovecoffee/cp2/',
        provider: 'UCC上島珈琲株式会社',
        way: '商品購入',
        category: [
          'ticket'
        ]
      }
    ]
  },
  '11': {
    no: 11,
    renderType: 'quadCards',
    heading: '日用品を当てよう！',
    endpoint: 'category/daily?limit=8',
    contents: [
      {
        id: 6238,
        name: 'ベビーカー、チャイルドシート',
        winner: 183,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a3166c9f03.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:19Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
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
        ]
      },
      {
        id: 7509,
        name: 'キュレル ボディウォッシュ サンプル',
        winner: 50000,
        image_url: 'https://www.chance.com/image/prizeimg/5d42661b647a0.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kao.co.jp/curel/special/19bodywash/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 7538,
        name: '「ルックプラス」4点セット',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d5139d89536b.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:31Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-10T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentlookplusonepiece',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'daily'
        ]
      },
      {
        id: 4554,
        name: 'アタック ZERO（ゼロ）',
        winner: 30,
        image_url: 'https://www.chance.com/image/prizeimg/5d364c52ee3d3.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:06:32Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.kao.co.jp/lifei/feature/85th.html',
        provider: '花王株式会社',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 5469,
        name: 'フレグランスニュービーズジェル',
        winner: 30,
        image_url: 'https://www.chance.com/image/prizeimg/5d3ff36fdfc01.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:38Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.kao.co.jp/lifei/support/06/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 6304,
        name: 'エマール+ハミングファイン+ビオレｕ',
        winner: 30,
        image_url: 'https://www.chance.com/image/prizeimg/5d48c639b7c0f.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.kao.co.jp/lifei/support/67/',
        provider: '花王株式会社',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 3817,
        name: 'ティースホワイトパック＜ハミガキ＞',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d1d4e812994b.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:10:56Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T18:00:00Z',
        link: 'http://beautique.jp/idea/index.html',
        provider: '(株)ジェイ・フリートBEAUTiQUE事業部',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 6418,
        name: 'スクラビングバブル ジャバ 1つ穴用',
        winner: 20,
        image_url: 'https://www.chance.com/image/prizeimg/5d43cea9eb6f4.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:10:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://scjcatalog.johnson.co.jp/life/bitekilife/1908/index.html',
        provider: 'ジョンソン株式会社',
        way: 'アンケート',
        category: [
          'daily'
        ]
      }
    ]
  },
  '12': {
    no: 12,
    renderType: 'horizontalScroll',
    heading: 'Twitter懸賞！',
    endpoint: 'way/twitter?limit=30',
    ad_link: 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_image: 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
    ad_tracking: 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_name: '【AD】ワゴンRが当たる！',
    ad_number: '1000',
    contents: [
      {
        id: 4511,
        name: 'Amazonギフト券3000円分',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d366c780dab0.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:05:56Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2020-01-01T00:00:00Z',
        link: 'https://www.houryuji-syaken.com/info/campaign.php',
        provider: 'ホリデー車検法隆寺',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 4516,
        name: 'Amazonギフト券3000円分',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d366ceb1b085.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:06:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2020-01-01T00:00:00Z',
        link: 'https://www.onahama-syaken.com/info/campaign.php',
        provider: 'ホリデー車検小名浜',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 4524,
        name: 'Amazonギフト券3000円分',
        winner: 30,
        image_url: 'https://www.chance.com/image/prizeimg/5d366bd02a70a.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:06:09Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2020-01-01T00:00:00Z',
        link: 'https://www.sakuragawa-syaken.com/info/campaign.php',
        provider: 'ホリデー車検桜川',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 5435,
        name: 'DONBURI亭3袋入り3種セット',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d4255218da52.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:18Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'http://cp.glico.jp/donburi-ss/tw/',
        provider: '江崎グリコ株式会社',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 4074,
        name: '新・一番搾り 6缶パック',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5cc0013f5106f.png',
        image_bin: '',
        created_at: '2019-07-14T21:13:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kirin.co.jp/products/beer/ichiban/campaign/2019shin_oishii/?agechk=1',
        provider: 'キリン',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 3588,
        name: '図書カード3000円分',
        winner: 60,
        image_url: 'https://www.chance.com/image/prizeimg/5d255e8f81e1f.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:08:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-16T00:00:00Z',
        link: 'http://book-sp.kodansha.co.jp/move/',
        provider: '講談社',
        way: 'Twitter',
        category: [
          'gift',
          'other'
        ]
      },
      {
        id: 6174,
        name: 'Amazonギフト券1000円分',
        winner: 50,
        image_url: 'https://www.chance.com/image/prizeimg/5d4b8e7e4f3f8.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:07:44Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-10T00:00:00Z',
        link: 'https://twitter.com/Kasege_official/status/1159013737627451392',
        provider: 'タップリアル株式会社',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 6362,
        name: '一番搾り、午後の紅茶、トロピカーナ',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d479514cf26e.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:36Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-09T00:00:00Z',
        link: 'https://jp.fsc.org/jp-jp/4-fsc/4-1/12452125051253112488/fscx2018-twitter-winter',
        provider: 'FSCジャパン',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 4771,
        name: '[東京]映画『アナベル 死霊博物館』試写会招待券',
        winner: 60,
        image_url: 'https://www.chance.com/image/prizeimg/5d3c0ddfe3cd1.jpg',
        image_bin: '',
        created_at: '2019-07-29T22:03:08Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-07T00:00:00Z',
        link: 'https://sgs109.com/p/10488/',
        provider: '株式会社アリュクス ストリートガールズスナップ',
        way: 'Twitter',
        category: [
          'movie',
          'ticket'
        ]
      },
      {
        id: 7465,
        name: '書籍『ロイヒトトゥルム1917で楽しむバレットジャーナル』',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d5272341b8f0.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:55:50Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-05T00:00:00Z',
        link: 'https://www.j-cast.com/bookwatch/book059/2019/07/30009487.html',
        provider: '株式会社ジェイ・キャスト',
        way: 'Twitter',
        category: [
          'books'
        ]
      },
      {
        id: 3881,
        name: 'ザ・プレミアム・モルツ〈香る〉エール6缶',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d15766a8d1bc.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.suntory.co.jp/beer/kaoruale/campaign/2019_kaoru/',
        provider: 'サントリー',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 5681,
        name: 'ハーゲンダッツ1個',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d417ed72369d.jpg',
        image_bin: '',
        created_at: '2019-08-04T20:17:06Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.fuwafuwa-roll.com/campaign/campaign_tw04.html',
        provider: '望月製紙株式会社',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 6405,
        name: 'JTB旅行券10万円分',
        winner: 12,
        image_url: 'https://www.chance.com/image/prizeimg/5d47d98271f2f.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://nobi-kids.jp/nobinobitaisou/show-a',
        provider: '株式会社For-s',
        way: 'Twitter',
        category: [
          'gift',
          'other'
        ]
      },
      {
        id: 4115,
        name: 'アニメ「ジモトがジャパン」Tシャツ',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d295e321dd75.jpg',
        image_bin: '',
        created_at: '2019-07-17T01:08:45Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://www.shopro.co.jp/tv/jimoto-anime/2019twittercp02.html',
        provider: '株式会社小学館集英社プロダクション',
        way: 'Twitter',
        category: [
          'fashion'
        ]
      },
      {
        id: 7497,
        name: '書籍『犯罪学大図鑑』',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d535ea60b46b.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:09Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://www.j-cast.com/bookwatch/2019/07/30009529.html',
        provider: '株式会社ジェイ・キャスト',
        way: 'Twitter',
        category: [
          'books'
        ]
      },
      {
        id: 4011,
        name: 'レストラン招待券2万円分',
        winner: 19,
        image_url: 'https://www.chance.com/image/prizeimg/5d034e4292d49.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:46Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://rurubu.jp/andmore/article/7947?utm_source=chance-it&utm_medium=referral&utm_campaign=photocon-201906',
        provider: 'JTBパブリッシング',
        way: 'Twitter',
        category: [
          'appliance',
          'other',
          'ticket'
        ]
      },
      {
        id: 6420,
        name: 'QUOカード1000円分',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d43cdd487313.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:10:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/hatachino_ryoma/status/1157063458673893380',
        provider: '一般社団法人しながわ観光協会',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 3882,
        name: 'MONOリュック、MONOスニーカー',
        winner: 60,
        image_url: 'https://www.chance.com/image/prizeimg/5d19a1ce2ff0b.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:38Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.tombow.com/cp/mono50th/?utm_source=luckle&amp;utm_medium=link&amp;utm_campaign=mono50',
        provider: '株式会社トンボ鉛筆',
        way: 'Twitter',
        category: [
          'fashion'
        ]
      },
      {
        id: 7470,
        name: '吉野家プリカ1000円分',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d5284be08aac.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:55:51Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/yoshinoyagyudon/status/1161208297350975489',
        provider: '吉野家',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 3907,
        name: 'MONOリュック、MONOスニーカー',
        winner: 60,
        image_url: 'https://www.chance.com/image/prizeimg/5d105bf9b032e.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:49Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.tombow.com/cp/mono50th/',
        provider: 'トンボ鉛筆',
        way: 'Twitter',
        category: [
          'fashion'
        ]
      },
      {
        id: 7493,
        name: 'MONOオリジナルグッズ',
        winner: 60,
        image_url: 'https://www.chance.com/image/prizeimg/5d5502f1c006e.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:07Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.tombow.com/cp/mono50th/#utm_source=Kensho&utm_medium=link&utm_campaign=mono50',
        provider: '株式会社トンボ鉛筆',
        way: 'Twitter',
        category: [
          'fashion',
          'goods'
        ]
      },
      {
        id: 6246,
        name: 'フラワーギフトカード1000円分',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d491b80e0a6e.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:30Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.eflora.co.jp/f_summer/campaign/?s_mf=FKKS19071000000292',
        provider: 'お花屋さんネットワーク「イーフローラ」',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 4285,
        name: 'ビール券100万円分',
        winner: 1001,
        image_url: 'https://www.chance.com/image/prizeimg/5d22d2f4a1639.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:24:07Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.itohkampo.co.jp/products/sp/shijimicp_1/',
        provider: '井藤漢方製薬',
        way: 'Twitter',
        category: [
          'foods',
          'sports'
        ]
      },
      {
        id: 4803,
        name: '新PYUAN全5種サンプルセット',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d23b2752df.jpg',
        image_bin: '',
        created_at: '2019-07-29T22:03:34Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/PYUAN_official',
        provider: '花王',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 7367,
        name: 'Refille+PRO化粧水ミスト',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d5640f20addf.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/refille_pro/status/1162185682481115136',
        provider: '株式会社スタシオン',
        way: 'Twitter',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 6364,
        name: 'お米1俵（60キロ）',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d47932738a14.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://dodontodonburi.com/movie.php',
        provider: '全国農業協同組合連合会',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 6372,
        name: '中性重炭酸入浴剤 BARTH',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d468a04817c4.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://barth.jp/lp/bath_before_bed/',
        provider: '株式会社ＴＷＯ',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 6298,
        name: '房総えびせんべい',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d48e3dd92c60.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:59Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-31T00:00:00Z',
        link: 'https://tori-dori.com/kanto/2019/08/02/58213/',
        provider: '株式会社バドインターナショナル トリドリ',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7471,
        name: 'キリン・ザ・ストロング4フレーバーセット',
        winner: 50,
        image_url: 'https://www.chance.com/image/prizeimg/5d5107e4ee420.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:55:52Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-30T00:00:00Z',
        link: 'https://cp.kirin.jp/story/7816',
        provider: 'キリン',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7360,
        name: 'あんこバター和ジャム＆梅かつおディップ',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d5690b48b00a.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:38Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-30T00:00:00Z',
        link: 'https://twitter.com/alluxeweb/status/1162318168045449216',
        provider: 'alluxeWEB公式（アリュクス）twitter',
        way: 'Twitter',
        category: [
          'foods'
        ]
      }
    ]
  },
  '101': {
    no: 101,
    renderType: 'categoryList',
    heading: 'カテゴリ一覧'
  }
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

const homeLayout = [
  {
    no: 0,
    renderType: 'topImage',
    heading: '懸賞を、もっと楽しく',
    image_url: 'https://prizz.jp/assets/img/awesome_min.jpg'
  },
  {
    no: 1,
    renderType: 'horizontalScroll',
    heading: 'もうすぐ締め切り！',
    endpoint: 'deadline?limit=30',
    ad_link: 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_image: 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
    ad_tracking: 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_name: '【AD】ワゴンRが当たる！',
    ad_number: '1000',
    contents: [
      {
        id: 6201,
        name: 'ベネフィーク ドゥース ローション',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a57e7a1248.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-22T10:00:00Z',
        link: 'https://maquia.hpplus.jp/special/mq/benefique1907/',
        provider: '集英社 MAQUIA',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 7510,
        name: '出水酒造「赤鶴」1800ml',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d51014aa81c6.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-22T10:00:00Z',
        link: 'http://www.tv-osaka.co.jp/ip4/presents/1343457_10931.html',
        provider: 'テレビ大阪',
        way: '応募が簡単',
        category: [
          'foods'
        ]
      },
      {
        id: 6258,
        name: '氷熟梅ワイン2019',
        winner: 20,
        image_url: 'https://www.chance.com/image/prizeimg/5d424362a34ae.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:34Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-22T12:00:00Z',
        link: 'http://www.choya.co.jp/campaign/umewine_2019/',
        provider: 'チョーヤ梅酒株式会社',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7395,
        name: '[東京]映画『最高の人生の見つけ方』試写会招待券',
        winner: 20,
        image_url: 'https://www.chance.com/image/prizeimg/5d5521485e7da.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:52Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-22T13:00:00Z',
        link: 'https://secure.oricon.co.jp/present/53438/',
        provider: 'オリコン株式会社',
        way: '',
        category: [
          'movie',
          'ticket'
        ]
      },
      {
        id: 7425,
        name: '映画『引っ越し大名』プレスシート',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d54fdb0938f1.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:19Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://shop.fukuske.com/sp/hikkoshi-movie/',
        provider: '福助',
        way: 'Twitter',
        category: [
          'fashion',
          'other'
        ]
      },
      {
        id: 7464,
        name: '[東京]映画『今さら言えない小さな秘密』試写会招待券',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d53ec487da04.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:55:49Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.tokyo-np.co.jp/cinema/imasaraienai/',
        provider: '東京新聞',
        way: '応募が簡単',
        category: [
          'movie',
          'ticket'
        ]
      },
      {
        id: 7479,
        name: 'フジッコ うまミネラルチャージセット',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d50d784da510.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:55:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://news.mynavi.jp/article/20190807-present02/',
        provider: '株式会社マイナビ',
        way: '会員登録',
        category: [
          'foods'
        ]
      },
      {
        id: 7487,
        name: '手づくり石けん バラとはちみつ',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d500012345b3.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.lettuceclub.net/present/1632/',
        provider: '株式会社KADOKAWA レタスクラブ',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 7518,
        name: 'Bluetoothキーボード',
        winner: 4,
        image_url: 'https://www.chance.com/image/prizeimg/5d50d735e1b53.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:19Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://news.mynavi.jp/article/20190807-present01/',
        provider: '株式会社マイナビ',
        way: '会員登録',
        category: [
          'appliance'
        ]
      },
      {
        id: 6241,
        name: '台湾往復航空券',
        winner: 9,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a2e90d6588.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:22Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.enjoytokyo.jp/feature/pr/evaair/',
        provider: 'レッツエンジョイ東京　(株式会社ぐるなび）',
        way: 'アンケート',
        category: [
          'goods',
          'travel'
        ]
      },
      {
        id: 4714,
        name: 'ジャンヌ・アルテス フレグランス',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d3848336e7eb.jpg',
        image_bin: '',
        created_at: '2019-07-26T15:53:38Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://sgs109.com/p/10474/',
        provider: '株式会社アリュクス ストリートガールズスナップ',
        way: 'Twitter',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 6267,
        name: '[東京]映画『ターミネーター：ニュー・フェイト』イベント招待券',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d48f0041edb3.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'http://www.music-lounge.jp/v2/articl/pickup/detail/?articl=2019/08/05-14:37:00_c33dd113cff04c99f27a8c89d459eabf',
        provider: 'MUSIC LOUNGE',
        way: 'アンケート',
        category: [
          'movie',
          'ticket'
        ]
      },
      {
        id: 7547,
        name: 'ペアパスタプレート+テーブルスプーン',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d50bb43c4859.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:36Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://kinmugistyle.jp/recipe/190809/',
        provider: 'サントリー',
        way: 'クイズ',
        category: [
          'goods'
        ]
      },
      {
        id: 5519,
        name: 'サンリオキャラクターズ リップスティック',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d405be4ce80d.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:06:19Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://sgs109.com/p/10471/',
        provider: '株式会社アリュクス ストリートガールズスナップ',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 7574,
        name: 'おふろであそぼう！まるぷかアンパンマン',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d4fc65c89c7f.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:49Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.babycome.ne.jp/present/detail/311/',
        provider: 'ベビカム株式会社',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 7578,
        name: 'アンパンマンふりっこリズム',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d4e7ce3cbae3.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:50Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.babycome.ne.jp/present/detail/310/',
        provider: 'ベビカム株式会社',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 7579,
        name: 'ヤーマン ボディケア美容器',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d4d43456805c.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:51Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://twitter.com/alluxeweb/status/1159760544095539201',
        provider: 'alluxeWEB公式（アリュクス）twitter',
        way: 'Twitter',
        category: [
          'appliance'
        ]
      },
      {
        id: 7356,
        name: 'ドラマ「Heaven?」ランチョンマット',
        winner: 4,
        image_url: 'https://www.chance.com/image/prizeimg/5d57a4ba21cda.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:36Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://thetv.jp/present/weekly/2692ef127511ae6cdf8478286e90df477473f4d6_1/',
        provider: '株式会社KADOKAWA ザ テレビジョン',
        way: '商品購入',
        category: [
          'goods'
        ]
      },
      {
        id: 7370,
        name: '完全ワイヤレスイヤホン専用イヤーピース',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d566cbd1d4df.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:41Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://twitter.com/biccameraE/status/1162273795555487748',
        provider: 'ビックカメラ',
        way: 'Twitter',
        category: [
          'appliance'
        ]
      },
      {
        id: 4570,
        name: '消臭ソックス',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d355cab39d66.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:06:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'http://akashi-suc.jp/company/newsrelease/webdir/119.html',
        provider: '株式会社 明石スクールユニフォームカンパニー',
        way: 'Instagram',
        category: [
          'fashion'
        ]
      },
      {
        id: 7392,
        name: 'カネボウリクイドニュアンスルージュ',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d552a209efb4.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:51Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.kanebo-global.com/jp/ja/campaign/metal-lip_1906/',
        provider: 'カネボウ化粧品',
        way: 'Twitter',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 7410,
        name: '[東京]映画『ザ・タワー』試写会招待券',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d53ec9f398b3.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:04Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.tokyo-np.co.jp/cinema/TheTower/',
        provider: '東京新聞',
        way: '応募が簡単',
        category: [
          'movie',
          'ticket'
        ]
      },
      {
        id: 7411,
        name: 'Xフライドポテト無料券',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5d5791f1bdbb7.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:04Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.ministop.co.jp/campaign/Xpotato_cp/',
        provider: 'ミニストップ株式会社',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7427,
        name: '敏感肌用クレンジング水',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d54f74221ec5.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:21Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T10:00:00Z',
        link: 'https://maquia.hpplus.jp/cosme/genre/1/item/27/item_id/149649/top',
        provider: '集英社 MAQUIA',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 4362,
        name: 'リゾートツアー、ザバスセット',
        winner: 304,
        image_url: 'https://www.chance.com/image/prizeimg/5d1ea14b035e2.jpg',
        image_bin: '',
        created_at: '2019-07-23T05:40:08Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T10:00:00Z',
        link: 'https://www.meiji.co.jp/sports/savas/cmp/open190625/',
        provider: '明治',
        way: 'Twitter',
        category: [
          'foods',
          'gift',
          'sports',
          'travel'
        ]
      },
      {
        id: 7500,
        name: 'ダイヤモンドコートパン',
        winner: 17,
        image_url: 'https://www.chance.com/image/prizeimg/5d53e1033da4e.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:10Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T10:00:00Z',
        link: 'https://www.irisplaza.co.jp/Index.php?KB=PRESENT&adver=kensho&type=kensho&utm_content=PRESENT&camp=0809kensyoPRE',
        provider: '株式会社アイリスプラザ',
        way: 'アンケート',
        category: [
          'foods',
          'goods',
          'kitchen'
        ]
      },
      {
        id: 7585,
        name: 'リンクルリップエッセンスEX',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a583b9b2be.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:53Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T10:00:00Z',
        link: 'https://maquia.hpplus.jp/cosme/genre/1/item/80/item_id/153642/top',
        provider: '集英社 MAQUIA',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 7590,
        name: 'スーパーカップ超バニラ 一生分',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d4d3018e97b7.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T10:00:00Z',
        link: 'https://www.softbank.jp/socialmedia/campaigns/list/dc_190809/',
        provider: 'ソフトバンク',
        way: 'LINE',
        category: [
          'foods',
          'gift'
        ]
      },
      {
        id: 7366,
        name: 'ゲームソフト「クラッシュ・バンディクー」',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d56741375bd4.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T13:00:00Z',
        link: 'https://secure.oricon.co.jp/present/53433/',
        provider: 'オリコン株式会社',
        way: '',
        category: [
          'toy'
        ]
      },
      {
        id: 7368,
        name: 'サイン入りTシャツ又はタオル',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d5670d112c3e.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:41Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T15:00:00Z',
        link: 'https://twitter.com/JOBSPO1',
        provider: '株式会社ダブルループ',
        way: 'Twitter',
        category: [
          'fashion',
          'goods'
        ]
      }
    ]
  },
  {
    no: 2,
    renderType: 'largeCard',
    heading: 'おいしい食べ物を当てよう',
    image_url: 'https://prizz.jp/assets/img/foods_min.jpg',
    link: '/category/foods'
  },
  {
    no: 3,
    renderType: 'quadCards',
    heading: '旅行に行こう',
    endpoint: 'category/travel?limit=4',
    contents: [
      {
        id: 3992,
        name: '旅行券10万円',
        winner: 105,
        image_url: 'https://www.chance.com/image/prizeimg/5d099d24e83e5.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-12-27T13:00:00Z',
        link: 'https://www.jbrc-mob.com/campaign/',
        provider: '一般社団法人JBRC',
        way: 'クイズ',
        category: [
          'gift',
          'travel'
        ]
      },
      {
        id: 4084,
        name: 'JTB旅行券10万円分',
        winner: 23,
        image_url: 'https://www.chance.com/image/prizeimg/5c92f7055f556.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:13:23Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-12-07T00:00:00Z',
        link: 'https://www.hotelwing.co.jp/campaign2019/',
        provider: '株式会社フォーブス',
        way: '会員登録',
        category: [
          'appliance',
          'foods',
          'travel'
        ]
      },
      {
        id: 3789,
        name: '旅行ギフト、QUOカードや商品詰め合わせ',
        winner: 1500,
        image_url: 'https://www.chance.com/image/prizeimg/5d1ebe8b2c3c1.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:10:42Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'http://imuraya-cp.jp/mizuyokan_cp/?utm_source=PRchance&utm_medium=netad&utm_campaign=imuraya_mizuyokan',
        provider: '井村屋',
        way: '商品購入',
        category: [
          'appliance',
          'foods',
          'gift',
          'travel'
        ]
      },
      {
        id: 3936,
        name: 'ウエディングフォト付きハワイ旅行4泊6日',
        winner: 20,
        image_url: 'https://www.chance.com/image/prizeimg/5d13085d36b2d.png',
        image_bin: '',
        created_at: '2019-07-14T21:12:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://wedding.mynavi.jp/contents/pc/fr/campaign/h/201906_hawaii/?utm_source=point&utm_medium=hawaii_referral&utm_campaign=201906hawaii&utm_content=www.chance.com',
        provider: '株式会社マイナビ',
        way: 'クイズ',
        category: [
          'other',
          'travel'
        ]
      }
    ]
  },
  {
    no: 4,
    renderType: 'horizontalScroll',
    heading: '大量当選！',
    endpoint: 'winner',
    ad_link: 'https://px.a8.net/svt/ejp?a8mat=3591N0+7KOLDU+3NEK+609HT',
    ad_image: 'https://www25.a8.net/svt/bgt?aid=190218636458&wid=003&eno=01&mid=s00000017030001009000&mc=1',
    ad_tracking: 'https://www11.a8.net/0.gif?a8mat=3591N0+7KOLDU+3NEK+609HT',
    ad_name: '【AD】Android限定！モニター募集中！',
    ad_number: '7',
    contents: [
      {
        id: 7509,
        name: 'キュレル ボディウォッシュ サンプル',
        winner: 50000,
        image_url: 'https://www.chance.com/image/prizeimg/5d42661b647a0.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kao.co.jp/curel/special/19bodywash/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 6285,
        name: 'キュレル リップケア サンプルセット',
        winner: 50000,
        image_url: 'https://www.chance.com/image/prizeimg/5d4265970d034.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-30T00:00:00Z',
        link: 'https://www.kao.co.jp/curel/special/19lipcare/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 4417,
        name: '「森永ピノ」無料引き換え電子クーポン',
        winner: 30000,
        image_url: 'https://www.chance.com/image/prizeimg/5d2fe92952f9a.jpg',
        image_bin: '',
        created_at: '2019-07-23T05:40:45Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://rurubu.jp/andmore/article/8212?utm_source=chance-it&utm_medium=referral&utm_campaign=id-registration201907',
        provider: 'JTBパブリッシング',
        way: '会員登録',
        category: [
          'foods'
        ]
      },
      {
        id: 4430,
        name: 'ロボット掃除機、コードレスクリーナー',
        winner: 10020,
        image_url: 'https://www.chance.com/image/prizeimg/5d3069914c296.jpg',
        image_bin: '',
        created_at: '2019-07-23T05:40:53Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://park.sjnk.co.jp/campaign/ins_201907-08_enq/index.html',
        provider: '損害保険ジャパン日本興亜株式会社',
        way: '会員登録',
        category: [
          'appliance',
          'foods',
          'goods',
          'stationery'
        ]
      },
      {
        id: 7503,
        name: '日本で一番売れてる化粧水ミニサンプル',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d5279fec8442.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:12Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-26T00:00:00Z',
        link: 'https://jp.rohto.com/keshousui/',
        provider: 'ロート製薬',
        way: 'Twitter',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 4803,
        name: '新PYUAN全5種サンプルセット',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d23b2752df.jpg',
        image_bin: '',
        created_at: '2019-07-29T22:03:34Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/PYUAN_official',
        provider: '花王',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 6372,
        name: '中性重炭酸入浴剤 BARTH',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d468a04817c4.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://barth.jp/lp/bath_before_bed/',
        provider: '株式会社ＴＷＯ',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 3920,
        name: 'ペットフード オリジナルパッケージ',
        winner: 2200,
        image_url: 'https://www.chance.com/image/prizeimg/5d170eb1930c1.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:57Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.nisshin-pet.co.jp/lp/cp-hitotsudake-1904/',
        provider: '日清ペットフード株式会社',
        way: '商品購入',
        category: [
          'gift',
          'other'
        ]
      },
      {
        id: 6387,
        name: 'フリッジィズー、エプロン、QUOカード',
        winner: 2200,
        image_url: 'https://www.chance.com/image/prizeimg/5d44ed5555ff5.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.morinaga.co.jp/hi-chew/campaign/2019/',
        provider: '森永製菓',
        way: '商品購入',
        category: [
          'appliance',
          'gift',
          'goods'
        ]
      },
      {
        id: 4197,
        name: '[東京・大阪]オリジナル柄注染体験',
        winner: 1500,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d8b697305d.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:23:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-21T00:00:00Z',
        link: 'https://www.fujicco.co.jp/therapy/omotenashi/',
        provider: 'フジッコ株式会社',
        way: '商品購入',
        category: [
          'foods',
          'goods',
          'other',
          'ticket'
        ]
      }
    ]
  },
  {
    no: 5,
    renderType: 'quadCards',
    heading: '最新ゲームを手に入れよう！',
    endpoint: 'category/toy?limit=8',
    contents: [
      {
        id: 6391,
        name: 'お好きなゲームソフト、ギフトカード',
        winner: 11,
        image_url: 'https://www.chance.com/image/prizeimg/5d43e6f4b6f7c.png',
        image_bin: '',
        created_at: '2019-08-10T22:09:49Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-11-01T00:00:00Z',
        link: 'https://www.freem.ne.jp/contents/event/p/2019_03.html',
        provider: '有限会社ふりーむ',
        way: 'アンケート',
        category: [
          'gift',
          'toy'
        ]
      },
      {
        id: 6191,
        name: 'アンパンマン抱き人形ソフト',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a8c5916700.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:07:51Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-11T00:00:00Z',
        link: 'https://www.froebel-tsubame.jp/html/new_event.html?code=20190805051426',
        provider: 'フレーベル館オンラインショップ「つばめのおうち」',
        way: 'アンケート',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 7592,
        name: 'ドラえもんはじめての英語図鑑',
        winner: 51,
        image_url: 'https://www.chance.com/image/prizeimg/5d4d208bd1a45.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-11T00:00:00Z',
        link: 'https://hugkum.sho.jp/75745',
        provider: '小学館 HugKum(ハグクム)',
        way: 'アンケート',
        category: [
          'baby',
          'cosmetics',
          'foods',
          'goods',
          'toy'
        ]
      },
      {
        id: 7505,
        name: '水ふうせんでラリー「オゴディスクH2O」',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d513b32a400c.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:13Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-10T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentogodiskh2o',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 7506,
        name: 'チャギントン パズルタウン',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d513e50051ac.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:14Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-10T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentchuggington',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 3955,
        name: '東京2020オリンピック開会式チケット他',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d118ac92221f.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:11Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-09T00:00:00Z',
        link: 'http://yamato-hd.co.jp/tokyo2020/campaign/',
        provider: 'ヤマトホールディングス株式会社',
        way: '',
        category: [
          'other',
          'ticket',
          'toy'
        ]
      },
      {
        id: 6306,
        name: 'ストライダーベイビーバンドル',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d482808d2e25.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/present-striderbabybundle',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'baby',
          'toy'
        ]
      },
      {
        id: 6388,
        name: 'おもちゃメーカーのこの夏オススメおもちゃ',
        winner: 63,
        image_url: 'https://www.chance.com/image/prizeimg/5d44ea5f84913.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://www.toynes.jp/summer/top.htm',
        provider: 'おもちゃ情報net.',
        way: 'アンケート',
        category: [
          'baby',
          'toy'
        ]
      }
    ]
  },
  {
    no: 6,
    renderType: 'largeCard',
    heading: 'Amazonカードを当てよう！',
    image_url: 'https://prizz.jp/assets/img/amazon-card_min.jpg',
    link: '/category/gift'
  },
  {
    no: 7,
    renderType: 'quadCards',
    heading: '車を当てよう！',
    endpoint: 'category/vehicle?limit=8',
    contents: [
      {
        id: 4836,
        name: 'ホンダ N-BOX（新車）',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d3964b4b185d.gif',
        image_bin: '',
        created_at: '2019-07-29T22:04:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-12-26T00:00:00Z',
        link: 'https://www.carseven.co.jp/cmp/2019nbox',
        provider: 'カーセブン',
        way: 'クイズ',
        category: [
          'vehicle'
        ]
      }
    ]
  },
  {
    no: 8,
    renderType: 'horizontalScroll',
    heading: '雑貨を当てよう！',
    endpoint: 'category/goods?limit=30',
    ad_link: 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_image: 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
    ad_tracking: 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_name: '【AD】ワゴンRが当たる！',
    ad_number: '1000',
    contents: [
      {
        id: 4085,
        name: 'ネスカフェ オリジナルタンブラーセット',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5c85ab2b93dbb.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:13:23Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2020-01-01T00:00:00Z',
        link: 'https://nestle.jp/brand/nescafe/nescafe3bai/quiz/',
        provider: 'ネスレ日本',
        way: 'クイズ',
        category: [
          'goods'
        ]
      },
      {
        id: 6239,
        name: 'オリジナル湯あがりセット',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a30341b60b.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:22Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2020-01-01T00:00:00Z',
        link: 'https://www.bathlier.com/expand/home/b-supporter/event-beer',
        provider: 'バスリエ株式会社',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 7388,
        name: 'お昼寝まくら',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d56091292326.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:50Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-12-23T00:00:00Z',
        link: 'https://www.fit-labo.com/campaign2019aw/',
        provider: '西川株式会社',
        way: '',
        category: [
          'goods'
        ]
      },
      {
        id: 5479,
        name: 'かんどーくんオリジナルグッズ',
        winner: 154,
        image_url: 'https://www.chance.com/image/prizeimg/5d3e8c46d7980.gif',
        image_bin: '',
        created_at: '2019-08-01T22:05:42Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-12-01T00:00:00Z',
        link: 'https://www.oka-kk.co.jp/kandokun/kando-campaign/',
        provider: 'オカ株式会社',
        way: 'Instagram',
        category: [
          'goods'
        ]
      },
      {
        id: 3825,
        name: 'オリジナルタオル',
        winner: 300,
        image_url: 'https://www.chance.com/image/prizeimg/5d1c9a7ca02a7.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.nissei-com.co.jp/campaign/smile_soft.jsp',
        provider: '日世株式会社',
        way: 'クイズ',
        category: [
          'goods'
        ]
      },
      {
        id: 4047,
        name: '賞金5万円、2万円、カメヤマ商品',
        winner: 123,
        image_url: 'https://www.chance.com/image/prizeimg/5cf1c85823f34.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:13:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kameyama.co.jp/hitorigoto/',
        provider: 'カメヤマ株式会社',
        way: 'コンテスト',
        category: [
          'cash',
          'goods',
          'other'
        ]
      },
      {
        id: 6181,
        name: '羊毛3Dフレーム、フォトパネル',
        winner: 144,
        image_url: 'https://www.chance.com/image/prizeimg/5d4b83c7a9d92.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:07:49Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.ipetclub.jp/fun/calendar/2020/?r=ext_present',
        provider: 'アイペット損害保険株式会社',
        way: 'コンテスト',
        category: [
          'goods',
          'other'
        ]
      },
      {
        id: 6238,
        name: 'ベビーカー、チャイルドシート',
        winner: 183,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a3166c9f03.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:19Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
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
        ]
      },
      {
        id: 6305,
        name: 'Apple Watch',
        winner: 131,
        image_url: 'https://www.chance.com/image/prizeimg/5d48da3c35024.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.nobel.co.jp/cam1907/',
        provider: 'ノーベル製菓株式会社',
        way: '会員登録',
        category: [
          'appliance',
          'goods',
          'stationery'
        ]
      },
      {
        id: 6348,
        name: 'とろけるアイススプーン',
        winner: 300,
        image_url: 'https://www.chance.com/image/prizeimg/5d4921197cca1.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:25Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://bp-affairs.com/news/2019/08/20190806-9414.html',
        provider: '一般社団法人ビジネス＆パブリック アフェアーズ',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 5432,
        name: 'るなたんグッズ',
        winner: 550,
        image_url: 'https://www.chance.com/image/prizeimg/5d42a649a6310.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:17Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-30T23:00:00Z',
        link: 'https://nhg-linecp.com/nipponluna2019/',
        provider: '日本ルナ株式会社',
        way: '商品購入',
        category: [
          'goods'
        ]
      },
      {
        id: 4621,
        name: '香川県産品カタログギフト',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d359e666ab06.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:07:16Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-30T00:00:00Z',
        link: 'https://www.toshiakeudon.com/2019_pre/contest/index.php',
        provider: 'さぬきうまいもんプロジェクト実行委員会、香川県',
        way: 'コンテスト',
        category: [
          'foods',
          'goods',
          'other'
        ]
      },
      {
        id: 6203,
        name: 'マカオ旅行（2泊3日) ',
        winner: 11,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a55101eb32.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-26T00:00:00Z',
        link: 'https://macao.ownly.jp/story/7445',
        provider: 'マカオ政府観光局',
        way: '',
        category: [
          'goods',
          'travel'
        ]
      },
      {
        id: 3959,
        name: 'ことばえほん こえでABC',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d11ea441d50e.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:13Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-21T00:00:00Z',
        link: 'https://www.happy-note.com/tu/rwd/ohayo2019sm-tieup.html',
        provider: 'ミキハウス子育て総研株式会社',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 4197,
        name: '[東京・大阪]オリジナル柄注染体験',
        winner: 1500,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d8b697305d.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:23:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-21T00:00:00Z',
        link: 'https://www.fujicco.co.jp/therapy/omotenashi/',
        provider: 'フジッコ株式会社',
        way: '商品購入',
        category: [
          'foods',
          'goods',
          'other',
          'ticket'
        ]
      },
      {
        id: 3961,
        name: 'バケツ型 ミニロゴトートバッグ',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d11e1a6c9aba.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:13Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-20T00:00:00Z',
        link: 'https://www.happy-note.com/tu/rwd/daiken2019sm.html',
        provider: 'ミキハウス子育て総研株式会社',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 3960,
        name: 'ミキハウスダブルBトートバッグ',
        winner: 7,
        image_url: 'https://www.chance.com/image/prizeimg/5d11e70b72036.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:13Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-18T00:00:00Z',
        link: 'https://www.happy-note.com/tu/rwd/summer2019-yubin.html',
        provider: 'ミキハウス子育て総研株式会社',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 5473,
        name: '和ろうそくプチセット',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d3fed12cb935.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-17T12:00:00Z',
        link: 'https://www.instagram.com/p/B0h-bmjDWwB/',
        provider: '磯部ろうそく店',
        way: 'Instagram',
        category: [
          'goods'
        ]
      },
      {
        id: 7540,
        name: 'ボタニカル刺しゅうキット',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d5114951c67c.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:33Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-16T00:00:00Z',
        link: 'https://community.lavida.jp/lecien/article/article/59771/',
        provider: '株式会社ルシアン',
        way: '会員登録',
        category: [
          'goods'
        ]
      },
      {
        id: 7380,
        name: 'ポンちゃんグッズＢＯＸ',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d563fd1e9380.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:46Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-15T00:00:00Z',
        link: 'http://www.mangetupon.co.jp/gorokutoblog2/',
        provider: '株式会社　松岡製菓',
        way: '応募が簡単',
        category: [
          'goods'
        ]
      },
      {
        id: 3549,
        name: '台湾茶+お香、ケーキ+烏龍茶',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d245d7301b6c.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:07:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-11T00:00:00Z',
        link: 'https://travel-value.jp/present/backnumber/#present2400',
        provider: 'トラベルバリュー（たびゲーター）',
        way: '会員登録',
        category: [
          'foods',
          'goods'
        ]
      },
      {
        id: 4572,
        name: '銀色ツヤ消しジッポーライター',
        winner: 2,
        image_url: 'https://www.chance.com/image/prizeimg/5d355038164d6.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:06:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-11T00:00:00Z',
        link: 'http://www.zippoworld.jp/present.htm',
        provider: 'ジッポー専門店 ジッポーワールド',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 7592,
        name: 'ドラえもんはじめての英語図鑑',
        winner: 51,
        image_url: 'https://www.chance.com/image/prizeimg/5d4d208bd1a45.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-11T00:00:00Z',
        link: 'https://hugkum.sho.jp/75745',
        provider: '小学館 HugKum(ハグクム)',
        way: 'アンケート',
        category: [
          'baby',
          'cosmetics',
          'foods',
          'goods',
          'toy'
        ]
      },
      {
        id: 6387,
        name: 'フリッジィズー、エプロン、QUOカード',
        winner: 2200,
        image_url: 'https://www.chance.com/image/prizeimg/5d44ed5555ff5.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.morinaga.co.jp/hi-chew/campaign/2019/',
        provider: '森永製菓',
        way: '商品購入',
        category: [
          'appliance',
          'gift',
          'goods'
        ]
      },
      {
        id: 3799,
        name: 'ジュエリーツリー',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d1d7b419b5ea.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:10:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T18:00:00Z',
        link: 'http://beautique.jp/monitor/index.html',
        provider: 'ジェイ・フリートBEAUTiQUE事業部',
        way: 'アンケート',
        category: [
          'goods'
        ]
      },
      {
        id: 5664,
        name: 'tower マグネットバスブーツホルダー',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d4221962251e.jpg',
        image_bin: '',
        created_at: '2019-08-04T20:16:51Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://www.bathclin.co.jp/campaign/201908_bathbootholder/?utm_source=1908&utm_medium=Sweepstakes&utm_campaign=bathgoods',
        provider: '株式会社バスクリン',
        way: '会員登録',
        category: [
          'goods'
        ]
      },
      {
        id: 5478,
        name: '旅行チケット、iPad Pro',
        winner: 25,
        image_url: 'https://www.chance.com/image/prizeimg/5d3ee33c5ba39.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:41Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T10:00:00Z',
        link: 'https://www.every-photo.com/html/20190708_mapcamera/',
        provider: 'シュッピン株式会社',
        way: 'コンテスト',
        category: [
          'appliance',
          'gift',
          'goods',
          'travel'
        ]
      },
      {
        id: 3860,
        name: 'バルミューダ ザ・トースター',
        winner: 333,
        image_url: 'https://www.chance.com/image/prizeimg/5d19cc53efd04.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:28Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'http://www.kinkan.co.jp/campaign/2019/kinkan-sanshimai/present/',
        provider: '株式会社金冠堂',
        way: 'コンテスト',
        category: [
          'appliance',
          'goods'
        ]
      },
      {
        id: 3909,
        name: '「かしこまり」ジャケ写クッション',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d182dda326d0.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:50Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.snakaranavi.net/kashikomari/ivents1.php',
        provider: '一般社団法人全国カラオケ事業者協会',
        way: 'クイズ',
        category: [
          'goods'
        ]
      },
      {
        id: 3934,
        name: 'ペア宿泊券、ランチコース ペア招待券',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d143262c87a8.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://saitama-shintoshin.metropolitan.jp/feature/instacp.html',
        provider: 'ホテルメトロポリタンさいたま新都心',
        way: 'Instagram',
        category: [
          'goods',
          'ticket',
          'travel'
        ]
      }
    ]
  },
  {
    no: 9,
    renderType: 'quadCards',
    heading: '服を当てよう！',
    endpoint: 'category/fashion?limit=8',
    contents: [
      {
        id: 4110,
        name: 'K-1ファイターサイン入り長袖シャツ',
        winner: 1,
        image_url: '/img/present/no_image_300x300.gif',
        image_bin: '',
        created_at: '2019-07-17T01:08:42Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.z-dragon.jp/campaign/19ss_fighters02/',
        provider: '株式会社自重堂',
        way: 'アンケート',
        category: [
          'fashion'
        ]
      },
      {
        id: 6313,
        name: 'B&GオリジナルＴシャツ',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d48cc56537d6.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:04Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.bgf.or.jp/senryu/bosyuu.html',
        provider: 'ブルーシー・アンド・グリーンランド財団（B＆G財団）',
        way: '',
        category: [
          'fashion'
        ]
      },
      {
        id: 7543,
        name: '星野リゾート宿泊券5万円分',
        winner: 12,
        image_url: 'https://www.chance.com/image/prizeimg/5d50dcc55760d.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:34Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'http://darkshiny.jp/campaign/inazuma/',
        provider: '加藤貿易株式会社',
        way: 'Instagram',
        category: [
          'fashion',
          'gift',
          'travel'
        ]
      },
      {
        id: 3809,
        name: '黒真珠ネックレス、三次ピオーネ',
        winner: 12,
        image_url: 'https://www.chance.com/image/prizeimg/5d1c3c2248828.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:10:53Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-26T00:00:00Z',
        link: 'http://www.miyoshipione.jp/',
        provider: '三次ピオーネ生産組合',
        way: 'クイズ',
        category: [
          'fashion',
          'foods'
        ]
      },
      {
        id: 7359,
        name: 'サイン入りウエア',
        winner: 4,
        image_url: 'https://www.chance.com/image/prizeimg/5d5799d3a98ce.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-21T00:00:00Z',
        link: 'https://www.jawin.jp/19aw-athlete/',
        provider: '株式会社自重堂',
        way: '',
        category: [
          'fashion'
        ]
      },
      {
        id: 6307,
        name: 'ニューバランス キッズシューズ',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d4823b0b4abd.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentnewblance313',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'fashion'
        ]
      },
      {
        id: 5659,
        name: 'Tシャツ、都内交通案内地図、QUOカード',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d424b571008d.jpg',
        image_bin: '',
        created_at: '2019-08-04T20:16:47Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T09:00:00Z',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSduKLPdjgEfLdT491m5LBFOBh06Gm4Rb8bg7HgjRL9Tf-7hWg/viewform',
        provider: '公益財団法人東京タクシーセンター',
        way: 'クイズ',
        category: [
          'fashion',
          'gift',
          'other'
        ]
      },
      {
        id: 4115,
        name: 'アニメ「ジモトがジャパン」Tシャツ',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d295e321dd75.jpg',
        image_bin: '',
        created_at: '2019-07-17T01:08:45Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://www.shopro.co.jp/tv/jimoto-anime/2019twittercp02.html',
        provider: '株式会社小学館集英社プロダクション',
        way: 'Twitter',
        category: [
          'fashion'
        ]
      }
    ]
  },
  '10': {
    no: 10,
    renderType: 'horizontalScroll',
    heading: '当選人数が多い順！！！',
    endpoint: 'winner?limit=30',
    ad_link: 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_image: 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
    ad_tracking: 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_name: '【AD】ワゴンRが当たる！',
    ad_number: '1000',
    contents: [
      {
        id: 7509,
        name: 'キュレル ボディウォッシュ サンプル',
        winner: 50000,
        image_url: 'https://www.chance.com/image/prizeimg/5d42661b647a0.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kao.co.jp/curel/special/19bodywash/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 6285,
        name: 'キュレル リップケア サンプルセット',
        winner: 50000,
        image_url: 'https://www.chance.com/image/prizeimg/5d4265970d034.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-30T00:00:00Z',
        link: 'https://www.kao.co.jp/curel/special/19lipcare/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 4417,
        name: '「森永ピノ」無料引き換え電子クーポン',
        winner: 30000,
        image_url: 'https://www.chance.com/image/prizeimg/5d2fe92952f9a.jpg',
        image_bin: '',
        created_at: '2019-07-23T05:40:45Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://rurubu.jp/andmore/article/8212?utm_source=chance-it&utm_medium=referral&utm_campaign=id-registration201907',
        provider: 'JTBパブリッシング',
        way: '会員登録',
        category: [
          'foods'
        ]
      },
      {
        id: 4430,
        name: 'ロボット掃除機、コードレスクリーナー',
        winner: 10020,
        image_url: 'https://www.chance.com/image/prizeimg/5d3069914c296.jpg',
        image_bin: '',
        created_at: '2019-07-23T05:40:53Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://park.sjnk.co.jp/campaign/ins_201907-08_enq/index.html',
        provider: '損害保険ジャパン日本興亜株式会社',
        way: '会員登録',
        category: [
          'appliance',
          'foods',
          'goods',
          'stationery'
        ]
      },
      {
        id: 7503,
        name: '日本で一番売れてる化粧水ミニサンプル',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d5279fec8442.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:12Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-26T00:00:00Z',
        link: 'https://jp.rohto.com/keshousui/',
        provider: 'ロート製薬',
        way: 'Twitter',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 4803,
        name: '新PYUAN全5種サンプルセット',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d23b2752df.jpg',
        image_bin: '',
        created_at: '2019-07-29T22:03:34Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/PYUAN_official',
        provider: '花王',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 6372,
        name: '中性重炭酸入浴剤 BARTH',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d468a04817c4.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://barth.jp/lp/bath_before_bed/',
        provider: '株式会社ＴＷＯ',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 3920,
        name: 'ペットフード オリジナルパッケージ',
        winner: 2200,
        image_url: 'https://www.chance.com/image/prizeimg/5d170eb1930c1.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:57Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.nisshin-pet.co.jp/lp/cp-hitotsudake-1904/',
        provider: '日清ペットフード株式会社',
        way: '商品購入',
        category: [
          'gift',
          'other'
        ]
      },
      {
        id: 6387,
        name: 'フリッジィズー、エプロン、QUOカード',
        winner: 2200,
        image_url: 'https://www.chance.com/image/prizeimg/5d44ed5555ff5.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:48Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.morinaga.co.jp/hi-chew/campaign/2019/',
        provider: '森永製菓',
        way: '商品購入',
        category: [
          'appliance',
          'gift',
          'goods'
        ]
      },
      {
        id: 4197,
        name: '[東京・大阪]オリジナル柄注染体験',
        winner: 1500,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d8b697305d.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:23:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-21T00:00:00Z',
        link: 'https://www.fujicco.co.jp/therapy/omotenashi/',
        provider: 'フジッコ株式会社',
        way: '商品購入',
        category: [
          'foods',
          'goods',
          'other',
          'ticket'
        ]
      },
      {
        id: 3789,
        name: '旅行ギフト、QUOカードや商品詰め合わせ',
        winner: 1500,
        image_url: 'https://www.chance.com/image/prizeimg/5d1ebe8b2c3c1.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:10:42Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'http://imuraya-cp.jp/mizuyokan_cp/?utm_source=PRchance&utm_medium=netad&utm_campaign=imuraya_mizuyokan',
        provider: '井村屋',
        way: '商品購入',
        category: [
          'appliance',
          'foods',
          'gift',
          'travel'
        ]
      },
      {
        id: 3649,
        name: '特選パウンドケーキ、原宿はちみつ',
        winner: 1100,
        image_url: 'https://www.chance.com/image/prizeimg/5d22e6cc614d0.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:08:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.colombin.co.jp/campaign/campaign2019.php',
        provider: '株式会社コロンバン',
        way: '商品購入',
        category: [
          'foods'
        ]
      },
      {
        id: 4285,
        name: 'ビール券100万円分',
        winner: 1001,
        image_url: 'https://www.chance.com/image/prizeimg/5d22d2f4a1639.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:24:07Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.itohkampo.co.jp/products/sp/shijimicp_1/',
        provider: '井藤漢方製薬',
        way: 'Twitter',
        category: [
          'foods',
          'sports'
        ]
      },
      {
        id: 5667,
        name: 'Amazonギフト券3000円分',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5d416084b36df.png',
        image_bin: '',
        created_at: '2019-08-04T20:16:52Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.homes.co.jp/trunkroom/share/lp/chanceit/',
        provider: '株式会社LIFULL SPACE',
        way: '会員登録',
        category: [
          'gift'
        ]
      },
      {
        id: 3988,
        name: '13種の焼肉のたれ小皿セット',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5d0aedcfe134a.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:35Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'http://www.moranbong.co.jp/jang2019buyandhit/?frm=chance',
        provider: 'モランボン株式会社',
        way: '商品購入',
        category: [
          'gift',
          'goods'
        ]
      },
      {
        id: 4044,
        name: '家飲みセット',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5cf21a7447d1e.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:58Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.ffa.ajinomoto.com/campaign/campaign_313suntory',
        provider: '味の素冷凍食品株式会社',
        way: '商品購入',
        category: [
          'foods'
        ]
      },
      {
        id: 4052,
        name: '日本各地の選べるグルメ',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5cf0bba0b4431.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:13:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.gabuttocp.maruha-nichiro.co.jp/',
        provider: 'マルハニチロ株式会社',
        way: '商品購入',
        category: [
          'foods',
          'gift'
        ]
      },
      {
        id: 4074,
        name: '新・一番搾り 6缶パック',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5cc0013f5106f.png',
        image_bin: '',
        created_at: '2019-07-14T21:13:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kirin.co.jp/products/beer/ichiban/campaign/2019shin_oishii/?agechk=1',
        provider: 'キリン',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7411,
        name: 'Xフライドポテト無料券',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5d5791f1bdbb7.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:04Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-23T00:00:00Z',
        link: 'https://www.ministop.co.jp/campaign/Xpotato_cp/',
        provider: 'ミニストップ株式会社',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 4616,
        name: '宝塚歌劇月組公演A席B席',
        winner: 600,
        image_url: 'https://www.chance.com/image/prizeimg/5d36a5f68d157.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:07:14Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-12T00:00:00Z',
        link: 'http://www.a2ry.com/',
        provider: 'エーツケア株式会社',
        way: 'クイズ',
        category: [
          'other'
        ]
      },
      {
        id: 3807,
        name: 'お取り寄せスイーツ',
        winner: 600,
        image_url: 'https://www.chance.com/image/prizeimg/5d1c50b8e445c.png',
        image_bin: '',
        created_at: '2019-07-14T21:10:52Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'http://www.caspia.jp/tottemooishii/',
        provider: 'フジッコ株式会社',
        way: 'LINE',
        category: [
          'appliance',
          'foods',
          'other'
        ]
      },
      {
        id: 5432,
        name: 'るなたんグッズ',
        winner: 550,
        image_url: 'https://www.chance.com/image/prizeimg/5d42a649a6310.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:17Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-30T23:00:00Z',
        link: 'https://nhg-linecp.com/nipponluna2019/',
        provider: '日本ルナ株式会社',
        way: '商品購入',
        category: [
          'goods'
        ]
      },
      {
        id: 3881,
        name: 'ザ・プレミアム・モルツ〈香る〉エール6缶',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d15766a8d1bc.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.suntory.co.jp/beer/kaoruale/campaign/2019_kaoru/',
        provider: 'サントリー',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7584,
        name: 'QUOカード 1000円分',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d4c194badfc6.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:53Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-11-01T00:00:00Z',
        link: 'https://win.kanpy-cp.com/',
        provider: '加藤産業　株式会社',
        way: '商品購入',
        category: [
          'gift'
        ]
      },
      {
        id: 6347,
        name: '現金100万円、化粧品',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d49105e75c8c.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:24Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-26T00:00:00Z',
        link: 'https://veramagazine.jp/hadato-campaign/',
        provider: '株式会社SYG',
        way: 'コンテスト',
        category: [
          'cash',
          'cosmetics',
          'gift'
        ]
      },
      {
        id: 7374,
        name: 'エスティ ローダー 美容液',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d564f595fcbb.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:44Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-28T00:00:00Z',
        link: 'https://www.cosme.net/brand/brand_id/104/tieup/00104201907-02/page/page.html',
        provider: '＠ｃｏｓｍｅ（アットコスメ）',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 7418,
        name: 'ランコム リキッドファンデーション',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d56504f69521.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:53:11Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-28T00:00:00Z',
        link: 'https://www.cosme.net/brand/brand_id/42/tieup/00042201907-01/page/page.html',
        provider: '＠ｃｏｓｍｅ（アットコスメ）',
        way: '会員登録',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 6149,
        name: 'ホームベーカリー、トースター',
        winner: 400,
        image_url: 'https://www.chance.com/image/prizeimg/5d4bb9ab7814f.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:07:28Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://greenwood-cp.com/',
        provider: '加藤産業　株式会社',
        way: '商品購入',
        category: [
          'appliance',
          'daily',
          'foods',
          'gift',
          'goods'
        ]
      },
      {
        id: 4617,
        name: '宝塚歌劇月組公演チケット S席',
        winner: 400,
        image_url: 'https://www.chance.com/image/prizeimg/5d36a5159caf8.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:07:14Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-12T00:00:00Z',
        link: 'https://www.a2-care.co.jp/store/user_data/takarazuka.php',
        provider: 'エーツケア株式会社',
        way: '商品購入',
        category: [
          'other'
        ]
      },
      {
        id: 4212,
        name: '宝塚歌劇貸切公演チケット',
        winner: 380,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d664010d35.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:23:17Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-24T00:00:00Z',
        link: 'https://www.ucc.co.jp/welovecoffee/cp2/',
        provider: 'UCC上島珈琲株式会社',
        way: '商品購入',
        category: [
          'ticket'
        ]
      }
    ]
  },
  '11': {
    no: 11,
    renderType: 'quadCards',
    heading: '日用品を当てよう！',
    endpoint: 'category/daily?limit=8',
    contents: [
      {
        id: 6238,
        name: 'ベビーカー、チャイルドシート',
        winner: 183,
        image_url: 'https://www.chance.com/image/prizeimg/5d4a3166c9f03.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:19Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
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
        ]
      },
      {
        id: 7509,
        name: 'キュレル ボディウォッシュ サンプル',
        winner: 50000,
        image_url: 'https://www.chance.com/image/prizeimg/5d42661b647a0.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kao.co.jp/curel/special/19bodywash/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 7538,
        name: '「ルックプラス」4点セット',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d5139d89536b.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:31Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-10T00:00:00Z',
        link: 'https://www.mama-no-wa.jp/presentlookplusonepiece',
        provider: '株式会社マインドシェア・ママ・マーケティング・カンパニー',
        way: '会員登録',
        category: [
          'daily'
        ]
      },
      {
        id: 4554,
        name: 'アタック ZERO（ゼロ）',
        winner: 30,
        image_url: 'https://www.chance.com/image/prizeimg/5d364c52ee3d3.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:06:32Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.kao.co.jp/lifei/feature/85th.html',
        provider: '花王株式会社',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 5469,
        name: 'フレグランスニュービーズジェル',
        winner: 30,
        image_url: 'https://www.chance.com/image/prizeimg/5d3ff36fdfc01.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:38Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.kao.co.jp/lifei/support/06/',
        provider: '花王',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 6304,
        name: 'エマール+ハミングファイン+ビオレｕ',
        winner: 30,
        image_url: 'https://www.chance.com/image/prizeimg/5d48c639b7c0f.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:00Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.kao.co.jp/lifei/support/67/',
        provider: '花王株式会社',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 3817,
        name: 'ティースホワイトパック＜ハミガキ＞',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d1d4e812994b.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:10:56Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T18:00:00Z',
        link: 'http://beautique.jp/idea/index.html',
        provider: '(株)ジェイ・フリートBEAUTiQUE事業部',
        way: 'アンケート',
        category: [
          'daily'
        ]
      },
      {
        id: 6418,
        name: 'スクラビングバブル ジャバ 1つ穴用',
        winner: 20,
        image_url: 'https://www.chance.com/image/prizeimg/5d43cea9eb6f4.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:10:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://scjcatalog.johnson.co.jp/life/bitekilife/1908/index.html',
        provider: 'ジョンソン株式会社',
        way: 'アンケート',
        category: [
          'daily'
        ]
      }
    ]
  },
  '12': {
    no: 12,
    renderType: 'horizontalScroll',
    heading: 'Twitter懸賞！',
    endpoint: 'way/twitter?limit=30',
    ad_link: 'https://px.a8.net/svt/ejp?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_image: 'https://www22.a8.net/svt/bgt?aid=190218636488&wid=003&eno=01&mid=s00000000368004037000&mc=1',
    ad_tracking: 'https://www13.a8.net/0.gif?a8mat=3591N0+82JLJ6+2U8+O19OX',
    ad_name: '【AD】ワゴンRが当たる！',
    ad_number: '1000',
    contents: [
      {
        id: 4511,
        name: 'Amazonギフト券3000円分',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d366c780dab0.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:05:56Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2020-01-01T00:00:00Z',
        link: 'https://www.houryuji-syaken.com/info/campaign.php',
        provider: 'ホリデー車検法隆寺',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 4516,
        name: 'Amazonギフト券3000円分',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d366ceb1b085.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:06:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2020-01-01T00:00:00Z',
        link: 'https://www.onahama-syaken.com/info/campaign.php',
        provider: 'ホリデー車検小名浜',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 4524,
        name: 'Amazonギフト券3000円分',
        winner: 30,
        image_url: 'https://www.chance.com/image/prizeimg/5d366bd02a70a.jpg',
        image_bin: '',
        created_at: '2019-07-25T11:06:09Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2020-01-01T00:00:00Z',
        link: 'https://www.sakuragawa-syaken.com/info/campaign.php',
        provider: 'ホリデー車検桜川',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 5435,
        name: 'DONBURI亭3袋入り3種セット',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d4255218da52.jpg',
        image_bin: '',
        created_at: '2019-08-01T22:05:18Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'http://cp.glico.jp/donburi-ss/tw/',
        provider: '江崎グリコ株式会社',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 4074,
        name: '新・一番搾り 6缶パック',
        winner: 1000,
        image_url: 'https://www.chance.com/image/prizeimg/5cc0013f5106f.png',
        image_bin: '',
        created_at: '2019-07-14T21:13:15Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-10-01T00:00:00Z',
        link: 'https://www.kirin.co.jp/products/beer/ichiban/campaign/2019shin_oishii/?agechk=1',
        provider: 'キリン',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 3588,
        name: '図書カード3000円分',
        winner: 60,
        image_url: 'https://www.chance.com/image/prizeimg/5d255e8f81e1f.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:08:01Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-16T00:00:00Z',
        link: 'http://book-sp.kodansha.co.jp/move/',
        provider: '講談社',
        way: 'Twitter',
        category: [
          'gift',
          'other'
        ]
      },
      {
        id: 6174,
        name: 'Amazonギフト券1000円分',
        winner: 50,
        image_url: 'https://www.chance.com/image/prizeimg/5d4b8e7e4f3f8.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:07:44Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-10T00:00:00Z',
        link: 'https://twitter.com/Kasege_official/status/1159013737627451392',
        provider: 'タップリアル株式会社',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 6362,
        name: '一番搾り、午後の紅茶、トロピカーナ',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d479514cf26e.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:36Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-09T00:00:00Z',
        link: 'https://jp.fsc.org/jp-jp/4-fsc/4-1/12452125051253112488/fscx2018-twitter-winter',
        provider: 'FSCジャパン',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 4771,
        name: '[東京]映画『アナベル 死霊博物館』試写会招待券',
        winner: 60,
        image_url: 'https://www.chance.com/image/prizeimg/5d3c0ddfe3cd1.jpg',
        image_bin: '',
        created_at: '2019-07-29T22:03:08Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-07T00:00:00Z',
        link: 'https://sgs109.com/p/10488/',
        provider: '株式会社アリュクス ストリートガールズスナップ',
        way: 'Twitter',
        category: [
          'movie',
          'ticket'
        ]
      },
      {
        id: 7465,
        name: '書籍『ロイヒトトゥルム1917で楽しむバレットジャーナル』',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d5272341b8f0.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:55:50Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-05T00:00:00Z',
        link: 'https://www.j-cast.com/bookwatch/book059/2019/07/30009487.html',
        provider: '株式会社ジェイ・キャスト',
        way: 'Twitter',
        category: [
          'books'
        ]
      },
      {
        id: 3881,
        name: 'ザ・プレミアム・モルツ〈香る〉エール6缶',
        winner: 500,
        image_url: 'https://www.chance.com/image/prizeimg/5d15766a8d1bc.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.suntory.co.jp/beer/kaoruale/campaign/2019_kaoru/',
        provider: 'サントリー',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 5681,
        name: 'ハーゲンダッツ1個',
        winner: 100,
        image_url: 'https://www.chance.com/image/prizeimg/5d417ed72369d.jpg',
        image_bin: '',
        created_at: '2019-08-04T20:17:06Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-03T00:00:00Z',
        link: 'https://www.fuwafuwa-roll.com/campaign/campaign_tw04.html',
        provider: '望月製紙株式会社',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 6405,
        name: 'JTB旅行券10万円分',
        winner: 12,
        image_url: 'https://www.chance.com/image/prizeimg/5d47d98271f2f.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:55Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://nobi-kids.jp/nobinobitaisou/show-a',
        provider: '株式会社For-s',
        way: 'Twitter',
        category: [
          'gift',
          'other'
        ]
      },
      {
        id: 4115,
        name: 'アニメ「ジモトがジャパン」Tシャツ',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d295e321dd75.jpg',
        image_bin: '',
        created_at: '2019-07-17T01:08:45Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://www.shopro.co.jp/tv/jimoto-anime/2019twittercp02.html',
        provider: '株式会社小学館集英社プロダクション',
        way: 'Twitter',
        category: [
          'fashion'
        ]
      },
      {
        id: 7497,
        name: '書籍『犯罪学大図鑑』',
        winner: 5,
        image_url: 'https://www.chance.com/image/prizeimg/5d535ea60b46b.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:09Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://www.j-cast.com/bookwatch/2019/07/30009529.html',
        provider: '株式会社ジェイ・キャスト',
        way: 'Twitter',
        category: [
          'books'
        ]
      },
      {
        id: 4011,
        name: 'レストラン招待券2万円分',
        winner: 19,
        image_url: 'https://www.chance.com/image/prizeimg/5d034e4292d49.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:12:46Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-02T00:00:00Z',
        link: 'https://rurubu.jp/andmore/article/7947?utm_source=chance-it&utm_medium=referral&utm_campaign=photocon-201906',
        provider: 'JTBパブリッシング',
        way: 'Twitter',
        category: [
          'appliance',
          'other',
          'ticket'
        ]
      },
      {
        id: 6420,
        name: 'QUOカード1000円分',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d43cdd487313.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:10:02Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/hatachino_ryoma/status/1157063458673893380',
        provider: '一般社団法人しながわ観光協会',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 3882,
        name: 'MONOリュック、MONOスニーカー',
        winner: 60,
        image_url: 'https://www.chance.com/image/prizeimg/5d19a1ce2ff0b.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:38Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.tombow.com/cp/mono50th/?utm_source=luckle&amp;utm_medium=link&amp;utm_campaign=mono50',
        provider: '株式会社トンボ鉛筆',
        way: 'Twitter',
        category: [
          'fashion'
        ]
      },
      {
        id: 7470,
        name: '吉野家プリカ1000円分',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d5284be08aac.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:55:51Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/yoshinoyagyudon/status/1161208297350975489',
        provider: '吉野家',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 3907,
        name: 'MONOリュック、MONOスニーカー',
        winner: 60,
        image_url: 'https://www.chance.com/image/prizeimg/5d105bf9b032e.jpg',
        image_bin: '',
        created_at: '2019-07-14T21:11:49Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.tombow.com/cp/mono50th/',
        provider: 'トンボ鉛筆',
        way: 'Twitter',
        category: [
          'fashion'
        ]
      },
      {
        id: 7493,
        name: 'MONOオリジナルグッズ',
        winner: 60,
        image_url: 'https://www.chance.com/image/prizeimg/5d5502f1c006e.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:56:07Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.tombow.com/cp/mono50th/#utm_source=Kensho&utm_medium=link&utm_campaign=mono50',
        provider: '株式会社トンボ鉛筆',
        way: 'Twitter',
        category: [
          'fashion',
          'goods'
        ]
      },
      {
        id: 6246,
        name: 'フラワーギフトカード1000円分',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d491b80e0a6e.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:30Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.eflora.co.jp/f_summer/campaign/?s_mf=FKKS19071000000292',
        provider: 'お花屋さんネットワーク「イーフローラ」',
        way: 'Twitter',
        category: [
          'gift'
        ]
      },
      {
        id: 4285,
        name: 'ビール券100万円分',
        winner: 1001,
        image_url: 'https://www.chance.com/image/prizeimg/5d22d2f4a1639.jpg',
        image_bin: '',
        created_at: '2019-07-18T23:24:07Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://www.itohkampo.co.jp/products/sp/shijimicp_1/',
        provider: '井藤漢方製薬',
        way: 'Twitter',
        category: [
          'foods',
          'sports'
        ]
      },
      {
        id: 4803,
        name: '新PYUAN全5種サンプルセット',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d2d23b2752df.jpg',
        image_bin: '',
        created_at: '2019-07-29T22:03:34Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/PYUAN_official',
        provider: '花王',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 7367,
        name: 'Refille+PRO化粧水ミスト',
        winner: 10,
        image_url: 'https://www.chance.com/image/prizeimg/5d5640f20addf.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://twitter.com/refille_pro/status/1162185682481115136',
        provider: '株式会社スタシオン',
        way: 'Twitter',
        category: [
          'cosmetics'
        ]
      },
      {
        id: 6364,
        name: 'お米1俵（60キロ）',
        winner: 1,
        image_url: 'https://www.chance.com/image/prizeimg/5d47932738a14.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:37Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://dodontodonburi.com/movie.php',
        provider: '全国農業協同組合連合会',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 6372,
        name: '中性重炭酸入浴剤 BARTH',
        winner: 10000,
        image_url: 'https://www.chance.com/image/prizeimg/5d468a04817c4.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:09:40Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-09-01T00:00:00Z',
        link: 'https://barth.jp/lp/bath_before_bed/',
        provider: '株式会社ＴＷＯ',
        way: 'Twitter',
        category: [
          'daily'
        ]
      },
      {
        id: 6298,
        name: '房総えびせんべい',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d48e3dd92c60.jpg',
        image_bin: '',
        created_at: '2019-08-10T22:08:59Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-31T00:00:00Z',
        link: 'https://tori-dori.com/kanto/2019/08/02/58213/',
        provider: '株式会社バドインターナショナル トリドリ',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7471,
        name: 'キリン・ザ・ストロング4フレーバーセット',
        winner: 50,
        image_url: 'https://www.chance.com/image/prizeimg/5d5107e4ee420.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:55:52Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-30T00:00:00Z',
        link: 'https://cp.kirin.jp/story/7816',
        provider: 'キリン',
        way: 'Twitter',
        category: [
          'foods'
        ]
      },
      {
        id: 7360,
        name: 'あんこバター和ジャム＆梅かつおディップ',
        winner: 3,
        image_url: 'https://www.chance.com/image/prizeimg/5d5690b48b00a.jpg',
        image_bin: '',
        created_at: '2019-08-19T21:52:38Z',
        updated_at: '0001-01-01T00:00:00Z',
        limit_date: '2019-08-30T00:00:00Z',
        link: 'https://twitter.com/alluxeweb/status/1162318168045449216',
        provider: 'alluxeWEB公式（アリュクス）twitter',
        way: 'Twitter',
        category: [
          'foods'
        ]
      }
    ]
  },
  '101': {
    no: 101,
    renderType: 'categoryList',
    heading: 'カテゴリ一覧'
  }
]

const components = storiesOf('Components', module)
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('HorizontalScroll', () => (
    <Home
      routerId={0}
      showId={() => null}
      fetchHomeLayout={() => null}
      fetchCategoryList={() => null}
      setHomeContents={() => null}
      id={{
        isShow: false,
        showedId: 0,
        content: {}
      }}
      contents={contents}
      layout={homeLayout}
      categoryList={categoryList}
    />
  ))

// <HorizontalScroll content={content} categoryList={categoryList} />

// .addDecorator(story => <Provider store={store}>{story()}</Provider>)