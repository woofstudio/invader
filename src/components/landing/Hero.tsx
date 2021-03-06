import Image from 'next/image'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'
import HeroImg from '../../../public/img/landing/hero-img.png'

import GgpokerIcon from '../../../public/img/register/ggpoker.png'
import UpokerIcon from '../../../public/img/register/upoker.png'
import PppokerIcon from '../../../public/img/register/pppoker.png'
import PokerbrosIcon from '../../../public/img/register/pokerbros.png'

import RegistrationIcon from '../../../public/img/landing/hero-registration-icon.png'
import PromotionsIcon from '../../../public/img/landing/hero-promotions-icon.png'
import TechniquesIcon from '../../../public/img/landing/hero-techniques-icon.png'
import CommunityIcon from '../../../public/img/landing/hero-community-icon.png'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Hero: React.FC = () => {
  const [hover, setHover] = useState(false)
  const router = useRouter()

  return (
    <section
      id="hero"
      className="sm:min-h-screen lg:h-screen w-full px-8 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-32 bg-dark-100 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between relative mb-40 md:mb-0"
    >
      <div className="space-y-8 z-20 relative lg:pb-60">
        <h2 className="uppercase font-druk text-white font-bold mt-32 text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-lg">
          Poker Invader
        </h2>
        <h3 className="font-kanit font-extralight tracking-widest md:text-2xl text-white">
          ตัวเลือกที่ดีที่สุดในการเล่น Poker
        </h3>

        {/* play button */}
        <div
          className="absolute w-80 2xl:w-[48vw] h-96 2xl:h-40 rounded-xl overflow-hidden hidden lg:block"
          onMouseLeave={() => setHover(false)}
        >
          <div
            className={`bg-dark-400 duration-300 group ${
              hover ? 'w-full h-full' : 'w-80 h-20'
            } cursor-pointer rounded-xl uppercase font-kanit font-light text-3xl text-white z-10`}
            onMouseEnter={() => setHover(true)}
          >
            <p
              className={`${
                hover ? 'opacity-0' : 'opacity-100'
              } duration-300 select-none pl-[4.6rem] pt-5`}
            >
              Play Poker
            </p>
            <p
              className={`absolute top-2 2xl:top-5 left-2 2xl:-left-5 ${
                hover ? 'opacity-100' : 'opacity-0'
              } duration-300 select-none pl-[4.6rem] pt-5 text-center 2xl:text-left`}
            >
              OUR
              <br /> PARTNERS
            </p>
          </div>
          <div
            className={`${
              hover ? 'opacity-100' : 'opacity-0'
            } opacity-0 absolute left-12 2xl:left-auto 2xl:-right-6 bottom-8 2xl:bottom-auto 2xl:top-6 grid grid-cols-2 2xl:grid-cols-4 gap-6 pr-12 duration-300 z-10 cursor-pointer`}
          >
            {hover && (
              <>
                <Link href="/download/GGPOKER">
                  <div className="aspect-square w-24 2xl:w-28 rounded-2xl grid place-content-center hover:-translate-y-2 duration-200 relative">
                    <Image src={GgpokerIcon} alt={'ggpoker'} layout="fill" />
                  </div>
                </Link>
                <Link href="download/UPOKER">
                  <div className="aspect-square w-24 2xl:w-28 rounded-2xl grid place-content-center hover:-translate-y-2 duration-200 relative">
                    <Image src={UpokerIcon} alt={'upoker'} layout="fill" />
                  </div>
                </Link>
                <Link href="/download/PPPOKER">
                  <div className="aspect-square w-24 2xl:w-28 rounded-2xl grid place-content-center hover:-translate-y-2 duration-200 relative">
                    <Image src={PppokerIcon} alt={'pppoker'} layout="fill" />
                  </div>
                </Link>
                <Link href="/download/POKERBROS">
                  <div className="aspect-square w-24 2xl:w-28 rounded-2xl grid place-content-center hover:-translate-y-2 duration-200 relative">
                    <Image
                      src={PokerbrosIcon}
                      alt={'pokerbros'}
                      layout="fill"
                    />
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* hero image */}
      <div className="hidden lg:block">
        <Image src={HeroImg} alt="hero" priority={true} quality={100} />
      </div>
      <div className="absolute left-0 top-0 right-0 overflow-hidden w-full h-full">
        <div className="absolute top-[30%] -right-36 -left-10 lg:hidden">
          <Image src={HeroImg} alt="hero" priority={true} quality={100} />
        </div>
      </div>

      {/* hero links */}
      <div className="lg:hidden grid grid-cols-2 gap-6 mt-20 max-w-[520px] z-10">
        <Link href="/download/GGPOKER">
          <div className="flex flex-col items-center justify-center text-center bg-dark-400 aspect-square rounded-xl md:rounded-2xl space-y-4 md:space-y-6 cursor-pointer">
            <Image src={RegistrationIcon} alt="register" />
            <h3 className="text-white opacity-50 font-kanit text-xl">
              วิธีการสมัคร
            </h3>
          </div>
        </Link>
        <Link href="/promotion">
          <div
            className="flex flex-col items-center justify-center text-center bg-dark-400 aspect-square rounded-xl md:rounded-2xl space-y-4 md:space-y-6 cursor-pointer"
            onClick={() => {
              router.push(`promotion`)
            }}
          >
            <Image src={PromotionsIcon} alt="promo" />
            <h3 className="text-white opacity-50 font-kanit text-xl">
              โปรโมชั่นเด็ด
            </h3>
          </div>
        </Link>
        <Link href="/newbie">
          <div className="flex flex-col items-center justify-center text-center bg-dark-400 aspect-square rounded-xl md:rounded-2xl space-y-4 md:space-y-6 cursor-pointer">
            <Image src={TechniquesIcon} alt="tech" />
            <h3 className="text-white opacity-50 font-kanit text-xl">
              เทคนิคการเล่น
            </h3>
          </div>
        </Link>
        <Scroll to="community" smooth>
          <div className="flex flex-col items-center justify-center text-center bg-dark-400 aspect-square rounded-xl md:rounded-2xl space-y-4 md:space-y-6 cursor-pointer">
            <Image src={CommunityIcon} alt="commu" />
            <h3 className="text-white opacity-50 font-kanit text-xl">
              คอมมูนิตี้
            </h3>
          </div>
        </Scroll>
      </div>
      {/* <div className="col-span-2 flex flex-col items-center lg:hidden place-content-center pt-6">
        <Scroll to="footer" smooth>
          <span className="font-kanit text-white opacity-50 font-extralight tracking-wider cursor-pointer">
            scroll down
          </span>
        </Scroll>
      </div> */}

      {/* scroll down button */}
    </section>
  )
}

export default Hero
