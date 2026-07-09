import Image from 'next/image'
import { CtaButton } from './CtaButton'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 text-center sm:grid-cols-2 sm:text-left">
      <div>
        <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          El método que convierte la culpa por el celular de tu hijo en el proyecto del que él
          más se enorgullece — sin que tú sepas nada de tecnología.
        </h1>
        <p className="mt-6 text-xl text-slate-600">
          De Jugador a Creador™: el Método para transformar el tiempo de pantalla de tu hijo en
          su primer invento.
        </p>
        <div className="mt-10">
          <CtaButton label="Quiero el Método ahora →" />
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Garantía de 7 días incondicional · Sin kit físico · Empieza gratis en el simulador
        </p>
      </div>
      <Image
        src="/images/mockup-principal.png"
        alt="Portada del libro De Jugador a Creador™"
        width={1024}
        height={1536}
        priority
        className="mx-auto h-auto w-64 sm:w-full"
      />
    </section>
  )
}
