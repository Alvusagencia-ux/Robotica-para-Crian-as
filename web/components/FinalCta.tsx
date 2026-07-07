import { CtaButton } from './CtaButton'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center">
      <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
        Precio de Lanzamiento
      </span>
      <p className="mt-6 text-xl text-slate-800">
        Este es el precio de lanzamiento. Cuando cerremos esta fase, el precio sube.
      </p>
      <div className="mt-8">
        <CtaButton label="Quiero el Método ahora →" />
      </div>
    </section>
  )
}
