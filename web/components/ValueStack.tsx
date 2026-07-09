import Image from 'next/image'
import { PRODUCT_PRICE, TOTAL_BONUS_VALUE } from '@/lib/config'

export function ValueStack() {
  return (
    <section className="bg-[#063B35] px-5 py-16 text-center text-[#F6F1E7]">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#E8A33D]">
          Todo listo para empezar
        </p>
        <h2 className="mt-3 text-4xl font-black leading-tight">Lo que llevas hoy</h2>
        <Image
          src="/images/mockup-bundle-completo.png"
          alt="El producto principal De Jugador a Creador™ junto a los 4 bonos incluidos"
          width={1254}
          height={1254}
          className="mx-auto mt-8 h-auto w-full max-w-2xl"
        />
        <div className="mx-auto mt-8 max-w-2xl rounded-[1.75rem] border border-[#E8A33D]/45 bg-[#0A4B43] p-7 shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
          <p className="text-2xl font-black leading-snug text-[#F6F1E7]">
            Pagas solo el producto principal:{' '}
            <span className="text-[#E8A33D]">US${PRODUCT_PRICE.toFixed(2)}</span>
          </p>
          <p className="mt-3 text-lg leading-8 text-[#F6F1E7]/82">
            Y te llevas{' '}
            <span className="font-black text-[#E8A33D]">US${TOTAL_BONUS_VALUE.toFixed(2)}</span>{' '}
            en bonos para sostener el hábito creativo en casa, gratis.
          </p>
        </div>
      </div>
    </section>
  )
}
