import Image from 'next/image'
import IvdLogoBlack from '../../../public/ivd-logo-black.svg'
import Arrow from '../../../public/arrow.svg'
import CommunityImg from '../../../public/img/landing/community-img.png'
import { DISCORD, LINE } from '../../config'

const Community: React.FC = () => {
  return (
    <section
      id="commuinity"
      className="w-full px-12 py-20 lg:p-32 flex justify-between"
      style={{
        background: 'linear-gradient(155.04deg, #FACB48 3.36%, #FFFFFF 67.79%)',
      }}
    >
      <div className="space-y-10 relative">
        <Image src={IvdLogoBlack} alt="Invader Black Logo" />
        <h2 className="uppercase font-druk text-5xl md:text-7xl text-dark-400">
          Play Online
          <br />
          Poker
          <br />
          Together!
        </h2>
        <h3 className="font-kanit font-extralight text-4xl tracking-wider text-dark-400">
          ร่วมเรียนรู้ แลกเปลี่ยนความรู้ แชร์ประสบการณ์
        </h3>
        <div className="p-4 w-14 my-10">
          <Image src={Arrow} alt="Community Arrow" layout="responsive" />
        </div>
        <div className="space-y-4">
          <a
            href={LINE}
            className="grid place-content-center rounded-xl uppercase bg-[#48DC69] h-[72px] w-[17rem] text-white font-kanit font-bold text-xl tracking-wider"
          >
            Join LINE Chat
          </a>
          <a
            href={DISCORD}
            className="grid place-content-center rounded-xl uppercase bg-[#5662DE] h-[72px] w-[17rem] text-white font-kanit font-bold text-xl tracking-wider"
          >
            Join Discord
          </a>
        </div>
        <div className="absolute md:hidden -right-0 -bottom-4 w-[30%] sm:w-[50%]">
          <Image src={CommunityImg} alt="commu" priority={true} quality={100} />
        </div>
      </div>
      <div className="md:flex flex-col justify-end hidden">
        <Image src={CommunityImg} alt="commu" priority={true} quality={100} />
      </div>
    </section>
  )
}

export default Community
