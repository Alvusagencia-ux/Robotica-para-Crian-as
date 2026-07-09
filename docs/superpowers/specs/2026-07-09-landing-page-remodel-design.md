# De Jugador a Creador™ — Remodelagem da Landing Page (modelo Clínica Imparável)

**Data:** 2026-07-09
**Status:** Aprovado pelo usuário (conteúdo e estrutura). Implementação ainda não escrita.
**Depende de:**
- `2026-07-07-landing-page-design.md` (spec original da landing page — 9 seções, guia de estilo, constraints já travados)
- `2026-07-07-de-jugador-a-creador-design.md` (arquitetura de oferta — regra de "sem âncora inflada" no produto principal)

## 1. Contexto

A landing page atual (9 seções, já em produção com imagens integradas) vai ser remodelada seguindo a estrutura de `clinicaimparable.com`, indicada pelo usuário como referência — uma página bem mais longa e elaborada (~15 seções) que usa: problema aprofundado, definição explícita do método, personas de público-alvo, qualificação "é/não é pra você", depoimentos com foto, FAQ intermediária, e um stack final de preço com checklist completo.

Este documento resolve os pontos onde o modelo de referência **conflita** com decisões já travadas neste projeto (depoimentos falsos, âncora de valor inflada) e detalha o conteúdo de cada seção nova ou expandida.

## 2. Nova estrutura (9 → 12 seções)

| # | Seção | Situação | Componente |
|---|---|---|---|
| 1 | Hero | Existente, ajuste menor de copy — adicionar **linha de confiança** abaixo do CTA: *"Garantía de 7 días incondicional · Sin kit físico · Empieza gratis en el simulador"* | `Hero.tsx` |
| 2 | Problema aprofundado | **Nova** | `Problema.tsx` |
| 3 | História pessoal (founder story) | Existente, reposicionada | `PainAgitation.tsx` |
| 4 | Qué es + Para quién es | **Nova** (mescla definição + 3 cards de dor + qualificação) | `ParaQuienEs.tsx` |
| 5 | O Método | Existente, descrições expandidas | `Method.tsx` *(componente que renderiza — sem edição de código)* + `lib/config.ts` *(arquivo a editar — novas descrições)* |
| 6 | O que você leva hoje | Existente, sem mudança de regra | `ValueStack.tsx` |
| 7 | Bônus | Existente | `Bonuses.tsx` |
| 8 | Prova social (placeholder) | **Nova** | `ProvaSocial.tsx` |
| 9 | FAQ ("Tal vez estás pensando...") | Existente, cabeçalho renomeado | `Faq.tsx` |
| 10 | Garantia | Existente | `Guarantee.tsx` |
| 11 | CTA final expandido (checklist completo) | Existente, muito ampliada | `FinalCta.tsx` |
| 12 | Footer | Existente | `Footer.tsx` |

## 3. Conflitos com o modelo de referência — resolvidos

| Conflito | Referência (Clínica Imparável) | Decisão neste projeto |
|---|---|---|
| Depoimentos | 3 depoimentos com nome, foto e cidade de pessoas reais | **Não usar depoimentos falsos** — produto pré-lançamento, zero avaliações reais. Seção 8 vira um placeholder honesto: "Muy pronto: las historias de las primeras familias" — sem fingir prova social que não existe |
| Valor total no stack final | "Valor total: $39,60 → Hoje: $9,90" (soma produto + bônus como um desconto único) | **Manter a regra já travada**: produto principal não tem âncora inflada. Seção 11 lista tudo incluído em checklist, mas a linha de preço continua a já aprovada: "Pagas solo el producto principal (US$6,90) y te llevas US$27,60 en bonos, gratis" — sem somar num valor total único |
| Personas de público-alvo | 3 pessoas/cargos diferentes (dono-empregado, dono-que-quer-crescer, dona-CEO) — público B2B heterogêneo | Nosso spec de oferta define **1 avatar só**. Seção 4 usa **3 variações de dor do mesmo avatar** (culpa de tela / medo de tecnologia / falta de tempo), com ícones — não fotos de "pessoas diferentes" |
| FAQ duplicada | FAQ intermediária ("Tal vez estás pensando") + accordion de FAQ no rodapé (2 seções) | **Simplificação deliberada**: mantemos só 1 FAQ (as 3 perguntas já travadas em `FAQS`), reposicionada com o tom "Tal vez estás pensando..." — nosso produto é mais simples que o da referência, não justifica duas seções de perguntas |

