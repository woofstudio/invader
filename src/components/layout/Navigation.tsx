import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { BsChevronLeft, BsXLg } from 'react-icons/bs'
import IvdLogoColor from '../../../public/ivd-logo-color.svg'
import { useRouter } from 'next/router'
import { FACEBOOK_PAGE, YOUTUBE_CHANNEL } from '../../config'

const TECHNIQUE_PATH = ['101', 'cash-game', 'newbie', 'tournament']

export const Navigation: React.FC = () => {
  const { events, back, pathname, push } = useRouter()
  const [show, setShow] = useState(false)
  const [showApps, setShowApps] = useState(false)
  const [showTechniques, setShowTechniques] = useState(false)

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [show])

  const openSidebar = useCallback(() => {
    setShow(true)
  }, [])
  const closeSidebar = useCallback(() => {
    setShow(false)
  }, [])

  const openAppBar = useCallback(() => {
    setShowApps(true)
  }, [])
  const closeAppBar = useCallback(() => {
    setShowApps(false)
  }, [])

  const openTechniqueBar = useCallback(() => {
    setShowTechniques(true)
  }, [])
  const closeTechniqueBar = useCallback(() => {
    setShowTechniques(false)
  }, [])

  useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', closeSidebar)
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', closeSidebar)
    }
  }, [events, closeSidebar])

  useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', closeAppBar)
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', closeAppBar)
    }
  }, [events, closeAppBar])

  useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', closeTechniqueBar)
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', closeTechniqueBar)
    }
  }, [events, closeTechniqueBar])

  return (
    <>
      <nav className="absolute top-0 w-full h-40 section-space-x flex items-center justify-between z-30 pl-8 sm:pl-10 md:pl-14 lg:pl-20 xl:pl-24 2xl:pl-32">
        {pathname === '/' ? (
          <Link href="/">
            <Image src={IvdLogoColor} alt="Invader Logo" />
          </Link>
        ) : (
          <BsChevronLeft
            className="cursor-pointer"
            size={40}
            color="#FFD261"
            onClick={() => push('/')}
          />
        )}
        <p
          className={`underline underline-offset-2 cursor-pointer text-sm ${
            pathname.substring(1, 9) === 'download'
              ? 'block sm:hidden'
              : 'hidden'
          }`}
          onClick={openAppBar}
        >
          TAP TO SEE OTHERS APP
        </p>
        <p
          className={`underline underline-offset-2 cursor-pointer text-sm ${
            TECHNIQUE_PATH.includes(pathname.substring(1))
              ? 'block sm:hidden'
              : 'hidden'
          }`}
          onClick={openTechniqueBar}
        >
          TAP TO SEE OTHERS GUIDE
        </p>
        <div
          className={`cursor-pointer rounded-full p-2 hover:bg-slate-700 ${
            pathname.substring(1) in TECHNIQUE_PATH
              ? 'invisible sm:visible'
              : 'block'
          }`}
          onClick={openSidebar}
        >
          {pathname.substring(1) in TECHNIQUE_PATH ? (
            <FiMenu color="#C4C4C4" size={40} />
          ) : (
            <FiMenu className="text-white lg:text-[#C4C4C4]" size={40} />
          )}
        </div>
      </nav>
      <div
        className={`w-screen h-screen bg-dark-900 z-40 absolute ${
          show ? 'block' : 'hidden'
        }`}
      />
      <div
        className={`z-50 fixed top-0 right-0 w-full sm:w-96 transition-all duration-300 h-screen bg-text-100 ${
          show ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-150`}
      >
        <div className="px-10 py-14 h-full flex flex-col text-center sm:text-left space-y-10 sm:space-y-20">
          <div className="cursor-pointer self-end" onClick={closeSidebar}>
            <BsXLg color="#C4C4C4" size={30} />
          </div>
          <div className="flex flex-col">
            <Link href="/newbie">
              <a className="link">???????????????????????????????????????</a>
            </Link>
            <Link href="/article">
              <a className="link">?????????????????????????????????????????????</a>
            </Link>
            <Link href="/promotion">
              <a className="link">???????????????????????????</a>
            </Link>
          </div>
          {/* <hr className="text-text-300" />
          <div className="flex flex-col">
            <Link href="/">
              <a className="link">
                IPC :{' '}
                <span className=" text-sm">INVADER POKER CHAMPIONSHIP</span>
              </a>
            </Link>
            <Link href="/">
              <a className="link">SMART HUD</a>
            </Link>
            <Link href="/">
              <a className="link">WHY POKER?</a>
            </Link>
          </div> */}
          <hr className="text-text-300" />
          <div className="flex flex-col">
            <a href={FACEBOOK_PAGE} className="link">
              FACEBOOK
            </a>
            <a href={YOUTUBE_CHANNEL} className="link">
              YOUTUBE
            </a>
          </div>
        </div>
      </div>
      <div
        className={`fixed z-50 top-0 right-0 w-full h-screen transition-all duration-300 bg-black flex flex-col items-center justify-center ${
          showApps ? 'translate-y-0' : '-translate-y-full'
        } ease-in-out duration-150`}
      >
        <div className="cursor-pointer absolute top-12" onClick={closeAppBar}>
          <BsXLg color="#FFFFF" size={30} />
        </div>
        <div className="flex flex-col space-y-16 items-center">
          <Link href="/download/GGPOKER">
            <a className="uppercase font-druk font-bold text-3xl text-white">
              <span className="text-ggpoker">GG</span>POKER
            </a>
          </Link>
          <hr className="w-full border-white" />
          <Link href="/download/PPPOKER">
            <a className="uppercase font-druk font-bold text-3xl text-white">
              <span className="text-pppoker">PP</span>POKER
            </a>
          </Link>
          <hr className="w-full border-white" />
          <Link href="/download/UPOKER">
            <a className="uppercase font-druk font-bold text-3xl text-white">
              <span className="text-upoker">U</span>POKER
            </a>
          </Link>
          <hr className="w-full border-white" />
          <Link href="/download/POKERBROS">
            <a className="uppercase font-druk font-bold text-3xl text-white">
              <span className="text-upoker">POKER</span>
              <span className="text-ggpoker">B</span>ROS
            </a>
          </Link>
        </div>
      </div>
      <div
        className={`fixed z-50 top-0 right-0 w-full h-screen transition-all duration-300 bg-black flex flex-col items-center justify-center ${
          showTechniques ? 'translate-y-0' : '-translate-y-full'
        } ease-in-out duration-150`}
      >
        <div
          className="cursor-pointer absolute top-12"
          onClick={closeTechniqueBar}
        >
          <BsXLg color="#FFFFF" size={30} />
        </div>
        <div className="flex flex-col space-y-16 items-center">
          <Link href="/newbie">
            <a className="uppercase font-druk font-bold text-3xl text-primary-200">
              NEWBIE TIPS
            </a>
          </Link>
          <hr className="w-full border-white" />
          <Link href="/cash-game">
            <a className="uppercase font-druk font-bold text-3xl text-primary-200">
              CASH GAME
            </a>
          </Link>
          <hr className="w-full border-white" />
          <Link href="/tournament">
            <a className="uppercase font-druk font-bold text-3xl text-primary-200">
              TOURNAMENT
            </a>
          </Link>
          <hr className="w-full border-white" />
          <Link href="/101">
            <a className="uppercase font-druk font-bold text-3xl text-primary-200">
              INVADER:101
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
