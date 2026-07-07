import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'De Jugador a Creador™ — Robótica en casa para padres sin experiencia técnica',
  description:
    'El método para transformar el tiempo de pantalla de tu hijo en su primer proyecto de robótica, sin que sepas nada de tecnología.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
