import { describe, it, expect } from 'vitest'
import { metadata } from './layout'

describe('root layout metadata', () => {
  it('sets a Spanish title and description for the offer', () => {
    expect(String(metadata.title)).toMatch(/De Jugador a Creador/)
    expect(String(metadata.description)).toMatch(/robótica/i)
  })
})
