import Image, { StaticImageData } from 'next/image'

interface Props {
  text: JSX.Element
  idx: number
  image: StaticImageData
}

const Step: React.FC<Props> = ({ text, idx, image }) => {
  return (
    <div className="space-y-4 pb-10">
      <span className="font-druk text-dark-400 text-7xl">{idx + 1}.</span>
      <div className="bg-dark-400 aspect-[8/9] rounded-2xl overflow-hidden flex flex-col items-center">
        <div className="h-[55%] w-full px-20 py-4">
          <div className="w-full rounded-2xl h-full relative">
            <Image
              src={image}
              layout="fill"
              objectFit="contain"
              quality={100}
              priority={true}
            />
          </div>
        </div>
        <div className="bg-white h-px w-[80%] opacity-60 mt-4"></div>
        <div className="w-full h-[45%] grid place-content-center">
          <p className="font-kanit text-white font-semibold text-center text-sm lg:text-base xl:text-lg px-5">
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Step