import React from 'react'
import Image from 'next/image'
import { urlFor } from '../../sanity'
import { IPromotion } from '../../types/interface'

interface Props {
  promotion: IPromotion
}
const PromotionCard: React.FC<Props> = ({ promotion }: Props) => {
  return (
    <div>
      <Image
        src={urlFor(promotion.promotionImage).url()}
        alt={promotion.title}
        height={200}
        width={200}
      />
      <h2></h2>
    </div>
  )
}

export default PromotionCard
