import Image from 'next/image'

export function PainAgitation() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-lg font-medium text-slate-800">
        ¿Cuántas veces le has dicho &ldquo;ya no más pantalla&rdquo; y terminó en pelea?
      </p>
      <p className="mt-4 text-lg font-medium text-slate-800">
        &ldquo;Yo tampoco soy del área&rdquo; — la tecnología suena a algo para profesores o
        ingenieros, no para alguien que ni sabía qué era un Arduino.
      </p>
      <div className="mt-10 overflow-hidden rounded-2xl bg-slate-50">
        <Image
          src="/images/publico-alvo-1.png"
          alt="Un padre y su hijo descubren juntos su primer circuito funcionando"
          width={1536}
          height={1024}
          className="h-auto w-full"
        />
      </div>
      <div className="mt-6 rounded-2xl bg-slate-50 p-8 text-slate-700">
        <p>
          En casa pasaba lo mismo: pantalla apenas había un rato libre, y cualquier intento de
          cambiar eso terminaba en pelea. La idea de &ldquo;enseñarle tecnología&rdquo; sonaba a
          algo para profesores o ingenieros — no para alguien que ni sabía qué era un Arduino.
        </p>
        <p className="mt-4">
          Hasta que apareció la pregunta correcta: ¿y si en vez de sacarle la pantalla, la
          usábamos para crear algo con las manos?
        </p>
        <p className="mt-4">
          El primer proyecto tardó veinte minutos en un simulador gratuito, sin gastar nada. El
          resultado no fue solo un circuito que funcionó — fue la primera vez en semanas que
          hubo algo para mostrar con orgullo, hecho juntos.
        </p>
      </div>
    </section>
  )
}
