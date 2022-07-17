import { sanityClient } from './sanity'
import { IBlogPreview } from './types/interface'

export const queryCategoryPreview = async (category: string) => {
  const query = `*[_type == "post" && *[_type=="category" && title == "${category}" ][0]._id in categories[]._ref ] | order(publishedAt desc){
        title,
        description,
        "slug": slug.current,
        "previewMobileImage":previewMobileImage.asset._ref,
        "previewImage":previewImage.asset._ref,
        publishedAt,
        categories[] -> {
          title
        }
  }`

  const queryResult: IBlogPreview[] = await sanityClient.fetch(query)
  return queryResult
}
