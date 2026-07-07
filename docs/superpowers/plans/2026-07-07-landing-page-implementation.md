# De Jugador a Creador™ — Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy the single-page Next.js sales page for "De Jugador a Creador™" that presents the offer and routes every CTA to the Hotmart checkout.

**Architecture:** Next.js App Router app scaffolded in `web/` (kept separate from `docs/` at the project root, since `create-next-app` requires an empty target directory). One route (`/`) composed of nine section components, plus two static legal routes (`/terminos`, `/privacidad`) required for Meta Ads. All copy and pricing numbers live in a single `lib/config.ts` module so nothing is hardcoded twice. Component tests use Vitest + React Testing Library; no e2e framework is introduced for this scope.

**Tech Stack:** Next.js (App Router, TypeScript, Tailwind CSS), Vitest, @testing-library/react, deployed on Vercel.

## Global Constraints

- Single-page sales flow only — no lead capture, no quiz, no embedded checkout (spec §2, §5).
- All copy in neutral Spanish, "tú" register, no Argentine voseo (spec §3 headline note).
- Currency: USD. Market: Argentina, Chile, Perú, Colombia, Ecuador, México (no Brasil).
- `PRODUCT_PRICE` = 6.90 (launch phase). No inflated "declared value" anchor on the main product — only the 4 bonuses carry a declared-value/free mechanic (spec §2, resolved).
- Each bonus: declared value 6.90, delivered at 0.00.
- The 5 order bumps (US$3.90 each) live exclusively inside the Hotmart checkout — never rendered on this landing page (spec §5).
- No Supabase integration in this scope (spec §2).
- Footer must link to `/terminos` and `/privacidad` — required for Meta Ads compliance (spec §3, section 9).
- `HOTMART_CHECKOUT_URL` and `CONTACT_EMAIL` are real-shaped placeholder constants in `lib/config.ts`, swapped for real values once the Hotmart product and business email exist (spec §6 — Próximos passos).

---

## File Structure

```
web/
  app/
    layout.tsx              # root layout, metadata, lang="es"
    page.tsx                 # composes all 9 sections
    globals.css               # Tailwind entrypoint (from create-next-app)
    terminos/
      page.tsx
    privacidad/
      page.tsx
  components/
    CtaButton.tsx
    Hero.tsx
    PainAgitation.tsx
    Method.tsx
    ValueStack.tsx
    Bonuses.tsx
    Guarantee.tsx
    Faq.tsx
    FinalCta.tsx
    Footer.tsx
  lib/
    config.ts                 # all copy/pricing constants — single source of truth
  vitest.config.ts
  vitest.setup.ts
  __tests__/
    (co-located _test files next to each component instead — see tasks)
```

Each component owns its own `ComponentName.test.tsx` next to it, so a reviewer can see a component and its test together (files that change together live together).

---

### Task 1: Scaffold Next.js project + test harness

**Files:**
- Create: `web/` (entire Next.js scaffold via CLI)
- Create: `web/vitest.config.ts`
- Create: `web/vitest.setup.ts`
- Modify: `web/package.json` (add `test` script)

**Interfaces:**
- Produces: a working `npm run dev` server at `web/`, and `npm test` running Vitest with jsdom + Testing Library available to every later task.

- [ ] **Step 1: Scaffold the Next.js app**

Run from the project root (`/Users/fernandesjunior/Desktop/Produtos Low-Ticket/Produto de Robotica para Crianças`):

```bash
npx create-next-app@latest web --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm
```

