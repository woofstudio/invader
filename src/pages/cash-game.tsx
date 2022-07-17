import { GetStaticProps, NextPage } from 'next'
import ArticleLink from '../components/techniques/ArticleLink'
import Layout from '../components/techniques'
import { Meta, metaConfig } from '../config'
import { queryCategoryPreview } from '../util'
import { IBlogPreview } from '../types/interface'

interface Props {
  cashgamePreviews: IBlogPreview[]
}
const Cashgame: NextPage<Props> = ({ cashgamePreviews }: Props) => {
  return (
    <Layout>
      <Meta
        title={metaConfig.technique.cashgame.title}
        description={metaConfig.technique.cashgame.description}
      />
      <div>
        {cashgamePreviews.map((cashgamePreview, index) => (
          <ArticleLink key={index} article={cashgamePreview} />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cashgamePreviews = await queryCategoryPreview('CASH GAME')
  return {
    props: {
      cashgamePreviews,
    },
    revalidate: 60,
  }
}

export default Cashgame
