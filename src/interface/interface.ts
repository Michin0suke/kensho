interface State {
  category: Category
  categoryList: CategoryList
  home: Home
  id: Id
  twitter: {}
}

interface Category {
  contents: CategoryContents
}

// interface CategoryContents {
//   appliance?: IdContent[]
//   baby?: IdContent[]
//   books?: IdContent[]
//   cash?: IdContent[]
//   cosmetics?: IdContent[]
//   daily?: IdContent[]
//   fashion?: IdContent[]
//   foods?: IdContent[]
//   gift?: IdContent[]
//   goods?: IdContent[]
//   kitchen?: IdContent[]
//   movie?: IdContent[]
//   other?: IdContent[]
//   sports?: IdContent[]
//   stationery?: IdContent[]
//   ticket?: IdContent[]
//   toy?: IdContent[]
//   travel?: IdContent[]
//   vehicle?: IdContent[]
// }

interface CategoryContents {
  [key: string]: IdContent[]
}

interface CategoryList {
  appliance: string
  baby: string
  books: string
  cash: string
  cosmetics: string
  daily: string
  fashion: string
  foods: string
  gift: string
  goods: string
  kitchen: string
  movie: string
  other: string
  sports: string
  stationery: string
  ticket: string
  toy: string
  travel: string
  vehicle: string
  [key: string]: string
}

interface Home {
  contents: {
    [key: number]: HomeContents[]
  }
  layout: HomeLayout[]
}

type HomeContents = LayoutTopImage | LayoutHorizontalScroll | LayoutLargeCard | LayoutThreeCards | LayoutQuadCards | LayoutCategoryList | LayoutTopCarousel

interface HomeLayout {
  'no': number
  'renderType': string
  'heading': string
  'image_url': string
  'endpoint'?: string
  'ad_link'?: string
  'ad_image'?: string
  'ad_tracking'?: string
  'ad_name'?: string
  'ad_number'?: string
}

interface Id {
  content: IdContent
  countDown: string
  isShow: boolean
  limit: string
  selectedId: number
}

interface IdContent {
  'category': string[]
  'created_at': string
  'id': number
  'image_url': string
  'is_oneclick': boolean
  'limit_date': string
  'link': string
  'name': string
  'provider': string
  'twitter_raw': string
  'twitter_way': string[] | null
  'updated_at': string
  'way': string
  'winner': number
}
