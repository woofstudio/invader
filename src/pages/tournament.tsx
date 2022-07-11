import { GetStaticProps, NextPage } from 'next'
import ArticleLink from '../components/techniques/ArticleLink'
import Layout from '../components/techniques'
import { Meta, metaConfig } from '../config'
import { IBlogPreview } from '../types/interface'
import { queryCategory } from '../util'
interface Props {
  tournamentPreviews: IBlogPreview[]
}
const Tournament: NextPage<Props> = ({ tournamentPreviews }: Props) => {
  return (
    <Layout>
      <Meta
        title={metaConfig.technique.tournament.title}
        description={metaConfig.technique.tournament.description}
      />
      <div>
        {tournamentPreviews.map((tournamentPreview, index) => (
          <ArticleLink key={index} article={tournamentPreview} />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tournamentPreviews = await queryCategory('MTT TOURNAMENT')
  return {
    props: {
      tournamentPreviews,
    },
    revalidate: 60,
  }
}

export default Tournament
