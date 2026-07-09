# Landing Page Remodel (12 Sections) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remodel the 9-section landing page into the 12-section structure approved in `docs/superpowers/specs/2026-07-09-landing-page-remodel-design.md`, adding a deepened problem section, a "qué es + para quién es" section, and an honest social-proof placeholder, while expanding the Hero, FAQ, and final CTA copy.

**Architecture:** Pure Next.js App Router presentational components, same pattern as the existing 9 sections — one `.tsx` component per section, content sourced from `web/lib/config.ts` where the content is data-driven (modules, bonuses), inline JSX copy where it's one-off prose. `app/page.tsx` composes all 12 sections in order; `app/page.test.tsx` asserts presence and strict DOM order via `container.textContent` + `indexOf`.

**Tech Stack:** Next.js (App Router, Turbopack), TypeScript, Tailwind CSS, Vitest + React Testing Library, `@testing-library/user-event`.

## Global Constraints

- **No fake testimonials:** `ProvaSocial.tsx` renders only the honest "coming soon" placeholder copy from spec §7 — never a fabricated name, photo, or city.
- **No inflated value anchor:** `FinalCta.tsx` never sums product + bonuses into one "valor total" figure. It keeps the existing non-summed sentence: "Pagas solo el producto principal (US$6,90) y te llevas US$27,60 en bonos, gratis."
- **One avatar, three pain variations:** The 3 cards in `ParaQuienEs.tsx` are 3 different pain points of the *same* parent avatar (culpa de pantalla / miedo a la tecnología / falta de tiempo) — not 3 different personas or stock photos.
- **Neutral "tú" Spanish, no voseo, no Rioplatense regionalisms:** No "vos/tenés/podés/necesitás", no "acá" (use "aquí"), no "heladera", no "bombilla", no "jardín de infantes". Applies to every new string of copy written in this plan.
- **No new image assets:** `Problema.tsx`, `ParaQuienEs.tsx`, and `ProvaSocial.tsx` use text and inline SVG only — zero new `next/image` usage, per spec §11 ("os cards da seção usam ícones (SVG/inline), não fotos").
- **Single source of truth:** `MODULES`, `BONUSES`, `FAQS` are only ever imported from `@/lib/config` and iterated — never hardcoded a second time in a component.
- **FinalCta checklist data rule (spec §9, exact):** the module line is one aggregated line built from `MODULES.length` (do **not** map/iterate `MODULES` individually); the bonus lines are built from `BONUSES.map`, using `bonus.name` (never `bonus.description` or `bonus.value`).
- **Exact copy strings are locked.** Every quoted string in this plan's Steps is the exact, spec-approved text — implementers must not paraphrase it. If a test's `getByText` match is ambiguous, fix the query (`getByRole`, `{ selector }`, `{ exact: false }`, a scoped `within()`), never reword the copy.

## File Structure

```
web/
  lib/
    config.ts                    (MODIFY — expand MODULES descriptions)
  components/
    Hero.tsx                     (MODIFY — add trust line)
    Hero.test.tsx                (MODIFY — assert trust line)
    Faq.tsx                      (MODIFY — rename heading)
    Faq.test.tsx                 (MODIFY — assert new heading)
    FinalCta.tsx                 (MODIFY — add full checklist)
    FinalCta.test.tsx            (MODIFY — assert checklist)
    Problema.tsx                 (NEW)
    Problema.test.tsx            (NEW)
    ParaQuienEs.tsx               (NEW)
    ParaQuienEs.test.tsx          (NEW)
    ProvaSocial.tsx              (NEW)
    ProvaSocial.test.tsx         (NEW)
  app/
    page.tsx                     (MODIFY — 12-section composition)
    page.test.tsx                (MODIFY — new markers + order)
```

