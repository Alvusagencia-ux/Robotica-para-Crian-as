import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProvaSocial } from './ProvaSocial'

describe('ProvaSocial', () => {
  it('renders an honest coming-soon placeholder, never a fabricated testimonial', () => {
    render(<ProvaSocial />)
    expect(
      screen.getByText('Muy pronto: las historias de las primeras familias')
    ).toBeInTheDocument()
    expect(
      screen.getByText(/tu historia puede estar aquí/i)
    ).toBeInTheDocument()
  })
})
