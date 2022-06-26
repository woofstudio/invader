import moment from 'moment'
import Link from 'next/link'
import { BlogPreviewInterface } from '../../types/interface'
import BlogPreview from './BlogPreview'

interface Props {
  blogPreviews: BlogPreviewInterface[]
}

const Blogs: React.FC = ({ blogPreviews }: Props) => {
  return (
    <section
      id="blog"
      className="bg-dark-100 w-full px-32 py-8 flex justify-between items-center"
    >
      <div className="font-kanit text-white">
        <h2 className="font-medium text-6xl mb-4">บทความโป๊กเกอร์</h2>
        <h3 className="font-light text-lg tracking-wide mb-16">
          ข่าวสารโลกโป๊กเกอร์ และสาระน่ารู้
        </h3>
        <Link href="/">
          <a className="border-l-2 border-primary-100 py-3 px-6 text-xl hover:underline hover:text-primary-100 duration-300">
            View All
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-2 w-[65%] gap-6">
        {blogPreviews.map((blogPreview) => (
          <BlogPreview blogPreview={blogPreview} />
        ))}
      </div>
    </section>
  )
}

export default Blogs
