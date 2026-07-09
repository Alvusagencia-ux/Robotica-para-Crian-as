import Image from 'next/image'
import { CtaButton } from './CtaButton'

export function Hero() {
  return (
    <section className="bg-[#063B35] px-5 pb-10 pt-6 text-center text-white sm:px-8 lg:min-h-screen lg:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <p className="rounded-full border border-[#E8A33D]/45 bg-white/10 px-4 py-2 text-sm font-bold text-[#F6F1E7]">
          Para familias que quieren menos pantalla y más creación
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-[#F6F1E7] sm:text-6xl lg:text-7xl">
          Convierte la pantalla en su primer invento
        </h1>
        <p className="mt-4 max-w-2xl text-xl font-black leading-tight text-[#E8A33D] sm:text-3xl">
          En 20 minutos puede decir: “¡lo hice yo!”
        </p>
        <Image
          src="/images/mockup-bundle-completo.png"
          alt="Mockup del producto De Jugador a Creador™ con cuatro bonos incluidos"
          width={1536}
          height={1536}
          priority
          className="mx-auto mt-5 h-auto w-full max-w-[430px] drop-shadow-[0_24px_44px_rgba(0,0,0,0.34)] sm:max-w-xl lg:max-w-2xl"
        />
        <p className="mt-5 max-w-2xl text-lg leading-7 text-[#F6F1E7]/90 sm:text-xl">
          Abre el simulador gratuito y acompáñalo paso a paso para transformar videos pasivos en
          un proyecto de robótica hecho en familia, sin comprar kit y sin saber tecnología.
        </p>
        <div className="mt-6">
          <CtaButton label="Quiero empezar hoy →" />
        </div>
        <p className="mt-4 text-sm text-[#F6F1E7]/72">
          Garantía de 7 días incondicional · Sin kit físico · Empieza gratis en el simulador
        </p>
      </div>
    </section>
  )
}
