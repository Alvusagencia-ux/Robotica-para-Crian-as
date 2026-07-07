import { CONTACT_EMAIL, LAST_UPDATED } from '@/lib/config'

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-slate-700">
      <h1 className="text-3xl font-bold text-slate-900">Términos y Condiciones</h1>
      <p className="mt-2 text-sm text-slate-500">Última actualización: {LAST_UPDATED}</p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">1. Sobre este producto</h2>
      <p className="mt-2">
        &ldquo;De Jugador a Creador™&rdquo; es un producto digital (e-book y materiales
        complementarios) entregado en formato digital tras la compra.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">2. Entrega</h2>
      <p className="mt-2">
        La compra se procesa a través de Hotmart, plataforma responsable del checkout, la
        facturación y la entrega del acceso al contenido digital. El acceso es inmediato tras la
        confirmación del pago.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">3. Garantía y reembolsos</h2>
      <p className="mt-2">
        Ofrecemos una garantía incondicional de 7 días desde la fecha de compra. El reembolso se
        solicita directamente a través de la plataforma Hotmart.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">4. Uso del contenido</h2>
      <p className="mt-2">
        El contenido es para uso personal y familiar. Está prohibida su reventa, redistribución o
        publicación sin autorización previa.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">5. Limitación de responsabilidad</h2>
      <p className="mt-2">
        Este producto es un material educativo. No sustituye la supervisión de un adulto
        responsable durante la realización de los proyectos.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">6. Jurisdicción</h2>
      <p className="mt-2">
        Estos términos se rigen por la legislación del país de residencia del consumidor.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">7. Contacto</h2>
      <p className="mt-2">{`Para consultas, escribinos a ${CONTACT_EMAIL}.`}</p>
    </main>
  )
}
