import Image from 'next/image'

interface Props {
  imageURL: string
  title: string
}
export const Header: React.FC<Props> = ({ imageURL, title }: Props) => {
  return (
    <div className="flex justify-center relative w-full md:w-[90%] h-96 lg:h-[520px] mt-32 md:rounded-2xl overflow-hidden mx-auto">
      <Image
        src={imageURL}
        alt={title}
        priority={true}
        quality={100}
        layout="fill"
      />
    </div>
  )
}

export default Header
