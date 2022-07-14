import { NextPage } from 'next'
import Layout from '../../components/register'
import Step from '../../components/register/Step'

import Step1 from '../../../public/img/register/pppoker-step-1.png'
import Step2 from '../../../public/img/register/pppoker-step-2.png'
import Step3 from '../../../public/img/register/pppoker-step-3.png'
import Step4 from '../../../public/img/register/pppoker-step-4.png'
import Step5 from '../../../public/img/register/pppoker-step-5.png'
import Step6 from '../../../public/img/register/pppoker-step-6.png'

const steps = [
  {
    text: (
      <>
        Download App Pokerbros
        <br />
        <span className="opacity-50">
          (ได้ทั้ง iOS / Android /<br />
          Windows และ Mac)
        </span>
      </>
    ),
    image: Step1,
  },
  {
    text: <>สมัครสมาชิก หรือ Log-in ผ่าน Facebook</>,
    image: Step2,
  },
  {
    text: <>เลือก Join a Club</>,
    image: Step3,
  },
  {
    text: (
      <>
        กรอกรหัสห้อง
        <br />
        Pokerinvader Club ID: <span className="opacity-50">15999</span>
        <br />
        Refer ID: <span className="opacity-50">3404577</span>
        <br />
      </>
    ),
    image: Step4,
  },
  {
    text: (
      <>
        เลือก Join
        <br />
        เพื่อส่งคำขอเข้าร่วมคลับ
      </>
    ),
    image: Step5,
  },
  {
    text: (
      <>
        Add Friend
        <br />
        <span className="opacity-50">@Pokerinvader</span> และแจ้ง E-mail
        หรือเบอร์โทรศัพท์เพื่อการยืนยัน
      </>
    ),
    image: Step6,
  },
]

const PPPOKER: NextPage = () => {
  return (
    <Layout>
      {steps.map((data, idx) => (
        <Step text={data.text} key={idx} image={data.image} idx={idx} />
      ))}
    </Layout>
  )
}

export default PPPOKER
