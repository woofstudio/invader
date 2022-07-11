import { GetStaticProps, NextPage } from 'next'

import {
  Catagories,
  EditorPick,
  FanPage,
  HighlightVideo,
  LatestArticles,
} from '../../components/article'
import { sanityClient } from '../../sanity'
import { IBlogPreview } from '../../types/interface'

interface Props {
  editorPreviews: IBlogPreview[]
  categoryPreviews: IBlogPreview[]
}

const queryCategory = async (category: string) => {
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
const Articles: NextPage<Props> = ({
  editorPreviews,
  categoryPreviews,
}: Props) => {
  return (
    <div>
      <EditorPick editorPreviews={editorPreviews} />
      {/* <LatestArticles /> */}
      <Catagories
        categoryPreviews={categoryPreviews}
        queryCategory={queryCategory}
      />
      <FanPage />
      <HighlightVideo />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const editorPreviews = await queryCategory('EDITOR')
  const categoryPreviews = await queryCategory('สาระ Poker')
  // console.log(editorPreviews)
  return {
    props: {
      editorPreviews,
      categoryPreviews,
    },
    revalidate: 60,
  }
}

export default Articles
