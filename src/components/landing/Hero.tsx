import Image from 'next/image'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'
import HeroImg from '../../../public/img/landing/hero-img.png'

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
      className="min-h-screen md:h-screen w-full px-8 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-32 bg-dark-100 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between relative mb-40 md:mb-0"
    >
      <div className="space-y-8 z-20 relative">
        <h2 className="uppercase font-druk text-white mt-32 text-5xl sm:text-5xl md:text-6xl lg:text-8xl max-w-lg">
          Poker Invader
        </h2>
        <h3 className="font-kanit font-extralight tracking-widest md:text-2xl text-white">
          ตัวเลือกที่ดีที่สุดในการเล่น Poker
        </h3>

        {/* play button */}
        <div
          className="w-[48vw] h-40 rounded-xl overflow-hidden relative hidden md:block"
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
              className={`absolute top-5 -left-5 ${
                hover ? 'opacity-100' : 'opacity-0'
              } duration-300 select-none pl-[4.6rem] pt-5`}
            >
              OUR
              <br /> PARTNERS
            </p>
          </div>
          <div
            className={`${
              hover ? 'opacity-100' : 'opacity-0'
            } opacity-0 absolute -right-6 top-6 grid grid-cols-4 gap-6 pr-12 duration-300 z-10 cursor-pointer`}
          >
            {hover && (
              <>
                <Link href="/download/GGPOKER">
                  <div className="aspect-square bg-[url('/img/register/ggpoker.png')] bg-contain w-28 rounded-2xl grid place-content-center hover:-translate-y-2 duration-200"></div>
                </Link>
                <Link href="download/UPOKER">
                  <div className="aspect-square bg-[url('/img/register/upoker.png')] bg-contain w-28 rounded-2xl grid place-content-center hover:-translate-y-2 duration-200"></div>
                </Link>
                <Link href="/download/PPPOKER">
                  <div className="aspect-square bg-[url('/img/register/pppoker.png')] bg-contain w-28 rounded-2xl grid place-content-center hover:-translate-y-2 duration-200"></div>
                </Link>
                <Link href="/download/POKERBROS">
                  <div className="aspect-square bg-[url('/img/register/pokerbros.png')] bg-contain w-28 rounded-2xl grid place-content-center hover:-translate-y-2 duration-200"></div>
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

      {/* hero links */}
      <div className="lg:hidden grid grid-cols-2 gap-6 mt-20 max-w-[520px]">
        <Link href="/download/GGPOKER">
          <div className="flex flex-col items-center justify-center text-center bg-dark-400 aspect-square rounded-xl md:rounded-2xl space-y-4 md:space-y-6 cursor-pointer">
            <Image
              src={RegistrationIcon}
              alt="register"
              priority={true}
              quality={100}
            />
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
            <Image
              src={PromotionsIcon}
              alt="promo"
              priority={true}
              quality={100}
            />
            <h3 className="text-white opacity-50 font-kanit text-xl">
              โปรโมชั่นเด็ด
            </h3>
          </div>
        </Link>
        <Link href="/newbie">
          <div className="flex flex-col items-center justify-center text-center bg-dark-400 aspect-square rounded-xl md:rounded-2xl space-y-4 md:space-y-6 cursor-pointer">
            <Image
              src={TechniquesIcon}
              alt="tech"
              priority={true}
              quality={100}
            />
            <h3 className="text-white opacity-50 font-kanit text-xl">
              เทคนิคการเล่น
            </h3>
          </div>
        </Link>
        <Scroll to="community" smooth>
          <div className="flex flex-col items-center justify-center text-center bg-dark-400 aspect-square rounded-xl md:rounded-2xl space-y-4 md:space-y-6 cursor-pointer">
            <Image
              src={CommunityIcon}
              alt="commu"
              priority={true}
              quality={100}
            />
            <h3 className="text-white opacity-50 font-kanit text-xl">
              คอมมูนิตี้
            </h3>
          </div>
        </Scroll>
      </div>

      {/* scroll down button */}
      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center lg:hidden place-content-center">
        <span className="font-kanit text-white opacity-50 font-extralight tracking-wider cursor-pointer">
          scroll down
        </span>
      </div>
    </section>
  )
}

export default Hero