No changes to `PainAgitation.tsx`, `Method.tsx`, `ValueStack.tsx`, `Bonuses.tsx`, `Guarantee.tsx`, `Footer.tsx`, `CtaButton.tsx`, `Method.test.tsx` (it reads `MODULES` dynamically, so Task 1's description changes propagate automatically since `Method.tsx` renders the full, untruncated description).

---

### Task 1: Expand module descriptions in config

**Files:**
- Modify: `web/lib/config.ts:47-68` (the `MODULES` array)

**Interfaces:**
- Consumes: nothing new.
- Produces: no interface change — `Module` shape (`{ name: string; description: string }`) is unchanged, only the 5 `description` values change. `Method.tsx` (unmodified) renders `mod.description` verbatim, so this task alone updates what's visible in the existing "El Método" section.

- [ ] **Step 1: Write the failing test**

Add this test to `web/lib/config.test.ts` (append inside the existing `describe('config', ...)` block, after the `'defines exactly 5 modules'` test):

```ts
  it('gives each module a fully expanded description (not the old one-liner)', () => {
    const primerContacto = MODULES.find((m) => m.name === 'Primer Contacto™')
    expect(primerContacto?.description).toContain('simulador 100% gratuito')
    expect(primerContacto?.description).toContain('sin haber gastado ni un peso')
  })
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd web && npx vitest run lib/config.test.ts`
Expected: FAIL — `primerContacto?.description` does not contain "simulador 100% gratuito" (current description is "Semana 1 en el simulador gratuito — sin gastar nada, primer logro en 20 minutos.")

- [ ] **Step 3: Replace the MODULES array**

In `web/lib/config.ts`, replace lines 47-68 (the full `export const MODULES: Module[] = [...]` block) with:

```ts
export const MODULES: Module[] = [
  {
    name: 'Primer Contacto™',
    description:
      'Antes de gastar en cualquier kit, tú y tu hijo o hija arman su primer circuito juntos en un simulador 100% gratuito. En 20 minutos ven un LED parpadear por primera vez — la prueba de que esto va a funcionar, sin haber gastado ni un peso.',
  },
  {
    name: 'Caja de Herramientas del Creador™',
    description:
      'Lo mínimo de electrónica y robótica que necesitas saber, explicado con analogías cotidianas — nunca con jerga técnica. No es un curso de ingeniería: es justo lo necesario para acompañar, ni una palabra más.',
  },
  {
    name: 'Ritual Sin Pantalla™',
    description:
      'El sistema de sesiones de 30 a 45 minutos que reemplaza el tiempo de pantalla sin que tengas que inventar nada cada semana. Incluye el calendario semanal listo para empezar — diseñado para que el cambio ocurra solo, sin peleas y sin improvisación.',
  },
  {
    name: 'Proyectos Manos a la Obra™',
    description:
      '8 proyectos guiados paso a paso, del más fácil al más desafiante, cada uno con su propia estructura clara: qué vas a construir, cómo simularlo, y qué hacer si algo no funciona a la primera.',
  },
  {
    name: 'Vitrina Familiar™',
    description:
      'Cómo documentar y celebrar lo que tu hijo o hija creó — la foto, el video, y el mensaje que convierte un circuito en un recuerdo del que van a hablar durante semanas.',
  },
]
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd web && npx vitest run lib/config.test.ts components/Method.test.tsx`
Expected: PASS — both files, `Method.test.tsx` passes unmodified because it reads `mod.description` dynamically from config.

- [ ] **Step 5: Commit**

```bash
cd web && git add lib/config.ts lib/config.test.ts
git commit -m "content: expand module descriptions in landing page config"
```

---

### Task 2: Add trust line to Hero

**Files:**
- Modify: `web/components/Hero.tsx`
- Modify: `web/components/Hero.test.tsx`

**Interfaces:**
- Consumes: nothing new.
- Produces: no interface change.

- [ ] **Step 1: Write the failing test**

Add to `web/components/Hero.test.tsx`, inside the existing `it(...)` block, after the CTA assertion:

```tsx
    expect(
      screen.getByText(
        'Garantía de 7 días incondicional · Sin kit físico · Empieza gratis en el simulador'
      )
    ).toBeInTheDocument()
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd web && npx vitest run components/Hero.test.tsx`
Expected: FAIL — text not found.

- [ ] **Step 3: Add the trust line**

In `web/components/Hero.tsx`, replace:

```tsx
        <div className="mt-10">
          <CtaButton label="Quiero el Método ahora →" />
        </div>
```

with:

```tsx
        <div className="mt-10">
          <CtaButton label="Quiero el Método ahora →" />
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Garantía de 7 días incondicional · Sin kit físico · Empieza gratis en el simulador
        </p>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd web && npx vitest run components/Hero.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
cd web && git add components/Hero.tsx components/Hero.test.tsx
git commit -m "feat: add trust line below Hero CTA"
```

---

### Task 3: Rename FAQ heading

**Files:**
- Modify: `web/components/Faq.tsx:11`
- Modify: `web/components/Faq.test.tsx`

**Interfaces:**
- Consumes: nothing new.
- Produces: the FAQ section's DOM order marker changes from `'Preguntas frecuentes'` to `'Tal vez estás pensando'` — Task 8 (`app/page.test.tsx`) depends on this exact new heading text.

- [ ] **Step 1: Write the failing test**

Add to `web/components/Faq.test.tsx`, as a new test inside `describe('Faq', ...)`:

```tsx
  it('renders the "Tal vez estás pensando..." heading', () => {
    render(<Faq />)
    expect(screen.getByText('Tal vez estás pensando...')).toBeInTheDocument()
  })
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd web && npx vitest run components/Faq.test.tsx`
Expected: FAIL — text not found (current heading is "Preguntas frecuentes").

- [ ] **Step 3: Rename the heading**

In `web/components/Faq.tsx:11`, replace:

```tsx
        <h2 className="text-center text-3xl font-bold text-slate-900">Preguntas frecuentes</h2>
```

with:

```tsx
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Tal vez estás pensando...
        </h2>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd web && npx vitest run components/Faq.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
cd web && git add components/Faq.tsx components/Faq.test.tsx
git commit -m "content: rename FAQ heading to 'Tal vez estás pensando...'"
```

---

### Task 4: Expand FinalCta with full checklist

**Files:**
- Modify: `web/components/FinalCta.tsx`
- Modify: `web/components/FinalCta.test.tsx`

**Interfaces:**
- Consumes: `MODULES` and `BONUSES` from `@/lib/config` (existing exports, unchanged shape: `Module { name, description }`, `Bonus { name, value, description, image }`).
- Produces: no interface change.

- [ ] **Step 1: Write the failing test**

Add to `web/components/FinalCta.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FinalCta } from './FinalCta'
import { BONUSES, MODULES } from '@/lib/config'

describe('FinalCta', () => {
  it('shows the launch-price urgency badge and a CTA, without a countdown or buyer count', () => {
    render(<FinalCta />)
    expect(screen.getByText(/Precio de Lanzamiento/i, { selector: 'span' })).toBeInTheDocument()
    expect(screen.getByText(/el precio sube/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Quiero el Método ahora/i })).toBeInTheDocument()
    expect(screen.queryByText(/\d+\s*(compradores|personas ya compraron)/i)).not.toBeInTheDocument()
  })

  it('shows the full checklist: one aggregated module line plus one line per bonus', () => {
    render(<FinalCta />)
    expect(screen.getByText('¡Llévate TODO esto hoy!')).toBeInTheDocument()
    expect(
      screen.getByText(`✅ Producto principal — ${MODULES.length} módulos completos`)
    ).toBeInTheDocument()
    BONUSES.forEach((bonus) => {
      expect(screen.getByText(`✅ Bono: ${bonus.name}`)).toBeInTheDocument()
    })
    expect(
      screen.getByText(
        'Pagas solo el producto principal (US$6,90) y te llevas US$27,60 en bonos, gratis.'
      )
    ).toBeInTheDocument()
  })
})
```

This fully replaces the current file (it only adds the `MODULES`/`BONUSES` import and the second test — the first test and its imports are unchanged).

- [ ] **Step 2: Run test to verify it fails**

Run: `cd web && npx vitest run components/FinalCta.test.tsx`
Expected: FAIL — checklist heading and lines not found (current component has no checklist).

- [ ] **Step 3: Add the checklist**

Replace the full contents of `web/components/FinalCta.tsx` with:

```tsx
import Image from 'next/image'
import { CtaButton } from './CtaButton'
import { BONUSES, MODULES } from '@/lib/config'

export function FinalCta() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center">
      <Image
        src="/images/publico-alvo-2.png"
        alt="Un niño sostiene con orgullo el circuito que acaba de crear"
        width={1024}
        height={1536}
        className="mx-auto h-64 w-auto rounded-2xl object-cover"
      />
      <h2 className="mt-10 text-3xl font-bold text-slate-900">¡Llévate TODO esto hoy!</h2>
      <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-lg text-slate-700">
        <li>
          ✅ Producto principal — {MODULES.length} módulos completos
        </li>
        {BONUSES.map((bonus) => (
          <li key={bonus.name}>✅ Bono: {bonus.name}</li>
        ))}
      </ul>
      <p className="mt-8 text-xl text-slate-800">
        Pagas solo el producto principal (US$6,90) y te llevas US$27,60 en bonos, gratis.
      </p>
      <span className="mt-8 inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
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

Run: `cd web && npx vitest run components/FinalCta.test.tsx`
Expected: PASS — both tests.

- [ ] **Step 5: Commit**

```bash
cd web && git add components/FinalCta.tsx components/FinalCta.test.tsx
git commit -m "feat: add full offer checklist to FinalCta"
```

---

### Task 5: Create Problema section

**Files:**
- Create: `web/components/Problema.tsx`
- Create: `web/components/Problema.test.tsx`

**Interfaces:**
- Consumes: nothing (static copy, no config import).
- Produces: `export function Problema()` from `@/components/Problema` — a section component with no props, same pattern as `PainAgitation`. Task 8 imports this and renders it between `Hero` and `PainAgitation`. Its DOM-order marker text is `'El problema no siempre'`.

- [ ] **Step 1: Write the failing test**

Create `web/components/Problema.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Problema } from './Problema'

