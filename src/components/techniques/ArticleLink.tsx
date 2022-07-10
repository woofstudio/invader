interface ArticleLinkProps {
  title: string
}

const ArticleLink: React.FC<ArticleLinkProps> = ({ title }) => {
  return (
    <div className="bg-dark-400 aspect-[5/6] rounded-2xl overflow-hidden flex flex-col items-center cursor-pointer duration-300 hover:-translate-y-2">
      {/* image */}
      <div className="w-full bg-black rounded-2xl h-[55%]"></div>
      {/* divider */}
      <div className="bg-white h-px w-[80%] opacity-60 mt-4"></div>
      {/* article title */}
      <h3 className="font-kanit font-medium text-2xl text-white mt-10">
        {title}
      </h3>
    </div>
  )
}

export default ArticleLink
