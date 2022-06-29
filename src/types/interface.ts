export interface IBlogPreview {
  title: string
  slug: string
  previewImage: string
  publishedAt: string
}

export interface IBlog {
  title: string
  publishedAt: string
  slug: string
  mainImage: string
  body: [object]
}

export type IMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

export interface IMonthlyPromotion {
  month: IMonth
  monthlyImage: string
  promotions: IPromotion[]
}

export interface IPromotion {
  title: string
  prize: string
  promotionImage: string
}
