import Image from 'next/image'

export function PainAgitation() {
  return (
    <section className="bg-[#063B35] px-5 py-16 text-[#F6F1E7]">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#E8A33D]">
          El problema no es la pantalla
        </p>
        <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
          Es no saber cómo convertirla en algo que una a la familia.
        </h2>
        <p className="mt-5 text-xl leading-8 text-[#F6F1E7]/84">
          ¿Cuántas veces le has dicho &ldquo;ya no más pantalla&rdquo; y terminó en pelea?
          Aquí la pantalla deja de ser premio o castigo: se vuelve el primer taller creativo de
          tu hijo.
        </p>
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#E8A33D]/25 bg-[#F6F1E7] p-2 shadow-[0_24px_50px_rgba(0,0,0,0.24)]">
          <Image
            src="/images/publico-alvo-1.png"
            alt="Un padre y su hijo descubren juntos su primer circuito funcionando"
            width={1536}
            height={1024}
            className="h-auto w-full rounded-[1.5rem]"
          />
        </div>
        <div className="mt-6 rounded-[1.75rem] bg-[#F6F1E7] p-7 text-[#17342F] shadow-[0_18px_38px_rgba(0,0,0,0.18)]">
          <p className="text-xl font-black leading-8">
            En casa pasaba lo mismo: apenas había un rato libre, aparecía la pantalla.
          </p>
          <p className="mt-4 text-lg leading-8 text-[#314840]">
            &ldquo;Yo tampoco soy del área&rdquo; es exactamente el punto de partida. La idea
            de &ldquo;enseñarle tecnología&rdquo; sonaba lejana, como algo para profesores o
            ingenieros. Hasta que apareció una pregunta más simple: ¿y si en vez de quitarle la
            pantalla, la usamos para crear algo con las manos?
          </p>
          <p className="mt-4 text-lg leading-8 text-[#314840]">
            El primer proyecto ocurre en un simulador gratuito. Sin kit, sin miedo a romper nada y
            con ese momento que cambia todo: &ldquo;¡mira, funciona!&rdquo;.
          </p>
        </div>
      </div>
    </section>
  )
}
