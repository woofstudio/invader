import Image from 'next/image'
import AboutImg from '../../../public/img/landing/about-img.png'

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-dark-100 w-full px-12 lg:px-32 pt-24 pb-0 md:pb-32 flex flex-col-reverse md:flex-row justify-between items-center"
    >
      <div className="flex-1 grid place-items-center mt-12 md:mt-0">
        <div className="w-[50%]">
          <Image src={AboutImg} alt="finger" priority={true} quality={100} />
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="space-y-10 text-center md:text-left flex flex-col items-center md:items-start mb-20 md:mb-52">
          <h4 className="uppercase font-druk text-7xl text-primary-200">
            We Are
            <br />
            Invader
          </h4>
          <p className="text-white font-kanit max-w-xl leading-loose text-lg">
            เรารวบรวม <span className="font-druk">App Poker </span>
            มากมายมาไว้ที่นี่่ที่่เดียว ทั้งเนื้อหา สาระความรู้ต่างๆ
            ให้แก่เหล่านักโป๊กเกอร์ทั่วโลก โลกของโป๊กเกอร์ออนไลน์{' '}
            <span className="font-druk">( POKER ONLINE ) </span>
            ที่เต็มไปด้วยปริศนา รอให้เหล่านักเล่นได้ค้นหา
          </p>
        </div>
        <div className="space-y-10 text-center md:text-right flex flex-col items-center md:items-end">
          <p className="text-white font-kanit max-w-xl leading-loose text-lg">
            ห้อง <span className="font-druk">Poker</span> และเกมที่ดีที่สุด
            ของทุก <span className="font-druk">APPLICATION</span> อยู่ที่นี่
            ไม่ว่าจะเป็น{' '}
            <span className="font-druk">
              PPPoker / Pokerbros / UPoker / GGpoker
            </span>{' '}
            ที่มีทัวร์ใหญ่ที่สุดโลกอย่าง{' '}
            <span className="font-druk">WSOP, APT, APL</span>
          </p>
          <p className="text-white font-kanit max-w-xl leading-loose text-lg">
            พร้อมได้รับ <span className="font-druk">Bracelet WSOP</span> ของจริง
            และตั๋วแข่ง <span className="font-druk">Poker</span> ของ{' '}
            <span className="font-druk">WSOP Main</span>
            ที่ <span className="font-druk">Las Vegas</span> ทุกๆปี
          </p>
        </div>
        <div className="absolute top-0 -left-10 w-px h-[520px] bg-white hidden md:block"></div>
        <div className="absolute bottom-0 -right-10 w-px h-[520px] bg-white hidden md:block"></div>
      </div>
    </section>
  )
}

export default About
