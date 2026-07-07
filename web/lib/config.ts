export const PRODUCT_PRICE = 6.90
export const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/REPLACE_ME'
export const CONTACT_EMAIL = 'contacto@dejugadoracreador.com'
export const LAST_UPDATED = '7 de julio de 2026'

export interface Bonus {
  name: string
  value: number
  description: string
}

export const BONUSES: Bonus[] = [
  {
    name: 'SOS Sin Pantalla™',
    value: 6.90,
    description: '20 frases listas para cambiar pantalla por actividad, sin pelea.',
  },
  {
    name: 'Calendario 30 Días Creador™',
    value: 6.90,
    description: 'Un desafío distinto cada día durante 30 días, sin que tengas que inventar nada.',
  },
  {
    name: 'Guía Inteligente de Kits™',
    value: 6.90,
    description: 'Comparativa de kits de robótica por país, sin comisiones ocultas, para no gastar de más.',
  },
  {
    name: 'Mi Primer Diploma de Inventor™',
    value: 6.90,
    description: 'Certificado imprimible y guión para el "muestra y cuenta" en familia.',
  },
]

export const TOTAL_BONUS_VALUE = BONUSES.reduce((sum, b) => sum + b.value, 0)

export interface Module {
  name: string
  description: string
}

export const MODULES: Module[] = [
  {
    name: 'Primer Contacto™',
    description: 'Semana 1 en el simulador gratuito — sin gastar nada, primer logro en 20 minutos.',
  },
  {
    name: 'Caja de Herramientas del Creador™',
    description: 'Lo mínimo de electrónica y robótica que necesitas saber, sin curso de ingeniería.',
  },
  {
    name: 'Ritual Sin Pantalla™',
    description: 'Sesiones de 30 a 45 minutos con calendario listo — reemplaza tiempo de pantalla sin que tengas que inventar nada.',
  },
  {
    name: 'Proyectos Manos a la Obra™',
    description: '8 proyectos guiados paso a paso, del más fácil al más desafiante.',
  },
  {
    name: 'Vitrina Familiar™',
    description: 'Cómo documentar y celebrar lo que tu hijo/a creó.',
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const FAQS: FaqItem[] = [
  {
    question: '¿Y si no sé nada de tecnología?',
    answer:
      'No necesitas saber nada de electrónica ni de programación. Cada proyecto se explica paso a paso, primero en un simulador gratuito, así que puedes practicar sin miedo a romper nada ni gastar un peso antes de estar seguro.',
  },
  {
    question: '¿Le va a gustar a mi hijo/a?',
    answer:
      'Está pensado para chicos y chicas de 7 a 12 años que ya usan pantallas todos los días — la idea es canalizar esa misma curiosidad hacia crear en vez de solo consumir. Si en los primeros 7 días no logran el primer proyecto juntos, tienes el reembolso completo.',
  },
  {
    question: '¿Funciona en mi país?',
    answer:
      'Sí. Funciona en Argentina, Chile, Perú, Colombia, Ecuador y México — pagas en la moneda de tu país, con conversión automática en el checkout.',
  },
]
