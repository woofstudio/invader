export interface BlogPreviewInterface {
  title: string
  slug: string
  previewImage: string
  publishedAt: string
}

export interface BlogInterface {
  title: string
  publishedAt: string
  slug: string
  mainImage: string
  body: [object]
}