## 4. Conteúdo — Seção 2: Problema aprofundado

```
¿Por qué a algunos padres les funciona y a otros no?

El problema no siempre es la falta de tiempo. Tampoco es solo el trabajo, el
cansancio o que tu hijo prefiera la pantalla. Muchas familias no logran
cambiar el hábito de pantalla porque no tienen un sistema que conecte el
momento correcto, la actividad correcta y la confianza para guiarla — sin
ser expertos.

Sin ese sistema, compras un curso, bajas una app, prometes "este fin de
semana lo hacemos"... pero la pantalla vuelve a ganar, porque no hay un
ritual claro que sostenga el cambio.

De Jugador a Creador™ fue creado para darte ese sistema: no una regla más
para pelear, sino un ritual que tu hijo va a pedir.
```

## 5. Conteúdo — Seção 4: Qué es + Para quién es

**Definição:**
```
¿Qué es De Jugador a Creador™?

Es el método completo — con el ritual, los proyectos y las herramientas —
para que tu hijo o hija pase de consumir pantalla a crear con sus propias
manos, sin que tú tengas que saber nada de tecnología.
```

**3 cards de dor (ícone + título + 1 frase), mesmo avatar:**

| Ícone | Título | Frase |
|---|---|---|
| Tela/culpa | El papá o la mamá que siente culpa por la pantalla | "Sabes que hay demasiada pantalla, pero cada intento de cambiarlo termina en pelea." |
| Interrogação | El papá o la mamá que "no es de tecnología" | "Nunca tocaste un Arduino y no sabrías por dónde empezar, aunque quisieras." |
| Relógio | El papá o la mamá sin tiempo de sobra | "Entre trabajo y rutina, cualquier actividad nueva parece un proyecto de fin de semana entero." |

**Es para ti si:**
- Quieres reemplazar tiempo de pantalla sin pelear cada día
- Nunca tocaste electrónica y te da un poco de miedo empezar
- Quieres algo que puedas hacer con 30-45 minutos, no un curso de meses
- Prefieres probar gratis en un simulador antes de gastar en un kit
- Quieres ver a tu hijo o hija orgulloso de algo que construyó con sus manos

**No es para ti si:**
- Buscas que tu hijo se vuelva programador profesional en una semana
- No estás dispuesto a sentarte 30 minutos junto a él o ella
- Ya tienes un ritual sin pantalla que funciona perfecto
- Esperas que esto reemplace toda la pantalla de golpe, sin proceso

## 6. Conteúdo — Seção 5: Módulos expandidos

Substituir as descrições atuais em `MODULES` (lib/config.ts) por estas versões mais completas:

```
Primer Contacto™:
Antes de gastar en cualquier kit, tú y tu hijo o hija arman su primer
circuito juntos en un simulador 100% gratuito. En 20 minutos ven un LED
parpadear por primera vez — la prueba de que esto va a funcionar, sin
haber gastado ni un peso.

Caja de Herramientas del Creador™:
Lo mínimo de electrónica y robótica que necesitas saber, explicado con
analogías cotidianas — nunca con jerga técnica. No es un curso de
ingeniería: es justo lo necesario para acompañar, ni una palabra más.

Ritual Sin Pantalla™:
El sistema de sesiones de 30 a 45 minutos que reemplaza el tiempo de
pantalla sin que tengas que inventar nada cada semana. Incluye el
calendario semanal listo para empezar — diseñado para que el cambio
ocurra solo, sin peleas y sin improvisación.

Proyectos Manos a la Obra™:
8 proyectos guiados paso a paso, del más fácil al más desafiante, cada uno
con su propia estructura clara: qué vas a construir, cómo simularlo, y qué
hacer si algo no funciona a la primera.

Vitrina Familiar™:
Cómo documentar y celebrar lo que tu hijo o hija creó — la foto, el video,
y el mensaje que convierte un circuito en un recuerdo del que van a hablar
durante semanas.
```

**Nota técnica:** `Method.test.tsx` lê `MODULES` dinamicamente do config via `getByText(mod.description)` — atualizar as descrições no config propaga para o teste **somente se `Method.tsx` renderizar o texto completo da descrição**. Se `Method.tsx` aplicar truncamento, text-clamp ou excerpt para layout de card, `Method.test.tsx` falhará com "element not found" e precisará ser atualizado manualmente.

