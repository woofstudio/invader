import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import PromotionCard from '../components/promotion/PromotionCard'
import { sanityClient, urlFor } from '../sanity'
import {
  IMonth,
  IMonthlyPromotion,
  IPromotion,
  mapMonth,
} from '../types/interface'
import Image from 'next/image'
import Header from '../components/layout/Header'
import Hr from '../components/landing/Hr'

const queryPromotion = async (month: number, year: number) => {
  const queryMonthlyPromotion = `*[_type == "monthlyPromotion" && ${month} == month && ${year} == year][0] {
    month,
    year,
    "monthlyImage":monthlyImage.asset._ref,
    promotions[] -> {
      title,
      prize,
      "promotionImage":promotionImage.asset._ref
      } 
    }`

  const monthlyPromotion: IMonthlyPromotion = await sanityClient.fetch(
    queryMonthlyPromotion,
  )
  // console.log(monthlyPromotion)
  const queryPreMothlyPrmotion = `*[_type == "monthlyPromotion" && !(${month} == month && ${year} == year)] | order(month desc) | order(year desc) {
    month,
    year
    }`

  const preMonthlyPromotions = await sanityClient.fetch(queryPreMothlyPrmotion)

  return { monthlyPromotion, preMonthlyPromotions }
}

interface Props {
  monthlyPromotion: IMonthlyPromotion
  preMonthlyPromotions: { month: IMonth; year: number }[]
}

