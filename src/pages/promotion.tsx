import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import { sanityClient } from '../sanity'
import { IMonth, IMonthlyPromotion } from '../types/interface'

const mapMonth: { [key: number]: string } = {
  0: 'มกราคม',
  1: 'กุมภาพันธ์',
  2: 'มีนาคม',
  3: 'เมษายน',
  4: 'พฤษภาคม',
  5: 'มิถุนายน',
  6: 'กรกฎาคม',
  7: 'สิงหาคม',
  8: 'กันยายน',
  9: 'ตุลาคม',
  10: 'พฤศจิกายน',
  11: 'ธันวาคม',
}

interface Props {
  monthlyPromotion: IMonthlyPromotion
  preMonthlyPromotions: { month: IMonth; year: number }[]
}

const Promotion: NextPage<Props> = ({
  monthlyPromotion,
  preMonthlyPromotions,
}: Props) => {
  const [month, setMonth] = useState(monthlyPromotion.month)
  const [preMonthPrmotion, setPreMonthPrmotion] = useState([
    preMonthlyPromotions.map((preMonthPrmotion) => {
      return mapMonth[preMonthPrmotion.month]
    }),
  ])
  const [nextMonthPrmotion, setNextMonthPrmotion] = useState([
    mapMonth[month < 11 ? month + 1 : 1] + ' (soon)',
  ])

  return (
    <div className="text-primary-300">
      <div>MainImage</div>
      <div className="flex justify-between">
        <div>
          <button>Last Month</button>
        </div>
        <div>
          <h1>{mapMonth[month]}</h1>
        </div>
        <button>Next Month</button>
      </div>
      <div>Promotion</div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
  const queryMonthlyPromotion = `*[_type == "monthlyPromotion" && ${month} == month && ${year} == year][0] {
    month,
    "monthlyImage":monthlyImage.asset._ref,
    promotions[] -> {
      title,
      prize,
      "promotionImage":promotionImage.asset._ref
    } 
  }`

  const monthlyPromotion = await sanityClient.fetch(queryMonthlyPromotion)
  // console.log(monthlyPromotion)
  const queryPreMothlyPrmotion = `*[_type == "monthlyPromotion" && !(${month} == month && ${year} == year)] | order(month desc) | order(year desc) {
    month,
    year
  }`

  const preMonthlyPromotions = await sanityClient.fetch(queryPreMothlyPrmotion)
  // console.log(preMonthlyPromotions)
  return {
    props: {
      monthlyPromotion,
      preMonthlyPromotions,
    },
    revalidate: 60,
  }
}

export default Promotion
