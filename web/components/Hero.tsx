import Image from 'next/image'
import { CtaButton } from './CtaButton'

export function Hero() {
  return (
    <section className="bg-[#063B35] px-4 pb-7 pt-5 text-center text-white sm:px-8 lg:min-h-screen lg:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <p className="whitespace-nowrap rounded-full border border-[#E8A33D]/45 bg-white/10 px-3 py-2 text-[11px] font-bold text-[#F6F1E7] sm:px-4 sm:text-sm">
          Para familias que quieren menos pantalla y más creación
        </p>
        <h1 className="mt-4 max-w-4xl text-[2.55rem] font-black leading-[0.94] tracking-tight text-[#F6F1E7] sm:mt-5 sm:text-6xl lg:text-7xl">
          Convierte la pantalla en su primer invento
        </h1>
        <p className="mt-3 max-w-2xl whitespace-nowrap text-[1rem] font-black leading-tight text-[#E8A33D] sm:text-3xl">
          En 20 minutos puede decir: “¡lo hice yo!”
        </p>
        <Image
          src="/images/mockup-bundle-completo.png"
          alt="Mockup del producto De Jugador a Creador™ con cuatro bonos incluidos"
          width={1536}
          height={1536}
          priority
          className="mx-auto mt-3 h-auto w-full max-w-[320px] drop-shadow-[0_18px_34px_rgba(0,0,0,0.3)] sm:mt-5 sm:max-w-xl lg:max-w-2xl"
        />
        <p className="mt-3 max-w-sm text-[0.98rem] leading-6 text-[#F6F1E7]/90 sm:mt-5 sm:max-w-2xl sm:text-xl">
          Abre el simulador gratuito y acompáñalo paso a paso para transformar videos pasivos en su
          primer invento, sin comprar kit y sin saber tecnología.
        </p>
        <div className="mt-4 sm:mt-6">
          <CtaButton label="Quiero empezar hoy →" />
        </div>
        <p className="mt-4 text-sm text-[#F6F1E7]/72">
          Garantía de 7 días incondicional · Sin kit físico · Empieza gratis en el simulador
        </p>
      </div>
    </section>
  )
}
