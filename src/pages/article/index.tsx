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
}

const Articles: NextPage<Props> = ({ editorPreviews }: Props) => {
  return (
    <div>
      <EditorPick editorPreviews={editorPreviews} />
      <LatestArticles />
      <Catagories />
      <FanPage />
      <HighlightVideo />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryEditorPreviews = `*[_type == "post" && *[_type=="category" && title == "EDITOR" ][0]._id in categories[]._ref ] | order(publishedAt desc){
        title,
        "slug": slug.current,
        "previewImage":previewImage.asset._ref,
        publishedAt,
        categories[] -> {
          title
        }
}`
  const editorPreviews = await sanityClient.fetch(queryEditorPreviews)
  // console.log(editorPreviews)
  return {
    props: {
      editorPreviews,
    },
    revalidate: 60,
  }
}

export default Articles
