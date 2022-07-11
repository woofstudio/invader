import Link from 'next/link'
import Carousel from 'nuka-carousel'

const Techniques: React.FC = () => {
  return (
    <section
      id="techniques"
      className="lg:h-auto bg-dark-100 w-full lg:px-20 xl:px-24 2xl:px-32 py-8 space-y-16"
    >
      <div className="font-kanit text-white space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2 className="font-medium text-4xl sm:text-5xl lg:text-6xl">
          เทคนิคการเล่นโป๊กเกอร์
        </h2>
        <h3 className="font-light text-base sm:text-lg tracking-wide max-w-[13rem] sm:max-w-none opacity-50 lg:opacity-100">
          วิธีทำเงิน และเทคนิคการเล่นดีๆจากโปรเพลย์เยอร์ รวมไว้ที่นี่
        </h3>
      </div>

      {/* desktop links */}
      <div className="hidden lg:grid grid-cols-4 gap-6">
        <Link href="/newbie">
          <div className="bg-[url('/img/landing/techniques-newbie-img.png')] bg-cover aspect-[6/8] rounded-2xl flex flex-col items-center justify-between text-center duration-500 hover:-translate-y-4 relative overflow-hidden cursor-pointer">
            <h3 className="uppercase font-druk text-primary-100 lg:text-3xl xl:text-4xl 2xl:text-5xl mt-12">
              Newbie
              <br />
              Tips
            </h3>
            <a className="underline font-kanit text-white text-lg 2xl:text-2xl mb-8 z-20">
              อ่าน
            </a>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/cash-game">
          <div className="bg-[url('/img/landing/techniques-cash-img.png')] bg-cover aspect-[6/8] rounded-2xl flex flex-col items-center justify-between text-center duration-500 hover:-translate-y-4 relative overflow-hidden cursor-pointer">
            <h3 className="uppercase font-druk text-primary-100 lg:text-4xl xl:text-5xl 2xl:text-6xl mt-12">
              Cash
              <br />
              Game
            </h3>
            <a className="underline font-kanit text-white text-lg 2xl:text-2xl mb-8 z-20">
              อ่าน
            </a>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/tournament">
          <div className="bg-[url('/img/landing/techniques-tournament-img.png')] bg-cover aspect-[6/8] rounded-2xl flex flex-col items-center justify-between text-center duration-500 hover:-translate-y-4 relative overflow-hidden cursor-pointer">
            <h3 className="uppercase font-druk text-primary-100 lg:text-5xl 2xl:text-6xl mt-12">
              MTT
              <br />
              <span className="text-lg xl:text-xl 2xl:text-3xl">
                Tournament
              </span>
            </h3>
            <a className="underline font-kanit text-white text-lg 2xl:text-2xl mb-8 z-20">
              อ่าน
            </a>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/101">
          <div className="bg-[url('/img/landing/techniques-101-img.png')] bg-cover aspect-[6/8] rounded-2xl flex flex-col items-center justify-between text-center duration-500 hover:-translate-y-4 relative overflow-hidden cursor-pointer">
            <h3 className="uppercase font-druk text-primary-100 lg:text-2xl xl:text-4xl 2xl:text-5xl mt-12">
              Invader
              <br />
              101
            </h3>
            <a className="underline font-kanit text-white text-lg 2xl:text-2xl mb-8 z-20">
              อ่าน
            </a>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
      </div>

      {/* mobile carousel */}
      <Carousel
        dragThreshold={0.1}
        defaultControlsConfig={{
          nextButtonClassName: 'hidden',
          prevButtonClassName: 'hidden',
          pagingDotsContainerClassName: 'space-x-2',
          pagingDotsStyle: {
            fill: '#FFBF00',
          },
        }}
        autoplay
        autoplayReverse
        autoplayInterval={2000}
        className="block lg:hidden"
      >
        <Link href="/">
          <div className="h-[720px] bg-[url('/img/landing/techniques-newbie-img.png')] bg-cover bg-center cursor-pointer relative flex flex-col justify-between items-center text-center">
            <h3 className="uppercase font-druk text-primary-100 text-5xl md:text-6  xl mt-12">
              Newbie
              <br />
              Tips
            </h3>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-100 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/">
          <div className="h-[720px] bg-[url('/img/landing/techniques-cash-img.png')] bg-cover bg-center cursor-pointer relative flex flex-col justify-between items-center text-center">
            <h3 className="uppercase font-druk text-primary-100 text-5xl md:text-6  xl mt-12">
              Cash
              <br />
              Game
            </h3>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-100 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/">
          <div className="h-[720px] bg-[url('/img/landing/techniques-tournament-img.png')] bg-cover bg-right cursor-pointer relative flex flex-col justify-between items-center text-center">
            <h3 className="uppercase font-druk text-primary-100 text-5xl md:text-6  xl mt-12">
              MTT
              <br />
              Tournament
            </h3>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-100 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/">
          <div className="h-[720px] bg-[url('/img/landing/techniques-101-img.png')] bg-cover bg-center cursor-pointer relative flex flex-col justify-between items-center text-center">
            <h3 className="uppercase font-druk text-primary-100 text-5xl md:text-6  xl mt-12">
              Invader
              <br />
              101
            </h3>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-dark-100 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
      </Carousel>
    </section>
  )
}

export default Techniques
