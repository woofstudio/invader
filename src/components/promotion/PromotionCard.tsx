import React from 'react'
import Image from 'next/image'
import { urlFor } from '../../sanity'
import { IMonth, IPromotion, mapMonth } from '../../types/interface'

interface Props {
  promotion: IPromotion
  month: IMonth
}
const PromotionCard: React.FC<Props> = ({ promotion, month }: Props) => {
  const date = new Date()
  date.setMonth(month)
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  return (
    <div className="mx-auto bg-dark-400 rounded-lg font-kanit my-6">
      <div>
        <Image
          className="rounded-md"
          src={urlFor(promotion.promotionImage).url()}
          alt={promotion.title}
          height={400}
          width={400}
        />
      </div>
      <div className="text-center pt-5">
        <h2 className="text-2xl md:py-3 md:text-text-100/50 md:text-base">
          {promotion.title}
        </h2>
        <h3 className="hidden md:block text-2xl mx-auto w-56 h-16">
          PRIZE: {promotion.prize}
        </h3>
        <h4 className="text-text-100/50 pt-4 pb-8">
          {firstDay.getDate() +
            ' - ' +
            lastDay.getDate() +
            ' ' +
            mapMonth[month] +
            ' ' +
            firstDay.getFullYear()}
        </h4>
      </div>
    </div>
  )
}

export default PromotionCard
