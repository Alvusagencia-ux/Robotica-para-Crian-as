import { describe, it, expect } from 'vitest'
import { PRODUCT_PRICE, BONUSES, TOTAL_BONUS_VALUE, MODULES, FAQS, HOTMART_CHECKOUT_URL, CONTACT_EMAIL } from './config'

describe('config', () => {
  it('sets the launch-phase product price to 6.90', () => {
    expect(PRODUCT_PRICE).toBe(6.90)
  })

  it('defines exactly 4 bonuses, each valued at 6.90 with an image path', () => {
    expect(BONUSES).toHaveLength(4)
    BONUSES.forEach((bonus) => {
      expect(bonus.value).toBe(6.90)
      expect(bonus.name).toMatch(/™/)
      expect(bonus.image).toMatch(/^\/images\/.+\.png$/)
    })
  })

  it('computes total bonus value from the bonus list, not a hardcoded number', () => {
    const expected = BONUSES.reduce((sum, b) => sum + b.value, 0)
    expect(TOTAL_BONUS_VALUE).toBeCloseTo(expected, 2)
    expect(TOTAL_BONUS_VALUE).toBeCloseTo(27.60, 2)
  })

  it('defines exactly 5 modules', () => {
    expect(MODULES).toHaveLength(5)
  })

  it('defines exactly 3 FAQ items, with the país question answered without a payment-method gate', () => {
    expect(FAQS).toHaveLength(3)
    const paisFaq = FAQS.find((f) => f.question.includes('mi país'))
    expect(paisFaq?.answer).toContain('Argentina')
    expect(paisFaq?.answer).toContain('conversión automática')
  })

  it('exposes placeholder checkout URL and contact email as non-empty strings', () => {
    expect(HOTMART_CHECKOUT_URL.length).toBeGreaterThan(0)
    expect(CONTACT_EMAIL).toContain('@')
  })
})
