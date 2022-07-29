import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import GGIcon from '../../../public/img/register/ggpoker.png'
import BROSIcon from '../../../public/img/register/pokerbros.png'
import PPIcon from '../../../public/img/register/pppoker.png'
import UIcon from '../../../public/img/register/upoker.png'

import GGCover from '../../../public/img/register/desktop_register-banner_GG.jpg'
import BROSCover from '../../../public/img/register/desktop_register-banner_BROS.jpg'
import PPCover from '../../../public/img/register/desktop_register-banner_PP.jpg'
import UCover from '../../../public/img/register/desktop_register-banner_U.jpg'

import GGMobileCover from '../../../public/img/register/mobile_register-banner_GG.jpg'
import BROSMobileCover from '../../../public/img/register/mobile_register-banner_BROS.jpg'
import PPMobileCover from '../../../public/img/register/mobile_register-banner_PP.jpg'
import UMobileCover from '../../../public/img/register/mobile_register-banner_U.jpg'

const RegistersData = [
  {
    title: (
      <>
        <span className="text-ggpoker">GG</span>POKER
      </>
    ),
    description: (
      <>
        แอพโป๊กเกอร์เอาใจสายทัวร์
        <br className="hidden lg:inline" />
        Tournament จัดเต็ม ทั้งวัน ทั้งคืน
      </>
    ),
    path: '/download/GGPOKER',
    iconImage: GGIcon,
    downloadLink:
      'https://download.good-game-network.com/mobile-page-customer/ggpoker/th',
    color: '#EA232B',
    bgCover: GGCover,
    bgMobileCover: GGMobileCover,
  },
  {
    title: (
      <>
        <span className="text-pppoker">PP</span>POKER
      </>
    ),
    description: (
      <>
        แอพสำหรับคนรักโป๊กเกอร์
        <br className="hidden lg:inline" />
        จากคนรักโป๊กเกอร์ตัวจริง
      </>
    ),
    path: '/download/PPPOKER',
    iconImage: PPIcon,
    downloadLink: 'https://pppoker.net/',
    color: '#2AD16D',
    bgCover: PPCover,
    bgMobileCover: PPMobileCover,
  },
  {
    title: (
      <>
        <span className="text-upoker">U</span>POKER
      </>
    ),
    description: (
      <>
        โป๊กเกอร์ออนไลน์เจ้าแรกในไทย โต๊ะเยอะ Range กว้าง
        <br className="hidden lg:inline" />
        เล่นหนักเล่นเบา แอพเดียวมีครบ
      </>
    ),
    path: '/download/UPOKER',
    iconImage: UIcon,
    downloadLink: 'https://upoker.net/',
    color: '#FFB339',
    bgCover: UCover,
    bgMobileCover: UMobileCover,
  },
  {
    title: (
      <>
        <span className="text-upoker">POKER</span>
        <span className="text-ggpoker">B</span>ROS
      </>
    ),
    description: (
      <>
        เล่นโป็กเกอร์ออนไลน์กับเพื่อนได้ทุกที่ทุกเวลา
        <br className="hidden lg:inline" />
        ด้วยแอพที่ออกแบบมาให้สำหรับมือใหม่ไปจนถึงมือโปร
      </>
    ),
    path: '/download/POKERBROS',
    iconImage: BROSIcon,
    downloadLink: 'https://pokerbros.net/',
    color: '#5D3B8C',
    bgCover: BROSCover,
    bgMobileCover: BROSMobileCover,
  },
]

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()

  return (
    <div className="min-h-screen lg:mt-40 overflow-hidden lg:rounded-xl bg-dark-100 lg:bg-dark-200 lg:mx-20 mb-20">
      {/* heading & background */}
      <div
        className={`relative w-full h-[85vh] lg:h-[55vh] px-10 lg:px-20 2xl:px-36 flex flex-col justify-center`}
      >
        <h1 className="uppercase font-druk font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white z-50">
          {RegistersData.map((data) => {
            if (router.pathname === data.path) return data.title
          })}
        </h1>
        <p className="font-kanit font-light text-lg lg:text-xl text-opacity-90 text-white mt-8 mb-32 lg:mb-12 z-50">
          {RegistersData.map((data) => {
            if (router.pathname === data.path) return data.description
          })}
        </p>
        {RegistersData.map((data, idx) => {
          if (router.pathname === data.path)
            return (
              <a
                key={idx}
                href={data.downloadLink}
                target="_blank"
                rel="noreferer"
                className={`hidden lg:inline rounded-full px-14 py-4 uppercase w-fit text-white z-50`}
                style={{
                  backgroundColor: data.color,
                }}
              >
                Download
              </a>
            )
        })}

        {RegistersData.map((data, idx) => {
          if (router.pathname === data.path)
            return (
              <>
                <div className="absolute top-0 left-0 right-0 bottom-0 hidden lg:inline">
                  <Image
                    src={data.bgCover}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={'right'}
                    priority
                    quality={100}
                    key={idx}
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 inline lg:hidden">
                  <Image
                    src={data.bgMobileCover}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={'bottom'}
                    priority
                    quality={100}
                    key={idx}
                  />
                </div>
              </>
            )
        })}
      </div>

      {/* body */}
      <div className="flex w-full pt-6 lg:pt-12">
        <div className="w-96 hidden lg:flex flex-col px-10 select-none space-y-8">
          <MenuLink
            href="/download/GGPOKER"
            title="GGPOKER"
            imageLink="/img/register/ggpoker-icon.png"
            activeImageLink="/img/register/ggpoker-icon-active.png"
          />
          <MenuLink
            href="/download/PPPOKER"
            title="PPPOKER"
            imageLink="/img/register/pppoker-icon.png"
            activeImageLink="/img/register/pppoker-icon-active.png"
          />
          <MenuLink
            href="/download/UPOKER"
            title="UPOKER"
            imageLink="/img/register/upoker-icon.png"
            activeImageLink="/img/register/upoker-icon-active.png"
          />
          <MenuLink
            href="/download/POKERBROS"
            title="POKERBROS"
            imageLink="/img/register/pokerbros-icon.png"
            activeImageLink="/img/register/pokerbros-icon-active.png"
          />
        </div>
        <div className="w-full border-l-[1px] border-white border-opacity-20 min-h-screen">
          <div className="flex flex-col items-center space-y-10 justify-center w-full text-center px-5">
            {RegistersData.map((data, idx) => {
              if (router.pathname === data.path)
                return (
                  <a
                    key={idx}
                    href={data.downloadLink}
                    className={`lg:hidden rounded-full px-14 py-4 uppercase text-white`}
                    style={{
                      backgroundColor: data.color,
                    }}
                  >
                    Download
                  </a>
                )
            })}
            <h2 className="text-white text-lg lg:text-2xl font-druk font-medium">
              Download & Play In Minutes
            </h2>
          </div>
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 p-16 2xl:p-20">
              {children}
            </div>
          </div>
        </div>
      </div>

      {RegistersData.map((data, idx) => {
        if (router.pathname === data.path) {
          return (
            <div className="sm:hidden absolute z-50 top-12 right-6 w-16">
              <Image src={data.iconImage} priority />
            </div>
          )
        }
      })}
    </div>
  )
}

interface MenuLinkProps {
  href: string
  title: string
  imageLink: string
  activeImageLink: string
}

const MenuLink: React.FC<MenuLinkProps> = ({
  href,
  title,
  imageLink,
  activeImageLink,
}) => {
  const router = useRouter()
  let active
  active = router.pathname === href
  return (
    <Link href={href} scroll={false}>
      <div
        className={`w-full h-[5.5rem] relative rounded-md cursor-pointer hover:opacity-80`}
      >
        <Image
          src={active ? activeImageLink : imageLink}
          alt={title}
          priority
          layout="fill"
        />
      </div>
    </Link>
  )
}

export default Layout
