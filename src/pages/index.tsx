import { GetStaticProps, NextPage } from 'next'

import Hr from '../components/landing/Hr'
import Hero from '../components/landing/Hero'
import Links from '../components/landing/Links'
import Techniques from '../components/landing/Techniques'
import Blogs from '../components/landing/Blogs'
import About from '../components/landing/About'
import Community from '../components/landing/Community'
import { sanityClient } from '../sanity'
import { IBlogPreview } from '../types/interface'

interface Props {
  blogPreviews: IBlogPreview[]
}

const Home: NextPage<Props> = ({ blogPreviews }: Props) => {
  return (
    <>
      <main>
        <Hero />
        <Links />
        <Hr />
        <Techniques />
        <Hr />
        <Blogs blogPreviews={blogPreviews} />
        <Hr />
        <About />
        <Community />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryPreviews = `*[_type == "post"][0...4] | order(publishedAt desc){
        title,
        "slug": slug.current,
        "previewImage":previewImage.asset._ref,
        publishedAt
}`
  const blogPreviews = await sanityClient.fetch(queryPreviews)
  // console.log(blogPreviews)
  return {
    props: {
      blogPreviews,
    },
    revalidate: 60,
  }
}

export default Home