const Promotion: NextPage<Props> = ({
  monthlyPromotion,
  preMonthlyPromotions,
}: Props) => {
  const [monthPromotion, setMonthPromtion] = useState(monthlyPromotion)
  const [isPreMonth, setIsPreMonth] = useState(false)
  const [iskNextMonth, setIsNextMonth] = useState(false)
  const [preMonthPrmotion, setPreMonthPrmotion] = useState(preMonthlyPromotions)
  const [nextMonthPrmotion, setNextMonthPrmotion] = useState([
    {
      month: monthPromotion.month < 11 ? monthPromotion.month + 1 : 1,
      year: monthPromotion.year,
    },
  ])

  const handleChangeMonth = async ({
    month,
    year,
  }: {
    month: number
    year: number
  }) => {
    const { monthlyPromotion, preMonthlyPromotions } = await queryPromotion(
      month,
      year,
    )

    setMonthPromtion(monthlyPromotion)
    setPreMonthPrmotion(preMonthlyPromotions)

    const date = new Date()

    const nextMonths = []
    if (monthlyPromotion.year !== date.getFullYear()) {
      for (let index = monthlyPromotion.month; index <= 11; index++) {
        nextMonths.push({
          month: index + 1,
          year: monthlyPromotion.year,
        })
      }
    } else {
      for (
        let index = monthlyPromotion.month;
        index <= date.getMonth();
        index++
      ) {
        nextMonths.push({
          month: index + 1,
          year: date.getFullYear(),
        })
      }
    }
    setNextMonthPrmotion(nextMonths)
  }

  return (
    <div className="text-text-100 font-druk">
      <div
        className={`z-50 fixed top-0 w-full h-screen bg-text-100 ${
          isPreMonth ? 'block' : 'hidden'
        } transition-all duration-300 ease-in-out text-black/75 flex flex-col justify-center font-kanit`}
      >
        <button onClick={() => setIsPreMonth(false)}>X</button>
        {preMonthPrmotion.map((preMonth, index) => {
          return (
            <button
              key={index}
              className="py-4 px-4 cursor-pointer text-black/75"
              onClick={() => {
                handleChangeMonth(preMonth)
                setIsPreMonth(false)
              }}
            >
              {mapMonth[preMonth.month]}
            </button>
          )
        })}
      </div>
      <div
        className={`z-50 fixed top-0 w-full h-screen bg-text-100 ${
          iskNextMonth ? 'block' : 'hidden'
        } transition-all duration-300 ease-in-out text-black/75 flex flex-col justify-center font-kanit`}
      >
        <button onClick={() => setIsNextMonth(false)}>X</button>
        {nextMonthPrmotion.map((nextMonth, index) => {
          return (
            <button
              key={index}
              className="py-4 px-4 cursor-pointer text-black/75"
              onClick={() => {
                handleChangeMonth(nextMonth)
                setIsNextMonth(false)
              }}
            >
              {index === nextMonthPrmotion.length - 1
                ? mapMonth[nextMonth.month] + ' (soon)'
                : mapMonth[nextMonth.month]}
            </button>
          )
        })}
      </div>
      <Header
        imageURL={urlFor(monthlyPromotion.monthlyImage).url()}
        title={mapMonth[monthlyPromotion.month]}
      />
      <div className="flex justify-between items-center mx-8 sm:mx-10 md:mx-14 lg:mx-20 xl:mx-24 2xl:mx-32">
        <div className="group relative text-sm hidden md:block">
          <button className="py-4 px-6 text-text-100/50 rounded inline-flex items-center group">
            <span className="">{'< Last Month'}</span>
          </button>

          {/* menu list */}
          <ul
            className={`z-10 rounded absolute hidden group-hover:block text-gray-700 pt-1 w-56`}
          >
            {preMonthPrmotion.map((preMonth, index) => {
              return (
                <li
                  key={index}
                  className="bg-gray-200 hover:text-dark-100 py-4 px-4 cursor-pointer text-dark-100/40 font-kanit"
                >
                  <button
                    onClick={() => {
                      handleChangeMonth(preMonth)
                    }}
                  >
                    {mapMonth[preMonth.month]}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="group relative text-sm md:hidden">
          <button
            className="py-4 px-6 text-text-100/50 rounded inline-flex items-center group"
            onClick={() => setIsPreMonth(true)}
          >
            <span className="text-3xl">{'<'}</span>
          </button>
        </div>

        <div>
          <h1 className="text-4xl">{mapMonth[monthPromotion.month]}</h1>
        </div>

        <div className="group relative text-sm hidden md:block">
          <button className="py-4 px-6 text-text-100/50 rounded inline-flex items-center group">
            <span className="">{'Next Month >'}</span>
          </button>

          {/* menu list */}
          <ul
            className={`z-10 rounded absolute hidden group-hover:block text-gray-700 pt-1 w-56`}
          >
            {nextMonthPrmotion.map((nextMonth, index) => {
              return (
                <li
                  key={index}
                  className="bg-gray-200 hover:text-dark-100 py-4 px-4 cursor-pointer text-dark-100/40 font-kanit"
                >
                  <button
                    onClick={() => {
                      handleChangeMonth(nextMonth)
                    }}
                  >
                    {index === nextMonthPrmotion.length - 1
                      ? mapMonth[nextMonth.month] + ' (soon)'
                      : mapMonth[nextMonth.month]}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="group relative text-sm md:hidden">
          <button
            className="py-4 px-6 text-text-100/50 rounded inline-flex items-center group"
            onClick={() => setIsNextMonth(true)}
          >
            <span className="text-3xl">{'>'}</span>
          </button>
        </div>
      </div>

      <Hr />
      <div className="grid justify-center my-24 grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mx-8 sm:mx-10 md:mx-14 lg:mx-20 xl:mx-24 2xl:mx-32">
        {monthPromotion.promotions &&
          monthPromotion.promotions.map((promotion: IPromotion) => (
            <PromotionCard
              key={promotion}
              promotion={promotion}
              month={monthPromotion.month}
            />
          ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()
  const { monthlyPromotion, preMonthlyPromotions } = await queryPromotion(
    month,
    year,
  )

  return {
    props: {
      monthlyPromotion,
      preMonthlyPromotions,
    },
    revalidate: 60,
  }
}

export default Promotion
