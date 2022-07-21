import Image from 'next/image'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'
import RegistrationImg from '../../../public/img/landing/links-registration-img.png'

import RegistrationIcon from '../../../public/img/landing/links-registration-icon.png'
import PromotionsIcon from '../../../public/img/landing/links-promotions-icon.png'
import TechniquesIcon from '../../../public/img/landing/links-techniques-icon.png'
import CommunityIcon from '../../../public/img/landing/links-community-icon.png'

const Links: React.FC = () => {
  return (
    <section
      id="links"
      className="bg-dark-100 w-full space-y-12 px-8 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-32 py-8 hidden lg:block"
    >
      <h1 className="font-medium text-4xl sm:text-5xl lg:text-6xl">
        โป๊กเกอร์
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <LinkButton href="/download/GGPOKER">
          <h6 className="font-kanit font-extralight italic text-2xl xl:text-3xl 2xl:text-4xl">
            วิธีการสมัคร
          </h6>
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
        </LinkButton>
        <LinkButton href="/promotion">
          <h6 className="font-kanit font-extralight italic text-2xl xl:text-3xl 2xl:text-4xl">
            โปรโมชั่น
          </h6>
          <div className="w-[40%] mt-[20%]">
            <Image src={PromotionsIcon} alt="promotion" layout="responsive" />
          </div>
        </LinkButton>
        <ScrollButton to="techniques" offset={-40}>
          <h6 className="font-kanit font-extralight italic text-2xl xl:text-3xl 2xl:text-4xl">
            เทคนิคการเล่น
          </h6>
          <div className="w-[28%] mt-[20%]">
            <Image src={TechniquesIcon} alt="tech" layout="responsive" />
          </div>
        </ScrollButton>
        <ScrollButton to="community">
          <h6 className="font-kanit font-extralight italic text-2xl xl:text-3xl 2xl:text-4xl">
            Community
          </h6>
          <div className="w-[40%] mt-[20%]">
            <Image src={CommunityIcon} alt="community" layout="responsive" />
          </div>
        </ScrollButton>
      </div>
    </section>
  )
}

interface LinkProps {
  children: React.ReactNode
  href: string
}

const LinkButton: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <div className="bg-gradient-to-t from-primary-200 to-primary-300 aspect-square rounded-2xl 2xl:rounded-3xl overflow-hidden group relative p-6 2xl:px-10 2xl:py-8 cursor-pointer">
        {children}
      </div>
    </Link>
  )
}

interface ScrollProps {
  children: React.ReactNode
  to: string
  offset?: number
}

const ScrollButton: React.FC<ScrollProps> = ({ children, to, offset = 0 }) => {
  return (
    <Scroll to={to} smooth offset={offset}>
      <div className="bg-gradient-to-t from-primary-200 to-primary-300 aspect-square rounded-2xl 2xl:rounded-3xl overflow-hidden group relative p-6 2xl:px-10 2xl:py-8 cursor-pointer">
        {children}
      </div>
    </Scroll>
  )
}

export default Links
