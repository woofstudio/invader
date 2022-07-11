import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Carousel from 'nuka-carousel'
import React, { useState } from 'react'
import { TbClock } from 'react-icons/tb'
import { urlFor } from '../../sanity'
import { IBlogPreview } from '../../types/interface'

interface Props {
  editorPreviews: IBlogPreview[]
}
export const EditorPick = ({ editorPreviews }: Props) => {
  const [highlight] = useState<IBlogPreview>(editorPreviews[0])
  const router = useRouter()

  return (
    <section
      id="editor pick"
      className="w-full md:section-space-x bg-dark-100 md:space-y-11 md:space-from-nav pb-20 max-width"
    >
      <h1 className="text-primary-200 hidden md:block text-2xl font-bold font-druk">
        {"EDITOR'S PICK"}
      </h1>
      <div className="flex flex-col-reverse xl:space-x-20 md:space-y-8 xl:space-y-0 md:flex-col xl:flex-row">
        <div className="flex-1 px-10 md:px-0">
          <h1 className="text-primary-200 my-5 underline md:hidden block text-lg font-bold font-druk">
            {"EDITOR'S PICK"}
          </h1>
          <div
            className="w-full md:w-[680px] h-60 md:h-[430px] relative"
            onClick={() => {
              router.push(`article/${highlight.slug}`)
            }}
          >
            <div
              className="w-full hidden md:block absolute h-full z-10"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%)',
              }}
            />
            <Image
              src={urlFor(highlight.previewImage).url()}
              alt={highlight.title}
              layout="fill"
            />
            <div className="absolute w-80 hidden md:block p-5 left-0 z-20 bottom-0">
              <p className="text-xl font-semibold">{highlight.title}</p>
              <div className="flex items-center space-x-2">
                <TbClock />
                <p className="text-base font-light">
                  {moment(new Date(highlight.publishedAt)).format(
                    'DD MMMM YYYY',
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="block md:hidden space-y-5 mt-5 mb-8">
            <h4 className="text-xl font-semibold">{highlight.title}</h4>
            <div className="flex gap-2">
              {highlight.categories.map((category) => {
                if (category.title !== 'EDITOR') {
                  return (
                    <p key={category.title} className="tag">
                      {category.title}
                    </p>
                  )
                }
              })}
            </div>

            {/* need description */}
            <p className="text-sm font-light line-clamp-3">
              โป๊กเกอร์นับเป็นกีฬาได้ยังไง?ในเมื่อไม่เห็นมีการออกแรงอะไรเลย
              ดูยังไงก็ไม่เหมือนพวกฟุตบอลหรือบาสเก็ตบอลเลยสักนิด
              บทสรุปของคำถามโลกแตกนี้คืออะไร... ไปอ่านกันต่อเลย
            </p>
          </div>
          <div className="flex cursor-pointer underline justify-end md:hidden">
            <Link href={`/article/${highlight.slug}`}>
              <a>{'READ MORE >'}</a>
            </Link>
          </div>
        </div>
        <div className="flex-1 space-y-6 hidden md:block">
          {editorPreviews.slice(1).map((elem, index) => (
            <div
              className="flex space-x-5"
              key={index}
              onClick={() => {
                router.push(`article/${elem.slug}`)
              }}
            >
              <div className="w-48 h-32 relative rounded-xl overflow-hidden">
                <Image
                  src={urlFor(elem.previewImage).url()}
                  alt={elem.title}
                  layout="fill"
                />
              </div>
              <div className="space-y-2 w-72">
                <p className="text-xl font-semibold line-clamp-3">
                  {elem.title}
                </p>
                <p className="text-sm font-light">
                  {moment(new Date(elem.publishedAt)).format('DD MMMM YYYY')}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="block md:hidden">
          <Carousel>
            {editorPreviews.slice(1).map((elem, index) => (
              <div
                key={index}
                className="relative w-full h-screen"
                onClick={() => {
                  router.push(`article/${elem.slug}`)
                }}
              >
                <div
                  className="w-full absolute h-full z-10"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.74) 100%)',
                  }}
                />
                <Image
                  src={urlFor(elem.previewImage).url()}
                  alt={elem.title}
                  layout="fill"
                />
                <div className="absolute w-80 left-8 px-4 bottom-20 border-l-4 z-20 border-primary-200">
                  <p className="text-base font-druk font-semibold text-primary-200">
                    {elem.title}
                  </p>
                  <p className="text-base italic">
                    {moment(new Date(elem.publishedAt)).format('DD MMMM YYYY')}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
