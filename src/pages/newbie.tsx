import { NextPage } from 'next'
import Link from 'next/link'

const Newbie: NextPage = () => {
  return (
    <div className="min-h-screen relative mt-40 overflow-hidden rounded-xl bg-dark-500 mx-8 sm:mx-10 md:mx-14 lg:mx-20 xl:mx-24 2xl:mx-32 mb-20">
      {/* heading & background */}
      <div className="w-full h-[70vh] bg-black px-20 2xl:px-36 pt-40">
        <h1 className="uppercase font-druk font-bold text-7xl text-primary-100">
          Newbie
          <br /> Tips
        </h1>
        <p className="font-kanit font-light text-xl text-opacity-90 text-white mt-8">
          สิ่งที่ต้องเรียนรู้ก่อนเล่นโป๊กเกอร์
          <br />
          ครบจบในที่เดียว ตั้งแต่ความรู้พื้นฐานไปจนถึงกฏกติกาในการเล่น
        </p>
      </div>
      <div className="absolute left-0 right-0 top-[58vh] h-[12vh] bg-gradient-to-t from-dark-500 to-[rgba(62, 62, 62, 0)]"></div>
      <div className="flex w-full">
        <div className="w-96 flex flex-col px-10 select-none space-y-8">
          <Link href="/newbie">
            <div className="w-full h-[5.5rem] grid place-content-center bg-primary-100 rounded-md text-dark-100 uppercase font-kanit font-medium text-lg cursor-pointer">
              Newbie Tips
            </div>
          </Link>
          <Link href="/cashgame">
            <div className="w-full h-[5.5rem] grid place-content-center bg-dark-400 rounded-md text-white uppercase font-kanit text-lg cursor-pointer">
              Cash Game
            </div>
          </Link>
          <Link href="/tournament">
            <div className="w-full h-[5.5rem] grid place-content-center bg-dark-400 rounded-md text-white uppercase font-kanit text-lg cursor-pointer">
              Tournament
            </div>
          </Link>
          <Link href="/101">
            <div className="w-full h-[5.5rem] grid place-content-center bg-dark-400 rounded-md text-white uppercase font-kanit text-lg cursor-pointer">
              Invader : 101
            </div>
          </Link>
        </div>
        <div className="w-full border-l-[1px] border-white border-opacity-20 min-h-screen">
          <div className="flex justify-center w-full">
            <h2 className="text-white text-2xl font-kanit font-medium">
              เหมาะสำหรับผู้เล่นมือใหม่ที่อยากเข้าสู่วงการโป๊กเกอร์!
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newbie
