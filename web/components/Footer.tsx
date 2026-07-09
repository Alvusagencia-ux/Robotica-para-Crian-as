import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-[#F6F1E7]/12 bg-[#063B35] px-6 py-10 text-center text-sm text-[#F6F1E7]/64">
      <nav className="flex flex-wrap justify-center gap-6">
        <Link href="/terminos" className="hover:text-[#F6F1E7] hover:underline">
          Términos y Condiciones
        </Link>
        <Link href="/privacidad" className="hover:text-[#F6F1E7] hover:underline">
          Política de Privacidad
        </Link>
      </nav>
      <p className="mt-4">De Jugador a Creador™</p>
    </footer>
  )
}
