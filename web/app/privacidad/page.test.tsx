import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import { CONTACT_EMAIL } from '@/lib/config'

describe('Política de Privacidad page', () => {
  it('states no PII is stored on-site and Hotmart handles payment data', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { name: /Política de Privacidad/i })).toBeInTheDocument()
    expect(screen.getByText(/no recopilamos ni almacenamos datos personales/i)).toBeInTheDocument()
    expect(screen.getByText(/a cargo de Hotmart/i)).toBeInTheDocument()
    expect(screen.getByText(CONTACT_EMAIL, { exact: false })).toBeInTheDocument()
  })
})
