import { NextPage } from 'next'
import Link from 'next/link'
import ArticleLink from '../components/techniques/ArticleLink'
import Layout from '../components/techniques'

const Newbie: NextPage = () => {
  return (
    <Layout>
      <ArticleLink title="กฎและกติกาการเล่น" />
      <ArticleLink title="กฎและกติกาการเล่น" />
      <ArticleLink title="กฎและกติกาการเล่น" />
      <ArticleLink title="กฎและกติกาการเล่น" />
    </Layout>
  )
}

export default Newbie
