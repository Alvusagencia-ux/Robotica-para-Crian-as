import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import { CONTACT_EMAIL } from '@/lib/config'

describe('Términos y Condiciones page', () => {
  it('covers delivery, guarantee, and jurisdiction, and shows the contact email', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { name: /Términos y Condiciones/i })).toBeInTheDocument()
    expect(screen.getByText(/se procesa a través de Hotmart/i)).toBeInTheDocument()
    expect(screen.getByText(/garantía incondicional de 7 días/i)).toBeInTheDocument()
    expect(screen.getByText(/legislación del país de residencia/i)).toBeInTheDocument()
    expect(screen.getByText(CONTACT_EMAIL, { exact: false })).toBeInTheDocument()
  })
})
