import Image from 'next/image'
import { CtaButton } from './CtaButton'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#063B35] px-6 py-10 text-center text-white sm:px-8 lg:min-h-screen lg:py-16 lg:text-left">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_24%_18%,rgba(232,163,61,0.24),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(246,241,231,0.16),transparent_24%),linear-gradient(135deg,#062F2C_0%,#0B534A_56%,#063B35_100%)]" />
      <div className="absolute left-[8%] top-20 -z-10 h-24 w-24 rounded-full border border-[#E8A33D]/40 opacity-60 hero-orbit" />
      <div className="absolute bottom-12 right-[12%] -z-10 h-16 w-16 rounded-full border border-white/20 opacity-70 hero-orbit-reverse" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 mx-auto max-w-2xl lg:mx-0">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#F6F1E7] shadow-sm backdrop-blur lg:mx-0">
            <span className="h-2 w-2 rounded-full bg-[#E8A33D] hero-pulse" />
            Para familias que quieren menos pantalla y más creación
          </div>
          <h1 className="mt-7 text-4xl font-black leading-[0.96] tracking-tight text-[#F6F1E7] sm:text-6xl lg:text-7xl">
            Convierte la pantalla en su primer invento
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#F6F1E7]/88 sm:text-xl">
            Un método paso a paso para que tu hijo pase de mirar videos a construir proyectos de
            robótica contigo, en 20 minutos, sin comprar kit y sin que tú sepas tecnología.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm font-semibold text-[#F6F1E7] lg:justify-start">
            <span className="rounded-full bg-white/12 px-4 py-2 ring-1 ring-white/15">20 minutos</span>
            <span className="rounded-full bg-white/12 px-4 py-2 ring-1 ring-white/15">En familia</span>
            <span className="rounded-full bg-white/12 px-4 py-2 ring-1 ring-white/15">+4 bonos gratis</span>
          </div>
          <div className="mt-9">
            <CtaButton label="Quiero empezar hoy →" />
          </div>
          <p className="mt-4 text-sm text-[#F6F1E7]/72">
            Garantía de 7 días incondicional · Sin kit físico · Empieza gratis en el simulador
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="absolute left-8 top-10 z-10 hidden rounded-2xl border border-white/20 bg-[#F6F1E7]/95 px-4 py-3 text-left text-sm font-bold text-[#063B35] shadow-2xl sm:block hero-float-soft">
            ¡Funcionó!
            <span className="block text-xs font-semibold text-[#1F6F5C]">su primer LED encendido</span>
          </div>
          <div className="absolute bottom-12 right-2 z-10 hidden rounded-full bg-[#E8A33D] px-4 py-2 text-sm font-black text-white shadow-xl sm:block hero-pop">
            +4 bonos
          </div>
          <Image
            src="/images/mockup-bundle-completo.png"
            alt="Mockup del producto De Jugador a Creador™ con cuatro bonos incluidos"
            width={1536}
            height={1536}
            priority
            className="hero-bundle mx-auto h-auto w-full drop-shadow-[0_28px_50px_rgba(0,0,0,0.36)]"
          />
        </div>
      </div>
    </section>
  )
}
