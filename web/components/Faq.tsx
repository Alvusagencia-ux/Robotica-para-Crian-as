'use client'

import { useState } from 'react'
import { FAQS } from '@/lib/config'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#F6F1E7] px-5 py-16 text-[#17342F]">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center text-4xl font-black leading-tight">
          Tal vez estás pensando...
        </h2>
        <div className="mt-10 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-[1.25rem] border border-[#1F6F5C]/16 bg-white/72 p-5"
              >
                <button
                  type="button"
                  className="w-full text-left text-lg font-black text-[#063B35]"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                </button>
                {isOpen && <p className="mt-3 leading-7 text-[#405650]">{faq.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
