# De Jugador a Creador™ — Manuscritos dos 4 Bônus e 5 Order Bumps — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Escrever a prosa completa (espanhol neutro) dos 9 e-books restantes do produto (4 bônus + 5 order bumps), completando o conjunto de 10 e-books junto com o produto principal já finalizado.

**Architecture:** Cada um dos 9 itens é um produto standalone e vira um único arquivo markdown em `content/` (sem necessidade de dividir em capítulos como o produto principal, dado o tamanho menor). "Teste" aqui é um checklist de aceite extraído literalmente da spec, verificado por leitura e por comandos de contagem/grep — não há automação real, é conteúdo criativo.

**Tech Stack:** Markdown puro. Diagramas e arte do certificado imprimível ficam fora de escopo (fase de diagramação posterior).

## Global Constraints

Copiados verbatim de `docs/superpowers/specs/2026-07-08-bonus-e-order-bumps-design.md`:

- Idioma: espanhol neutro, pronome "tú", **sem voseo**
- Tom: cúmplice, nunca professoral
- Frases curtas, sem subordinadas encadeadas
- Termo técnico só aparece depois de uma analogia cotidiana
- Bônus: 2000-3000 palavras cada (8-12 páginas, ~250 palavras/página)
- Order bumps: 3000-4500 palavras cada (12-18 páginas, ~250 palavras/página) — **mais densos que os bônus, de propósito** (o cliente pagou por eles; não nivelar por baixo)
- **Os 8 projetos do produto principal (nomes exatos, para checagem de duplicação em várias tasks abaixo):** 1. Semáforo del cuarto, 2. Alarma de la puerta, 3. Joystick casero, 4. Detector de movimiento, 5. Barrera automática, 6. Medidor de distancia, 7. Sensor de humedad, 8. Robot esquiva-obstáculos
- **Sequência obrigatória entre tasks:** Task 6 (Robótica de Emergencia) deve ser concluída ANTES da Task 9 (Fiesta Maker™) — a Task 9 precisa ler o resultado da Task 6 pra evitar duplicar projetos
- Diagramas, arte de certificado e QR codes são fora de escopo — cada task só descreve o conteúdo textual necessário

---

## File Structure

```
content/
  bono-sos-sin-pantalla.md
  bono-calendario-30-dias-creador.md
  bono-guia-inteligente-de-kits.md
  bono-mi-primer-diploma-de-inventor.md
  orderbump-50-preguntas-ingeniero.md
  orderbump-robotica-de-emergencia.md
  orderbump-el-codigo-secreto.md
  orderbump-robotica-para-ninas.md
  orderbump-fiesta-maker.md
```

---

### Task 1: Bônus — SOS Sin Pantalla™

**Files:**
- Create: `content/bono-sos-sin-pantalla.md`

