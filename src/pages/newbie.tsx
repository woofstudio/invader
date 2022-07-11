import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import ArticleLink from '../components/techniques/ArticleLink'
import Layout from '../components/techniques'
import { Meta, metaConfig } from '../config'
import { queryCategory } from '../util'
import { IBlogPreview } from '../types/interface'
interface Props {
  newbiePreviews: IBlogPreview[]
}
const Newbie: NextPage<Props> = ({ newbiePreviews }: Props) => {
  return (
    <Layout>
      <Meta
        title={metaConfig.technique.newbie.title}
        description={metaConfig.technique.newbie.description}
      />
      <div>
        {newbiePreviews.map((newbiePreview, index) => (
          <ArticleLink key={index} article={newbiePreview} />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const newbiePreviews = await queryCategory('NEWBIE')
  return {
    props: {
      newbiePreviews,
    },
    revalidate: 60,
  }
}

export default Newbie
