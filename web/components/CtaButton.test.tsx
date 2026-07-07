import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaButton } from './CtaButton'
import { HOTMART_CHECKOUT_URL } from '@/lib/config'

describe('CtaButton', () => {
  it('renders the given label and links to the Hotmart checkout', () => {
    render(<CtaButton label="Quiero el Método ahora →" />)
    const link = screen.getByRole('link', { name: 'Quiero el Método ahora →' })
    expect(link).toHaveAttribute('href', HOTMART_CHECKOUT_URL)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
  })
})
