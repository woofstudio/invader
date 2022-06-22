import Link from "next/link";

const Techniques: React.FC = () => {
  return (
    <section
      id="techniques"
      className="bg-dark-100 w-full px-32 py-8 space-y-16"
    >
      <div className="font-kanit text-white space-y-4">
        <h2 className="font-medium text-6xl">เทคนิคการเล่น</h2>
        <h3 className="font-light text-lg tracking-wide">
          วิธีทำเงิน และเทคนิคการเล่นดีๆจากโปรเพลย์เยอร์ รวมไว้ที่นี่
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <Link href="/">
          <div className="bg-[url('/img/landing/techniques-newbie-img.png')] bg-cover aspect-[6/8] rounded-2xl flex flex-col items-center justify-between text-center duration-500 hover:-translate-y-4 relative overflow-hidden cursor-pointer">
            <h3 className="uppercase font-druk text-primary-100 text-6xl mt-12">
              Newbie
              <br />
              Tips
            </h3>
            <a className="underline font-kanit text-white text-2xl mb-8 z-20">
              อ่าน
            </a>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/">
          <div className="bg-[url('/img/landing/techniques-cash-img.png')] bg-cover aspect-[6/8] rounded-2xl flex flex-col items-center justify-between text-center duration-500 hover:-translate-y-4 relative overflow-hidden cursor-pointer">
            <h3 className="uppercase font-druk text-primary-100 text-6xl mt-12">
              Cash
              <br />
              Game
            </h3>
            <a className="underline font-kanit text-white text-2xl mb-8 z-20">
              อ่าน
            </a>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/">
          <div className="bg-[url('/img/landing/techniques-tournament-img.png')] bg-cover aspect-[6/8] rounded-2xl flex flex-col items-center justify-between text-center duration-500 hover:-translate-y-4 relative overflow-hidden cursor-pointer">
            <h3 className="uppercase font-druk text-primary-100 text-6xl mt-12">
              MTT
              <br />
              <span className="text-3xl">Tournament</span>
            </h3>
            <a className="underline font-kanit text-white text-2xl mb-8 z-20">
              อ่าน
            </a>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/">
          <div className="bg-[url('/img/landing/techniques-101-img.png')] bg-cover aspect-[6/8] rounded-2xl flex flex-col items-center justify-between text-center duration-500 hover:-translate-y-4 relative overflow-hidden cursor-pointer">
            <h3 className="uppercase font-druk text-primary-100 text-6xl mt-12">
              Invader
              <br />
              101
            </h3>
            <a className="underline font-kanit text-white text-2xl mb-8 z-20">
              อ่าน
            </a>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Techniques;