Expected: a new `web/` directory containing `app/`, `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts` (or `postcss.config.mjs` depending on the installed Next.js version — either is fine, don't force one), with no prompts left unanswered (all flags above are explicit).

- [ ] **Step 2: Verify the dev server boots**

```bash
cd web && npm run dev &
sleep 3
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
kill %1
```

Expected: `200`.

- [ ] **Step 3: Install the test harness**

```bash
cd web
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

- [ ] **Step 4: Create the Vitest config**

Create `web/vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
```

Create `web/vitest.setup.ts`:

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 5: Add the test script**

In `web/package.json`, inside `"scripts"`, add:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 6: Write a smoke test to verify the harness works**

Create `web/lib/smoke.test.ts`:

```ts
import { describe, it, expect } from 'vitest'

describe('test harness smoke test', () => {
  it('runs a basic assertion', () => {
    expect(1 + 1).toBe(2)
  })
})
```

- [ ] **Step 7: Run the smoke test**

```bash
cd web && npm test
```

Expected: `1 passed`.

- [ ] **Step 8: Delete the smoke test (its only job was proving the harness works)**

```bash
rm web/lib/smoke.test.ts
```

- [ ] **Step 9: Commit**

```bash
git add web/
git commit -m "Scaffold Next.js app with Vitest + Testing Library harness"
```

---

### Task 2: Config module — single source of truth for copy and pricing

**Files:**
- Create: `web/lib/config.ts`
- Test: `web/lib/config.test.ts`

**Interfaces:**
- Produces: `PRODUCT_PRICE: number`, `HOTMART_CHECKOUT_URL: string`, `CONTACT_EMAIL: string`, `Bonus` type, `BONUSES: Bonus[]`, `TOTAL_BONUS_VALUE: number`, `Module` type, `MODULES: Module[]`, `FaqItem` type, `FAQS: FaqItem[]`. Every later component task consumes these — no task hardcodes copy or numbers that live here.

- [ ] **Step 1: Write the failing test**

Create `web/lib/config.test.ts`:

```ts
import { describe, it, expect } from 'vitest'
import { PRODUCT_PRICE, BONUSES, TOTAL_BONUS_VALUE, MODULES, FAQS, HOTMART_CHECKOUT_URL, CONTACT_EMAIL } from './config'

describe('config', () => {
  it('sets the launch-phase product price to 6.90', () => {
    expect(PRODUCT_PRICE).toBe(6.90)
  })

  it('defines exactly 4 bonuses, each valued at 6.90', () => {
    expect(BONUSES).toHaveLength(4)
    BONUSES.forEach((bonus) => {
      expect(bonus.value).toBe(6.90)
      expect(bonus.name).toMatch(/™/)
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- config.test.ts
```

Expected: FAIL with "Cannot find module './config'".

- [ ] **Step 3: Write the config module**

Create `web/lib/config.ts`:

```ts
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
    description: 'Lo mínimo de electrónica y robótica que necesitás saber, sin curso de ingeniería.',
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
      'No necesitás saber nada de electrónica ni de programación. Cada proyecto se explica paso a paso, primero en un simulador gratuito, así que podés practicar sin miedo a romper nada ni gastar un peso antes de estar seguro.',
  },
  {
    question: '¿Le va a gustar a mi hijo/a?',
    answer:
      'Está pensado para chicos y chicas de 7 a 12 años que ya usan pantallas todos los días — la idea es canalizar esa misma curiosidad hacia crear en vez de solo consumir. Si en los primeros 7 días no logran el primer proyecto juntos, tenés el reembolso completo.',
  },
  {
    question: '¿Funciona en mi país?',
    answer:
      'Sí. Funciona en Argentina, Chile, Perú, Colombia, Ecuador y México — pagás en la moneda de tu país, con conversión automática en el checkout.',
  },
]
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- config.test.ts
```

Expected: `6 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/lib/config.ts web/lib/config.test.ts
git commit -m "Add config module: pricing, bonuses, modules, FAQ copy"
```

---

### Task 3: CtaButton component

**Files:**
- Create: `web/components/CtaButton.tsx`
- Test: `web/components/CtaButton.test.tsx`

**Interfaces:**
- Consumes: `HOTMART_CHECKOUT_URL` from `@/lib/config`.
- Produces: `CtaButton({ label }: { label: string })` — a React component rendering an `<a>` pointed at `HOTMART_CHECKOUT_URL`. Used by `Hero` (Task 4) and `FinalCta` (Task 11).

- [ ] **Step 1: Write the failing test**

Create `web/components/CtaButton.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- CtaButton.test.tsx
```

Expected: FAIL with "Cannot find module './CtaButton'".

- [ ] **Step 3: Write the component**

Create `web/components/CtaButton.tsx`:

```tsx
import { HOTMART_CHECKOUT_URL } from '@/lib/config'

export function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={HOTMART_CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
    >
      {label}
    </a>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- CtaButton.test.tsx
```

Expected: `1 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/components/CtaButton.tsx web/components/CtaButton.test.tsx
git commit -m "Add CtaButton component"
```

---

### Task 4: Hero section

**Files:**
- Create: `web/components/Hero.tsx`
- Test: `web/components/Hero.test.tsx`

**Interfaces:**
- Consumes: `CtaButton` (Task 3).
- Produces: `Hero()` — default export not needed, named export `Hero`. Used by `app/page.tsx` (Task 16).

- [ ] **Step 1: Write the failing test**

Create `web/components/Hero.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subheadline, and a CTA', () => {
    render(<Hero />)
    expect(
      screen.getByText(/El método que convierte la culpa por el celular de tu hijo/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/su primer invento/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Quiero el Método ahora/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- Hero.test.tsx
```

Expected: FAIL with "Cannot find module './Hero'".

- [ ] **Step 3: Write the component**

Create `web/components/Hero.tsx`:

```tsx
import { CtaButton } from './CtaButton'

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
        El método que convierte la culpa por el celular de tu hijo en el proyecto del que él
        más se enorgullece — sin que tú sepas nada de tecnología.
      </h1>
      <p className="mt-6 text-xl text-slate-600">
        De Jugador a Creador™: el Método para transformar el tiempo de pantalla de tu hijo en
        su primer invento.
      </p>
      <div className="mt-10">
        <CtaButton label="Quiero el Método ahora →" />
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- Hero.test.tsx
```

Expected: `1 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/components/Hero.tsx web/components/Hero.test.tsx
git commit -m "Add Hero section"
```

---

### Task 5: Pain agitation + founder-story section

**Files:**
- Create: `web/components/PainAgitation.tsx`
- Test: `web/components/PainAgitation.test.tsx`

**Interfaces:**
- Consumes: nothing external.
- Produces: `PainAgitation()`. Used by `app/page.tsx` (Task 16). This is the substitute for testimonials until real reviews exist (spec §2).

- [ ] **Step 1: Write the failing test**

Create `web/components/PainAgitation.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PainAgitation } from './PainAgitation'

describe('PainAgitation', () => {
  it('names the screen-time guilt and the "not tech-savvy" fear', () => {
    render(<PainAgitation />)
    expect(screen.getByText(/ya no más pantalla/i)).toBeInTheDocument()
    expect(screen.getByText(/Yo tampoco soy del área/i)).toBeInTheDocument()
  })

  it('tells the founder-story arc in gender-neutral voice', () => {
    render(<PainAgitation />)
    expect(screen.getByText(/En casa pasaba lo mismo/i)).toBeInTheDocument()
    expect(screen.queryByText(/mamá convencida/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/papá convencido/i)).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- PainAgitation.test.tsx
```

Expected: FAIL with "Cannot find module './PainAgitation'".

- [ ] **Step 3: Write the component**

Create `web/components/PainAgitation.tsx`:

```tsx
export function PainAgitation() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-lg font-medium text-slate-800">
        ¿Cuántas veces le has dicho &ldquo;ya no más pantalla&rdquo; y terminó en pelea?
      </p>
      <p className="mt-4 text-lg font-medium text-slate-800">
        &ldquo;Yo tampoco soy del área&rdquo; — la tecnología suena a algo para profesores o
        ingenieros, no para alguien que ni sabía qué era un Arduino.
      </p>
      <div className="mt-10 rounded-2xl bg-slate-50 p-8 text-slate-700">
        <p>
          En casa pasaba lo mismo: pantalla apenas había un rato libre, y cualquier intento de
          cambiar eso terminaba en pelea. La idea de &ldquo;enseñarle tecnología&rdquo; sonaba a
          algo para profesores o ingenieros — no para alguien que ni sabía qué era un Arduino.
        </p>
        <p className="mt-4">
          Hasta que apareció la pregunta correcta: ¿y si en vez de sacarle la pantalla, la
          usábamos para crear algo con las manos?
        </p>
        <p className="mt-4">
          El primer proyecto tardó veinte minutos en un simulador gratuito, sin gastar nada. El
          resultado no fue solo un circuito que funcionó — fue la primera vez en semanas que
          hubo algo para mostrar con orgullo, hecho juntos.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- PainAgitation.test.tsx
```

Expected: `2 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/components/PainAgitation.tsx web/components/PainAgitation.test.tsx
git commit -m "Add pain agitation / founder-story section"
```

---

### Task 6: Method section (5 modules)

**Files:**
- Create: `web/components/Method.tsx`
- Test: `web/components/Method.test.tsx`

**Interfaces:**
- Consumes: `MODULES` from `@/lib/config`.
- Produces: `Method()`. Used by `app/page.tsx` (Task 16).

- [ ] **Step 1: Write the failing test**

Create `web/components/Method.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- Method.test.tsx
```

Expected: FAIL with "Cannot find module './Method'".

- [ ] **Step 3: Write the component**

Create `web/components/Method.tsx`:

```tsx
import { MODULES } from '@/lib/config'

export function Method() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900">El Método</h2>
      <ol className="mt-10 space-y-6">
        {MODULES.map((mod, index) => (
          <li key={mod.name} className="flex gap-4 rounded-xl border border-slate-200 p-6">
            <span className="text-2xl font-bold text-emerald-600">{index + 1}</span>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{mod.name}</h3>
              <p className="mt-1 text-slate-600">{mod.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- Method.test.tsx
```

Expected: `1 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/components/Method.tsx web/components/Method.test.tsx
git commit -m "Add Method section listing the 5 modules"
```

---

### Task 7: Value stack section

**Files:**
- Create: `web/components/ValueStack.tsx`
- Test: `web/components/ValueStack.test.tsx`

**Interfaces:**
- Consumes: `PRODUCT_PRICE`, `TOTAL_BONUS_VALUE` from `@/lib/config`.
- Produces: `ValueStack()`. Used by `app/page.tsx` (Task 16). Must never hardcode a number that also lives in `config.ts` — this is what the spec's "recalcular se qualquer valor mudar" rule (spec §3) exists to protect.

- [ ] **Step 1: Write the failing test**

Create `web/components/ValueStack.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- ValueStack.test.tsx
```

Expected: FAIL with "Cannot find module './ValueStack'".

- [ ] **Step 3: Write the component**

Create `web/components/ValueStack.tsx`:

```tsx
import { PRODUCT_PRICE, TOTAL_BONUS_VALUE } from '@/lib/config'

export function ValueStack() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-slate-900">Lo que llevás hoy</h2>
      <div className="mt-8 rounded-2xl border-2 border-emerald-600 p-8">
        <p className="text-lg text-slate-700">
          Pagás solo el producto principal —{' '}
          <span className="font-bold text-emerald-700">US${PRODUCT_PRICE.toFixed(2)}</span> — y
          te llevás{' '}
          <span className="font-bold text-emerald-700">US${TOTAL_BONUS_VALUE.toFixed(2)}</span>{' '}
          en bonos, gratis.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- ValueStack.test.tsx
```

Expected: `2 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/components/ValueStack.tsx web/components/ValueStack.test.tsx
git commit -m "Add ValueStack section (no inflated anchor, computed from config)"
```

---

### Task 8: Bonuses section

**Files:**
- Create: `web/components/Bonuses.tsx`
- Test: `web/components/Bonuses.test.tsx`

**Interfaces:**
- Consumes: `BONUSES` from `@/lib/config`.
- Produces: `Bonuses()`. Used by `app/page.tsx` (Task 16).

- [ ] **Step 1: Write the failing test**

Create `web/components/Bonuses.test.tsx`:

```tsx
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
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- Bonuses.test.tsx
```

Expected: FAIL with "Cannot find module './Bonuses'".

- [ ] **Step 3: Write the component**

Create `web/components/Bonuses.tsx`:

```tsx
import { BONUSES } from '@/lib/config'

export function Bonuses() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900">Bonos incluidos, gratis</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {BONUSES.map((bonus) => (
          <div key={bonus.name} className="rounded-xl bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">{bonus.name}</h3>
            <p className="mt-2 text-slate-600">{bonus.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- Bonuses.test.tsx
```

Expected: `1 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/components/Bonuses.tsx web/components/Bonuses.test.tsx
git commit -m "Add Bonuses section"
```

---

### Task 9: Guarantee section

**Files:**
- Create: `web/components/Guarantee.tsx`
- Test: `web/components/Guarantee.test.tsx`

**Interfaces:**
- Consumes: nothing external.
- Produces: `Guarantee()`. Used by `app/page.tsx` (Task 16).

- [ ] **Step 1: Write the failing test**

Create `web/components/Guarantee.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Guarantee } from './Guarantee'

describe('Guarantee', () => {
  it('states the unconditional 7-day guarantee', () => {
    render(<Guarantee />)
    expect(screen.getByText(/7 días/i)).toBeInTheDocument()
    expect(screen.getByText(/100%/)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- Guarantee.test.tsx
```

Expected: FAIL with "Cannot find module './Guarantee'".

- [ ] **Step 3: Write the component**

Create `web/components/Guarantee.tsx`:

```tsx
export function Guarantee() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-slate-900">Garantía de 7 días</h2>
      <p className="mt-4 text-lg text-slate-700">
        Si en los primeros 7 días no lograste hacer el primer proyecto junto a tu hijo/a, te
        devolvemos el 100% de tu dinero. Sin formularios, sin preguntas.
      </p>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- Guarantee.test.tsx
```

Expected: `1 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/components/Guarantee.tsx web/components/Guarantee.test.tsx
git commit -m "Add Guarantee section"
```

---

### Task 10: FAQ accordion section

**Files:**
- Create: `web/components/Faq.tsx`
- Test: `web/components/Faq.test.tsx`

**Interfaces:**
- Consumes: `FAQS` from `@/lib/config`.
- Produces: `Faq()` — Client Component (`'use client'`) since it needs interactive expand/collapse. Used by `app/page.tsx` (Task 16).

- [ ] **Step 1: Write the failing test**

Create `web/components/Faq.test.tsx`:

```tsx
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
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- Faq.test.tsx
```

Expected: FAIL with "Cannot find module './Faq'".

- [ ] **Step 3: Write the component**

Create `web/components/Faq.tsx`:

```tsx
'use client'

import { useState } from 'react'
import { FAQS } from '@/lib/config'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900">Preguntas frecuentes</h2>
      <div className="mt-10 space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={faq.question} className="rounded-xl border border-slate-200 p-5">
              <button
                type="button"
                className="w-full text-left text-lg font-medium text-slate-900"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                {faq.question}
              </button>
              {isOpen && <p className="mt-3 text-slate-600">{faq.answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- Faq.test.tsx
```

Expected: `2 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/components/Faq.tsx web/components/Faq.test.tsx
git commit -m "Add FAQ accordion section"
```

---

### Task 11: Final CTA + urgency section

**Files:**
- Create: `web/components/FinalCta.tsx`
- Test: `web/components/FinalCta.test.tsx`

**Interfaces:**
- Consumes: `CtaButton` (Task 3).
- Produces: `FinalCta()`. Used by `app/page.tsx` (Task 16). Per spec §3: no countdown timer, no specific buyer-count claim.

- [ ] **Step 1: Write the failing test**

Create `web/components/FinalCta.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FinalCta } from './FinalCta'

describe('FinalCta', () => {
  it('shows the launch-price urgency badge and a CTA, without a countdown or buyer count', () => {
    render(<FinalCta />)
    expect(screen.getByText(/Precio de Lanzamiento/i)).toBeInTheDocument()
    expect(screen.getByText(/el precio sube/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Quiero el Método ahora/i })).toBeInTheDocument()
    expect(screen.queryByText(/\d+\s*(compradores|personas ya compraron)/i)).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- FinalCta.test.tsx
```

Expected: FAIL with "Cannot find module './FinalCta'".

- [ ] **Step 3: Write the component**

Create `web/components/FinalCta.tsx`:

```tsx
import { CtaButton } from './CtaButton'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center">
      <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
        Precio de Lanzamiento
      </span>
      <p className="mt-6 text-xl text-slate-800">
        Este es el precio de lanzamiento. Cuando cerremos esta fase, el precio sube.
      </p>
      <div className="mt-8">
        <CtaButton label="Quiero el Método ahora →" />
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- FinalCta.test.tsx
```

Expected: `1 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/components/FinalCta.tsx web/components/FinalCta.test.tsx
git commit -m "Add final CTA / urgency section"
```

---

### Task 12: Footer with legal links

**Files:**
- Create: `web/components/Footer.tsx`
- Test: `web/components/Footer.test.tsx`

**Interfaces:**
- Consumes: nothing external.
- Produces: `Footer()`. Used by `app/page.tsx` (Task 16). Links must be real Next.js `<Link>`s to `/terminos` and `/privacidad` (Tasks 13–14).

- [ ] **Step 1: Write the failing test**

Create `web/components/Footer.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('links to the terms and privacy pages', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Términos y Condiciones/i })).toHaveAttribute(
      'href',
      '/terminos'
    )
    expect(screen.getByRole('link', { name: /Política de Privacidad/i })).toHaveAttribute(
      'href',
      '/privacidad'
    )
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- Footer.test.tsx
```

Expected: FAIL with "Cannot find module './Footer'".

- [ ] **Step 3: Write the component**

Create `web/components/Footer.tsx`:

```tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-10 text-center text-sm text-slate-500">
      <nav className="flex justify-center gap-6">
        <Link href="/terminos" className="hover:underline">
          Términos y Condiciones
        </Link>
        <Link href="/privacidad" className="hover:underline">
          Política de Privacidad
        </Link>
      </nav>
      <p className="mt-4">De Jugador a Creador™</p>
    </footer>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- Footer.test.tsx
```

Expected: `1 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/components/Footer.tsx web/components/Footer.test.tsx
git commit -m "Add Footer with legal links"
```

---

### Task 13: Terms page (/terminos)

**Files:**
- Create: `web/app/terminos/page.tsx`
- Test: `web/app/terminos/page.test.tsx`

**Interfaces:**
- Consumes: `CONTACT_EMAIL`, `LAST_UPDATED` from `@/lib/config`.
- Produces: default-exported `Page()` at route `/terminos`.

- [ ] **Step 1: Write the failing test**

Create `web/app/terminos/page.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import { CONTACT_EMAIL } from '@/lib/config'

describe('Términos y Condiciones page', () => {
  it('covers delivery, guarantee, and jurisdiction, and shows the contact email', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { name: /Términos y Condiciones/i })).toBeInTheDocument()
    expect(screen.getByText(/se procesa a través de Hotmart/i)).toBeInTheDocument()
    expect(screen.getByText(/garantía incondicional de 7 días/i)).toBeInTheDocument()
    expect(screen.getByText(/legislación del país de residencia/i)).toBeInTheDocument()
    expect(screen.getByText(CONTACT_EMAIL)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- app/terminos/page.test.tsx
```

Expected: FAIL with "Cannot find module './page'".

- [ ] **Step 3: Write the page**

Create `web/app/terminos/page.tsx`:

```tsx
import { CONTACT_EMAIL, LAST_UPDATED } from '@/lib/config'

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-slate-700">
      <h1 className="text-3xl font-bold text-slate-900">Términos y Condiciones</h1>
      <p className="mt-2 text-sm text-slate-500">Última actualización: {LAST_UPDATED}</p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">1. Sobre este producto</h2>
      <p className="mt-2">
        &ldquo;De Jugador a Creador™&rdquo; es un producto digital (e-book y materiales
        complementarios) entregado en formato digital tras la compra.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">2. Entrega</h2>
      <p className="mt-2">
        La compra se procesa a través de Hotmart, plataforma responsable del checkout, la
        facturación y la entrega del acceso al contenido digital. El acceso es inmediato tras la
        confirmación del pago.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">3. Garantía y reembolsos</h2>
      <p className="mt-2">
        Ofrecemos una garantía incondicional de 7 días desde la fecha de compra. El reembolso se
        solicita directamente a través de la plataforma Hotmart.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">4. Uso del contenido</h2>
      <p className="mt-2">
        El contenido es para uso personal y familiar. Está prohibida su reventa, redistribución o
        publicación sin autorización previa.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">5. Limitación de responsabilidad</h2>
      <p className="mt-2">
        Este producto es un material educativo. No sustituye la supervisión de un adulto
        responsable durante la realización de los proyectos.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">6. Jurisdicción</h2>
      <p className="mt-2">
        Estos términos se rigen por la legislación del país de residencia del consumidor.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">7. Contacto</h2>
      <p className="mt-2">Para consultas, escribinos a {CONTACT_EMAIL}.</p>
    </main>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- app/terminos/page.test.tsx
```

Expected: `1 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/app/terminos/
git commit -m "Add Términos y Condiciones page"
```

---

### Task 14: Privacy page (/privacidad)

**Files:**
- Create: `web/app/privacidad/page.tsx`
- Test: `web/app/privacidad/page.test.tsx`

**Interfaces:**
- Consumes: `CONTACT_EMAIL`, `LAST_UPDATED` from `@/lib/config`.
- Produces: default-exported `Page()` at route `/privacidad`.

- [ ] **Step 1: Write the failing test**

Create `web/app/privacidad/page.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import { CONTACT_EMAIL } from '@/lib/config'

describe('Política de Privacidad page', () => {
  it('states no PII is stored on-site and Hotmart handles payment data', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { name: /Política de Privacidad/i })).toBeInTheDocument()
    expect(screen.getByText(/no recopilamos ni almacenamos datos personales/i)).toBeInTheDocument()
    expect(screen.getByText(/a cargo de Hotmart/i)).toBeInTheDocument()
    expect(screen.getByText(CONTACT_EMAIL)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- app/privacidad/page.test.tsx
```

Expected: FAIL with "Cannot find module './page'".

- [ ] **Step 3: Write the page**

Create `web/app/privacidad/page.tsx`:

```tsx
import { CONTACT_EMAIL, LAST_UPDATED } from '@/lib/config'

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-slate-700">
      <h1 className="text-3xl font-bold text-slate-900">Política de Privacidad</h1>
      <p className="mt-2 text-sm text-slate-500">Última actualización: {LAST_UPDATED}</p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">1. Qué datos recopilamos</h2>
      <p className="mt-2">
        Esta página utiliza herramientas de análisis (como píxeles de Meta/Facebook) para medir
        el rendimiento de los anuncios. No recopilamos ni almacenamos datos personales
        identificables en este sitio — el pago y los datos del comprador quedan a cargo de
        Hotmart, plataforma responsable del checkout.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">2. Cookies</h2>
      <p className="mt-2">
        Podemos usar cookies de terceros (Meta Ads) para medir conversiones. Podés desactivarlas
        desde la configuración de tu navegador.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">3. Terceros</h2>
      <p className="mt-2">
        Los datos de pago y contacto necesarios para la entrega del producto son gestionados
        exclusivamente por Hotmart, conforme a su propia política de privacidad.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">4. Contacto</h2>
      <p className="mt-2">Para consultas sobre privacidad, escribinos a {CONTACT_EMAIL}.</p>
    </main>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- app/privacidad/page.test.tsx
```

Expected: `1 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/app/privacidad/
git commit -m "Add Política de Privacidad page"
```

---

### Task 15: Root layout + metadata

**Files:**
- Modify: `web/app/layout.tsx`
- Test: `web/app/metadata.test.ts`

**Interfaces:**
- Produces: `metadata` export (Next.js `Metadata` object) with Spanish title/description, and a `RootLayout` that sets `<html lang="es">`.

- [ ] **Step 1: Write the failing test**

Create `web/app/metadata.test.ts`:

```ts
import { describe, it, expect } from 'vitest'
import { metadata } from './layout'

describe('root layout metadata', () => {
  it('sets a Spanish title and description for the offer', () => {
    expect(String(metadata.title)).toMatch(/De Jugador a Creador/)
    expect(String(metadata.description)).toMatch(/robótica/i)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- app/metadata.test.ts
```

Expected: FAIL — either module not found or `metadata.title` doesn't match yet (depends on `create-next-app`'s default layout content).

- [ ] **Step 3: Update the layout**

Replace the contents of `web/app/layout.tsx` (created by `create-next-app` in Task 1) with:

```tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'De Jugador a Creador™ — Robótica en casa para padres sin experiencia técnica',
  description:
    'El método para transformar el tiempo de pantalla de tu hijo en su primer proyecto de robótica, sin que sepas nada de tecnología.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- app/metadata.test.ts
```

Expected: `1 passed`.

- [ ] **Step 5: Commit**

```bash
git add web/app/layout.tsx web/app/metadata.test.ts
git commit -m "Set Spanish metadata and lang=es on root layout"
```

---

### Task 16: Compose the home page

**Files:**
- Modify: `web/app/page.tsx`
- Test: `web/app/page.test.tsx`

**Interfaces:**
- Consumes: `Hero`, `PainAgitation`, `Method`, `ValueStack`, `Bonuses`, `Guarantee`, `Faq`, `FinalCta`, `Footer` (Tasks 4–12), `HOTMART_CHECKOUT_URL`, `BONUSES`, `FAQS` from `@/lib/config`.
- Produces: default-exported `Home()` at route `/` — the full sales page.

- [ ] **Step 1: Write the failing test**

Create `web/app/page.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import { HOTMART_CHECKOUT_URL, BONUSES, FAQS } from '@/lib/config'

describe('Home page', () => {
  it('renders every section and both CTAs point to the same Hotmart URL', () => {
    render(<Page />)

    expect(
      screen.getByText(/El método que convierte la culpa por el celular de tu hijo/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/En casa pasaba lo mismo/i)).toBeInTheDocument()
    expect(screen.getByText('El Método')).toBeInTheDocument()
    expect(screen.getByText(/Lo que llevás hoy/i)).toBeInTheDocument()
    expect(screen.getByText(/Garantía de 7 días/i)).toBeInTheDocument()

    const ctaLinks = screen.getAllByRole('link', { name: /Quiero el Método ahora/i })
    expect(ctaLinks).toHaveLength(2)
    ctaLinks.forEach((link) => expect(link).toHaveAttribute('href', HOTMART_CHECKOUT_URL))

    BONUSES.forEach((bonus) => expect(screen.getByText(bonus.name)).toBeInTheDocument())
    FAQS.forEach((faq) => expect(screen.getByText(faq.question)).toBeInTheDocument())

    expect(screen.getByRole('link', { name: /Términos y Condiciones/i })).toBeInTheDocument()
  })

  it('never renders order-bump content on the landing page', () => {
    render(<Page />)
    expect(screen.queryByText(/order bump/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/US\$3[.,]90/)).not.toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd web && npm test -- app/page.test.tsx
```

Expected: FAIL (the scaffolded `page.tsx` from Task 1 still has `create-next-app`'s default content).

- [ ] **Step 3: Write the page**

Replace the contents of `web/app/page.tsx` with:

```tsx
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
```

- [ ] **Step 4: Run test to verify it passes**

```bash
cd web && npm test -- app/page.test.tsx
```

Expected: `2 passed`.

- [ ] **Step 5: Run the full test suite**

```bash
cd web && npm test
```

Expected: all tests pass (Tasks 2–16 combined).

- [ ] **Step 6: Commit**

```bash
git add web/app/page.tsx web/app/page.test.tsx
git commit -m "Compose full landing page from all sections"
```

---

### Task 17: Build check and Vercel deploy

**Files:**
- None created — verification task.

**Interfaces:**
- Consumes: the entire `web/` app from Tasks 1–16.
- Produces: a live Vercel preview URL.

- [ ] **Step 1: Run the production build**

```bash
cd web && npm run build
```

Expected: build succeeds with no type errors (exit code 0).

- [ ] **Step 2: Deploy a preview to Vercel**

```bash
cd web && npx vercel --yes
```

Expected: CLI prints a `https://*.vercel.app` preview URL. If this is the first deploy, `vercel` will prompt to link/create a project — accept the defaults (link to the `Robotica-para-Crian-as` scope, project name `de-jugador-a-creador` or similar).

- [ ] **Step 3: Manually verify the preview**

Open the printed preview URL and confirm:
- All 9 sections render in order (Hero → Footer).
- Both CTA buttons and the final CTA button open `HOTMART_CHECKOUT_URL` in a new tab.
- `/terminos` and `/privacidad` load with real content.
- FAQ questions expand/collapse on click.

- [ ] **Step 4: Commit the Vercel project config that gets generated**

```bash
git add web/.vercel 2>/dev/null || true
git status
```

Note: `.vercel/` typically contains a `project.json` (safe to commit) — verify no secrets are present before committing; `vercel` does not write tokens into this folder by default.

```bash
git add web/
git commit -m "Add Vercel project link" --allow-empty
git push
```

---

## Self-Review

**Spec coverage:** All 9 landing-page sections (spec §3), the value-stack honesty rule (spec §2, resolved), the gender-neutral narrator (spec §2, resolved), the unblocked país FAQ answer (resolved in this session), the "no order bumps on the landing page" rule (spec §5), and the two legal routes (spec §3, section 9) each map to a task above (Tasks 4–14, 16). Domain registration and product mockups remain explicitly out of scope per spec §4/§6 and are not tasked here.

**Placeholder scan:** `HOTMART_CHECKOUT_URL` and `CONTACT_EMAIL` are intentionally placeholder-shaped constants (matches the spec's own documented placeholder pattern) — every other string in every task is real, final copy.

**Type consistency:** `Bonus`, `Module`, and `FaqItem` are defined once in `lib/config.ts` (Task 2) and only ever imported, never redefined, in Tasks 6, 8, and 10.
