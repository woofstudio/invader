import { IBlogPreview } from '../../types/interface'
import Image from 'next/image'
import { urlFor } from '../../sanity'

interface ArticleLinkProps {
  article: IBlogPreview
}

const ArticleLink: React.FC<ArticleLinkProps> = ({
  article,
}: ArticleLinkProps) => {
  return (
    <div className="bg-dark-400 aspect-[5/6] rounded-2xl overflow-hidden flex flex-col items-center cursor-pointer duration-300 hover:-translate-y-2">
      {/* image */}
      <div className="w-full bg-black rounded-2xl h-[55%] relative">
        <Image
          src={urlFor(article.previewImage).url()}
          alt={article.title}
          layout="fill"
        />
      </div>
      {/* divider */}
      <div className="bg-white h-px w-[80%] opacity-60 mt-4"></div>
      {/* article title */}
      <h3 className="font-kanit font-medium text-lg text-white mt-10 mx-auto">
        {article.title}
      </h3>
    </div>
  )
}

export default ArticleLink
