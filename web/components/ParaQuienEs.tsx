const CARDS = [
  {
    title: 'El papá o la mamá que siente culpa por la pantalla',
    quote: 'Sabes que hay demasiada pantalla, pero cada intento de cambiarlo termina en pelea.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="mx-auto h-8 w-8 text-[#1F6F5C]"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'El papá o la mamá que "no es de tecnología"',
    quote: 'Nunca tocaste un Arduino y no sabrías por dónde empezar, aunque quisieras.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="mx-auto h-8 w-8 text-[#1F6F5C]"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path
          d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1.5 1-1.5 2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'El papá o la mamá sin tiempo de sobra',
    quote:
      'Entre trabajo y rutina, cualquier actividad nueva parece un proyecto de fin de semana entero.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="mx-auto h-8 w-8 text-[#1F6F5C]"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const ES_PARA_TI = [
  'Quieres reemplazar tiempo de pantalla sin pelear cada día',
  'Nunca tocaste electrónica y te da un poco de miedo empezar',
  'Quieres algo que puedas hacer con 30-45 minutos, no un curso de meses',
  'Prefieres probar gratis en un simulador antes de gastar en un kit',
  'Quieres ver a tu hijo o hija orgulloso de algo que construyó con sus manos',
]

const NO_ES_PARA_TI = [
  'Buscas que tu hijo se vuelva programador profesional en una semana',
  'No estás dispuesto a sentarte 30 minutos junto a él o ella',
  'Ya tienes un ritual sin pantalla que funciona perfecto',
  'Esperas que esto reemplace toda la pantalla de golpe, sin proceso',
]

export function ParaQuienEs() {
  return (
    <section className="bg-[#F6F1E7] px-5 py-16 text-[#17342F]">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm font-black uppercase tracking-[0.18em] text-[#1F6F5C]">
          Antes de seguir
        </p>
        <h2 className="mt-3 text-center text-4xl font-black leading-tight">
          ¿Qué es De Jugador a Creador™?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-[#405650]">
          Es el método completo — con el ritual, los proyectos y las herramientas — para que tu
          hijo o hija pase de consumir pantalla a crear con sus propias manos, sin que tú tengas
          que saber nada de tecnología.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.5rem] border border-[#1F6F5C]/16 bg-white/74 p-6 text-center shadow-[0_16px_32px_rgba(31,111,92,0.08)]"
            >
              {card.icon}
              <h3 className="mt-4 text-base font-black leading-tight text-[#063B35]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#405650]">{card.quote}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-[#1F6F5C]/16 bg-white/74 p-6 shadow-[0_16px_32px_rgba(31,111,92,0.08)]">
            <h3 className="text-lg font-black text-[#063B35]">Es para ti si:</h3>
            <ul className="mt-4 space-y-2 text-[#405650]">
              {ES_PARA_TI.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#1F6F5C]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-[#1F6F5C]/16 bg-white/74 p-6 shadow-[0_16px_32px_rgba(31,111,92,0.08)]">
            <h3 className="text-lg font-black text-[#063B35]">No es para ti si:</h3>
            <ul className="mt-4 space-y-2 text-[#405650]">
              {NO_ES_PARA_TI.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#405650]/50">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
