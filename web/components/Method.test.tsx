import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Method } from './Method'
import { MODULES } from '@/lib/config'

describe('Method', () => {
  it('renders all 5 modules from config', () => {
    render(<Method />)
    MODULES.forEach((mod) => {
      expect(screen.getByText(mod.name)).toBeInTheDocument()
      expect(screen.getByText(mod.description)).toBeInTheDocument()
    })
  })
})
