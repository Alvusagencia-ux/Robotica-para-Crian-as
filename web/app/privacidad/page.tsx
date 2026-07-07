import { CONTACT_EMAIL, LAST_UPDATED } from '@/lib/config'

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-slate-700">
      <h1 className="text-3xl font-bold text-slate-900">Política de Privacidad</h1>
      <p className="mt-2 text-sm text-slate-500">Última actualización: {LAST_UPDATED}</p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">1. Qué datos recopilamos</h2>
      <p className="mt-2">
        Esta página utiliza herramientas de análisis (como píxeles de Meta/Facebook) para medir
        el rendimiento de los anuncios. No recopilamos ni almacenamos datos personales
        identificables en este sitio — el pago y los datos del comprador quedan a cargo de
        Hotmart, plataforma responsable del checkout.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">2. Cookies</h2>
      <p className="mt-2">
        Podemos usar cookies de terceros (Meta Ads) para medir conversiones. Podés desactivarlas
        desde la configuración de tu navegador.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">3. Terceros</h2>
      <p className="mt-2">
        Los datos de pago y contacto necesarios para la entrega del producto son gestionados
        exclusivamente por Hotmart, conforme a su propia política de privacidad.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">4. Contacto</h2>
      <p className="mt-2">Para consultas sobre privacidad, escribinos a {CONTACT_EMAIL}.</p>
    </main>
  )
}
