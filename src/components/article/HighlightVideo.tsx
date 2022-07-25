import Image from 'next/image'
import React from 'react'
import { YOUTUBE_CLIP } from '../../config'

export const HighlightVideo = () => {
  return (
    <section
      id="highlight video"
      className="section-space-x section-space-y flex flex-col justify-center items-center space-y-10 md:space-y-20 sm:h-[85vh] sm:bg-[url('/img/article/youtube.png')] bg-cover bg-no-repeat"
    >
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
          // width={334 * 2}
          // height={216 * 2}
          className="w-[334px] h-[216px] md:w-[668px] md:h-[432px] lg:w-[900px] lg:h-[506px]"
        />
      </div>
    </section>
  )
}
