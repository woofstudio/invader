import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

import NewbieBanner from '../../../public/img/techniques/banner-newbie.jpg'
import CasheBanner from '../../../public/img/techniques/banner-cashgame.jpg'
import TournamentBanner from '../../../public/img/techniques/banner-tournament.jpg'
import Invader101Banner from '../../../public/img/techniques/banner-newbie.jpg'

import NewbieBannerMobile from '../../../public/img/techniques/mobile_banner-newbie.jpg'
import CasheBannerMobile from '../../../public/img/techniques/mobile_banner-cashgame.jpg'
import TournamentBannerMobile from '../../../public/img/techniques/mobile_banner-tournament.jpg'
import Invader101BannerMobile from '../../../public/img/techniques/mobile_banner-newbie.jpg'

import FanPageImg from '../../../public/img/article/fanpage-mobile.png'

const TechniquesData = [
  {
    path: '/newbie',
    title: (
      <>
        Newbie
        <br />
        Tips
      </>
    ),
    description: (
      <>
        สิ่งที่ต้องเรียนรู้ก่อนเล่นโป๊กเกอร์
        <br />
        ครบจบในที่เดียว ตั้งแต่ความรู้พื้นฐานไปจนถึงกฏกติกาในการเล่น
      </>
    ),
    subtitle: 'เหมาะสำหรับผู้เล่นมือใหม่ที่อยากเข้าสู่วงการโป๊กเกอร์!',
  },
  {
    path: '/cash-game',
    title: (
      <>
        Cash
        <br />
        Game
      </>
    ),
    description: (
      <>
        เทคนิคการเล่น CASH GAME
        <br />
        ครบจบในที่เดียว สำหรับผู้เล่นสายแคชเกมโดยเฉพาะ
      </>
    ),
    subtitle: 'เพื่อการทำกำไรอย่างยั่งยืน!',
  },
  {
    path: '/tournament',
    title: (
      <>
        MTT
        <br />
        Tournament
      </>
    ),
    description: (
      <>
        เทคนิคการเล่น TOURNAMENT
        <br />
        ครบจบในที่เดียว สำหรับผู้เล่นสายทัวร์นาเมนต์โดยเฉพาะ
      </>
    ),
    subtitle: 'เพื่อผลักดันผู้เล่นชาวไทยสู่ระดับสากล!',
  },
  {
    path: '/101',
    title: <>Invader 101</>,
    description: (
      <>
        INVADER101 : ทริคทำเงินที่ผู้เล่นส่วนใหญ่ไม่รู้
        <br />
        รวบรวมทุกเคล็ดลับทำเงินเพื่อเพื่อน ๆ ชาว INVADER โดยเฉพาะ
      </>
    ),
    subtitle: 'โคตรเสียดายแทนคนที่ไม่ได้อ่าน!',
  },
]

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()
  let bannerImage: StaticImageData = NewbieBanner
  let bannerMobileImage: StaticImageData = NewbieBannerMobile

  if (router.pathname === '/newbie') {
    bannerImage = NewbieBanner
    bannerMobileImage = NewbieBannerMobile
  } else if (router.pathname === '/cash-game') {
    bannerImage = CasheBanner
    bannerMobileImage = CasheBannerMobile
  } else if (router.pathname === '/tournament') {
    bannerImage = TournamentBanner
    bannerMobileImage = TournamentBannerMobile
  } else if (router.pathname === '/101') {
    bannerImage = Invader101Banner
    bannerMobileImage = Invader101BannerMobile
  }
  return (
    <>
      <div className="min-h-screen relative lg:mt-40 overflow-hidden lg:rounded-xl bg-dark-500 lg:mx-20 xl:mx-24 2xl:mx-32 lg:mb-20 z-10">
        {/* heading & background */}
        <div
          className={`w-full h-[65vh] px-10 lg:px-20 2xl:px-36 pt-[36%] lg:pt-40 relative`}
        >
          <div className="hidden lg:block">
            <Image
              src={bannerImage}
              alt={'banner'}
              layout="fill"
              className="-z-10"
            />
          </div>
          <div className=" lg:hidden">
            <Image
              src={bannerMobileImage}
              alt={'bannerMobile'}
              layout="fill"
              className="-z-10"
            />
          </div>

          <h1 className="uppercase font-druk font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-100">
            {TechniquesData.map((data) => {
              if (router.pathname === data.path) return data.title
            })}
          </h1>
          <p className="font-kanit font-light text-lg lg:text-xl text-opacity-80 lg:text-opacity-90 text-white mt-8">
            {TechniquesData.map((data) => {
              if (router.pathname === data.path) return data.description
            })}
          </p>
          <hr className="inline lg:hidden border-primary-100 mt-10" />
        </div>
        <div className="absolute left-0 right-0 top-[53vh] h-[12vh] bg-gradient-to-t from-dark-500 to-[rgba(62, 62, 62, 0)]"></div>
        <div className="flex w-full">
          <div className="w-96 hidden lg:flex flex-col px-10 select-none space-y-8">
            <MenuLink href="/newbie" title="Newbie Tips" />
            <MenuLink href="/cash-game" title="Cash Game" />
            <MenuLink href="/tournament" title="Tournament" />
            <MenuLink href="/101" title="Invader : 101" />
          </div>
          <div className="w-full border-l-[1px] border-white border-opacity-20 min-h-screen">
            <div className="flex justify-center w-full px-10 text-center">
              <h2 className="text-white text-lg lg:text-2xl font-kanit font-medium">
                {TechniquesData.map((data) => {
                  if (router.pathname === data.path) return data.subtitle
                })}
              </h2>
            </div>
            <div className="max-w-screen-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-10 lg:p-16 2xl:p-20">
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen lg:hidden flex flex-col items-center space-y-10 pt-[40%]">
          <Image
            src={FanPageImg}
            alt={'fanpage'}
            layout="fill"
            className="-z-10"
          />
          <h4 className="text-primary-100 font-druk text-3xl sm:text-4xl md:text-5xl text-center">
            VISIT OUR
            <br />
            FANPAGE
          </h4>
          <div className="rounded-xl border-[1px] border-primary-100 flex items-center justify-between px-6 py-3 text-primary-200 cursor-pointer hover:bg-primary-100 hover:text-white duration-300 space-x-10">
            <span className="font-extralight text-2xl">GO INVADE</span>
            <span>{`-->`}</span>
          </div>
        </div>
      </div>
    </>
  )
}

interface MenuLinkProps {
  href: string
  title: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ href, title }) => {
  const router = useRouter()
  let active
  active = router.pathname === href
  return (
    <Link href={href} scroll={false}>
      <div
        className={`w-full h-[5.5rem] grid place-content-center ${
          active ? 'bg-primary-100 text-dark-100' : 'bg-dark-400 text-white'
        } rounded-md uppercase font-kanit font-medium text-lg cursor-pointer`}
      >
        {title}
      </div>
    </Link>
  )
}

export default Layout
