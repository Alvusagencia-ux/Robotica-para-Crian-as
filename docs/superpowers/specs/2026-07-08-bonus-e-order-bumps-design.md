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
| Profundidade dos order bumps | 12-18 páginas cada — o cliente paga US$3,90 por eles no checkout, então precisam ser mais robustos que os bônus grátis |
| Guia de estilo | O mesmo do produto principal (spec de 2026-07-08): espanhol neutro "tú", sem voseo, tom cúmplice, frases curtas, termo técnico só após analogia |

## 3. Risco de duplicação de conteúdo (obrigatório verificar na escrita)

| Item | Risco | Regra |
|---|---|---|
| Order bump 2 (Robótica de Emergencia) | Repetir os 8 projetos já vendidos no produto principal | Os 10 mini-projetos deste order bump devem ser **inéditos**, diferentes dos 8 do livro principal |
| Order bump 3 (El Código Secreto™) | Duplicar a caixinha "¿Qué es una entrada analógica?" já presente no Projeto 3 (Joystick casero) do produto principal | Este order bump aprofunda o tema (sequência, repetição, condicional) de forma extensa — a caixinha do livro principal é só um resumo de 2-3 linhas; sem sobreposição real de conteúdo |
| Bônus 4 (Mi Primer Diploma) × módulo Vitrina Familiar™ do produto principal | Já resolvido na spec do produto principal — Vitrina Familiar cobre só "como fotografar/compartilhar"; este bônus fica com certificado + roteiro de apresentação | Manter a separação já definida |

## 4. Sumário — Bônus (8-12 páginas cada)

### 4.1 SOS Sin Pantalla™
1. Introdução — por que a frase certa importa mais que a regra certa
2. 20 frases organizadas por situação: tédio ("estoy aburrido"), resistência a desligar, fim do tempo combinado, negociação de mais tempo
3. Como adaptar o tom pra idade/personalidade do filho
4. Fechamento

### 4.2 Calendario 30 Días Creador™
1. Introdução — como usar o calendário
2. Tabela de 30 desafios curtos sem tela (desenho, construção com blocos, pergunta de curiosidade, mini-experimento caseiro) — variados, não só robótica
3. Como adaptar o calendário à rotina da família

### 4.3 Guía Inteligente de Kits™
1. Introdução — como não comprar kit errado
2. Critérios que importam vs. que não importam na hora de escolher
3. Comparativo por país (Argentina, Chile, Peru, Colômbia, Equador, México): faixa de preço, onde comprar
4. Erros comuns na hora de comprar

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
2. 10 mini-projetos **inéditos** (diferentes dos 8 do produto principal), formato reduzido do template de 5 elementos
3. Nota: lista dos 10 projetos a definir na fase de escrita, com checagem cruzada obrigatória contra a lista de 8 do produto principal antes de finalizar os temas

### 5.3 El Código Secreto™ — Primeros Pasos en Programación
1. Introdução — o que é programar, sem jargão
2. Conceito de sequência (via blocos Tinkercad)
3. Conceito de repetição/loop
4. Conceito de condicional ("si esto, entonces aquello")
5. Pequenos exercícios por conceito
6. Projeto final simples que integra os três conceitos

### 5.4 Robótica para Niñas™: Rompiendo el Mito
1. Introdução — nomear o mito (robótica "não é coisa de menina")
2. Referências reais de mulheres na tecnologia/robótica
3. Atividades adaptadas (mesmo espírito do produto principal)
4. Mensagens para os pais reforçarem em casa

### 5.5 Fiesta Maker™: Cómo Organizar un Cumpleaños de Robótica
1. Introdução
2. Planejamento (convites, tempo necessário)
3. 3-4 atividades de festa em grupo
4. Lista de compras
5. Certificados/prêmios pros convidados

## 6. Próximos passos

- Escrever a prosa real de cada um dos 9 itens, seguindo o guia de estilo do produto principal (spec 2026-07-08, seção 3)
- Antes de escrever os 10 projetos do order bump "Robótica de Emergencia", cruzar a lista final contra os 8 projetos do produto principal (spec 2026-07-08 do livro, seção 7) pra garantir zero repetição
- Produzir a arte do certificado imprimível (Mi Primer Diploma de Inventor™) — fora de escopo deste documento
- Depois dos 9 itens: revisão final de consistência entre todo o conjunto de 10 e-books (produto principal + 9)
