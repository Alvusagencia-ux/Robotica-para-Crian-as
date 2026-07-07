import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PainAgitation } from './PainAgitation'

describe('PainAgitation', () => {
  it('names the screen-time guilt and the "not tech-savvy" fear', () => {
    render(<PainAgitation />)
    expect(screen.getByText(/ya no más pantalla/i)).toBeInTheDocument()
    expect(screen.getByText(/Yo tampoco soy del área/i)).toBeInTheDocument()
  })

  it('tells the founder-story arc in gender-neutral voice', () => {
    render(<PainAgitation />)
    expect(screen.getByText(/En casa pasaba lo mismo/i)).toBeInTheDocument()
    expect(screen.queryByText(/mamá convencida/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/papá convencido/i)).not.toBeInTheDocument()
  })
})
