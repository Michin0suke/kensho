interface LayoutTopImage {
  'no': number
  'renderType': string
  'heading': string
  'image_url': string
}
interface LayoutHorizontalScroll {
  'no': number
  'renderType': string
  'heading': string
  'heading_sub': string
  'endpoint': string
  'contents': IdContent[]
  'ad_link'?: string
  'ad_image'?: string
  'ad_tracking'?: string
  'ad_name'?: string
  'ad_number'?: number
}
interface LayoutLargeCard {
  'no': number
  'renderType': string
  'heading': string
  'link': string
  'image_url': string
}
interface LayoutThreeCards {
  'no': number
  'renderType': string
  'heading': string
  'heading_sub': string
  'endpoint': string
  'contents': IdContent[]
}
interface LayoutQuadCards {
  'no': number
  'renderType': string
  'heading': string
  'heading_sub': string
  'endpoint': string
  'contents': IdContent[]
}
interface LayoutCategoryList {
  'no': number
  'renderType': string
  'heading': string
  'heading_sub': string
}
interface LayoutTopCarousel {
  'no': number
  'renderType': string
  'contents': {
    'showedIndex': number
    'firstFlg': true
    'slides': [
      {
        'image_url': string
        'heading': string
        'link': string
        'show_id'?: number
      }
    ]
  }
}
