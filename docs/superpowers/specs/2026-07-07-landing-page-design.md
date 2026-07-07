# De Jugador a Creador™ — Landing Page

**Data:** 2026-07-07
**Status:** Aprovado pelo usuário (design). Implementação ainda não iniciada.
**Depende de:** `2026-07-07-de-jugador-a-creador-design.md` (arquitetura de produto/oferta)

## 1. Objetivo da página

Página de vendas única (single-page) que apresenta a oferta completa do produto "De Jugador a Creador™" e direciona todo tráfego pago (Meta Ads) para o checkout da Hotmart. Não há captura de lead, não há quiz — é apresentação + conversão direta, no mesmo padrão dos dois concorrentes mapeados na pesquisa (Shopify → Hotmart / clinicaimparable.com → Hotmart).

## 2. Decisões estruturais

| Decisão | Escolha |
|---|---|
| Stack | Next.js (App Router) na Vercel |
| Tipo de página | Single-page, sem lead capture, sem quiz |
| Domínio | Ainda não registrado — deploy inicial na URL `.vercel.app`; domínio custom fica pendente |
| Destino de todos os CTAs | URL de checkout da Hotmart (via constante `HOTMART_CHECKOUT_URL`, placeholder até existir o link real) |
| Supabase | Fora de escopo por enquanto — sem uso definido |
| Prova social | Sem depoimentos (produto pré-lançamento); usar ângulo de história pessoal ("A mí también me pasó") no lugar de depoimentos até haver avaliações reais |

## 3. Estrutura de seções

| # | Seção | Conteúdo |
|---|---|---|
| 1 | Hero | Headline "El método que convierte la culpa por el celular de tu hijo en el proyecto del que él más se enorgullece" + subheadline + CTA → Hotmart |
| 2 | Agitação da dor | Nomeia a culpa de tela e o medo de "não sou da área de tecnologia", em 1ª pessoa (estilo founder-story) |
| 3 | Solução / Método | Os 5 módulos: Primer Contacto™, Caja de Herramientas del Creador™, Ritual Sin Pantalla™, Proyectos Manos a la Obra™, Vitrina Familiar™ |
| 4 | Stack de valor | Produto + 4 bônus com valor declarado (US$6,90 cada), preço final da fase de lançamento (US$6,90) |
| 5 | Bônus detalhados | 4 cards — um por bônus (SOS Sin Pantalla™, Calendario 30 Días Creador™, Guía Inteligente de Kits™, Mi Primer Diploma de Inventor™) |
| 6 | Garantia | 7 dias, incondicional |
| 7 | FAQ | Objeções: "não sei nada de tecnologia", "meu filho vai gostar?", "funciona no meu país?" (AR/CL/PE/CO/EC/MX) |
| 8 | CTA final + urgência | Reforço da oferta + botão final → Hotmart |
| 9 | Footer | Termos, privacidade (exigido pra rodar Meta Ads) |

## 4. Assets pendentes (fora do escopo desta implementação)

- Mockup de imagem do produto principal + bônus (composição visual do "pacote")
- Mockups individuais de cada produto-bônus
- Vídeo/criativo de anúncio (será feito depois, com base nos ângulos mapeados na pesquisa de concorrência)

A página deve ser construída de forma que essas imagens possam ser adicionadas depois sem redesenho estrutural (placeholders com proporção/posição definida).

## 5. Fora de escopo (explicitamente)

- Captura de lead / e-mail
- Quiz de segmentação
- Integração com Supabase
- Múltiplos idiomas/variantes por país (uma única versão em espanhol neutro pros 6 países)
- Checkout embutido (o checkout é 100% na Hotmart, a página só linka)

## 6. Próximos passos

- Escrever plano de implementação técnica (writing-plans)
- Gerar mockups de produto (principal + 4 bônus)
- Registrar domínio quando definido
- Substituir `HOTMART_CHECKOUT_URL` pelo link real assim que o produto estiver criado na Hotmart
