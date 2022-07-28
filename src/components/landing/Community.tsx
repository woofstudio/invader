import Image from 'next/image'
import IvdLogoBlack from '../../../public/ivd-logo-black.svg'
import Arrow from '../../../public/arrow.svg'
import CommunityImg from '../../../public/img/landing/community-img.png'
import { DISCORD, LINE } from '../../config'

const Community: React.FC = () => {
  return (
    <section
      id="community"
      className="w-full px-8 md:px-12 pb-10 md:pb-0 md:py-20 lg:p-32 flex justify-between"
      style={{
        background: 'linear-gradient(155.04deg, #FACB48 3.36%, #FFFFFF 67.79%)',
      }}
    >
      <div className="space-y-10 relative w-full">
        <div className="hidden md:inline">
          <Image src={IvdLogoBlack} alt="Invader Black Logo" />
        </div>
        <h2 className="uppercase font-druk text-3xl sm:text-5xl md:text-7xl text-dark-400">
          Play Online
          <br />
          Poker
          <br />
          Together!
        </h2>
        <h3 className="font-kanit font-extralight text-2xl md:text-4xl tracking-wider text-dark-400">
          ร่วมเรียนรู้ แลกเปลี่ยนความรู้ แชร์ประสบการณ์
        </h3>
        <div className="p-4 w-14 my-10 pb-52 md:pb-0">
          <Image src={Arrow} alt="Community Arrow" layout="responsive" />
        </div>
        <div className="space-y-4">
          <a
            href={LINE}
            className="grid place-content-center rounded-xl uppercase bg-[#48DC69] h-[72px] w-full md:w-[17rem] text-white font-kanit font-bold text-xl tracking-wider"
          >
            Join LINE Chat
          </a>
          <a
            href={DISCORD}
            className="grid place-content-center rounded-xl uppercase bg-[#5662DE] h-[72px] w-full md:w-[17rem] text-white font-kanit font-bold text-xl tracking-wider"
          >
            Join Discord
          </a>
        </div>
        <div className="absolute overflow-hidden bottom-0 top-0 -left-8 -right-8">
          <div className="absolute md:hidden bottom-40 -right-16 w-96">
            <Image src={CommunityImg} alt="commu" priority={true} />
          </div>
        </div>
      </div>
      <div className="md:flex flex-col justify-end hidden -ml-72 lg:-ml-48">
        <Image src={CommunityImg} alt="commu" priority={true} />
      </div>
    </section>
  )
}

export default Community
