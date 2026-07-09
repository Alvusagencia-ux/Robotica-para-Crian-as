import Image from 'next/image'

export function Guarantee() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-center">
      <Image
        src="/images/garantia.webp"
        alt="Sello de garantía de 7 días"
        width={348}
        height={346}
        className="mx-auto h-24 w-24"
      />
      <h2 className="mt-4 text-3xl font-bold text-slate-900">Garantía de 7 días</h2>
      <p className="mt-4 text-lg text-slate-700">
        Si en los primeros 7 días no lograste hacer el primer proyecto junto a tu hijo/a, te
        devolvemos el 100% de tu dinero. Sin formularios, sin preguntas.
      </p>
    </section>
  )
}
