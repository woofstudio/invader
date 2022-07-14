import { NextPage } from 'next'
import Layout from '../../components/register'
import Step from '../../components/register/Step'

import Step1 from '../../../public/img/register/ggpoker-step-1.png'
import Step2 from '../../../public/img/register/ggpoker-step-2.png'
import Step3 from '../../../public/img/register/ggpoker-step-3.png'

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
]

const GGPOKER: NextPage = () => {
  return (
    <Layout>
      {steps.map((data, idx) => (
        <Step text={data.text} key={idx} image={data.image} idx={idx} />
      ))}
    </Layout>
  )
}

export default GGPOKER
