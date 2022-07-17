import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { IBlogPreview } from '../../types/interface'
import { useRouter } from 'next/router'
import { urlFor } from '../../sanity'
import moment from 'moment'

const TABS = ['สาระ Poker', 'จิตวิทยา', 'NEWS', 'ประวัติ Pro Players']

interface Props {
  categoryPreviews: IBlogPreview[]
  queryCategory: (category: string) => Promise<IBlogPreview[]>
}
export const Catagories = ({ categoryPreviews, queryCategory }: Props) => {
  const [catagory, setcatagory] = useState(0)
  const [categoryCards, setCategoryCards] =
    useState<IBlogPreview[]>(categoryPreviews)
  const router = useRouter()

  return (
    <section
      id="catogories"
      className="bg-dark-300 section-space-x section-space-y"
    >
      <div className="max-width space-y-16">
        <div className="flex justify-between items-center">
          <h2 className="sm:text-primary-200 sm:text-2xl sm:border-0 w-fit border-b-2 border-primary-200 font-druk font-bold">
            CATEGORIES
          </h2>
          <Link href="/">
            <a className="hidden sm:block">view all</a>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0">
          <div className="flex space-x-8 overflow-x-auto pb-10 sm:pr-10 sm:flex-col sm:items-start sm:space-x-0">
            {TABS.map((elem, index) => (
              <div
                key={elem}
                className={`text-xs text-center px-8 py-3 border-2 cursor-pointer sm:border-0 sm:text-lg ${
                  catagory === index &&
                  'text-black bg-primary-200 sm:text-primary-200 sm:bg-transparent border-0'
                }`}
                onClick={async () => {
                  setcatagory(index)
                  const response = await queryCategory(elem)
                  setCategoryCards(response)
                }}
              >
                {elem}
              </div>
            ))}
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryCards.map((elem, index) => (
              <div
                key={index}
                className="space-y-2 hover:cursor-pointer"
                onClick={() => {
                  router.push(`article/${elem.slug}`)
                }}
              >
                <div className="w-full aspect-video relative rounded-xl overflow-hidden">
                  <Image
                    src={urlFor(elem.previewImage).url()}
                    alt={elem.title}
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                  />
                </div>
                <div className="space-y-2 w-full">
                  <p className="text-xl font-semibold line-clamp-2">
                    {elem.title}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs sm:text-sm font-light">
                      {moment(new Date(elem.publishedAt)).format(
                        'DD MMMM YYYY',
                      )}
                    </p>
                    <div className="flex gap-2">
                      {elem.categories.map((category) => {
                        if (category.title !== 'EDITOR') {
                          return <p className="tag">{category.title}</p>
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
