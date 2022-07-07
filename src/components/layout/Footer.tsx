import Image from 'next/image'
import Link from 'next/link'
import { FiChevronUp } from 'react-icons/fi'
import { ImYoutube } from 'react-icons/im'
import { IoLogoFacebook } from 'react-icons/io'
import IvdLogoColor from '../../../public/ivd-logo-color.svg'
import IvdLogoName from '../../../public/ivd-logo-name.png'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black w-full 2xl:h-28 px-32 flex flex-col 2xl:flex-row justify-center 2xl:justify-between items-center py-20 2xl:py-0 space-y-20 2xl:space-y-0">
      <a
        href="https://www.figma.com/file/6evEOnxPg95YPf3w0CkzjO/Web-Test?node-id=8%3A2"
        className="2xl:hidden block"
      >
        <Image src={IvdLogoColor} alt="logo-color" layout="fixed" />
      </a>
      <a
        href="https://www.figma.com/file/6evEOnxPg95YPf3w0CkzjO/Web-Test?node-id=8%3A2"
        className="hidden 2xl:block"
      >
        <Image src={IvdLogoName} alt="logo-name" />
      </a>

      {/* mobile links */}
      <div className="2xl:hidden flex flex-col items-center text-white font-kanit text-lg font-medium tracking-wider space-y-6">
        <Link href="/blog">
          <a>บทความ</a>
        </Link>
        <Link href="/technique">
          <a>เทคนิค</a>
        </Link>
        <Link href="/promotion">
          <a>Promotion</a>
        </Link>
        <Link href="/community">
          <a>Community</a>
        </Link>
      </div>

      {/* desktop copyright */}
      <div className="items-center space-x-20 hidden 2xl:flex">
        <div className="flex items-center text-white font-kanit font-extralight">
          <span className="opacity-70">
            Copyrights 2019 POKERINVADER.COM - All Rights Reserved.
          </span>
          <div className="h-16 w-px bg-white mx-10 opacity-50"></div>
          <span className="opacity-70">
            Illustrations by Icons 8 from Ouch!
          </span>
        </div>
      </div>

      {/* scroll up for desktop and social media links */}
      <div className="flex items-center 2xl:space-x-20">
        <div className="place-content-center rounded-full bg-primary-200 w-14 h-14 text-4xl cursor-pointer hidden 2xl:grid">
          <FiChevronUp />
        </div>
        <div className="flex items-center text-white text-4xl space-x-6">
          <a href="https://www.figma.com/file/6evEOnxPg95YPf3w0CkzjO/Web-Test?node-id=8%3A2">
            <IoLogoFacebook />
          </a>
          <a href="https://www.figma.com/file/6evEOnxPg95YPf3w0CkzjO/Web-Test?node-id=8%3A2">
            <ImYoutube />
          </a>
        </div>
      </div>

      {/* mobile copyright */}
      <div className="2xl:hidden text-white opacity-80 tracking-widest font-kanit font-extralight text-center">
        <span className="opacity-70">
          Copyrights 2019 POKERINVADER.COM
          <br />-<br />
          All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
