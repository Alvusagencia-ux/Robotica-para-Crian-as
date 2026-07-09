import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subheadline, and a CTA', () => {
    render(<Hero />)
    expect(screen.getByText(/Convierte la pantalla en su primer invento/i)).toBeInTheDocument()
    expect(screen.getByText(/Abre el simulador gratuito/i)).toBeInTheDocument()
    expect(screen.getByText(/En 20 minutos puede decir/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Quiero empezar hoy/i })).toBeInTheDocument()
    expect(
      screen.getByText(
        'Garantía de 7 días incondicional · Sin kit físico · Empieza gratis en el simulador'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByAltText(/Mockup del producto De Jugador a Creador™ con cuatro bonos incluidos/i)
    ).toBeInTheDocument()
  })
})
