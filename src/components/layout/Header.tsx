import Image from 'next/image'

interface Props {
  imageURL: string
  title: string
}
export const Header: React.FC<Props> = ({ imageURL, title }: Props) => {
  return (
    <div className="flex justify-center relative w-full h-96 mt-32 mb-20">
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
