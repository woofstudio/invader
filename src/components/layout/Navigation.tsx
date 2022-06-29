import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { BsChevronLeft, BsXLg } from 'react-icons/bs'
import IvdLogoColor from '../../../public/ivd-logo-color.svg'
import { useRouter } from 'next/router'

export const Navigation: React.FC = () => {
  const [show, setShow] = useState(false)
  const { events, back, pathname } = useRouter()

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

  useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', closeSidebar)
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', closeSidebar)
    }
  }, [events, closeSidebar])

  return (
    <>
      <nav className="absolute top-0 w-full h-40 px-8 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-32 flex items-center justify-between z-10">
        {pathname === '/' ? (
          <Link href="/">
            <Image src={IvdLogoColor} alt="Invader Logo" />
          </Link>
        ) : (
          <BsChevronLeft size={40} color="#FFD261" onClick={back} />
        )}
        <div className="cursor-pointer" onClick={openSidebar}>
          <FiMenu color="#C4C4C4" size={40} />
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
            <Link href="/">
              <a className="link">เทคนิคการเล่น</a>
            </Link>
            <Link href="/">
              <a className="link">บทความโป๊กเกอร์</a>
            </Link>
            <Link href="/">
              <a className="link">โปรโมชั่น</a>
            </Link>
          </div>
          <hr className="text-text-300" />
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
          </div>
          <hr className="text-text-300" />
          <div className="flex flex-col">
            <a href="https://www.facebook.com/" className="link">
              FACEBOOK
            </a>
            <a href="https://www.youtube.com/" className="link">
              YOUTUBE
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
