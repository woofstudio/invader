import { GetStaticProps, NextPage } from 'next'

import {
  Catagories,
  EditorPick,
  FanPage,
  HighlightVideo,
  LatestArticles,
} from '../../components/article'
import { IBlogPreview } from '../../types/interface'
import { queryCategoryPreview } from '../../util'

interface Props {
  editorPreviews: IBlogPreview[]
  categoryPreviews: IBlogPreview[]
}

const Articles: NextPage<Props> = ({
  editorPreviews,
  categoryPreviews,
}: Props) => {
  return (
    <>
      <EditorPick editorPreviews={editorPreviews} />
      <Catagories
        categoryPreviews={categoryPreviews}
        queryCategory={queryCategoryPreview}
      />
      <FanPage />
      <HighlightVideo />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const editorPreviews = await queryCategoryPreview('EDITOR')
  const categoryPreviews = await queryCategoryPreview('สาระ Poker')
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
