import Image from 'next/image'
import { BONUSES } from '@/lib/config'

export function Bonuses() {
  return (
    <section className="bg-[#F6F1E7] px-5 py-16 text-[#17342F]">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-black uppercase tracking-[0.18em] text-[#1F6F5C]">
          Para que no se apague después del primer día
        </p>
        <h2 className="mt-3 text-center text-4xl font-black leading-tight">
          Bonos incluidos, gratis
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.name}
              className="flex gap-4 rounded-[1.5rem] border border-[#1F6F5C]/16 bg-white/74 p-5 shadow-[0_16px_32px_rgba(31,111,92,0.08)]"
            >
              <Image
                src={bonus.image}
                alt={`Portada del bono ${bonus.name}`}
                width={1024}
                height={1536}
                className="h-36 w-auto shrink-0 rounded-lg shadow-[0_12px_24px_rgba(31,111,92,0.18)]"
              />
              <div>
                <h3 className="text-lg font-black leading-tight text-[#063B35]">{bonus.name}</h3>
                <p className="mt-2 text-[0.98rem] leading-7 text-[#405650]">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
