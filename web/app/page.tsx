import { Hero } from '@/components/Hero'
import { Problema } from '@/components/Problema'
import { PainAgitation } from '@/components/PainAgitation'
import { ParaQuienEs } from '@/components/ParaQuienEs'
import { Method } from '@/components/Method'
import { ValueStack } from '@/components/ValueStack'
import { Bonuses } from '@/components/Bonuses'
import { ProvaSocial } from '@/components/ProvaSocial'
import { Faq } from '@/components/Faq'
import { Guarantee } from '@/components/Guarantee'
import { FinalCta } from '@/components/FinalCta'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Problema />
      <PainAgitation />
      <ParaQuienEs />
      <Method />
      <ValueStack />
      <Bonuses />
      <ProvaSocial />
      <Faq />
      <Guarantee />
      <FinalCta />
      <Footer />
    </>
  )
}
