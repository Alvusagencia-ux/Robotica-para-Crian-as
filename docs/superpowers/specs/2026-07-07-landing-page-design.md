# De Jugador a Creador™ — Landing Page

**Data:** 2026-07-07
**Status:** Aprovado pelo usuário (design). Implementação ainda não iniciada.
**Depende de:** `2026-07-07-de-jugador-a-creador-design.md` (arquitetura de produto/oferta)

## 1. Objetivo da página

Página de vendas única (single-page) que apresenta a oferta completa do produto "De Jugador a Creador™" e direciona todo tráfego pago (Meta Ads) para o checkout da Hotmart. Não há captura de lead, não há quiz — é apresentação + conversão direta. Modelo estrutural baseado em `clinicaimparable.com` (checkout Hotmart); `profetecnomaker.com` foi mapeado como concorrente mas usa Shopify self-checkout — não Hotmart.

## 2. Decisões estruturais

| Decisão | Escolha |
|---|---|
| Stack | Next.js (App Router) na Vercel |
| Tipo de página | Single-page de vendas (um único fluxo de conversão, sem funil multi-step) — as rotas `/terminos` e `/privacidad` são páginas separadas obrigatórias, não fazem parte do fluxo de conversão. Sem lead capture, sem quiz. |
| Domínio | Ainda não registrado — deploy inicial na URL `.vercel.app`; domínio custom fica pendente |
| Destino de todos os CTAs | URL de checkout da Hotmart (via constante `HOTMART_CHECKOUT_URL`, placeholder até existir o link real) |
| Preço de lançamento | US$6,90 (via constante `PRODUCT_PRICE`; atualizar a cada fase de preço **independentemente** de `HOTMART_CHECKOUT_URL` — o Hotmart permite alterar preço no dashboard sem mudar a URL do produto) |
| Valor declarado do produto | A definir via constante `PRODUCT_DECLARED_VALUE` (sugestão: US$27,90 — deve ser maior que o preço Escala 3 de US$17,90 para criar ancoragem efetiva no stack) |
| Supabase | Fora de escopo — sem uso definido |
| Prova social | Sem depoimentos (produto pré-lançamento); bloco "A mí también me pasó" em 1ª pessoa substitui depoimentos — posicionado na **Seção 2** (Agitação da dor), antes da solução |

## 3. Estrutura de seções

| # | Seção | Conteúdo |
|---|---|---|
| 1 | Hero | Headline: **"El método que convierte la culpa por el celular de tu hijo en el proyecto del que él más se enorgullece — sin que tú sepas nada de tecnología."** *(pronome "tú" — espanhol neutro; doc de arquitetura usa "vos" — ver próximos passos)* Subheadline: *"el Método para transformar el tiempo de pantalla de tu hijo en su primer invento"* CTA: botão **"Quiero el Método ahora →"** → `HOTMART_CHECKOUT_URL` |
| 2 | Agitação da dor + Prova social | Nomeia em espanhol as duas dores centrais: culpa de tela ("¿Cuántas veces le has dicho 'ya no más pantalla'...?") e medo de não ser da área ("Yo tampoco soy del área"). Bloco "A mí también me pasó": **gênero do narrador deve ser decidido antes de escrever a copy** — avatar primário são mães → sugestão: voz feminina (ex: *"Yo también era una mamá convencida de que no podía enseñar esto"*); se fundador for homem, usar voz masculina e validar ressonância com o avatar. Arco obrigatório: problema → tentativa → descoberta → resultado. **Este bloco é o substituto de depoimentos** até haver avaliações reais. |
| 3 | Solução / Método | Os 5 módulos: Primer Contacto™, Caja de Herramientas del Creador™, Ritual Sin Pantalla™, Proyectos Manos a la Obra™, Vitrina Familiar™ |
| 4 | Stack de valor | Linha por linha: Produto (valor declarado: **`PRODUCT_DECLARED_VALUE`**, ex: US$27,90) + Bônus 1–4 (US$6,90 cada = US$27,60). Total riscado = `PRODUCT_DECLARED_VALUE` + US$27,60 (ex: **US$55,50**). Preço de lançamento em destaque: **`PRODUCT_PRICE`** (US$6,90). Frase-âncora em espanhol: *"Todo esto por solo US$6,90 hoy."* O total riscado é sempre derivado da soma das linhas — recalcular se qualquer valor unitário mudar. |
| 5 | Bônus detalhados | 4 cards — um por bônus (SOS Sin Pantalla™, Calendario 30 Días Creador™, Guía Inteligente de Kits™, Mi Primer Diploma de Inventor™) |
| 6 | Garantia | 7 dias, incondicional |
| 7 | FAQ | 3 objeções (lista completa — não adicionar outras sem decisão): (1) *"¿Y si no sé nada de tecnología?"* (2) *"¿Le va a gustar a mi hijo/a?"* (3) *"¿Funciona en mi país?"* — resposta da (3) em espanhol cobrindo AR/CL/PE/CO/EC/MX. **Antes de afirmar que Hotmart aceita pagamentos locais nos 6 países: verificar no painel Hotmart quais métodos estão ativos por país** (cartão internacional é garantido; métodos locais — OXXO/MX, PSE/CO, Khipu/CL, PagoEfectivo/PE — dependem do plano e da conta). Copy da resposta (3) só deve ser finalizada após verificação. |
| 8 | CTA final + urgência | Reforço da oferta + botão **"Quiero el Método ahora →"** → `HOTMART_CHECKOUT_URL`. Mecanismo de urgência: badge "Precio de Lanzamiento" + texto de janela de lançamento sem threshold numérico (ex: *"Este es el precio de lanzamiento. Cuando cerremos esta fase, el precio sube."*) — **sem mencionar número específico de compradores** (evita obrigação de rastrear e risco de claim falso/enganoso). Não usar countdown timer. |
| 9 | Footer | Dois links obrigatórios para rodar Meta Ads: **Términos y Condiciones** e **Política de Privacidad**. Implementar como rotas separadas (`/terminos`, `/privacidad`). Conteúdo: política cobre coleta apenas de dados analíticos (sem PII armazenado), plataforma de entrega (Hotmart), e-mail de contato do produtor. Jurisdição: incluir cláusula genérica de "legislação do país de residência do consumidor" para cobrir os 6 mercados. |

