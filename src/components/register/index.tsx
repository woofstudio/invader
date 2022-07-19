import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

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
    path: '/download/GGPOKER',
    bgCoverCSS: "xl:bg-[url('/img/register/desktop_register-banner_GG.jpg')]",
    bgMobileCoverCSS: "bg-[url('/img/register/mobile_register-banner_GG.jpg')]",
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
    path: '/download/PPPOKER',
    bgCoverCSS: "xl:bg-[url('/img/register/desktop_register-banner_PP.jpg')]",
    bgMobileCoverCSS: "bg-[url('/img/register/mobile_register-banner_PP.jpg')]",
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
    path: '/download/UPOKER',
    bgCoverCSS: "xl:bg-[url('/img/register/desktop_register-banner_U.jpg')]",
    bgMobileCoverCSS: "bg-[url('/img/register/mobile_register-banner_U.jpg')]",
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
    path: '/download/POKERBROS',
    bgCoverCSS: "xl:bg-[url('/img/register/desktop_register-banner_BROS.jpg')]",
    bgMobileCoverCSS:
      "bg-[url('/img/register/mobile_register-banner_BROS.jpg')]",
    iconCSS: '',
    downloadLink: '',
    color: '#5D3B8C',
  },
]

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()

  return (
    <div className="min-h-screen lg:mt-40 overflow-hidden lg:rounded-xl bg-dark-100 lg:bg-dark-200 lg:mx-20 mb-20">
      {/* heading & background */}
      <div
        className={`w-full h-[85vh] xl:h-[55vh] bg-cover bg-bottom lg:bg-right bg-no-repeat px-10 lg:px-20 2xl:px-36 pt-40 ${
          router.pathname === RegistersData[0].path &&
          RegistersData[0].bgCoverCSS + ' ' + RegistersData[0].bgMobileCoverCSS
        } ${
          router.pathname === RegistersData[1].path &&
          RegistersData[1].bgCoverCSS + ' ' + RegistersData[1].bgMobileCoverCSS
        } ${
          router.pathname === RegistersData[2].path &&
          RegistersData[2].bgCoverCSS + ' ' + RegistersData[2].bgMobileCoverCSS
        } ${
          router.pathname === RegistersData[3].path &&
          RegistersData[3].bgCoverCSS + ' ' + RegistersData[3].bgMobileCoverCSS
        }`}
      >
        <h1 className="uppercase font-druk font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
          {RegistersData.map((data) => {
            if (router.pathname === data.path) return data.title
          })}
        </h1>
        <p className="font-kanit font-light text-lg lg:text-xl text-opacity-90 text-white mt-8 mb-12">
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
                className={`hidden lg:inline rounded-full px-14 py-4 uppercase text-white`}
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
        <div className="w-96 hidden lg:flex flex-col px-10 select-none space-y-8">
          <MenuLink
            href="/download/GGPOKER"
            title="GGPOKER"
            imageLink="/img/register/ggpoker-icon.png"
            activeImageLink="/img/register/ggpoker-icon-active.png"
          />
          <MenuLink
            href="/download/PPPOKER"
            title="PPPOKER"
            imageLink="/img/register/pppoker-icon.png"
            activeImageLink="/img/register/pppoker-icon-active.png"
          />
          <MenuLink
            href="/download/UPOKER"
            title="UPOKER"
            imageLink="/img/register/upoker-icon.png"
            activeImageLink="/img/register/upoker-icon-active.png"
          />
          <MenuLink
            href="/download/POKERBROS"
            title="POKERBROS"
            imageLink="/img/register/pokerbros-icon.png"
            activeImageLink="/img/register/pokerbros-icon-active.png"
          />
        </div>
        <div className="w-full border-l-[1px] border-white border-opacity-20 min-h-screen">
          <div className="flex flex-col items-center space-y-10 justify-center w-full text-center px-5">
            {RegistersData.map((data, idx) => {
              if (router.pathname === data.path)
                return (
                  <a
                    key={idx}
                    href={data.downloadLink}
                    className={`lg:hidden rounded-full px-14 py-4 uppercase text-white`}
                    style={{
                      backgroundColor: data.color,
                    }}
                  >
                    Download
                  </a>
                )
            })}
            <h2 className="text-white text-lg lg:text-2xl font-druk font-medium">
              Download & Play In Minutes
            </h2>
          </div>
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 p-16 2xl:p-20">
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
  imageLink: string
  activeImageLink: string
}

const MenuLink: React.FC<MenuLinkProps> = ({
  href,
  title,
  imageLink,
  activeImageLink,
}) => {
  const router = useRouter()
  let active
  active = router.pathname === href
  return (
    <Link href={href} scroll={false}>
      <div
        className={`w-full h-[5.5rem] relative rounded-md cursor-pointer hover:opacity-80`}
      >
        <Image
          src={active ? activeImageLink : imageLink}
          alt={title}
          layout="fill"
        />
      </div>
    </Link>
  )
}

export default Layout
