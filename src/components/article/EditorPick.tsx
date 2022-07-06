import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'nuka-carousel'
import React from 'react'
import { TbClock } from 'react-icons/tb'

export const EditorPick = () => {
  return (
    <section
      id="editor pick"
      className="w-full md:section-space-x bg-dark-100 md:space-y-11 md:space-from-nav pb-20 max-width"
    >
      <h1 className="text-primary-200 hidden md:block text-2xl font-bold font-druk">
        {"EDITOR'S PICK"}
      </h1>
      <div className="flex flex-col-reverse xl:space-x-20 md:space-y-8 xl:space-y-0 md:flex-col xl:flex-row">
        <div className="flex-1 px-10 md:px-0">
          <h1 className="text-primary-200 my-5 underline md:hidden block text-lg font-bold font-druk">
            {"EDITOR'S PICK"}
          </h1>
          <div className="w-full md:w-[680px] h-60 md:h-[430px] relative">
            <div
              className="w-full hidden md:block absolute h-full z-10"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%)',
              }}
            />
            <Image src="/mock.jpeg" alt="mock image" layout="fill" />
            <div className="absolute w-80 hidden md:block p-5 left-0 z-20 bottom-0">
              <p className="text-xl font-semibold">
                เลิกเถียงกันสรุปจบในโพสเดียว โป๊กเกอร์ เกมกีฬา หรือ การพนัน?
              </p>
              <div className="flex items-center space-x-2">
                <TbClock />
                <p className="text-base font-light">20 May 2022</p>
              </div>
            </div>
          </div>
          <div className="block md:hidden space-y-5 mt-5 mb-8">
            <h4 className="text-xl font-semibold">
              เลิกเถียงกันสรุปจบในโพสเดียว โป๊กเกอร์ เกมกีฬา หรือ การพนัน?
            </h4>
            <p className="tag">สาระ Poker</p>
            <p className="text-sm font-light line-clamp-3">
              โป๊กเกอร์นับเป็นกีฬาได้ยังไง?ในเมื่อไม่เห็นมีการออกแรงอะไรเลย
              ดูยังไงก็ไม่เหมือนพวกฟุตบอลหรือบาสเก็ตบอลเลยสักนิด
              บทสรุปของคำถามโลกแตกนี้คืออะไร... ไปอ่านกันต่อเลย
            </p>
          </div>
          <div className="flex cursor-pointer underline justify-end md:hidden">
            <Link href="/">
              <a>{'READ MORE >'}</a>
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-6 hidden md:block">
          {[1, 2, 3].map((elem) => (
            <div className="flex space-x-5" key={elem}>
              <div className="w-48 h-32 relative rounded-xl overflow-hidden">
                <Image src="/mock.jpeg" alt="mock image" layout="fill" />
              </div>
              <div className="space-y-2 w-72">
                <p className="text-xl font-semibold line-clamp-3">
                  GGPoker กับ Natural8 แตกต่างกันอย่างไร!?
                </p>
                <p className="text-sm font-light">1 Jun, 2022</p>
              </div>
            </div>
          ))}
        </div>
        <div className="block md:hidden">
          <Carousel>
            {[1, 2, 3].map((elem) => (
              <div key={elem} className="relative w-full h-screen">
                <div
                  className="w-full absolute h-full z-10"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%)',
                  }}
                />
                <Image src="/mock.jpeg" alt="mock image" layout="fill" />
                <div className="absolute w-80 left-8 px-4 bottom-20 border-l-4 z-20 border-primary-200">
                  <p className="text-base font-druk font-semibold text-primary-200">
                    Liv Boeree
                  </p>
                  <p className="text-base italic">Iron Maiden</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
