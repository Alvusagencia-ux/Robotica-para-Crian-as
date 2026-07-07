import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Guarantee } from './Guarantee'

describe('Guarantee', () => {
  it('states the unconditional 7-day guarantee', () => {
    render(<Guarantee />)
    expect(screen.getByRole('heading', { name: /Garantía de 7 días/i })).toBeInTheDocument()
    expect(screen.getByText(/100%/)).toBeInTheDocument()
  })
})
