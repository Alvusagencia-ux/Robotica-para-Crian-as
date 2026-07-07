import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import { HOTMART_CHECKOUT_URL, BONUSES, FAQS } from '@/lib/config'

describe('Home page', () => {
  it('renders every section and both CTAs point to the same Hotmart URL', () => {
    render(<Page />)

    expect(
      screen.getByText(/El método que convierte la culpa por el celular de tu hijo/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/En casa pasaba lo mismo/i)).toBeInTheDocument()
    expect(screen.getByText('El Método')).toBeInTheDocument()
    expect(screen.getByText(/Lo que llevás hoy/i)).toBeInTheDocument()
    expect(screen.getByText(/Garantía de 7 días/i)).toBeInTheDocument()

    const ctaLinks = screen.getAllByRole('link', { name: /Quiero el Método ahora/i })
    expect(ctaLinks).toHaveLength(2)
    ctaLinks.forEach((link) => expect(link).toHaveAttribute('href', HOTMART_CHECKOUT_URL))

    BONUSES.forEach((bonus) => expect(screen.getByText(bonus.name)).toBeInTheDocument())
    FAQS.forEach((faq) => expect(screen.getByText(faq.question)).toBeInTheDocument())

    expect(screen.getByRole('link', { name: /Términos y Condiciones/i })).toBeInTheDocument()
  })

  it('never renders order-bump content on the landing page', () => {
    render(<Page />)
    expect(screen.queryByText(/order bump/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/US\$3[.,]90/)).not.toBeInTheDocument()
  })
})
