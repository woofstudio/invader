export interface IBlogPreview {
  title: string
  description: string
  slug: string
  previewMobileImage: string
  previewImage: string
  publishedAt: string
  categories: { title: string }[]
}

export interface IBlog {
  title: string
  description: string
  publishedAt: string
  slug: string
  mainImage: string
  body: [object]
  categories: { title: string }[]
}

export type IMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11


export const mapMonth: { [key: number]: string } = {
  0: 'มกราคม',
  1: 'กุมภาพันธ์',
  2: 'มีนาคม',
  3: 'เมษายน',
  4: 'พฤษภาคม',
  5: 'มิถุนายน',
  6: 'กรกฎาคม',
  7: 'สิงหาคม',
  8: 'กันยายน',
  9: 'ตุลาคม',
  10: 'พฤศจิกายน',
  11: 'ธันวาคม',
}

export interface IMonthlyPromotion {
  month: IMonth
  year: number
  monthlyImage: string
  promotions: IPromotion[]
}

export interface IPromotion {
  title: string
  prize: string
  promotionImage: string
}

