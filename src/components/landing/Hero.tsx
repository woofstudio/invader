import Image from "next/image";
import HeroImg from "../../../public/img/landing/hero-img.png";

import RegistrationIcon from "../../../public/img/landing/hero-registration-icon.png";
import PromotionsIcon from "../../../public/img/landing/hero-promotions-icon.png";
import TechniquesIcon from "../../../public/img/landing/hero-techniques-icon.png";
import CommunityIcon from "../../../public/img/landing/hero-community-icon.png";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full px-8 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-32 bg-dark-100 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between relative"
    >
      <div className="space-y-8 z-20">
        <h1 className="uppercase font-druk text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl max-w-lg">
          Poker Invader
        </h1>
        <h3 className="font-kanit font-extralight tracking-widest text-xl text-white">
          ตัวเลือกที่ดีที่สุดในการเล่น Poker
        </h3>

        {/* play button */}
        <div className="uppercase font-kanit font-light text-3xl text-white h-20 w-80 hidden lg:flex justify-center items-center bg-dark-400 rounded-lg">
          Play Poker
        </div>
      </div>

      {/* hero image */}
      <div className="hidden lg:block">
        <Image src={HeroImg} priority={true} quality={100} />
      </div>

      {/* hero links */}
      <div className="lg:hidden grid grid-cols-2 gap-6 mt-20 max-w-[420px]">
        <div className="flex flex-col items-center justify-center text-center bg-dark-400 aspect-square rounded-xl md:rounded-2xl space-y-4 md:space-y-6">
          <Image src={RegistrationIcon} priority={true} quality={100} />
          <h3 className="text-white opacity-50 font-kanit text-xl">
            วิธีการสมัคร
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-dark-400 aspect-square rounded-xl md:rounded-2xl space-y-4 md:space-y-6">
          <Image src={PromotionsIcon} priority={true} quality={100} />
          <h3 className="text-white opacity-50 font-kanit text-xl">
            โปรโมชั่นเด็ด
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-dark-400 aspect-square rounded-xl md:rounded-2xl space-y-4 md:space-y-6">
          <Image src={TechniquesIcon} priority={true} quality={100} />
          <h3 className="text-white opacity-50 font-kanit text-xl">
            เทคนิคการเล่น
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-dark-400 aspect-square rounded-xl md:rounded-2xl space-y-4 md:space-y-6">
          <Image src={CommunityIcon} priority={true} quality={100} />
          <h3 className="text-white opacity-50 font-kanit text-xl">
            คอมมูนิตี้
          </h3>
        </div>
      </div>

      {/* scroll down button */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center lg:hidden place-content-center">
        <span className="font-kanit text-white opacity-50 font-extralight tracking-wider cursor-pointer">
          scroll down
        </span>
      </div>
    </section>
  );
};

export default Hero;
