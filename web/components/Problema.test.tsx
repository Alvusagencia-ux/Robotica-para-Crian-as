import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Problema } from './Problema'

describe('Problema', () => {
  it('renders the deepened problem narrative', () => {
    render(<Problema />)
    expect(
      screen.getByText('¿Por qué a algunos padres les funciona y a otros no?')
    ).toBeInTheDocument()
    expect(screen.getByText(/El problema no siempre es la falta de tiempo/i)).toBeInTheDocument()
    expect(screen.getByText(/un ritual que tu hijo va a pedir/i)).toBeInTheDocument()
  })
})
