import Image from 'next/image'
import { ReactNode } from 'react'
import RegistrationImg from '../../../public/img/landing/links-registration-img.png'

import RegistrationIcon from '../../../public/img/landing/links-registration-icon.png'
import PromotionsIcon from '../../../public/img/landing/links-promotions-icon.png'
import TechniquesIcon from '../../../public/img/landing/links-techniques-icon.png'
import CommunityIcon from '../../../public/img/landing/links-community-icon.png'
import { useRouter } from 'next/router'

const Links: React.FC = () => {
  const router = useRouter()
  return (
    <section
      id="links"
      className="bg-dark-100 w-full px-8 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-32 py-8 hidden lg:block"
    >
      <div className="grid grid-cols-4 gap-6">
        <Link
          onClick={() => {
            router.push(`download/GGPOKER`)
          }}
        >
          <h3 className="font-kanit font-extralight italic text-2xl xl:text-3xl 2xl:text-4xl">
            วิธีการสมัคร
          </h3>
          <div className="w-[40%] mt-[20%]">
            <Image src={RegistrationIcon} alt="register" layout="responsive" />
          </div>
          <div className="absolute -bottom-[90%] xl:-bottom-[70%] -right-[21%] aspect-square w-[85%]">
            <Image
              src={RegistrationImg}
              alt="register"
              className="group-hover:-rotate-12 duration-300"
              layout="responsive"
              quality={100}
              priority={true}
            />
          </div>
        </Link>
        <Link
          onClick={() => {
            router.push(`promotion`)
          }}
        >
          <h3 className="font-kanit font-extralight italic text-2xl xl:text-3xl 2xl:text-4xl">
            โปรโมชั่น
          </h3>
          <div className="w-[40%] mt-[20%]">
            <Image src={PromotionsIcon} alt="promotion" layout="responsive" />
          </div>
        </Link>
        <Link onClick={() => {}}>
          <h3 className="font-kanit font-extralight italic text-2xl xl:text-3xl 2xl:text-4xl">
            เทคนิคการเล่น
          </h3>
          <div className="w-[28%] mt-[20%]">
            <Image src={TechniquesIcon} alt="tech" layout="responsive" />
          </div>
        </Link>
        <Link onClick={() => {}}>
          <h3 className="font-kanit font-extralight italic text-2xl xl:text-3xl 2xl:text-4xl">
            Community
          </h3>
          <div className="w-[40%] mt-[20%]">
            <Image src={CommunityIcon} alt="community" layout="responsive" />
          </div>
        </Link>
      </div>
    </section>
  )
}

interface LinkProps {
  children: ReactNode
  onClick: () => void
}

const Link: React.FC<LinkProps> = ({ children, onClick }) => {
  return (
    <div
      className="bg-gradient-to-t from-primary-200 to-primary-300 aspect-square rounded-2xl 2xl:rounded-3xl overflow-hidden group relative p-6 2xl:px-10 2xl:py-8"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Links
