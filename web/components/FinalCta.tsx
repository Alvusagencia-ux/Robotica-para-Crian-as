import Image from 'next/image'
import { CtaButton } from './CtaButton'
import { BONUSES, MODULES } from '@/lib/config'

export function FinalCta() {
  return (
    <section className="bg-[#063B35] px-5 py-20 text-center text-[#F6F1E7]">
      <div className="mx-auto max-w-3xl">
        <Image
          src="/images/publico-alvo-2.png"
          alt="Un niño sostiene con orgullo el circuito que acaba de crear"
          width={1024}
          height={1536}
          className="mx-auto h-72 w-auto rounded-[2rem] object-cover shadow-[0_22px_44px_rgba(0,0,0,0.24)]"
        />
        <span className="mt-8 inline-block rounded-full bg-[#E8A33D] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-[#063B35]">
          Precio de Lanzamiento
        </span>
        <h2 className="mt-5 text-4xl font-black leading-tight">¡Llévate TODO esto hoy!</h2>
        <p className="mx-auto mt-5 max-w-2xl text-xl leading-8 text-[#F6F1E7]/84">
          Empieza hoy con el simulador gratuito, guía a tu hijo paso a paso y vivan juntos ese
          primer &ldquo;¡funcionó!&rdquo;. Cuando cerremos esta fase, el precio sube.
        </p>
        <ul className="mx-auto mt-8 max-w-md space-y-2 rounded-[1.75rem] border border-[#E8A33D]/35 bg-[#0A4B43] p-6 text-left text-lg text-[#F6F1E7] shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
          <li>✅ Producto principal — {MODULES.length} módulos completos</li>
          {BONUSES.map((bonus) => (
            <li key={bonus.name}>✅ Bono: {bonus.name}</li>
          ))}
        </ul>
        <p className="mt-6 text-xl font-black text-[#F6F1E7]">
          Pagas solo el producto principal (US$6,90) y te llevas US$27,60 en bonos, gratis.
        </p>
        <div className="mt-8">
          <CtaButton label="Quiero el Método ahora →" />
        </div>
      </div>
    </section>
  )
}
