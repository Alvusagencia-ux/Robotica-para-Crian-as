import { CtaButton } from './CtaButton'

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
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
    </section>
  )
}
