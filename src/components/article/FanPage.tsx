import { useRouter } from 'next/router'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FACEBOOK_PAGE } from '../../config'

export const FanPage = () => {
  const router = useRouter()
  const fanpageHandler = () => {
    router.push(FACEBOOK_PAGE)
  }
  return (
    <section
      id="fanpage"
      className="bg-[url('/img/article/fanpage-mobile.png')] h-[900px] sm:bg-[url('/img/article/fanpage.png')] sm:h-[500px] bg-cover bg-no-repeat section-space-x py-40"
    >
      <div className="space-y-11 text-center flex flex-col items-center sm:items-start">
        <h3 className="font-bold font-druk text-3xl text-primary-200 w-60">
          VISIT OUR FANPAGE
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
    </section>
  )
}
