import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import { HOTMART_CHECKOUT_URL, BONUSES, FAQS } from '@/lib/config'

describe('Home page', () => {
  it('renders every section and both CTAs point to the same Hotmart URL', () => {
    render(<Page />)

    expect(screen.getByText(/Convierte la pantalla en su primer invento/i)).toBeInTheDocument()
    expect(
      screen.getByText('¿Por qué a algunos padres les funciona y a otros no?')
    ).toBeInTheDocument()
    expect(screen.getByText(/En casa pasaba lo mismo/i)).toBeInTheDocument()
    expect(screen.getByText('¿Qué es De Jugador a Creador™?')).toBeInTheDocument()
    expect(screen.getByText('El Método')).toBeInTheDocument()
    expect(screen.getByText(/Lo que llevas hoy/i)).toBeInTheDocument()
    expect(
      screen.getByText('Muy pronto: las historias de las primeras familias')
    ).toBeInTheDocument()
    expect(screen.getByText('Tal vez estás pensando...')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Garantía de 7 días' })).toBeInTheDocument()

    const heroCta = screen.getByRole('link', { name: /Quiero empezar hoy/i })
    const finalCta = screen.getByRole('link', { name: /Quiero el Método ahora/i })
    expect(heroCta).toHaveAttribute('href', HOTMART_CHECKOUT_URL)
    expect(finalCta).toHaveAttribute('href', HOTMART_CHECKOUT_URL)

    BONUSES.forEach((bonus) => expect(screen.getAllByText(bonus.name).length).toBeGreaterThan(0))
    FAQS.forEach((faq) => expect(screen.getByText(faq.question)).toBeInTheDocument())

    expect(screen.getByRole('link', { name: /Términos y Condiciones/i })).toBeInTheDocument()
  })

  it('never renders order-bump content on the landing page', () => {
    render(<Page />)
    expect(screen.queryByText(/order bump/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/US\$3[.,]90/)).not.toBeInTheDocument()
  })

  it('renders sections in the correct order', () => {
    const { container } = render(<Page />)
    const text = container.textContent ?? ''

    const indices = {
      hero: text.indexOf('Convierte la pantalla en su primer invento'),
      problema: text.indexOf('El problema no siempre'),
      pain: text.indexOf('En casa pasaba lo mismo'),
      paraQuienEs: text.indexOf('¿Qué es De Jugador'),
      method: text.indexOf('El Método'),
      valueStack: text.indexOf('Lo que llevas hoy'),
      bonuses: text.indexOf('Bonos incluidos, gratis'),
      provaSocial: text.indexOf('Muy pronto'),
      faq: text.indexOf('Tal vez estás pensando'),
      guarantee: text.indexOf('Si en los primeros 7 días no lograste hacer el primer proyecto'),
      finalCta: text.indexOf('Precio de Lanzamiento'),
      footer: text.indexOf('Términos y Condiciones'),
    }

    Object.entries(indices).forEach(([section, index]) => {
      expect(index, `expected to find marker text for "${section}"`).toBeGreaterThanOrEqual(0)
    })

    const ordered = Object.values(indices)
    for (let i = 1; i < ordered.length; i++) {
      expect(ordered[i]).toBeGreaterThan(ordered[i - 1])
    }
  })
})
