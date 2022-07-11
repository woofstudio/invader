import { GetStaticProps, NextPage } from 'next'

import {
  Catagories,
  EditorPick,
  FanPage,
  HighlightVideo,
  LatestArticles,
} from '../../components/article'
import { IBlogPreview } from '../../types/interface'
import { queryCategory } from '../../util'

interface Props {
  editorPreviews: IBlogPreview[]
  categoryPreviews: IBlogPreview[]
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
