# De Jugador a Creador™ — Arquitetura dos 4 Bônus e 5 Order Bumps

**Data:** 2026-07-08
**Status:** Aprovado pelo usuário (arquitetura de conteúdo). Prosa/copy real ainda não escrita.
**Depende de:**
- `2026-07-07-de-jugador-a-creador-design.md` (arquitetura de oferta — nomeia os 9 títulos e define seu papel no funil)
- `2026-07-08-produto-principal-livro-design.md` (guia de estilo e template de projeto, reaproveitados aqui)

## 1. Contexto

Este documento cobre os 9 e-books restantes do produto (4 bônus + 5 order bumps), completando os 10 e-books da oferta junto com o produto principal (já escrito e mergeado). Diferente do produto principal, que teve uma spec dedicada por ser o item mais complexo, os 9 itens aqui são conteúdos mais curtos e foram arquitetados numa única sessão de brainstorm.

## 2. Decisões estruturais

| Decisão | Escolha |
|---|---|
| Processo | 1 spec combinada pros 9 itens (não 9 ciclos individuais) — volume/complexidade não justifica |
| Profundidade dos bônus | 8-12 páginas cada — entregues grátis no pacote (valor declarado US$6,90), mas precisam sustentar esse valor sozinhos |
| Profundidade dos order bumps | 12-18 páginas cada — o cliente paga US$3,90 por eles no checkout, então precisam ser mais robustos que os bônus grátis. **Nota estratégica (não é paradoxo):** order bumps são mais densos porque o comprador tomou uma decisão ativa de pagar; bônus são suplementos cujo valor percebido vem do âncora "US$6,90 de graça", não do volume de páginas. Não padear os bônus para igualar os order bumps — a diferença de profundidade é intencional. |
| Guia de estilo | O mesmo do produto principal (spec de 2026-07-08): espanhol neutro "tú", sem voseo, tom cúmplice, frases curtas, termo técnico só após analogia |

## 3. Risco de duplicação de conteúdo (obrigatório verificar na escrita)

| Item | Risco | Regra |
|---|---|---|
| Order bump 2 (Robótica de Emergencia) | Repetir os 8 projetos já vendidos no produto principal | Os 10 mini-projetos deste order bump devem ser **inéditos**, diferentes dos 8 do livro principal |
| Order bump 3 (El Código Secreto™) | Duplicar a caixinha "¿Qué es una entrada analógica?" já presente no Projeto 3 (Joystick casero) do produto principal | Este order bump aprofunda o tema (sequência, repetição, condicional) de forma extensa — a caixinha do livro principal é só um resumo de 2-3 linhas; sem sobreposição real de conteúdo |
| Bônus 4 (Mi Primer Diploma) × módulo Vitrina Familiar™ do produto principal | Já resolvido na spec do produto principal — Vitrina Familiar cobre só "como fotografar/compartilhar"; este bônus fica com certificado + roteiro de apresentação | Manter a separação já definida |
| Order bump 5 (Fiesta Maker™) × Bônus 4 (Mi Primer Diploma) | Fiesta Maker™ inclui "certificados/prêmios pros convidados" (passo 5); Mi Primer Diploma é um produto de certificado | Diferenciação obrigatória: Mi Primer Diploma = diploma individual de conquista pessoal do filho (imprimível, com nome, para guardar); Fiesta Maker™ = certificado coletivo de participação na festa (simples, para todos os convidados). Designs e propósitos distintos — não reutilizar o mesmo template |
| Order bump 4 (Robótica para Niñas™) | Reutilizar os 8 projetos do produto principal apenas com contexto feminino | O passo 3 do order bump 4 (atividades) deve ter conteúdo **original** (não os mesmos 8 projetos do produto principal). Ver Seção 5.4 para definição de "adaptado" |
| Order bump 5 (Fiesta Maker™) — atividades de festa | Repetir projetos já vendidos no produto principal ou no Robótica de Emergencia | As 3-4 atividades de festa devem ser **originais**, diferentes dos 8 projetos do produto principal e dos 10 do Robótica de Emergencia. Cruzar antes de finalizar os temas. |

## 4. Sumário — Bônus (8-12 páginas cada)

### 4.1 SOS Sin Pantalla™
1. Introdução — por que a frase certa importa mais que a regra certa
2. 20 frases organizadas por situação: tédio ("estoy aburrido"), resistência a desligar, fim do tempo combinado, transição suave para atividade criativa. **Atenção ao escritor:** NÃO incluir frases que negociam "mais tempo de tela" — o produto promete substituir tela passiva, não negociá-la. As frases devem redirecionar, não ceder.
3. Como adaptar o tom pra idade/personalidade do filho
4. Fechamento

### 4.2 Calendario 30 Días Creador™
1. Introdução — como usar o calendário
2. Tabela de 30 desafios curtos sem tela (desenho, construção com blocos, pergunta de curiosidade, mini-experimento caseiro) — variados, não só robótica
3. Como adaptar o calendário à rotina da família

