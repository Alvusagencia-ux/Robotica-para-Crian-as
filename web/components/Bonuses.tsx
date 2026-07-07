import { BONUSES } from '@/lib/config'

export function Bonuses() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900">Bonos incluidos, gratis</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {BONUSES.map((bonus) => (
          <div key={bonus.name} className="rounded-xl bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">{bonus.name}</h3>
            <p className="mt-2 text-slate-600">{bonus.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
