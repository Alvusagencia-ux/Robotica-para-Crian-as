import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('links to the terms and privacy pages', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Términos y Condiciones/i })).toHaveAttribute(
      'href',
      '/terminos'
    )
    expect(screen.getByRole('link', { name: /Política de Privacidad/i })).toHaveAttribute(
      'href',
      '/privacidad'
    )
  })
})
