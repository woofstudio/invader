import Link from 'next/link'
import React from 'react'

export const LatestArticles = () => {
  return (
    <section
      id="latest articles"
      className="bg-dark-400 block md:hidden space-y-10 pt-6 pb-16 px-10"
    >
      <h2 className="font-druk w-fit border-b-2 border-primary-200">
        LASTEST ARTICLES
      </h2>
      <div className="space-y-8">
        {[
          'เจอผู้เล่นดุดันมากๆรับมือยังไงดีนะ!?',
          'ความลับที่ไม่มีใครเคยบอก!!! ไพ่ 1 สำรับ แต่ละใบมีความหมายยังไง!?',
          'กวาง ABnormal แข่งโป๊กเกอร์ที่เวียดนาม จบอันดับ 3 คว้าเงินกลับบ้าน 58 ล้าน!! (ดอง)',
          'สุดยอดคนบันเทิง ป๋าเต็ดแข่งโป๊กเกอร์ที่เวียดนาม คว้าเงินกลับบ้าน 56 ล้าน!! (ดอง)',
        ].map((elem) => (
          <div key={elem} className="space-y-3">
            <div className="flex space-x-4 items-center">
              <div className="w-2 h-2 rounded-full bg-primary-200" />
              <p>{elem}</p>
            </div>
            <hr className="border-text-100" />
          </div>
        ))}
      </div>
      <div className="flex cursor-pointer mb-10 underline justify-end md:hidden">
        <Link href="/article">
          <a>{'READ MORE >'}</a>
        </Link>
      </div>
    </section>
  )
}
