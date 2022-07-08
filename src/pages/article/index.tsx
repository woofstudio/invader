import { GetStaticProps, NextPage } from 'next'

import {
  Catagories,
  EditorPick,
  FanPage,
  HighlightVideo,
  LatestArticles,
} from '../../components/article'
import { sanityClient } from '../../sanity'

const Articles: NextPage = () => {
  return (
    <div>
      <EditorPick />
      <LatestArticles />
      <Catagories />
      <FanPage />
      <HighlightVideo />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryEditorPreviews = `*[_type == "post" && *[_type=="category" && title == "EDITORS" ][0]._id in categories[]._ref]{
        title,
        "slug": slug.current,
        "previewImage":previewImage.asset._ref,
        publishedAt
}`
  const editorPreviews = await sanityClient.fetch(queryEditorPreviews)
  // console.log(blogPreviews)
  return {
    props: {
      editorPreviews,
    },
    revalidate: 60,
  }
}

export default Articles
