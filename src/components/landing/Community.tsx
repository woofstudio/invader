import Image from 'next/image'
import IvdLogoBlack from '../../../public/ivd-logo-black.svg'
import Arrow from '../../../public/arrow.svg'
import CommunityImg from '../../../public/img/landing/community-img.png'

const Community: React.FC = () => {
  return (
    <section
      id="commuinity"
      className="w-full p-32 flex justify-between"
      style={{
        background: 'linear-gradient(155.04deg, #FACB48 3.36%, #FFFFFF 67.79%)',
      }}
    >
      <div className="space-y-10">
        <Image src={IvdLogoBlack} alt="Invader Black Logo" />
        <h2 className="uppercase font-druk text-7xl text-dark-400 pt-10">
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
            href="https://line.me/en/"
            className="grid place-content-center rounded-xl uppercase bg-[#48DC69] h-[72px] w-[17rem] text-white font-kanit font-bold text-xl tracking-wider"
          >
            Join LINE Chat
          </a>
          <a
            href="https://discord.com/"
            className="grid place-content-center rounded-xl uppercase bg-[#5662DE] h-[72px] w-[17rem] text-white font-kanit font-bold text-xl tracking-wider"
          >
            Join Discord
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <Image src={CommunityImg} alt="commu" priority={true} quality={100} />
      </div>
    </section>
  )
}

export default Community