**Interfaces:**
- Consumes: guia de estilo (Global Constraints)
- Produces: arquivo standalone, sem dependência de outras tasks

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Introdução: por que a frase certa importa mais que a regra certa
[ ] 20 frases prontas, organizadas por situação: tédio ("estoy
    aburrido"), resistência a desligar a tela, fim do tempo combinado,
    transição suave para atividade criativa
[ ] PROIBIDO: nenhuma frase que negocie "mais tempo de tela" — o
    produto promete SUBSTITUIR tela passiva, não negociá-la. Frases
    devem redirecionar, nunca ceder.
[ ] Seção de como adaptar o tom pra idade/personalidade do filho
[ ] Fechamento
[ ] 2000-3000 palavras
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/bono-sos-sin-pantalla.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência**

```bash
wc -w "content/bono-sos-sin-pantalla.md"
grep -Eic "más tiempo de pantalla|un rato más de pantalla|cinco minutos más de" "content/bono-sos-sin-pantalla.md"
```

Esperado: 2000-3000 palavras; segundo comando retorna 0 (confirma ausência de frases de negociação de tela).

- [ ] **Step 4: Commit**

```bash
git add content/bono-sos-sin-pantalla.md
git commit -m "Write bonus: SOS Sin Pantalla"
```

---

### Task 2: Bônus — Calendario 30 Días Creador™

**Files:**
- Create: `content/bono-calendario-30-dias-creador.md`

**Interfaces:**
- Consumes: guia de estilo (Global Constraints)
- Produces: arquivo standalone

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Introdução: como usar o calendário
[ ] Tabela markdown com 30 desafios curtos SEM tela, um por dia,
    variados (não só robótica): desenho, construção com blocos,
    pergunta de curiosidade, mini-experimento caseiro
[ ] Seção de como adaptar o calendário à rotina da família
[ ] 2000-3000 palavras
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/bono-calendario-30-dias-creador.md` cumprindo o checklist. A tabela deve ter 30 linhas (Día 1 a Día 30), cada uma com um desafio nomeado e 1 frase de instrução.

- [ ] **Step 3: Autoconferência**

```bash
wc -w "content/bono-calendario-30-dias-creador.md"
grep -c "^| Día" "content/bono-calendario-30-dias-creador.md"
```

Esperado: 2000-3000 palavras; segunda contagem = 30 (uma linha por dia).

- [ ] **Step 4: Commit**

```bash
git add content/bono-calendario-30-dias-creador.md
git commit -m "Write bonus: Calendario 30 Dias Creador"
```

---

### Task 3: Bônus — Guía Inteligente de Kits™

**Files:**
- Create: `content/bono-guia-inteligente-de-kits.md`

**Interfaces:**
- Consumes: guia de estilo (Global Constraints)
- Produces: arquivo standalone

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Introdução: como não comprar kit errado
[ ] Seção de critérios que importam vs. que não importam na escolha
    de um kit
[ ] Comparativo por país: Argentina, Chile, Peru, Colômbia, Equador,
    México — faixa de preço e onde comprar em cada um
[ ] DEVE incluir a data de pesquisa dos preços e o aviso EXATO:
    "los precios y disponibilidad cambian — verifica antes de comprar"
[ ] Enquadramento obrigatório (não literal, mas a ideia): o guia é
    para QUANDO o leitor e o filho já fizeram os projetos no
    simulador e querem ir mais fundo — NÃO como sugestão de compra
    imediata antes de validar o interesse do filho
[ ] Seção de erros comuns na hora de comprar
[ ] 2000-3000 palavras
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/bono-guia-inteligente-de-kits.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência**

```bash
wc -w "content/bono-guia-inteligente-de-kits.md"
grep -c "los precios y disponibilidad cambian" "content/bono-guia-inteligente-de-kits.md"
```

Esperado: 2000-3000 palavras; grep ≥1.

- [ ] **Step 4: Commit**

```bash
git add content/bono-guia-inteligente-de-kits.md
git commit -m "Write bonus: Guia Inteligente de Kits"
```

---

### Task 4: Bônus — Mi Primer Diploma de Inventor™

**Files:**
- Create: `content/bono-mi-primer-diploma-de-inventor.md`

**Interfaces:**
- Consumes: guia de estilo (Global Constraints)
- Produces: arquivo standalone

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Introdução breve
[ ] Descrição do certificado imprimível (conteúdo/design para
    diagramação futura — não a arte final): DEVE ser um certificado
    INDIVIDUAL, com nome do filho, para guardar (conquista pessoal)
[ ] Roteiro de apresentação oral em família: perguntas-guia pro
    filho apresentar o projeto que construiu
[ ] Dicas de como os pais conduzem esse momento
[ ] 2000-3000 palavras
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/bono-mi-primer-diploma-de-inventor.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência**

```bash
wc -w "content/bono-mi-primer-diploma-de-inventor.md"
```

Esperado: 2000-3000 palavras.

- [ ] **Step 4: Commit**

```bash
git add content/bono-mi-primer-diploma-de-inventor.md
git commit -m "Write bonus: Mi Primer Diploma de Inventor"
```

---

### Task 5: Order Bump — 50 Preguntas para Pensar como Ingeniero™

**Files:**
- Create: `content/orderbump-50-preguntas-ingeniero.md`

**Interfaces:**
- Consumes: guia de estilo (Global Constraints)
- Produces: arquivo standalone

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Introdução: como e quando usar as perguntas
[ ] Exatamente 50 perguntas, organizadas em 4 categorias:
    observação, causa-efeito, "¿y si...?", resolução de problema
[ ] Cada categoria tem contexto de uso (quando/como aplicar durante
    os projetos)
[ ] 3000-4500 palavras
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/orderbump-50-preguntas-ingeniero.md` cumprindo o checklist. Numere as perguntas de 1 a 50, agrupadas por categoria com subtítulo.

- [ ] **Step 3: Autoconferência**

```bash
wc -w "content/orderbump-50-preguntas-ingeniero.md"
grep -oE "^[0-9]+\." "content/orderbump-50-preguntas-ingeniero.md" | wc -l
```

Esperado: 3000-4500 palavras; segunda contagem = 50.

- [ ] **Step 4: Commit**

```bash
git add content/orderbump-50-preguntas-ingeniero.md
git commit -m "Write order bump: 50 Preguntas para Pensar como Ingeniero"
```

---

### Task 6: Order Bump — Robótica de Emergencia: 10 Proyectos de 15 Minutos™

**Files:**
- Create: `content/orderbump-robotica-de-emergencia.md`

**Interfaces:**
- Consumes: lista dos 8 projetos do produto principal (Global Constraints, para checagem de duplicação)
- Produces: **os nomes finais dos 10 mini-projetos escolhidos** — a Task 9 (Fiesta Maker™) vai ler este arquivo depois pra evitar repetir os mesmos temas

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Introdução: para quando não há tempo pra uma sessão completa
[ ] Exatamente 10 mini-projetos, cada um usando o TEMPLATE REDUZIDO
    de 3 elementos (não os 5 do produto principal):
    1. Qué vas a construir — 1 frase
    2. Simula primero — instrução direta + URL tinkercad.com/circuits
       por extenso
    3. ¿Funcionó? — 1 problema comum no simulador apenas
    SEM bloco de kit físico (Materiales/Arma) e SEM "Para ir más
    lejos" — não há tempo para nenhum dos dois
[ ] Cada um dos 10 projetos deve ser completável em 15 minutos no
    simulador
[ ] NENHUM dos 10 nomes/temas pode coincidir com os 8 projetos do
    produto principal (lista em Global Constraints): Semáforo del
    cuarto, Alarma de la puerta, Joystick casero, Detector de
    movimiento, Barrera automática, Medidor de distancia, Sensor de
    humedad, Robot esquiva-obstáculos
[ ] 3000-4500 palavras
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/orderbump-robotica-de-emergencia.md` cumprindo o checklist. Invente 10 mini-projetos originais e curtos (ex: variações de LED, buzzer, botão em combinações diferentes das já usadas, dentro do mesmo kit de componentes já apresentado no produto principal). Cada projeto vira um `## Proyecto N: [Nome]` com os 3 elementos.

- [ ] **Step 3: Autoconferência**

```bash
wc -w "content/orderbump-robotica-de-emergencia.md"
grep -c "^## Proyecto" "content/orderbump-robotica-de-emergencia.md"
grep -Eic "Semáforo del cuarto|Alarma de la puerta|Joystick casero|Detector de movimiento|Barrera automática|Medidor de distancia|Sensor de humedad|Robot esquiva-obstáculos" "content/orderbump-robotica-de-emergencia.md"
```

Esperado: 3000-4500 palavras; segunda contagem = 10; terceira contagem = 0 (confirma zero nomes coincidentes com o produto principal).

- [ ] **Step 4: Commit**

```bash
git add content/orderbump-robotica-de-emergencia.md
git commit -m "Write order bump: Robotica de Emergencia (10 proyectos ineditos)"
```

---

### Task 7: Order Bump — El Código Secreto™: Primeros Pasos en Programación

**Files:**
- Create: `content/orderbump-el-codigo-secreto.md`

**Interfaces:**
- Consumes: guia de estilo (Global Constraints)
- Produces: arquivo standalone

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Introdução: o que é programar, sem jargão
[ ] Conceito de sequência, ensinado via modo Blocks do Tinkercad
    Circuits (tinkercad.com/circuits) — O MESMO simulador do produto
    principal
[ ] PROIBIDO mencionar "Tinkercad Codeblocks" — é uma ferramenta
    DIFERENTE (design 3D), não a usada neste livro. Usar sempre
    "Tinkercad Circuits" ou "el simulador".
[ ] Conceito de repetição/loop
[ ] Conceito de condicional ("si esto, entonces aquello")
[ ] Pequenos exercícios práticos pra cada um dos 3 conceitos
[ ] Projeto final simples que integra os três conceitos juntos
[ ] Sem nomes de funções de código reais (nada de "if", "for",
    "while" como palavra-chave de linguagem — usar os nomes dos
    blocos visuais do Tinkercad, parafraseados, como no produto
    principal)
[ ] 3000-4500 palavras
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/orderbump-el-codigo-secreto.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência**

```bash
wc -w "content/orderbump-el-codigo-secreto.md"
grep -ic "Tinkercad Codeblocks" "content/orderbump-el-codigo-secreto.md"
grep -Eic "\bif\(|\bfor\(|\bwhile\(|void |int main" "content/orderbump-el-codigo-secreto.md"
```

Esperado: 3000-4500 palavras; segunda e terceira contagens = 0.

- [ ] **Step 4: Commit**

```bash
git add content/orderbump-el-codigo-secreto.md
git commit -m "Write order bump: El Codigo Secreto"
```

---

### Task 8: Order Bump — Robótica para Niñas™: Rompiendo el Mito

**Files:**
- Create: `content/orderbump-robotica-para-ninas.md`

**Interfaces:**
- Consumes: lista dos 8 projetos do produto principal (Global Constraints, para checagem de duplicação)
- Produces: arquivo standalone

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Introdução: nomear o mito ("robótica não é coisa de menina")
[ ] Seção com referências reais de mulheres na tecnologia/robótica
[ ] Atividades ORIGINAIS — mesma plataforma (Tinkercad Circuits),
    mesma faixa etária (7-12 anos), mas temas/contextos que
    ressoam especificamente com meninas (ex: acessórios
    inteligentes, robô de companhia — não projetos genéricos
    reembalados)
[ ] PROIBIDO reusar: "sensor de plantas" (é o Projeto 7, Sensor de
    humedad, do produto principal) e qualquer projeto que combine
    sensor→buzzer no mesmo padrão de "alarme de diário" (é o
    Projeto 2, Alarma de la puerta, do produto principal)
[ ] Seção de mensagens pros pais reforçarem em casa
[ ] 3000-4500 palavras
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/orderbump-robotica-para-ninas.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência**

```bash
wc -w "content/orderbump-robotica-para-ninas.md"
grep -Eic "sensor de plantas|Sensor de humedad|Alarma de la puerta|alarma de diario" "content/orderbump-robotica-para-ninas.md"
```

Esperado: 3000-4500 palavras; segunda contagem = 0 (confirma ausência dos temas proibidos).

- [ ] **Step 4: Commit**

```bash
git add content/orderbump-robotica-para-ninas.md
git commit -m "Write order bump: Robotica para Ninas"
```

---

### Task 9: Order Bump — Fiesta Maker™: Cómo Organizar un Cumpleaños de Robótica

**Files:**
- Create: `content/orderbump-fiesta-maker.md`

**Interfaces:**
- Consumes: **os 10 nomes de projeto da Task 6** (leia `content/orderbump-robotica-de-emergencia.md` ANTES de escrever esta task) + lista dos 8 projetos do produto principal (Global Constraints)
- Produces: arquivo standalone

**⚠️ Pré-requisito obrigatório: a Task 6 precisa estar concluída antes desta task começar.**

- [ ] **Step 1: Ler a Task 6 primeiro**

```bash
cat "content/orderbump-robotica-de-emergencia.md"
```

Anote os 10 nomes de projeto usados ali — nenhum deles pode se repetir nas atividades desta task.

- [ ] **Step 2: Escrever o checklist de aceite**

```
[ ] Introdução
[ ] Seção de planejamento: convites, tempo necessário
[ ] 3-4 atividades de festa em grupo — ORIGINAIS, diferentes dos 8
    projetos do produto principal E dos 10 projetos da Task 6 (lidos
    no Step 1)
[ ] Lista de compras
[ ] Certificados de participação para convidados — DEVE ser um
    modelo COLETIVO/simples, "participante da festa maker", para
    todos os convidados. DIFERENTE do "Mi Primer Diploma de
    Inventor™" (que é individual, com nome, para conquista pessoal
    do filho) — não reutilizar a mesma descrição de design
[ ] 3000-4500 palavras
```

- [ ] **Step 3: Escrever a prosa**

Escreva `content/orderbump-fiesta-maker.md` cumprindo o checklist.

- [ ] **Step 4: Autoconferência**

```bash
wc -w "content/orderbump-fiesta-maker.md"
```

Rode manualmente uma comparação de texto entre os nomes de atividade usados aqui e (a) os 8 projetos do produto principal em Global Constraints e (b) os 10 nomes lidos no Step 1 — confirme que não há sobreposição antes de prosseguir.

Esperado: 3000-4500 palavras; zero sobreposição de nomes de atividade.

- [ ] **Step 5: Commit**

```bash
git add content/orderbump-fiesta-maker.md
git commit -m "Write order bump: Fiesta Maker"
```

---

### Task 10: Revisão final de consistência entre os 10 e-books

**Files:**
- Nenhum arquivo novo — task de verificação.

**Interfaces:**
- Consumes: todos os 9 arquivos das Tasks 1-9 + o manuscrito do produto principal (`content/de-jugador-a-creador/MANUSCRITO-COMPLETO.md`, já existente)

- [ ] **Step 1: Rodar contagem de palavras de todos os 9 itens**

```bash
for f in content/bono-*.md content/orderbump-*.md; do
  echo "$f: $(wc -w < "$f") palabras"
done
```

Esperado: os 4 `bono-*` entre 2000-3000; os 5 `orderbump-*` entre 3000-4500.

- [ ] **Step 2: Verificar ausência de voseo em todos os 9 arquivos**

```bash
grep -Eil "\bvos\b|necesitás|podés|tenés|pagás|llevás|escribinos|sabés|querés|hacés" content/bono-*.md content/orderbump-*.md
```

Esperado: nenhuma linha de saída (nenhum arquivo contém voseo).

- [ ] **Step 3: Verificar cruzamento final entre Robótica de Emergencia (Task 6) e Fiesta Maker (Task 9)**

```bash
diff <(grep "^## Proyecto" content/orderbump-robotica-de-emergencia.md) <(grep "^## Proyecto" content/orderbump-fiesta-maker.md 2>/dev/null || true)
```

Confirme manualmente lendo os dois arquivos que nenhuma atividade da Fiesta Maker repete um nome/tema da Robótica de Emergencia.

- [ ] **Step 4: Verificar que nenhum dos 9 arquivos usa "Tinkercad Codeblocks" indevidamente**

```bash
grep -il "Tinkercad Codeblocks" content/bono-*.md content/orderbump-*.md
```

Esperado: nenhuma saída.

- [ ] **Step 5: Registrar o resultado da revisão**

Se todas as verificações passarem, não é necessário nenhum commit (task de verificação, sem mudança de arquivo). Se algo falhar, volte à task correspondente, corrija, re-commit, e repita esta Task 10.

---

## Self-Review

**Spec coverage:** Cada um dos 9 itens da spec (seções 4 e 5) tem uma task correspondente. As 5 regras de duplicação da spec (seção 3) têm checagem automatizada nas Tasks 6, 7, 8, 9 e na revisão final (Task 10). A sequência obrigatória Task 6 → Task 9 está marcada explicitamente na Task 9.

**Placeholder scan:** Nenhuma task usa "TBD" — a lista de 10 projetos da Task 6 é deliberadamente aberta à criação do escritor (documento já registra isso como decisão, não como pendência), com checagem automatizada de não-duplicação.

**Type consistency:** Os 8 nomes de projeto do produto principal aparecem idênticos em Global Constraints, Task 6, Task 8 e Task 9 — copiados literalmente da spec do produto principal.
