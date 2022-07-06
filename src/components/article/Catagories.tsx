import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

const TABS = ['สาระ Poker', 'จิตวิทยา', 'NEWS', 'ประวัติ Pro Players']
export const Catagories = () => {
  const [catagory, setcatagory] = useState(0)
  return (
    <section
      id="catogories"
      className="bg-dark-300 section-space-x section-space-y"
    >
      <div className="max-width space-y-16">
        <div className="flex justify-between items-center">
          <h2 className="sm:text-primary-200 sm:text-2xl sm:border-0 w-fit border-b-2 border-primary-200 font-druk font-bold">
            CATEGORIES
          </h2>
          <Link href="/">
            <a className="hidden sm:block">view all</a>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0">
          <div className="flex space-x-8 overflow-x-auto pb-10 sm:pr-10 sm:flex-col sm:items-start sm:space-x-0">
            {TABS.map((elem, index) => (
              <div
                key={elem}
                className={`text-xs text-center px-8 py-3 border-2 cursor-pointer sm:border-0 sm:text-lg ${
                  catagory === index &&
                  'text-black bg-primary-200 sm:text-primary-200 sm:bg-transparent border-0'
                }`}
                onClick={() => {
                  setcatagory(index)
                }}
              >
                {elem}
              </div>
            ))}
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {[1, 2, 3, 4, 5, 6].map((elem) => (
              <div key={elem} className="space-y-2">
                <div className="w-full h-60 sm:w-72 sm:h-44 relative rounded-xl overflow-hidden">
                  <Image src="/mock.jpeg" alt="mock image" layout="fill" />
                </div>
                <div className="space-y-2 sm:w-72 w-full">
                  <p className="text-xl font-semibold line-clamp-2">
                    GGPoker กับ Natural8 แตกต่างกันอย่างไร!?
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="tag block sm:hidden">สาระ Poker</p>
                    <p className="text-xs sm:text-sm font-light">1 Jun, 2022</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