### 4.3 Guía Inteligente de Kits™
1. Introdução — como não comprar kit errado
2. Critérios que importam vs. que não importam na hora de escolher
3. Comparativo por país (Argentina, Chile, Peru, Colômbia, Equador, México): faixa de preço, onde comprar. **Nota de recência obrigatória:** incluir no guia a data de pesquisa dos preços e o aviso *"los precios y disponibilidad cambian — verifica antes de comprar"*. Responsável por atualizar: produtor de conteúdo, revisão anual ou quando sinalizado pelo suporte.
4. Sequência de call-to-action: o guia deve ser enquadrado como "para quando você e seu filho já fizeram os projetos no simulador e querem ir mais fundo" — não como sugestão de compra imediata antes de validar o interesse. Mantém consistência com a promessa do produto principal ("valide o interesse do filho de graça no simulador antes de gastar qualquer coisa").
5. Erros comuns na hora de comprar

### 4.4 Mi Primer Diploma de Inventor™
1. Introdução breve
2. Certificado imprimível (descrição de conteúdo/design para a fase de diagramação — a arte final é fora de escopo deste documento)
3. Roteiro de apresentação oral em família (perguntas-guia pro filho apresentar o projeto)
4. Dicas de como os pais conduzem esse momento

## 5. Sumário — Order Bumps (12-18 páginas cada)

### 5.1 50 Preguntas para Pensar como Ingeniero™
1. Introdução — como/quando usar as perguntas
2. 50 perguntas organizadas por categoria: observação, causa-efeito, "¿y si...?", resolução de problema
3. Contexto de uso pra cada categoria

### 5.2 Robótica de Emergencia: 10 Proyectos de 15 Minutos™
1. Introdução — pra quando não há tempo pra sessão completa
2. 10 mini-projetos **inéditos** (diferentes dos 8 do produto principal), **formato reduzido de 3 elementos** (dos 5 do produto principal): **(1) Qué vas a construir** — 1 frase; **(2) Simula primero** — instrução direta + URL tinkercad.com/circuits; **(3) ¿Funcionó?** — 1 problema comum no simulador apenas. Cortar: bloco de kit físico (sem tempo para montar) e "Para ir más lejos" (sem tempo para variações). Cada projeto deve ser completável em 15 minutos no simulador.
3. Nota: lista dos 10 projetos a definir na fase de escrita, com checagem cruzada obrigatória contra a lista de 8 do produto principal antes de finalizar os temas

### 5.3 El Código Secreto™ — Primeros Pasos en Programación
1. Introdução — o que é programar, sem jargão
2. Conceito de sequência (via **modo Blocks do Tinkercad Circuits** — o editor visual de código dentro do mesmo simulador do produto principal, acessado em tinkercad.com/circuits; **não** usar o Tinkercad Codeblocks, que é uma ferramenta separada de design 3D e introduziria uma segunda plataforma)
3. Conceito de repetição/loop
4. Conceito de condicional ("si esto, entonces aquello")
5. Pequenos exercícios por conceito
6. Projeto final simples que integra os três conceitos

### 5.4 Robótica para Niñas™: Rompiendo el Mito
1. Introdução — nomear o mito (robótica "não é coisa de menina")
2. Referências reais de mulheres na tecnologia/robótica
3. Atividades **originais** (não os 8 projetos do produto principal reembalados). "Adaptado" significa: **mesma plataforma** (Tinkercad Circuits), **mesma faixa etária** (7-12 anos), **contextos e temas que ressoam especificamente com meninas** (ex: projetos de acessórios inteligentes, sensor de temperatura para o quarto, robô de companhia — não projetos genéricos refraseados; **evitar "sensor de plantas" que é o Projeto 7** e **"alarme de diário" que usa sensor→buzzer = mesmo circuito do Projeto 2 (Alarma de la puerta)**). Cruzar temas contra os 8 projetos do produto principal (spec 2026-07-08 do livro, seção 7) antes de finalizar.
4. Mensagens para os pais reforçarem em casa

### 5.5 Fiesta Maker™: Cómo Organizar un Cumpleaños de Robótica
1. Introdução
2. Planejamento (convites, tempo necessário)
3. 3-4 atividades de festa em grupo — **originais**, diferentes dos 8 projetos do produto principal (spec 2026-07-08 do livro, seção 7) e dos 10 do Robótica de Emergencia. **Dependência de sequência:** escrever Robótica de Emergencia e finalizar seus 10 projetos ANTES de escolher as atividades da Fiesta Maker™ — só assim o cruzamento é possível.
4. Lista de compras
5. Certificados de participação para convidados — **distintos do Mi Primer Diploma de Inventor™**: este é um certificado coletivo/leve de "participante da festa maker" (simples, para todos); o bônus Mi Primer Diploma é um diploma individual de conquista pessoal do filho (com nome, imprimível para guardar). Não reutilizar o mesmo template de design.

## 6. Próximos passos

- Escrever a prosa real de cada um dos 9 itens, seguindo o guia de estilo do produto principal (spec 2026-07-08, seção 3)
- **Sequência obrigatória:** escrever e finalizar Robótica de Emergencia (seus 10 projetos) ANTES de escrever Fiesta Maker™ — as atividades de festa precisam ser cruzadas contra esses 10 projetos
- Antes de escrever os 10 projetos do order bump "Robótica de Emergencia", cruzar a lista final contra os 8 projetos do produto principal (spec 2026-07-08 do livro, seção 7) pra garantir zero repetição
- Produzir a arte do certificado imprimível (Mi Primer Diploma de Inventor™) — fora de escopo deste documento
- Depois dos 9 itens: revisão final de consistência entre todo o conjunto de 10 e-books (produto principal + 9)
