import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'
import { FAQS } from '@/lib/config'

describe('Faq', () => {
  it('renders all 3 questions, with answers hidden by default', () => {
    render(<Faq />)
    FAQS.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument()
      expect(screen.queryByText(faq.answer)).not.toBeInTheDocument()
    })
  })

  it('reveals the answer when its question is clicked', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const firstQuestion = FAQS[0]
    await user.click(screen.getByText(firstQuestion.question))
    expect(screen.getByText(firstQuestion.answer)).toBeInTheDocument()
  })

  it('renders the "Tal vez estás pensando..." heading', () => {
    render(<Faq />)
    expect(screen.getByText('Tal vez estás pensando...')).toBeInTheDocument()
  })
})
