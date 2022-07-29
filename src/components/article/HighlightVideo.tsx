import Image from 'next/image'
import React from 'react'
import { YOUTUBE_CLIP } from '../../config'

import BGImage from '../../../public/img/article/youtube.png'

export const HighlightVideo: React.FC = () => {
  return (
    <section
      id="highlight video"
      className="relative section-space-x section-space-y flex flex-col justify-center items-center sm:h-[85vh]"
    >
      <div className="z-50 space-y-10 md:space-y-20 flex flex-col justify-center items-center">
        <h3 className="text-center font-bold font-druk text-3xl sm:text-primary-200">
          HIGHLIGHT VIDEOS
        </h3>
        <div className="relative">
          <iframe
            src={YOUTUBE_CLIP}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className="w-[334px] h-[216px] md:w-[668px] md:h-[432px] lg:w-[900px] lg:h-[506px]"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 hidden sm:inline">
        <Image
          src={BGImage}
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
      </div>
    </section>
  )
}
