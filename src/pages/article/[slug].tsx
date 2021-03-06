import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Meta } from '../../config'
import Image from 'next/image'
import PortableText from 'react-portable-text'
import Header from '../../components/layout/Header'
import { sanityClient, urlFor } from '../../sanity'
import { IBlog, IBlogPreview } from '../../types/interface'
import { BsClock } from 'react-icons/bs'
import moment from 'moment'
import Link from 'next/link'

interface Props {
  blog: IBlog
  blogPreviews: IBlogPreview[]
}

const Blog: NextPage<Props> = ({ blog, blogPreviews }: Props) => {
  return (
    <div>
      <Meta title={blog.title} description={blog.description} />
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

      <div className="bg-dark-200 py-12 px-12 md:px-44 max-width">
        <div className="mx-auto space-y-10">
          <div className="flex space-x-4">
            {blog.categories.map((elem, index) => {
              if (elem.title !== 'EDITOR') {
                return (
                  <div key={index} className="tag-no-color">
                    {elem.title}
                  </div>
                )
              }
            })}
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <BsClock size={16} />
              <p className="text-sm">
                {moment(new Date(blog.publishedAt)).format('DD MMMM YYYY')}
              </p>
            </div>
            <h1 className="text-2xl font-bold">{blog.title}</h1>
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
              image: (props: any) => (
                <Image
                  className="lazy img-responsive"
                  src={urlFor(props.asset._ref).url()}
                  alt={props.asset._ref}
                  width={16}
                  height={9}
                  layout="responsive"
                />
              ),
            }}
          />
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#FACB48]/[.25] to-[#FACB48]/[.0] md:from-[#FACB48] md:to-[#ffffff]">
        <div className="max-width py-16 md:py-40 px-12 space-y-12">
          <h2 className="font-bold md:text-black md:text-[55px] md:mx-auto md:text-center w-fit max-w-[600px] border-b-2 border-primary-200 md:border-0 font-druk">
            MORE FROM INVADER
          </h2>
          <div className="flex flex-col space-y-6 md:justify-center md:flex-row md:space-y-0 md:space-x-8">
            {blogPreviews.map((elem, index) => (
              <div key={index} className="space-y-3 md:w-72">
                <div className="hidden md:block rounded-xl overflow-hidden">
                  <Image
                    src={urlFor(elem.previewImage).url()}
                    alt={elem.title}
                    width={285}
                    height={196}
                  />
                </div>
                <div className="flex space-x-4 md:flex-col md:space-x-0 items-center md:items-start">
                  <div className="w-2 h-2 rounded-full bg-primary-200 md:hidden" />
                  <p className="text-black hidden md:block text-xs">
                    {moment(new Date(elem.publishedAt)).format('DD MMMM')}
                  </p>
                  <p className="md:text-black md:font-bold">{elem.title}</p>
                </div>
                <hr className="border-text-100 md:hidden" />
              </div>
            ))}
          </div>
          <div className="flex cursor-pointer mb-10 underline justify-end md:hidden">
            <Link href="/article">
              <a>{'READ MORE >'}</a>
            </Link>
          </div>
        </div>
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
    description,
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
