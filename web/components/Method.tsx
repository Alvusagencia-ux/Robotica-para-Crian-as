import Image from 'next/image'
import { MODULES } from '@/lib/config'

export function Method() {
  return (
    <section className="bg-[#F6F1E7] px-5 py-16 text-[#17342F]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1F6F5C]">
            Paso a paso, sin tecnicismos
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight">El Método</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#405650]">
            Primero prueban en el simulador. Después, si quieren, pasan al mundo físico con más
            confianza y menos gasto.
          </p>
        </div>
        <Image
          src="/images/simulador-mascote.png"
          alt="Simulador gratuito de circuitos con un mascote inventor celebrando el LED encendido"
          width={1536}
          height={1024}
          className="mx-auto mt-8 h-auto w-full rounded-[2rem] shadow-[0_24px_48px_rgba(31,111,92,0.22)]"
        />
        <ol className="mt-10 grid gap-4 lg:grid-cols-5">
          {MODULES.map((mod, index) => (
            <li
              key={mod.name}
              className="rounded-[1.35rem] border border-[#1F6F5C]/18 bg-white/72 p-5 shadow-[0_16px_32px_rgba(31,111,92,0.08)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8A33D] text-xl font-black text-[#063B35]">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-black leading-tight text-[#063B35]">{mod.name}</h3>
              <p className="mt-3 text-[0.96rem] leading-7 text-[#405650]">{mod.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
