import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import PortableText from 'react-portable-text'
import Header from '../../components/layout/Header'
import { sanityClient, urlFor } from '../../sanity'
import { IBlog, IBlogPreview } from '../../types/interface'
import { BsClock } from 'react-icons/bs'
import moment from 'moment'

interface Props {
  blog: IBlog
  blogPreviews: IBlogPreview
}

const Blog: NextPage<Props> = ({ blog, blogPreviews }: Props) => {
  console.log(blog)
  console.log('pp', blogPreviews)
  return (
    // mainImage
    // category
    // date
    // title
    <div>
      <div className="hidden md:block">
        <Header imageURL={urlFor(blog.mainImage).url()} title={blog.title} />
      </div>
      <div className="relative w-full h-screen block md:hidden">
        <div
          className="w-full absolute h-full z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%)',
          }}
        />
        <Image
          src={urlFor(blog.mainImage).url()}
          alt={blog.title}
          layout="fill"
        />
        <div className="absolute w-80 left-8 px-4 bottom-20 border-l-4 z-20 border-primary-200">
          <p className="text-base font-druk font-semibold text-primary-200">
            {blog.title}
          </p>
          <p className="text-base italic">
            {moment(new Date(blog.publishedAt)).format('DD MMMM YYYY')}
          </p>
        </div>
      </div>

      <div className="bg-dark-200 mx-20 py-12 max-width">
        <div className="w-[832px] mx-auto space-y-10">
          <div className="flex space-x-4">
            {blog.categories.map((elem, index) => (
              <div key={index} className="tag-no-color">
                {elem.title}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <BsClock size={16} />
              <p className="text-sm">
                {moment(new Date(blog.publishedAt)).format('DD MMMM YYYY')}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">{blog.title}</h1>
              <div>
                <Image
                  src="/favicon-32x32.png"
                  alt="icon"
                  height={24}
                  width={24}
                />
              </div>
            </div>
          </div>
          <PortableText
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            content={blog.body}
            serializers={{
              h1: (props: any) => <h1 className="text-5xl py-3" {...props} />,
              h2: (props: any) => <h2 className="text-4x py-3" {...props} />,
              h3: (props: any) => <h3 className="text-2x" {...props} />,
              h4: (props: any) => <h4 className="text-xl" {...props} />,
              p: (props: any) => <p className="text-2xl" {...props} />,
              li: ({ children }: any) => (
                <li className="text-2xl list-disc">{children}</li>
              ),

              link: (props: any) => <a className="text-2xl" {...props} />,
              img: (props: any) => (
                <div className="relative w-full hidden">
                  <Image
                    className="lazy img-responsive"
                    src={urlFor(props.node.asset._ref).url()}
                    alt={props.node.asset._ref}
                    layout="fill"
                  />
                </div>
              ),
            }}
          />
        </div>
      </div>

      <div className="max-width h-60 bg-gradient-to-b from-[#FACB48]/[.25] to-[#FACB48]/[.0] md:from-[#FACB48] md:to-[#facbb4]/[.0]">
        <h2 className="font-bold">MORE FROM INVADER</h2>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"]{
        "slug": slug.current,
  }`
  const response = await sanityClient.fetch(query)
  const slugs: { slug: string }[] = response
  const paths = slugs.map((slugs: { slug: string }) => ({
    params: {
      slug: slugs.slug,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryBlog = `*[_type == "post" && slug.current == "${params?.slug}"][0]{
    publishedAt,
    title,
    "slug": slug.current,
    "mainImage":mainImage.asset._ref,
    categories[] -> {
                title
            },
    body
    }`
  const blog = await sanityClient.fetch(queryBlog)
  const queryPreviews = `*[_type == "post"][0...4] | order(publishedAt desc){
        title,
        "slug": slug.current,
        "previewImage":previewImage.asset._ref,
        publishedAt
}`

  const blogPreviews = await sanityClient.fetch(queryPreviews)
  if (!blog) {
    return {
      notFound: true,
      revalidate: 60,
    }
  }

  return {
    props: {
      blog,
      blogPreviews,
    },
  }
}

export default Blog
