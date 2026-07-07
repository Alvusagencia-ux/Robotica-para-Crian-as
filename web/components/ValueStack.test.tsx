import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ValueStack } from './ValueStack'
import { PRODUCT_PRICE, TOTAL_BONUS_VALUE } from '@/lib/config'

describe('ValueStack', () => {
  it('shows the launch price and the free bonus total, formatted from config', () => {
    render(<ValueStack />)
    expect(screen.getByText(`US$${PRODUCT_PRICE.toFixed(2)}`)).toBeInTheDocument()
    expect(screen.getByText(`US$${TOTAL_BONUS_VALUE.toFixed(2)}`)).toBeInTheDocument()
    expect(screen.getByText(/gratis/i)).toBeInTheDocument()
  })

  it('does not claim an inflated total package value', () => {
    render(<ValueStack />)
    expect(screen.queryByText(/valor total/i)).not.toBeInTheDocument()
  })
})
