import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import PortableText from 'react-portable-text'
import { sanityClient, urlFor } from '../../sanity'
import { IBlog, IBlogPreview } from '../../types/interface'
interface Props {
  blog: IBlog
  blogPreviews: IBlogPreview
}
const Blog: NextPage<Props> = ({ blog, blogPreviews }: Props) => {
  return (
    // mainImage
    // category
    // date
    // title
    <div className="text-white">
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
            <img
              className="lazy img-responsive"
              src={urlFor(props.node.asset._ref).url()}
            />
          ),
        }}
      />
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
