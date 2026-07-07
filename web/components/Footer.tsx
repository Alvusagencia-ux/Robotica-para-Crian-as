import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-10 text-center text-sm text-slate-500">
      <nav className="flex justify-center gap-6">
        <Link href="/terminos" className="hover:underline">
          Términos y Condiciones
        </Link>
        <Link href="/privacidad" className="hover:underline">
          Política de Privacidad
        </Link>
      </nav>
      <p className="mt-4">De Jugador a Creador™</p>
    </footer>
  )
}