describe('Problema', () => {
  it('renders the deepened problem narrative', () => {
    render(<Problema />)
    expect(
      screen.getByText('¿Por qué a algunos padres les funciona y a otros no?')
    ).toBeInTheDocument()
    expect(screen.getByText(/El problema no siempre es la falta de tiempo/i)).toBeInTheDocument()
    expect(screen.getByText(/un ritual que tu hijo va a pedir/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd web && npx vitest run components/Problema.test.tsx`
Expected: FAIL — `Cannot find module './Problema'` (file doesn't exist yet).

- [ ] **Step 3: Create the component**

Create `web/components/Problema.tsx`:

```tsx
export function Problema() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900">
        ¿Por qué a algunos padres les funciona y a otros no?
      </h2>
      <div className="mt-6 space-y-4 text-lg text-slate-600">
        <p>
          El problema no siempre es la falta de tiempo. Tampoco es solo el trabajo, el cansancio
          o que tu hijo prefiera la pantalla. Muchas familias no logran cambiar el hábito de
          pantalla porque no tienen un sistema que conecte el momento correcto, la actividad
          correcta y la confianza para guiarla — sin ser expertos.
        </p>
        <p>
          Sin ese sistema, compras un curso, bajas una app, prometes &ldquo;este fin de semana lo
          hacemos&rdquo;... pero la pantalla vuelve a ganar, porque no hay un ritual claro que
          sostenga el cambio.
        </p>
        <p>
          De Jugador a Creador™ fue creado para darte ese sistema: no una regla más para pelear,
          sino un ritual que tu hijo va a pedir.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd web && npx vitest run components/Problema.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
cd web && git add components/Problema.tsx components/Problema.test.tsx
git commit -m "feat: add Problema (deepened problem) landing page section"
```

---

### Task 6: Create ParaQuienEs section

**Files:**
- Create: `web/components/ParaQuienEs.tsx`
- Create: `web/components/ParaQuienEs.test.tsx`

**Interfaces:**
- Consumes: nothing (static copy + 3 inline SVG icons defined locally, no config import).
- Produces: `export function ParaQuienEs()` from `@/components/ParaQuienEs` — a section component with no props. Task 8 imports this and renders it between `PainAgitation` and `Method`. Its DOM-order marker text is `'¿Qué es De Jugador'`.

- [ ] **Step 1: Write the failing test**

Create `web/components/ParaQuienEs.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ParaQuienEs } from './ParaQuienEs'

describe('ParaQuienEs', () => {
  it('renders the definition and all 3 pain cards for the same avatar', () => {
    render(<ParaQuienEs />)
    expect(screen.getByText('¿Qué es De Jugador a Creador™?')).toBeInTheDocument()
    expect(
      screen.getByText(/pase de consumir pantalla a crear con sus propias manos/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText('El papá o la mamá que siente culpa por la pantalla')
    ).toBeInTheDocument()
    expect(screen.getByText('El papá o la mamá que "no es de tecnología"')).toBeInTheDocument()
    expect(screen.getByText('El papá o la mamá sin tiempo de sobra')).toBeInTheDocument()
  })

  it('renders the "es para ti" and "no es para ti" qualification lists', () => {
    render(<ParaQuienEs />)
    expect(screen.getByText('Es para ti si:')).toBeInTheDocument()
    expect(
      screen.getByText('Quieres reemplazar tiempo de pantalla sin pelear cada día')
    ).toBeInTheDocument()
    expect(screen.getByText('No es para ti si:')).toBeInTheDocument()
    expect(
      screen.getByText('Buscas que tu hijo se vuelva programador profesional en una semana')
    ).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd web && npx vitest run components/ParaQuienEs.test.tsx`
Expected: FAIL — `Cannot find module './ParaQuienEs'`.

- [ ] **Step 3: Create the component**

Create `web/components/ParaQuienEs.tsx`:

```tsx
const CARDS = [
  {
    title: 'El papá o la mamá que siente culpa por la pantalla',
    quote: 'Sabes que hay demasiada pantalla, pero cada intento de cambiarlo termina en pelea.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="mx-auto h-8 w-8 text-emerald-600"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'El papá o la mamá que "no es de tecnología"',
    quote: 'Nunca tocaste un Arduino y no sabrías por dónde empezar, aunque quisieras.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="mx-auto h-8 w-8 text-emerald-600"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path
          d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1.5 1-1.5 2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'El papá o la mamá sin tiempo de sobra',
    quote:
      'Entre trabajo y rutina, cualquier actividad nueva parece un proyecto de fin de semana entero.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="mx-auto h-8 w-8 text-emerald-600"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const ES_PARA_TI = [
  'Quieres reemplazar tiempo de pantalla sin pelear cada día',
  'Nunca tocaste electrónica y te da un poco de miedo empezar',
  'Quieres algo que puedas hacer con 30-45 minutos, no un curso de meses',
  'Prefieres probar gratis en un simulador antes de gastar en un kit',
  'Quieres ver a tu hijo o hija orgulloso de algo que construyó con sus manos',
]

const NO_ES_PARA_TI = [
  'Buscas que tu hijo se vuelva programador profesional en una semana',
  'No estás dispuesto a sentarte 30 minutos junto a él o ella',
  'Ya tienes un ritual sin pantalla que funciona perfecto',
  'Esperas que esto reemplace toda la pantalla de golpe, sin proceso',
]

export function ParaQuienEs() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-center text-3xl font-bold text-slate-900">
        ¿Qué es De Jugador a Creador™?
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-600">
        Es el método completo — con el ritual, los proyectos y las herramientas — para que tu
        hijo o hija pase de consumir pantalla a crear con sus propias manos, sin que tú tengas
        que saber nada de tecnología.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {CARDS.map((card) => (
          <div key={card.title} className="rounded-xl border border-slate-200 p-6 text-center">
            {card.icon}
            <h3 className="mt-4 text-base font-semibold text-slate-900">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{card.quote}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Es para ti si:</h3>
          <ul className="mt-4 space-y-2 text-slate-600">
            {ES_PARA_TI.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-emerald-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">No es para ti si:</h3>
          <ul className="mt-4 space-y-2 text-slate-600">
            {NO_ES_PARA_TI.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-slate-400">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd web && npx vitest run components/ParaQuienEs.test.tsx`
Expected: PASS — both tests.

- [ ] **Step 5: Commit**

```bash
cd web && git add components/ParaQuienEs.tsx components/ParaQuienEs.test.tsx
git commit -m "feat: add ParaQuienEs (qué es + para quién es) landing page section"
```

---

### Task 7: Create ProvaSocial placeholder section

**Files:**
- Create: `web/components/ProvaSocial.tsx`
- Create: `web/components/ProvaSocial.test.tsx`

**Interfaces:**
- Consumes: nothing (static copy, no config import).
- Produces: `export function ProvaSocial()` from `@/components/ProvaSocial` — a section component with no props. Task 8 imports this and renders it between `Bonuses` and `Faq`. Its DOM-order marker text is `'Muy pronto'`.

- [ ] **Step 1: Write the failing test**

Create `web/components/ProvaSocial.test.tsx`:

```tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProvaSocial } from './ProvaSocial'

describe('ProvaSocial', () => {
  it('renders an honest coming-soon placeholder, never a fabricated testimonial', () => {
    render(<ProvaSocial />)
    expect(
      screen.getByText('Muy pronto: las historias de las primeras familias')
    ).toBeInTheDocument()
    expect(
      screen.getByText(/tu historia puede estar aquí/i)
    ).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd web && npx vitest run components/ProvaSocial.test.tsx`
Expected: FAIL — `Cannot find module './ProvaSocial'`.

- [ ] **Step 3: Create the component**

Create `web/components/ProvaSocial.tsx`:

```tsx
export function ProvaSocial() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-slate-900">
        Muy pronto: las historias de las primeras familias
      </h2>
      <p className="mt-6 text-lg text-slate-600">
        Este espacio se va a llenar pronto con las fotos y las palabras de las primeras familias
        que ya probaron el Método. Si eres de las primeras, tu historia puede estar aquí.
      </p>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd web && npx vitest run components/ProvaSocial.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
cd web && git add components/ProvaSocial.tsx components/ProvaSocial.test.tsx
git commit -m "feat: add ProvaSocial honest placeholder landing page section"
```

---

### Task 8: Recompose page into 12-section order

**Files:**
- Modify: `web/app/page.tsx`
- Modify: `web/app/page.test.tsx`

**Interfaces:**
- Consumes: `Problema` from `@/components/Problema` (Task 5), `ParaQuienEs` from `@/components/ParaQuienEs` (Task 6), `ProvaSocial` from `@/components/ProvaSocial` (Task 7) — all no-prop section components. Also consumes the updated `Faq` heading text from Task 3 (`'Tal vez estás pensando...'`) and existing exports `HOTMART_CHECKOUT_URL`, `BONUSES`, `FAQS` from `@/lib/config`.
- Produces: final page composition — no later task depends on this one.

This task requires Tasks 1-7 to be complete and committed first (it imports all three new components and depends on the Task 3 heading rename for its order-test markers).

- [ ] **Step 1: Write the failing test**

Replace the full contents of `web/app/page.test.tsx` with:

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
    expect(
      screen.getByText('¿Por qué a algunos padres les funciona y a otros no?')
    ).toBeInTheDocument()
    expect(screen.getByText(/En casa pasaba lo mismo/i)).toBeInTheDocument()
    expect(screen.getByText('¿Qué es De Jugador a Creador™?')).toBeInTheDocument()
    expect(screen.getByText('El Método')).toBeInTheDocument()
    expect(screen.getByText(/Lo que llevas hoy/i)).toBeInTheDocument()
    expect(
      screen.getByText('Muy pronto: las historias de las primeras familias')
    ).toBeInTheDocument()
    expect(screen.getByText('Tal vez estás pensando...')).toBeInTheDocument()
    expect(screen.getByText(/Garantía de 7 días/i)).toBeInTheDocument()

    const ctaLinks = screen.getAllByRole('link', { name: /Quiero el Método ahora/i })
    expect(ctaLinks).toHaveLength(2)
    ctaLinks.forEach((link) => expect(link).toHaveAttribute('href', HOTMART_CHECKOUT_URL))

    BONUSES.forEach((bonus) => expect(screen.getAllByText(bonus.name).length).toBeGreaterThan(0))
    FAQS.forEach((faq) => expect(screen.getByText(faq.question)).toBeInTheDocument())

    expect(screen.getByRole('link', { name: /Términos y Condiciones/i })).toBeInTheDocument()
  })

  it('never renders order-bump content on the landing page', () => {
    render(<Page />)
    expect(screen.queryByText(/order bump/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/US\$3[.,]90/)).not.toBeInTheDocument()
  })

  it('renders sections in the correct order', () => {
    const { container } = render(<Page />)
    const text = container.textContent ?? ''

    const indices = {
      hero: text.indexOf('El método que convierte la culpa por el celular de tu hijo'),
      problema: text.indexOf('El problema no siempre'),
      pain: text.indexOf('En casa pasaba lo mismo'),
      paraQuienEs: text.indexOf('¿Qué es De Jugador'),
      method: text.indexOf('El Método'),
      valueStack: text.indexOf('Lo que llevas hoy'),
      bonuses: text.indexOf('Bonos incluidos, gratis'),
      provaSocial: text.indexOf('Muy pronto'),
      faq: text.indexOf('Tal vez estás pensando'),
      guarantee: text.indexOf('Garantía de 7 días'),
      finalCta: text.indexOf('Precio de Lanzamiento'),
      footer: text.indexOf('Términos y Condiciones'),
    }

    Object.entries(indices).forEach(([section, index]) => {
      expect(index, `expected to find marker text for "${section}"`).toBeGreaterThanOrEqual(0)
    })

    const ordered = Object.values(indices)
    for (let i = 1; i < ordered.length; i++) {
      expect(ordered[i]).toBeGreaterThan(ordered[i - 1])
    }
  })
})
```

Note: the `BONUSES.forEach` assertion in the first test changes from `getByText` to `getAllByText(...).length > 0` — with Task 4's `FinalCta` checklist now also rendering every `bonus.name` (as `✅ Bono: <name>`), each bonus name appears twice on the page (once in `Bonuses.tsx`, once in `FinalCta.tsx`'s checklist line), so a single-match `getByText` would throw.

- [ ] **Step 2: Run test to verify it fails**

Run: `cd web && npx vitest run app/page.test.tsx`
Expected: FAIL — `Cannot find module '@/components/Problema'` (or similar), since `page.tsx` hasn't been updated to import/render the 3 new sections yet.

- [ ] **Step 3: Recompose the page**

Replace the full contents of `web/app/page.tsx` with:

```tsx
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
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd web && npx vitest run app/page.test.tsx`
Expected: PASS — all 3 tests.

Then run the full suite to confirm no regressions:

Run: `cd web && npx vitest run`
Expected: PASS — all test files.

- [ ] **Step 5: Commit**

```bash
cd web && git add app/page.tsx app/page.test.tsx
git commit -m "feat: recompose landing page into 12-section structure"
```

---

## Self-Review

**1. Spec coverage:**
- §2 structure table (12 sections) → Task 8 (`page.tsx` composition) covers final order; each section's own content is covered by Tasks 1-7.
- §3 conflict resolutions (no fake testimonials, no inflated anchor, 1 avatar, single FAQ) → encoded as Global Constraints and directly asserted in Task 4's and Task 7's tests (checklist non-summed price line; honest placeholder copy) and Task 6's card copy (3 pain points, not 3 personas).
- §4 Problema copy → Task 5, verbatim.
- §5 ParaQuienEs copy (definition, 3 cards, es/no-es lists) → Task 6, verbatim.
- §6 expanded MODULES → Task 1, verbatim, with the technical note about `Method.tsx` reading descriptions dynamically addressed (no `Method.tsx`/`Method.test.tsx` change needed, confirmed by reading both files — `Method.tsx` renders `mod.description` with no truncation).
- §7 ProvaSocial copy → Task 7, verbatim.
- §8 FAQ heading rename → Task 3.
- §9 FinalCta checklist (aggregated MODULES.length line + BONUSES.map lines with `bonus.name`) → Task 4, with the exact "don't iterate MODULES individually" and "use bonus.name not description/value" rules encoded directly into the test assertions.
- §10 technical file list → matches this plan's File Structure section exactly (3 new components + `lib/config.ts`, `Faq.tsx`, `FinalCta.tsx`, `app/page.tsx`, `app/page.test.tsx`, `Hero.tsx`).
- §11 "no new image assets" → Global Constraints, and confirmed none of Tasks 5-7 use `next/image`.

**2. Placeholder scan:** No TBD/TODO/"add appropriate" language found — every step has complete, exact code and copy.

**3. Type consistency:** `Module` (`{ name, description }`) and `Bonus` (`{ name, value, description, image }`) interfaces are unchanged throughout — Task 1 only changes data values, Task 4 only reads `bonus.name` and `MODULES.length`, matching the existing `web/lib/config.ts` interfaces exactly. Component export names (`Problema`, `ParaQuienEs`, `ProvaSocial`) are consistent between their creation tasks (5, 6, 7) and their consumption in Task 8.

**One cross-task ripple caught during review:** Task 4 (FinalCta checklist) causes every `bonus.name` to render twice on the full page (once in `Bonuses.tsx`, once in `FinalCta.tsx`). Task 8's rewrite of `app/page.test.tsx` accounts for this by switching `BONUSES.forEach(... getByText ...)` to `getAllByText(...).length > 0` — called out explicitly in Task 8 Step 1 so the implementer doesn't hit a "multiple elements found" error and reach for a copy change instead of a query fix.
