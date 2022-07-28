import { GetStaticProps, NextPage } from 'next'

import {
  Catagories,
  EditorPick,
  FanPage,
  HighlightVideo,
  LatestArticles,
} from '../../components/article'
import { metaConfig } from '../../config'
import { Meta } from '../../config/Meta'
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
    <section className="px-10 lg:px-20 2xl:px-36">
      <Meta
        title={metaConfig.articles.title}
        description={metaConfig.articles.description}
      />
      <EditorPick editorPreviews={editorPreviews} />
      <Catagories
        categoryPreviews={categoryPreviews}
        queryCategory={queryCategoryPreview}
      />
      <FanPage />
      <HighlightVideo />
    </section>
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
