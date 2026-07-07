'use client'

import { useState } from 'react'
import { FAQS } from '@/lib/config'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900">Preguntas frecuentes</h2>
      <div className="mt-10 space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={faq.question} className="rounded-xl border border-slate-200 p-5">
              <button
                type="button"
                className="w-full text-left text-lg font-medium text-slate-900"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                {faq.question}
              </button>
              {isOpen && <p className="mt-3 text-slate-600">{faq.answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
