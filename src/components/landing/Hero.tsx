import Image from "next/image";
import HeroImg from "../../../public/img/landing/hero-img.png";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full px-32 bg-dark-100 flex items-center justify-between"
    >
      <div className="space-y-8">
        <h1 className="uppercase font-druk text-white text-8xl max-w-lg">
          Poker Invader
        </h1>
        <h3 className="font-kanit font-extralight tracking-widest text-xl text-white">
          ตัวเลือกที่ดีที่สุดในการเล่น Poker
        </h3>
        <div className="uppercase font-kanit font-light text-3xl text-white h-20 w-80 flex justify-center items-center bg-dark-400 rounded-lg">
          Play Poker
        </div>
      </div>
      <div className="">
        <Image src={HeroImg} priority={true} quality={100} />
      </div>
    </section>
  );
};

export default Hero;
