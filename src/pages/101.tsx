import { GetStaticProps, NextPage } from 'next'
import ArticleLink from '../components/techniques/ArticleLink'
import Layout from '../components/techniques'
import { Meta, metaConfig } from '../config'
import { IBlogPreview } from '../types/interface'
import { queryCategory } from '../util'
interface Props {
  invader101Previews: IBlogPreview[]
}
const HowTo: NextPage<Props> = ({ invader101Previews }: Props) => {
  return (
    <Layout>
      <Meta
        title={metaConfig.technique.invader101.title}
        description={metaConfig.technique.invader101.description}
      />
      <div>
        {invader101Previews.map((invader101Preview, index) => (
          <ArticleLink key={index} article={invader101Preview} />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const invader101Previews = await queryCategory('INVADER 101')
  return {
    props: {
      invader101Previews,
    },
    revalidate: 60,
  }
}

export default HowTo
