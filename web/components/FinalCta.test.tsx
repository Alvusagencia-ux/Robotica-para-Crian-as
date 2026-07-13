import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FinalCta } from './FinalCta'
import { BONUSES, MODULES } from '@/lib/config'

describe('FinalCta', () => {
  it('shows the launch-price urgency badge and a CTA, without a countdown or buyer count', () => {
    render(<FinalCta />)
    expect(screen.getByText(/Precio de Lanzamiento/i, { selector: 'span' })).toBeInTheDocument()
    expect(screen.getByText(/el precio sube/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Quiero el Método ahora/i })).toBeInTheDocument()
    expect(screen.queryByText(/\d+\s*(compradores|personas ya compraron)/i)).not.toBeInTheDocument()
  })

  it('shows the full checklist: one aggregated module line plus one line per bonus', () => {
    render(<FinalCta />)
    expect(screen.getByText('¡Llévate TODO esto hoy!')).toBeInTheDocument()
    expect(
      screen.getByText(`✅ Producto principal — ${MODULES.length} módulos completos`)
    ).toBeInTheDocument()
    BONUSES.forEach((bonus) => {
      expect(screen.getByText(`✅ Bono: ${bonus.name}`)).toBeInTheDocument()
    })
    expect(
      screen.getByText(
        'Pagas solo el producto principal (US$6,90) y te llevas US$27,60 en bonos, gratis.'
      )
    ).toBeInTheDocument()
  })
})
