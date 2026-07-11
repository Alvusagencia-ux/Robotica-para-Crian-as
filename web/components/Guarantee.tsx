import Image from 'next/image'

export function Guarantee() {
  return (
    <section className="bg-[#063B35] px-5 py-16 text-center text-[#F6F1E7]">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-[#E8A33D]/35 bg-[#0A4B43] p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
        <Image
          src="/images/Garantia.png"
          alt="Sello de garantía de 7 días"
          width={348}
          height={346}
          className="mx-auto h-24 w-24"
        />
        <h2 className="mt-4 text-4xl font-black leading-tight">Garantía de 7 días</h2>
        <p className="mt-4 text-lg leading-8 text-[#F6F1E7]/84">
          Si en los primeros 7 días no lograste hacer el primer proyecto junto a tu hijo/a, te
          devolvemos el 100% de tu dinero. Sin formularios, sin preguntas.
        </p>
      </div>
    </section>
  )
}
