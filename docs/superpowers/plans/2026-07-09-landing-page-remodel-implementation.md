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

## Mid-Execution Amendment (2026-07-13)

Tasks 1 and 2 were executed and committed on 2026-07-09 through this plan's subagent-driven-development process. Between then and 2026-07-13, **7 additional commits landed on this same branch outside this process** (external work, likely via Codex CLI) that replaced the entire visual system of the existing 9 sections with a new dark-teal/cream/amber design language, redesigned the Hero's first fold, and fixed image assets. None of Tasks 3-8 had been executed by that work — the page is still 9 sections, FAQ still says "Preguntas frecuentes", and no `Problema`/`ParaQuienEs`/`ProvaSocial` components exist. `main` is untouched; all of this is confined to the `landing-page-remodel` branch.

Tasks 3-8 below are **rewritten in place** (superseding the original drafts) to build the same locked spec content on top of the new visual system rather than the original slate/emerald Tailwind classes. The user confirmed: keep the new visual system, continue the 12-section structural plan on top of it.

**New design tokens (from the external work — match these in every new/modified section):**
- Dark section: `bg-[#063B35] text-[#F6F1E7]` (used by Hero, PainAgitation, ValueStack, Guarantee, FinalCta, Footer)
- Light section: `bg-[#F6F1E7] text-[#17342F]` (used by Method, Bonuses, Faq)
- Accent (CTA, badges, numbered circles, eyebrow-on-dark): `#E8A33D`
- Eyebrow-on-light text: `#1F6F5C`; body text on light: `#405650`
- Headings: `font-black leading-tight`, typically `text-4xl` (section h2) — never `font-bold`/`text-3xl` (the old system)
- Card-on-dark (e.g. `Guarantee.tsx`, `ValueStack.tsx`'s price box): `rounded-[2rem]` or `rounded-[1.75rem]`, `border border-[#E8A33D]/35`, `bg-[#0A4B43]`, `shadow-[0_24px_48px_rgba(0,0,0,0.18)]`
- Card-on-light (e.g. `Bonuses.tsx`, `Method.tsx` module cards): `rounded-[1.5rem]`, `border border-[#1F6F5C]/16`, `bg-white/74`, `shadow-[0_16px_32px_rgba(31,111,92,0.08)]`

**Section color rhythm for the 3 new sections** (a judgment call, since Method/ValueStack/Bonuses/Guarantee/FinalCta/Footer's colors are already fixed by the external work and don't strictly alternate): `Problema` = dark (continues the Hero→Problema→PainAgitation emotional arc), `ParaQuienEs` = light (informational qualification section, breather before Method's light "how it works"), `ProvaSocial` = dark (avoids 3 light sections in a row between `Bonuses` and `Faq`).

**Two things the external work changed that affect later tasks:**
1. **Hero's CTA label is now different from FinalCta's.** Hero uses `"Quiero empezar hoy →"`; FinalCta still uses `"Quiero el Método ahora →"`. Task 8's page-level test can no longer assert "2 links with the same name" — it must query each CTA by its own label.
2. **The Hero/Guarantee "Garantía de 7 días" text collision** (found during Task 2's review) is already fixed in the current `web/app/page.test.tsx` — the Guarantee assertions use `getByRole('heading', ...)` and the order-test marker `'Si en los primeros 7 días no lograste hacer el primer proyecto'`. Task 8's rewrite below preserves this fix.

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
- Modify: `web/components/Faq.tsx` (the `<h2>` line)
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

In `web/components/Faq.tsx`, replace:

```tsx
        <h2 className="text-center text-4xl font-black leading-tight">Preguntas frecuentes</h2>
```

with:

```tsx
        <h2 className="text-center text-4xl font-black leading-tight">
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

This adds the `MODULES`/`BONUSES` import and the second test to the CURRENT file (which already has the first test, unmodified from the original 9-section page — verify it still matches what's in `web/components/FinalCta.test.tsx` before editing; if it has drifted further, ask before proceeding).

- [ ] **Step 2: Run test to verify it fails**

Run: `cd web && npx vitest run components/FinalCta.test.tsx`
Expected: FAIL — checklist heading and lines not found (current component has no checklist).

- [ ] **Step 3: Add the checklist**

The current `web/components/FinalCta.tsx` (as of the external redesign) has an image, a "Precio de Lanzamiento" badge, a headline, a supporting paragraph, and a CTA — but no checklist, and its headline doesn't match the spec-locked text. Replace the full contents of `web/components/FinalCta.tsx` with:

```tsx
import Image from 'next/image'
import { CtaButton } from './CtaButton'
import { BONUSES, MODULES } from '@/lib/config'

export function FinalCta() {
  return (
    <section className="bg-[#063B35] px-5 py-20 text-center text-[#F6F1E7]">
      <div className="mx-auto max-w-3xl">
        <Image
          src="/images/publico-alvo-2.png"
          alt="Un niño sostiene con orgullo el circuito que acaba de crear"
          width={1024}
          height={1536}
          className="mx-auto h-72 w-auto rounded-[2rem] object-cover shadow-[0_22px_44px_rgba(0,0,0,0.24)]"
        />
        <span className="mt-8 inline-block rounded-full bg-[#E8A33D] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-[#063B35]">
          Precio de Lanzamiento
        </span>
        <h2 className="mt-5 text-4xl font-black leading-tight">¡Llévate TODO esto hoy!</h2>
        <p className="mx-auto mt-5 max-w-2xl text-xl leading-8 text-[#F6F1E7]/84">
          Empieza hoy con el simulador gratuito, guía a tu hijo paso a paso y vivan juntos ese
          primer &ldquo;¡funcionó!&rdquo;. Cuando cerremos esta fase, el precio sube.
        </p>
        <ul className="mx-auto mt-8 max-w-md space-y-2 rounded-[1.75rem] border border-[#E8A33D]/35 bg-[#0A4B43] p-6 text-left text-lg text-[#F6F1E7] shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
          <li>✅ Producto principal — {MODULES.length} módulos completos</li>
          {BONUSES.map((bonus) => (
            <li key={bonus.name}>✅ Bono: {bonus.name}</li>
          ))}
        </ul>
        <p className="mt-6 text-xl font-black text-[#F6F1E7]">
          Pagas solo el producto principal (US$6,90) y te llevas US$27,60 en bonos, gratis.
        </p>
        <div className="mt-8">
          <CtaButton label="Quiero el Método ahora →" />
        </div>
      </div>
    </section>
  )
}
```

Note: this replaces the redesign's headline "Que la próxima pantalla termine en un invento." with the spec-locked "¡Llévate TODO esto hoy!" (a Global Constraint — locked copy), but keeps the redesign's supporting paragraph, image, badge, and all new visual classes (`#063B35`/`#F6F1E7`/`#E8A33D` palette, `rounded-[...]`, `shadow-[...]`). The kept paragraph still contains "el precio sube", so the existing first test in `FinalCta.test.tsx` continues to pass unmodified.

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

Create `web/components/Problema.tsx`, matching the dark-section pattern established by `PainAgitation.tsx` (`bg-[#063B35] text-[#F6F1E7]`, `font-black` headings — see the Mid-Execution Amendment above for the full token list):

```tsx
export function Problema() {
  return (
    <section className="bg-[#063B35] px-5 py-16 text-[#F6F1E7]">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-4xl font-black leading-tight">
          ¿Por qué a algunos padres les funciona y a otros no?
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-8 text-[#F6F1E7]/84">
          <p>
            El problema no siempre es la falta de tiempo. Tampoco es solo el trabajo, el
            cansancio o que tu hijo prefiera la pantalla. Muchas familias no logran cambiar el
            hábito de pantalla porque no tienen un sistema que conecte el momento correcto, la
            actividad correcta y la confianza para guiarla — sin ser expertos.
          </p>
          <p>
            Sin ese sistema, compras un curso, bajas una app, prometes &ldquo;este fin de semana
            lo hacemos&rdquo;... pero la pantalla vuelve a ganar, porque no hay un ritual claro
            que sostenga el cambio.
          </p>
          <p>
            De Jugador a Creador™ fue creado para darte ese sistema: no una regla más para
            pelear, sino un ritual que tu hijo va a pedir.
          </p>
        </div>
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

Create `web/components/ParaQuienEs.tsx`, matching the light-section pattern established by `Bonuses.tsx`/`Method.tsx` (`bg-[#F6F1E7] text-[#17342F]`, eyebrow + `font-black` heading, `rounded-[1.5rem] border border-[#1F6F5C]/16 bg-white/74` cards — see the Mid-Execution Amendment above for the full token list):

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
        className="mx-auto h-8 w-8 text-[#1F6F5C]"
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
        className="mx-auto h-8 w-8 text-[#1F6F5C]"
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
        className="mx-auto h-8 w-8 text-[#1F6F5C]"
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
    <section className="bg-[#F6F1E7] px-5 py-16 text-[#17342F]">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm font-black uppercase tracking-[0.18em] text-[#1F6F5C]">
          Antes de seguir
        </p>
        <h2 className="mt-3 text-center text-4xl font-black leading-tight">
          ¿Qué es De Jugador a Creador™?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-[#405650]">
          Es el método completo — con el ritual, los proyectos y las herramientas — para que tu
          hijo o hija pase de consumir pantalla a crear con sus propias manos, sin que tú tengas
          que saber nada de tecnología.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.5rem] border border-[#1F6F5C]/16 bg-white/74 p-6 text-center shadow-[0_16px_32px_rgba(31,111,92,0.08)]"
            >
              {card.icon}
              <h3 className="mt-4 text-base font-black leading-tight text-[#063B35]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#405650]">{card.quote}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-[#1F6F5C]/16 bg-white/74 p-6 shadow-[0_16px_32px_rgba(31,111,92,0.08)]">
            <h3 className="text-lg font-black text-[#063B35]">Es para ti si:</h3>
            <ul className="mt-4 space-y-2 text-[#405650]">
              {ES_PARA_TI.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#1F6F5C]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-[#1F6F5C]/16 bg-white/74 p-6 shadow-[0_16px_32px_rgba(31,111,92,0.08)]">
            <h3 className="text-lg font-black text-[#063B35]">No es para ti si:</h3>
            <ul className="mt-4 space-y-2 text-[#405650]">
              {NO_ES_PARA_TI.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#405650]/50">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
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

Create `web/components/ProvaSocial.tsx`, matching the dark card-in-section pattern established by `Guarantee.tsx` (`bg-[#063B35]` section wrapping a `bg-[#0A4B43]` bordered card — see the Mid-Execution Amendment above for the full token list):

```tsx
export function ProvaSocial() {
  return (
    <section className="bg-[#063B35] px-5 py-16 text-center text-[#F6F1E7]">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-[#E8A33D]/35 bg-[#0A4B43] p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]">
        <h2 className="text-3xl font-black leading-tight">
          Muy pronto: las historias de las primeras familias
        </h2>
        <p className="mt-6 text-lg leading-8 text-[#F6F1E7]/84">
          Este espacio se va a llenar pronto con las fotos y las palabras de las primeras
          familias que ya probaron el Método. Si eres de las primeras, tu historia puede estar
          aquí.
        </p>
      </div>
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

**Before writing Step 1, re-read the current `web/app/page.test.tsx`** — it was already modified by the external redesign work to fix the Hero/Guarantee collision (see Mid-Execution Amendment above) and to query the Hero and FinalCta CTAs separately by their now-different labels. The version below is written to be consistent with that current state; if it has drifted further, reconcile before proceeding rather than blindly overwriting.

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

    expect(screen.getByText(/Convierte la pantalla en su primer invento/i)).toBeInTheDocument()
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
    expect(screen.getByRole('heading', { name: 'Garantía de 7 días' })).toBeInTheDocument()

    const heroCta = screen.getByRole('link', { name: /Quiero empezar hoy/i })
    const finalCta = screen.getByRole('link', { name: /Quiero el Método ahora/i })
    expect(heroCta).toHaveAttribute('href', HOTMART_CHECKOUT_URL)
    expect(finalCta).toHaveAttribute('href', HOTMART_CHECKOUT_URL)

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
      hero: text.indexOf('Convierte la pantalla en su primer invento'),
      problema: text.indexOf('El problema no siempre'),
      pain: text.indexOf('En casa pasaba lo mismo'),
      paraQuienEs: text.indexOf('¿Qué es De Jugador'),
      method: text.indexOf('El Método'),
      valueStack: text.indexOf('Lo que llevas hoy'),
      bonuses: text.indexOf('Bonos incluidos, gratis'),
      provaSocial: text.indexOf('Muy pronto'),
      faq: text.indexOf('Tal vez estás pensando'),
      guarantee: text.indexOf('Si en los primeros 7 días no lograste hacer el primer proyecto'),
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

Note: the Hero's headline marker is `'Convierte la pantalla en su primer invento'` (the external redesign's new headline), not the original spec's Hero copy — the Hero's prose was already rewritten outside this plan's scope and Task 8 does not revert it. Similarly, the two CTAs are queried separately (`'Quiero empezar hoy'` for Hero, `'Quiero el Método ahora'` for FinalCta) since the redesign gave them different labels — the old `getAllByRole(..., { name: /Quiero el Método ahora/i })` with `toHaveLength(2)` no longer holds.

Note: the Guarantee assertions are disambiguated from the Hero's trust line (Task 2 added "Garantía de 7 días incondicional · Sin kit físico · Empieza gratis en el simulador" below the Hero CTA), which also contains the substring "Garantía de 7 días". The first test targets the Guarantee section's `<h2>` specifically via `getByRole('heading', ...)` instead of `getByText`, and the order-test marker uses the Guarantee section's body copy ("Si en los primeros 7 días no lograste hacer el primer proyecto", from `Guarantee.tsx`) instead of the now-ambiguous heading text.

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

**Post-Task-2 amendment (2026-07-13):** Tasks 3-8 above were rewritten after 7 external commits (outside this plan's process) replaced the visual system of all 9 existing sections and the Hero's copy. See the "Mid-Execution Amendment" section after Global Constraints for the full account, the new design tokens, and the two behavioral changes (differing Hero/FinalCta CTA labels; the already-fixed Guarantee/Hero text collision) that later tasks had to account for. All locked spec copy (headings, checklist logic, price sentences, FAQ heading, full Problema/ParaQuienEs/ProvaSocial content) is preserved verbatim; only visual classes and the FinalCta headline (which conflicted with locked copy) were reconciled.
