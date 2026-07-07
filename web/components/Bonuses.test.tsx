import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Bonuses } from './Bonuses'
import { BONUSES } from '@/lib/config'

describe('Bonuses', () => {
  it('renders all 4 bonuses with name and description from config', () => {
    render(<Bonuses />)
    BONUSES.forEach((bonus) => {
      expect(screen.getByText(bonus.name)).toBeInTheDocument()
      expect(screen.getByText(bonus.description)).toBeInTheDocument()
    })
  })
})
