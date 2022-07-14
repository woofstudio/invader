import Link from 'next/link'
import { useRouter } from 'next/router'

const RegistersData = [
  {
    title: (
      <>
        <span className="text-ggpoker">GG</span>POKER
      </>
    ),
    description: (
      <>
        แอพโป๊กเกอร์เอาใจสายทัวร์
        <br />
        Tournament จัดเต็ม ทั้งวัน ทั้งคืน
      </>
    ),
    path: '/register/GGPOKER',
    bgCoverCSS: "bg-[url('/img/register/desktop_register-banner_GG.jpg')]",
    iconCSS: '',
    downloadLink: '',
    color: '#EA232B',
  },
  {
    title: (
      <>
        <span className="text-pppoker">PP</span>POKER
      </>
    ),
    description: (
      <>
        แอพสำหรับคนรักโป๊กเกอร์
        <br />
        จากคนรักโป๊กเกอร์ตัวจริง
      </>
    ),
    path: '/register/PPPOKER',
    bgCoverCSS: "bg-[url('/img/register/desktop_register-banner_PP.jpg')]",
    iconCSS: '',
    downloadLink: '',
    color: '#2AD16D',
  },
  {
    title: (
      <>
        <span className="text-upoker">U</span>POKER
      </>
    ),
    description: (
      <>
        โป๊กเกอร์ออนไลน์เจ้าแรกในไทย โต๊ะเยอะ Range กว้าง
        <br />
        เล่นหนักเล่นเบา แอพเดียวมีครบ
      </>
    ),
    path: '/register/UPOKER',
    bgCoverCSS: "bg-[url('/img/register/desktop_register-banner_U.jpg')]",
    iconCSS: '',
    downloadLink: '',
    color: '#FFB339',
  },
  {
    title: (
      <>
        <span className="text-upoker">POKER</span>
        <span className="text-ggpoker">B</span>ROS
      </>
    ),
    description: (
      <>
        เล่นโป็กเกอร์ออนไลน์กับเพื่อนได้ทุกที่ทุกเวลา
        <br />
        ด้วยแอพที่ออกแบบมาให้สำหรับมือใหม่ไปจนถึงมือโปร
      </>
    ),
    path: '/register/POKERBROS',
    bgCoverCSS: "bg-[url('/img/register/desktop_register-banner_BROS.jpg')]",
    iconCSS: '',
    downloadLink: '',
    color: '#5D3B8C',
  },
]

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()

  return (
    <div className="min-h-screen mt-40 overflow-hidden rounded-xl bg-dark-200 mx-8 sm:mx-10 md:mx-14 lg:mx-20 mb-20">
      {/* heading & background */}
      <div
        className={`w-full h-[55vh] bg-cover bg-right bg-no-repeat px-20 2xl:px-36 pt-40 ${
          router.pathname === RegistersData[0].path &&
          RegistersData[0].bgCoverCSS
        } ${
          router.pathname === RegistersData[1].path &&
          RegistersData[1].bgCoverCSS
        } ${
          router.pathname === RegistersData[2].path &&
          RegistersData[2].bgCoverCSS
        } ${
          router.pathname === RegistersData[3].path &&
          RegistersData[3].bgCoverCSS
        }`}
      >
        <h1 className="uppercase font-druk font-bold text-7xl text-white">
          {RegistersData.map((data) => {
            if (router.pathname === data.path) return data.title
          })}
        </h1>
        <p className="font-kanit font-light text-xl text-opacity-90 text-white mt-8 mb-12">
          {RegistersData.map((data) => {
            if (router.pathname === data.path) return data.description
          })}
        </p>
        {RegistersData.map((data, idx) => {
          if (router.pathname === data.path)
            return (
              <a
                key={idx}
                href={data.downloadLink}
                className={`rounded-full px-14 py-4 uppercase text-white`}
                style={{
                  backgroundColor: data.color,
                }}
              >
                Download
              </a>
            )
        })}
      </div>

      {/* body */}
      <div className="flex w-full pt-12">
        <div className="w-96 flex flex-col px-10 select-none space-y-8">
          <MenuLink href="/register/GGPOKER" title="GGPOKER" />
          <MenuLink href="/register/PPPOKER" title="PPPOKER" />
          <MenuLink href="/register/UPOKER" title="UPOKER" />
          <MenuLink href="/register/POKERBROS" title="POKERBROS" />
        </div>
        <div className="w-full border-l-[1px] border-white border-opacity-20 min-h-screen">
          <div className="flex justify-center w-full">
            <h2 className="text-white text-2xl font-druk font-medium">
              Download & Play In Minutes
            </h2>
          </div>
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-2 2xl:grid-cols-3 gap-10 p-16 2xl:p-20">
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
          active ? 'bg-dark-500 text-white' : 'bg-dark-400 text-white'
        } rounded-md uppercase font-kanit font-normal text-lg cursor-pointer`}
      >
        {title}
      </div>
    </Link>
  )
}

export default Layout
