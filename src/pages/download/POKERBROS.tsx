import { NextPage } from 'next'
import Layout from '../../components/register'
import Step from '../../components/register/Step'

import Step1 from '../../../public/img/register/pokerbros-step-1.png'
import Step2 from '../../../public/img/register/pokerbros-step-2.png'
import Step3 from '../../../public/img/register/pokerbros-step-3.png'
import Step4 from '../../../public/img/register/pokerbros-step-4.png'
import Step5 from '../../../public/img/register/pokerbros-step-5.png'
import Step6 from '../../../public/img/register/pokerbros-step-6.png'
import { LINE_AD, Meta, metaConfig } from '../../config'

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
        BigBang ID: <span className="opacity-50">999999</span>
        <br />
        Refer ID: <span className="opacity-50">73079</span>
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

const POKERBROS: NextPage = () => {
  return (
    <Layout>
      <Meta
        title={metaConfig.download.pokerbros.title}
        description={metaConfig.download.pokerbros.description}
      />
      {steps.map((data, idx) => (
        <Step
          text={data.text}
          key={idx}
          image={data.image}
          idx={idx}
          link={idx == 0 ? 'https://pokerbros.net/' : LINE_AD}
        />
      ))}
    </Layout>
  )
}

export default POKERBROS
