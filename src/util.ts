import { sanityClient } from './sanity'
import { IBlogPreview } from './types/interface'

export const queryCategory = async (category: string) => {
  const query = `*[_type == "post" && *[_type=="category" && title == "${category}" ][0]._id in categories[]._ref ] | order(publishedAt desc){
        title,
        "slug": slug.current,
        "previewImage":previewImage.asset._ref,
        publishedAt,
        categories[] -> {
          title
        }
  }`
  const queryResult: IBlogPreview[] = await sanityClient.fetch(query)
  return queryResult
}