## 4. Assets pendentes (fora do escopo desta implementação)

- Mockup de imagem do produto principal + bônus (composição visual do "pacote")
- Mockups individuais de cada produto-bônus
- Vídeo/criativo de anúncio (será feito depois, com base nos ângulos mapeados na pesquisa de concorrência)

A página deve ser construída de forma que essas imagens possam ser adicionadas depois sem redesenho estrutural. Dimensões dos placeholders:

| Slot | Proporção | Dimensões de referência |
|---|---|---|
| Mockup principal (hero / stack de valor) | 3:2 landscape | 600×400px |
| Card de bônus (4×) | 7:9 portrait (capa de e-book) | 280×360px |

## 5. Fora de escopo (explicitamente)

- Captura de lead / e-mail
- Quiz de segmentação
- Integração com Supabase
- Múltiplos idiomas/variantes por país (uma única versão em espanhol neutro pros 6 países — sem voseo argentino)
- Checkout embutido (o checkout é 100% na Hotmart, a página só linka)
- Order bumps na landing page — os 5 order bumps (US$3,90 cada) existem exclusivamente no checkout Hotmart; a página de vendas não os menciona nem os pré-anuncia

## 6. Próximos passos

- Escrever plano de implementação técnica (writing-plans)
- Gerar mockups de produto (principal + 4 bônus) nos formatos definidos na seção 4
- Registrar domínio quando definido
- Decidir o gênero do narrador do bloco "A mí también me pasó" (sugestão: feminino) e escrever o arco completo antes de implementar a Seção 2
- Definir `PRODUCT_DECLARED_VALUE` (sugestão: US$27,90) e confirmar o total riscado do stack (ex: US$55,50) antes de implementar a Seção 4
- Verificar métodos de pagamento Hotmart ativos em AR/CL/PE/CO/EC/MX e finalizar copy da FAQ (3) com base nos resultados reais
- Substituir `HOTMART_CHECKOUT_URL` pelo link real assim que o produto estiver criado no Hotmart (`HOTMART_CHECKOUT_URL` não muda com mudanças de preço — o preço é gerenciado no dashboard)
- Substituir `PRODUCT_PRICE` no código a cada fase de preço (Escala 1 → US$9,90, Escala 2 → US$12,90, Escala 3 → US$17,90+) — independente de `HOTMART_CHECKOUT_URL`
- Atualizar o doc de arquitetura (`2026-07-07-de-jugador-a-creador-design.md`) para refletir a mudança do headline de "vos sepas" → "tú sepas", garantindo que criativos de anúncio usem o mesmo register de espanhol neutro
- Escrever copy dos blocos de Termos e Privacidade (`/terminos`, `/privacidad`) antes do primeiro deploy com Meta Ads (título com acento: "Términos y Condiciones" / "Política de Privacidad"; slug sem acento é convencional e intencional)