## 7. Conteúdo — Seção 8: Prova social (placeholder honesto)

```
Muy pronto: las historias de las primeras familias

Este espacio se va a llenar pronto con las fotos y las palabras de las
primeras familias que ya probaron el Método. Si eres de las primeras, tu
historia puede estar aquí.
```

## 8. Conteúdo — Seção 9: FAQ reposicionada

Sem mudança nas 3 perguntas já travadas em `FAQS` (lib/config.ts). Só o cabeçalho da seção muda de "Preguntas frecuentes" para "Tal vez estás pensando...".

**Atualização obrigatória em `app/page.test.tsx`:** o marker de ordem atual usa `text.indexOf('Preguntas frecuentes')` para a seção FAQ. Após a renomeação, esse índex retorna -1 e quebra o teste de ordem com CI failure garantido. Substituir por `text.indexOf('Tal vez estás pensando')`.

## 9. Conteúdo — Seção 11: CTA final expandido

```
¡Llévate TODO esto hoy!

✅ Producto principal — 5 módulos completos
✅ Bono: SOS Sin Pantalla™
✅ Bono: Calendario 30 Días Creador™
✅ Bono: Guía Inteligente de Kits™
✅ Bono: Mi Primer Diploma de Inventor™

Pagas solo el producto principal (US$6,90) y te llevas US$27,60 en bonos,
gratis.

[Badge] Precio de Lanzamiento — Cuando cerremos esta fase, el precio sube.
```

O checklist é gerado a partir de `MODULES` e `BONUSES` do config da seguinte forma (não duplicar em texto fixo):
- **1 linha agregada de módulos:** renderizar `✅ Producto principal — {MODULES.length} módulos completos` usando o `.length` do array — **não** iterar `MODULES` individualmente (evita 5 linhas separadas que não correspondem ao visual aprovado)
- **4 linhas de bônus individuais:** iterar `BONUSES` e usar **`bonus.name`** como label, prefixando com `✅ Bono: ` (ex: `✅ Bono: SOS Sin Pantalla™`) — não usar `bonus.description` nem `bonus.value`

## 10. Componentes técnicos afetados

**Novos:**
- `components/Problema.tsx` (seção 2)
- `components/ParaQuienEs.tsx` (seção 4 — definição + 3 cards + es/no-es)
- `components/ProvaSocial.tsx` (seção 8)

**Modificados:**
- `lib/config.ts` — descrições expandidas em `MODULES`
- `components/Faq.tsx` — cabeçalho renomeado
- `components/FinalCta.tsx` — checklist completo adicionado (consumindo `MODULES`/`BONUSES`)
- `app/page.tsx` — nova ordem de composição (12 seções)
- `app/page.test.tsx` — teste de ordem (`container.textContent` + índices) precisa:
  - Substituir marker `'Preguntas frecuentes'` → `'Tal vez estás pensando'` (FAQ renomeada)
  - Adicionar markers para as 3 novas seções: `'problema'` → `'El problema no siempre'`; `'paraQuienEs'` → `'¿Qué es De Jugador'`; `'provaSocial'` → `'Muy pronto'`

**Modificados (cont.):**
- `components/Hero.tsx` — copy-only: adicionar linha de confiança abaixo do CTA (ver item 1 da tabela de estrutura de seções, Seção 2 deste doc)

**Sem mudança:**
- `PainAgitation.tsx`, `Method.tsx`, `ValueStack.tsx`, `Bonuses.tsx`, `Guarantee.tsx`, `Footer.tsx`, `CtaButton.tsx`

## 11. Próximos passos

- Escrever plano de implementação técnica (writing-plans) cobrindo: 3 componentes novos (`Problema`, `ParaQuienEs`, `ProvaSocial`); 6 arquivos modificados (`lib/config.ts`, `Faq.tsx`, `FinalCta.tsx`, `app/page.tsx`, `app/page.test.tsx`, `Hero.tsx`); e a lógica de checklist agregado em `FinalCta.tsx`
- Nenhum novo asset de imagem necessário — os cards da seção "Para quién es" usam ícones (SVG/inline), não fotos
