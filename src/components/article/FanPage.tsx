import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FACEBOOK_PAGE } from '../../config'

import BGImage from '../../../public/img/article/fanpage.png'
import BGMobileImage from '../../../public/img/article/fanpage-mobile.png'

export const FanPage = () => {
  const router = useRouter()
  const fanpageHandler = () => {
    router.push(FACEBOOK_PAGE)
  }
  return (
    <section
      id="fanpage"
      className="relative h-screen sm:h-[60vh] section-space-x py-40 flex justify-center sm:items-center overflow-hidden"
    >
      <div className="space-y-11 text-center flex flex-col items-center sm:items-start w-full max-w-screen-2xl z-50">
        <h3 className="font-bold font-druk text-3xl sm:text-5xl text-primary-200 text-center sm:text-left">
          VISIT OUR <br />
          FANPAGE
        </h3>
        <button
          className="flex items-center space-x-6 border border-primary-200 px-6 py-2 rounded-xl"
          onClick={fanpageHandler}
        >
          <span className="font-extralight text-2xl text-primary-200">
            GO INVADE
          </span>
          <BsArrowRight size={30} color="#FFD261" />
        </button>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 sm:inline hidden">
        <Image
          src={BGImage}
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 inline sm:hidden">
        <Image
          src={BGMobileImage}
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
      </div>
    </section>
  )
}
