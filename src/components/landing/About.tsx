import Image from 'next/image'
import AboutImg from '../../../public/img/landing/about-img.png'

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-dark-100 w-full px-32 pt-24 pb-32 flex justify-between items-center"
    >
      <div className="w-1/2 grid place-content-center px-20">
        <div className="w-[60%]">
          <Image src={AboutImg} priority={true} quality={100} />
        </div>
      </div>
      <div className="w-1/2 relative pb-24">
        <div className="space-y-10 text-left flex flex-col items-start mb-52">
          <h2 className="uppercase font-druk text-7xl text-primary-200">
            We Are
            <br />
            Invader
          </h2>
          <p className="text-white font-kanit max-w-xl leading-loose text-lg">
            เรารวบรวม <span className="font-druk">App Poker </span>
            มากมายมาไว้ที่นี่่ที่่เดียว ทั้งเนื้อหา สาระความรู้ต่างๆ
            ให้แก่เหล่านักโป๊กเกอร์ทั่วโลก โลกของโป๊กเกอร์ออนไลน์{' '}
            <span className="font-druk">( POKER ONLINE ) </span>
            ที่เต็มไปด้วยปริศนา รอให้เหล่านักเล่นได้ค้นหา
          </p>
        </div>
        <div className="space-y-10 text-right flex flex-col items-end">
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
        <div className="absolute top-0 -left-10 w-px h-[520px] bg-white"></div>
        <div className="absolute bottom-0 -right-10 w-px h-[520px] bg-white"></div>
      </div>
    </section>
  )
}

export default About
