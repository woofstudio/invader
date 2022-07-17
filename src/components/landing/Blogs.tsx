import moment from 'moment'
import Link from 'next/link'
import { IBlogPreview } from '../../types/interface'
import BlogPreview from './BlogPreview'

interface Props {
  blogPreviews: IBlogPreview[]
}

const Blogs: React.FC<Props> = ({ blogPreviews }: Props) => {
  // console.log(blogPreviews)
  return (
    <section
      id="blog"
      className="bg-dark-100 w-full px-12 lg:px-32 py-8 flex justify-between items-center"
    >
      <div className="font-kanit flex-1 text-white">
        <h3 className="font-medium text-6xl mb-4">บทความโป๊กเกอร์</h3>
        <h5 className="font-light text-lg tracking-wide mb-8">
          ข่าวสารโลกโป๊กเกอร์ และสาระน่ารู้
        </h5>
        <div className="mb-20 lg:hidden">
          {blogPreviews.map((elem, index) => (
            <div key={index} className="space-y-3">
              <div className="flex space-x-4 items-center">
                <div className="w-2 h-2 rounded-full bg-primary-200" />
                <p>{elem.title}</p>
              </div>
              <hr className="border-text-100" />
            </div>
          ))}
        </div>
        <Link href="/article">
          <a className="border-l-2 border-primary-100 py-3 px-6 text-xl hover:underline hover:text-primary-100 duration-300">
            View All
          </a>
        </Link>
      </div>
      <div className="hidden flex-1 grid-cols-2 w-[65%] gap-6 lg:grid">
        {blogPreviews.map((blogPreview, idx) => (
          <BlogPreview blogPreview={blogPreview} key={idx} />
        ))}
      </div>
    </section>
  )
}

export default Blogs
