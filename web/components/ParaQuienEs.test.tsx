import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ParaQuienEs } from './ParaQuienEs'

describe('ParaQuienEs', () => {
  it('renders the definition and all 3 pain cards for the same avatar', () => {
    render(<ParaQuienEs />)
    expect(screen.getByText('¿Qué es De Jugador a Creador™?')).toBeInTheDocument()
    expect(
      screen.getByText(/pase de consumir pantalla a crear con sus propias manos/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText('El papá o la mamá que siente culpa por la pantalla')
    ).toBeInTheDocument()
    expect(screen.getByText('El papá o la mamá que "no es de tecnología"')).toBeInTheDocument()
    expect(screen.getByText('El papá o la mamá sin tiempo de sobra')).toBeInTheDocument()
  })

  it('renders the "es para ti" and "no es para ti" qualification lists', () => {
    render(<ParaQuienEs />)
    expect(screen.getByText('Es para ti si:')).toBeInTheDocument()
    expect(
      screen.getByText('Quieres reemplazar tiempo de pantalla sin pelear cada día')
    ).toBeInTheDocument()
    expect(screen.getByText('No es para ti si:')).toBeInTheDocument()
    expect(
      screen.getByText('Buscas que tu hijo se vuelva programador profesional en una semana')
    ).toBeInTheDocument()
  })
})
