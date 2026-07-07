import { PRODUCT_PRICE, TOTAL_BONUS_VALUE } from '@/lib/config'

export function ValueStack() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-slate-900">Lo que llevas hoy</h2>
      <div className="mt-8 rounded-2xl border-2 border-emerald-600 p-8">
        <p className="text-lg text-slate-700">
          Pagas solo el producto principal —{' '}
          <span className="font-bold text-emerald-700">US${PRODUCT_PRICE.toFixed(2)}</span> — y
          te llevas{' '}
          <span className="font-bold text-emerald-700">US${TOTAL_BONUS_VALUE.toFixed(2)}</span>{' '}
          en bonos, gratis.
        </p>
      </div>
    </section>
  )
}
