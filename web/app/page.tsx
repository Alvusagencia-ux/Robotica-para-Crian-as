import { Hero } from '@/components/Hero'
import { PainAgitation } from '@/components/PainAgitation'
import { Method } from '@/components/Method'
import { ValueStack } from '@/components/ValueStack'
import { Bonuses } from '@/components/Bonuses'
import { Guarantee } from '@/components/Guarantee'
import { Faq } from '@/components/Faq'
import { FinalCta } from '@/components/FinalCta'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <PainAgitation />
      <Method />
      <ValueStack />
      <Bonuses />
      <Guarantee />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  )
}
