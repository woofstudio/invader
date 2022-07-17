import moment from 'moment'
import Link from 'next/link'
import { urlFor } from '../../sanity'
import { IBlogPreview } from '../../types/interface'
import Image from 'next/image'

interface Props {
  blogPreview: IBlogPreview
}

//display image urlFor(blogPreview.previewImage).url()
const BlogPreview: React.FC<Props> = ({ blogPreview }: Props) => {
  return (
    <Link href={`article/${blogPreview.slug}`}>
      <div className="aspect-[7/4] rounded-2xl relative overflow-hidden text-white font-kanit flex flex-col justify-end duration-500 hover:-translate-y-4 cursor-pointer">
        <Image
          src={urlFor(blogPreview.previewImage).url()}
          alt={blogPreview.title}
          layout="fill"
        />
        <div className="z-20 p-8 space-y-4">
          {/* title */}
          <h3 className="font-medium text-2xl">{blogPreview.title}</h3>
          {/* posted date */}
          <h4 className="font-extralight">
            {moment(new Date(blogPreview.publishedAt)).format('DD MMMM')}
          </h4>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
      </div>
    </Link>
  )
}

export default BlogPreview
