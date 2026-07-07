import { MODULES } from '@/lib/config'

export function Method() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900">El Método</h2>
      <ol className="mt-10 space-y-6">
        {MODULES.map((mod, index) => (
          <li key={mod.name} className="flex gap-4 rounded-xl border border-slate-200 p-6">
            <span className="text-2xl font-bold text-emerald-600">{index + 1}</span>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{mod.name}</h3>
              <p className="mt-1 text-slate-600">{mod.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
