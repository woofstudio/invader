import Link from 'next/link'
import { useRouter } from 'next/router'

const TechniquesData = [
  {
    path: '/newbie',
    bgCoverCSS: "bg-[url('/img/techniques/banner-newbie.jpg')]",
    title: (
      <>
        Newbie
        <br />
        Tips
      </>
    ),
    description: (
      <>
        สิ่งที่ต้องเรียนรู้ก่อนเล่นโป๊กเกอร์
        <br />
        ครบจบในที่เดียว ตั้งแต่ความรู้พื้นฐานไปจนถึงกฏกติกาในการเล่น
      </>
    ),
    subtitle: 'เหมาะสำหรับผู้เล่นมือใหม่ที่อยากเข้าสู่วงการโป๊กเกอร์!',
  },
  {
    path: '/cash-game',
    bgCoverCSS: "bg-[url('/img/techniques/banner-cashgame.jpg')]",
    title: (
      <>
        Cash
        <br />
        Game
      </>
    ),
    description: (
      <>
        เทคนิคการเล่น CASH GAME
        <br />
        ครบจบในที่เดียว สำหรับผู้เล่นสายแคชเกมโดยเฉพาะ
      </>
    ),
    subtitle: 'เพื่อการทำกำไรอย่างยั่งยืน!',
  },
  {
    path: '/tournament',
    bgCoverCSS: "bg-[url('/img/techniques/banner-tournament.jpg')]",
    title: (
      <>
        MTT
        <br />
        Tournament
      </>
    ),
    description: (
      <>
        เทคนิคการเล่น TOURNAMENT
        <br />
        ครบจบในที่เดียว สำหรับผู้เล่นสายทัวร์นาเมนต์โดยเฉพาะ
      </>
    ),
    subtitle: 'เพื่อผลักดันผู้เล่นชาวไทยสู่ระดับสากล!',
  },
  {
    path: '/101',
    bgCoverCSS: "bg-[url('/img/techniques/banner-tournament.jpg')]",
    title: <>Invader 101</>,
    description: (
      <>
        INVADER101 : ทริคทำเงินที่ผู้เล่นส่วนใหญ่ไม่รู้
        <br />
        รวบรวมทุกเคล็ดลับทำเงินเพื่อเพื่อน ๆ ชาว INVADER โดยเฉพาะ
      </>
    ),
    subtitle: 'โคตรเสียดายแทนคนที่ไม่ได้อ่าน!',
  },
]

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()
  return (
    <div className="min-h-screen relative mt-40 overflow-hidden rounded-xl bg-dark-500 mx-8 sm:mx-10 md:mx-14 lg:mx-20 mb-20">
      {/* heading & background */}
      <div
        className={`w-full h-[70vh] bg-cover bg-no-repeat px-20 2xl:px-36 pt-40 ${
          router.pathname === TechniquesData[0].path &&
          TechniquesData[0].bgCoverCSS
        } ${
          router.pathname === '/cash-game' &&
          "bg-[url('/img/techniques/banner-cashgame.jpg')]"
        } ${
          router.pathname === '/tournament' &&
          "bg-[url('/img/techniques/banner-tournament.jpg')]"
        } ${
          router.pathname === '/101' &&
          "bg-[url('/img/techniques/banner-101.jpg')]"
        }`}
      >
        <h1 className="uppercase font-druk font-bold text-7xl text-primary-100">
          {TechniquesData.map((data) => {
            if (router.pathname === data.path) return data.title
          })}
        </h1>
        <p className="font-kanit font-light text-xl text-opacity-90 text-white mt-8">
          {TechniquesData.map((data) => {
            if (router.pathname === data.path) return data.description
          })}
        </p>
      </div>
      <div className="absolute left-0 right-0 top-[58vh] h-[12vh] bg-gradient-to-t from-dark-500 to-[rgba(62, 62, 62, 0)]"></div>
      <div className="flex w-full">
        <div className="w-96 flex flex-col px-10 select-none space-y-8">
          <MenuLink href="/newbie" title="Newbie Tips" />
          <MenuLink href="/cash-game" title="Cash Game" />
          <MenuLink href="/tournament" title="Tournament" />
          <MenuLink href="/101" title="Invader : 101" />
        </div>
        <div className="w-full border-l-[1px] border-white border-opacity-20 min-h-screen">
          <div className="flex justify-center w-full">
            <h2 className="text-white text-2xl font-kanit font-medium">
              {TechniquesData.map((data) => {
                if (router.pathname === data.path) return data.subtitle
              })}
            </h2>
          </div>
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-10 p-16 2xl:p-20">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface MenuLinkProps {
  href: string
  title: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ href, title }) => {
  const router = useRouter()
  let active
  active = router.pathname === href
  return (
    <Link href={href} scroll={false}>
      <div
        className={`w-full h-[5.5rem] grid place-content-center ${
          active ? 'bg-primary-100 text-dark-100' : 'bg-dark-400 text-white'
        } rounded-md uppercase font-kanit font-medium text-lg cursor-pointer`}
      >
        {title}
      </div>
    </Link>
  )
}

export default Layout
