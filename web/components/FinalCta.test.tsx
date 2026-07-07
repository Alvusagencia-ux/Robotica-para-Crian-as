import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FinalCta } from './FinalCta'

describe('FinalCta', () => {
  it('shows the launch-price urgency badge and a CTA, without a countdown or buyer count', () => {
    render(<FinalCta />)
    expect(screen.getByText(/Precio de Lanzamiento/i, { selector: 'span' })).toBeInTheDocument()
    expect(screen.getByText(/el precio sube/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Quiero el Método ahora/i })).toBeInTheDocument()
    expect(screen.queryByText(/\d+\s*(compradores|personas ya compraron)/i)).not.toBeInTheDocument()
  })
})
