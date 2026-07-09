import Image from 'next/image'
import { CtaButton } from './CtaButton'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center">
      <Image
        src="/images/publico-alvo-2.png"
        alt="Un niño sostiene con orgullo el circuito que acaba de crear"
        width={1024}
        height={1536}
        className="mx-auto h-64 w-auto rounded-2xl object-cover"
      />
      <span className="mt-8 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
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
