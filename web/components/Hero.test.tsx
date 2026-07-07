import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subheadline, and a CTA', () => {
    render(<Hero />)
    expect(
      screen.getByText(/El método que convierte la culpa por el celular de tu hijo/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/su primer invento/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Quiero el Método ahora/i })).toBeInTheDocument()
  })
})
