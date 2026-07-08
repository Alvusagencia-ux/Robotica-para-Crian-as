# De Jugador a Creador™ — Manuscrito do Produto Principal — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Escrever a prosa completa (espanhol neutro) do e-book principal "De Jugador a Creador™" — 14 seções de conteúdo + 1 manuscrito consolidado, seguindo a arquitetura já aprovada.

**Architecture:** Cada seção do sumário vira um arquivo markdown independente em `content/de-jugador-a-creador/`, escrito segundo um checklist de aceite extraído literalmente da spec (não um template de código — aqui "teste" = checklist de requisitos obrigatórios que a prosa precisa cumprir, verificado por leitura, não por comando). Uma tarefa final consolida tudo num manuscrito único.

**Tech Stack:** Markdown puro. Nenhum código é produzido neste plano — diagramas, calendário imprimível e QR code ficam para uma fase de diagramação posterior (fora de escopo, já registrada como Próximos Passos na spec).

## Global Constraints

Copiados verbatim da spec `docs/superpowers/specs/2026-07-08-produto-principal-livro-design.md`:

- Idioma: espanhol neutro, pronome "tú", **sem voseo** (nada de "vos", "necesitás", "podés" etc.)
- Tom: cúmplice ("vamos a hacer"), nunca professoral ("usted debe")
- Frases curtas, sem subordinadas encadeadas
- Termo técnico só aparece depois de uma analogia cotidiana
- Reforçar em cada seção que "no necesitas saber más que esto"
- Tamanho total do livro: 40-48 páginas (faixa por seção definida na Seção 6 da spec — ver tabela em cada task abaixo)
- Diagramas, calendário imprimível em design final e QR code são **fora de escopo deste plano** — cada task que os menciona só precisa descrever o conteúdo textual necessário para produzi-los depois, não produzir a arte final
- Garantia de 7 dias usa a MESMA copy já travada no produto (`web/components/Guarantee.tsx`): *"Si en los primeros 7 días no lograste hacer el primer proyecto junto a tu hijo/a, te devolvemos el 100% de tu dinero. Sin formularios, sin preguntas."* — reutilizar esse texto exato, não reescrever

---

## File Structure

```
content/de-jugador-a-creador/
  00-bienvenida.md
  01-primer-contacto.md
  02-caja-de-herramientas.md
  03-ritual-sin-pantalla.md
  04-proyectos/
    01-semaforo-del-cuarto.md
    02-alarma-de-la-puerta.md
    03-joystick-casero.md
    04-detector-de-movimiento.md
    05-barrera-automatica.md
    06-medidor-de-distancia.md
    07-sensor-de-humedad.md
    08-robot-esquiva-obstaculos.md
  05-vitrina-familiar.md
  06-cierre.md
  MANUSCRITO-COMPLETO.md
```

---

### Task 1: Bienvenida

**Files:**
- Create: `content/de-jugador-a-creador/00-bienvenida.md`

**Interfaces:**
- Consumes: guia de estilo (spec seção 3), copy de garantia trancada (Global Constraints acima)
- Produces: seção "Bienvenida" consumida pela Task 15 (montagem do manuscrito)

- [ ] **Step 1: Escrever o checklist de aceite**

Antes de escrever a prosa, confirme que o arquivo final vai cumprir TODOS os itens abaixo (copiados da spec, seção 6, linha "Bienvenida"):

```
[ ] Explica como usar o guia (navegação geral)
[ ] Reforça "no necesitas ser ingeniero" (ou frase equivalente)
[ ] Inclui o lembrete de garantia de 7 dias, usando o texto EXATO travado:
    "Si en los primeros 7 días no lograste hacer el primer proyecto junto
    a tu hijo/a, te devolvemos el 100% de tu dinero. Sin formularios,
    sin preguntas."
[ ] Comunica explicitamente que o Módulo 2 (Caja de Herramientas) é
    opcional/consultável — o leitor pode ir direto ao Módulo 1. Usar
    ideia equivalente a: "puedes ir directo al Módulo 1 ahora y usar
    el Módulo 2 (Caja de Herramientas) como referencia cuando lo
    necesites"
[ ] Tom cúmplice, pronome "tú", sem voseo
[ ] 2-3 páginas (aprox. 500-750 palavras, considerando ~250-300
    palavras por página em guia prático)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/00-bienvenida.md` cumprindo todos os itens do checklist acima. Estrutura sugerida (não rígida): saudação breve → o que este livro promete entregar (conecta com a grande ideia anti-tela do produto) → como navegar (Módulo 1 direto, Módulo 2 é referência) → garantia → convite pra virar a página.

- [ ] **Step 3: Autoconferência contra o checklist**

Releia o arquivo e marque cada item do Step 1 como cumprido ou não. Se algum item falhar, corrija antes de prosseguir. Rode uma contagem de palavras:

```bash
wc -w "content/de-jugador-a-creador/00-bienvenida.md"
```

Esperado: entre 500 e 750 palavras. Se muito fora da faixa, ajuste.

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/00-bienvenida.md
git commit -m "Write Bienvenida section"
```

---

### Task 2: Primer Contacto™

**Files:**
- Create: `content/de-jugador-a-creador/01-primer-contacto.md`

**Interfaces:**
- Consumes: estrutura própria de 4 partes (spec seção 6, linha "1. Primer Contacto™") — **NÃO** usa o template de 5 elementos da Seção 5 (esse é só para os 8 projetos)
- Produces: seção "Primer Contacto™" consumida pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Inclui caixa de pré-requisito com o texto EXATO:
    "Antes de empezar: ve a tinkercad.com/circuits — si no tienes
    cuenta Autodesk, el simulador te guiará para crearla gratis
    (2-3 min). Luego regresa aquí y empieza el cronómetro."
[ ] Deixa claro que a criação de conta é PRÉ-sessão, fora da contagem
    dos 20 minutos
[ ] Estrutura em 4 partes, nesta ordem:
    (a) Abertura — promessa de 20 min após conta criada, tom de
        convite cúmplice
    (b) Passo a passo Tinkercad — abrir o simulador de circuitos,
        montar e acionar o primeiro LED piscando, guia visual em
        palavras (sem jargão técnico não explicado)
    (c) ¿Funcionó? — troubleshooting específico do Tinkercad (2-3
        erros comuns do simulador), SEM nenhuma menção a kit físico
    (d) Celebración — fecha com "Lo logramos" ou equivalente, tom de
        orgulho, prepara o leitor pra seguir pros módulos seguintes
[ ] NÃO inclui bloco de kit físico (esta seção é 100% simulador)
[ ] 5-6 páginas (aprox. 1250-1500 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/01-primer-contacto.md` cumprindo o checklist. O primeiro circuito é um LED piscando (blink) — descreva o passo a passo no Tinkercad em linguagem simples: abrir tinkercad.com/circuits → criar circuito novo → arrastar Arduino Uno + LED + resistor → conectar → simular → ver o LED piscar. Não presuma conhecimento prévio de nenhum termo.

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/01-primer-contacto.md"
```

Esperado: 1250-1500 palavras. Confirme os 4 itens estruturais (a, b, c, d) presentes nessa ordem, e a caixa de pré-requisito com o texto exato.

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/01-primer-contacto.md
git commit -m "Write Primer Contacto section"
```

---

### Task 3: Caja de Herramientas del Creador™

**Files:**
- Create: `content/de-jugador-a-creador/02-caja-de-herramientas.md`

**Interfaces:**
- Consumes: lista canônica de componentes (spec seção 6, linha "2. Caja de Herramientas")
- Produces: seção "Caja de Herramientas" consumida pela Task 15; serve de referência pros conceitos técnicos usados nos 8 projetos (Tasks 5-12)

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Abre deixando claro: "referencia consultable, no obligatoria antes
    de los proyectos" (ou equivalente) — o leitor pode pular direto
    pros projetos e voltar aqui quando precisar
[ ] Cobre TODOS os componentes da lista canônica, cada um no formato
    nombre coloquial → analogía cotidiana → representación en Tinkercad:
    - Arduino Uno + cable USB
    - Protoboard + jumpers
    - LED + resistor 220Ω
    - Buzzer piezoeléctrico
    - Botón/pulsador
    - Módulo joystick (1 unidade — no Tinkercad é um único componente
      "Joystick", mesmo contendo 2 potenciômetros internos na vida real)
    - Sensor PIR HC-SR501 — DEVE incluir a nota de substituição EXATA:
      "en el simulador, representamos el sensor con un botón — en la
      vida real, es un sensor que detecta movimiento sin necesidad de
      tocarlo"
    - Servo motor SG90
    - Sensor ultrasónico HC-SR04
    - Sensor de humedad/temperatura DHT11
    - Motor DC (×2) + driver L298N — DEVE incluir a nota de
      substituição EXATA: "en el simulador, los motores se conectan
      directo al Arduino; con el kit físico, usarás el módulo L298N
      para proteger el Arduino"
[ ] Explica como ler um diagrama simples (conceito geral, não um
    diagrama específico — isso é produzido depois)
[ ] Explica o mínimo de eletricidade necessário SEM fórmulas
    matemáticas
[ ] NÃO inclui funções de código (analogRead, map() etc.) — isso é
    responsabilidade das Tasks 5-12 (projetos), não desta seção
[ ] 8-9 páginas (aprox. 2000-2250 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/02-caja-de-herramientas.md` cumprindo o checklist. Cada componente é um mini-bloco de 1-2 parágrafos: nome coloquial em negrito → 1 frase de analogia cotidiana → 1-2 frases de como aparece/funciona no Tinkercad. Mantenha os blocos curtos e visualmente escaneáveis (o leitor volta aqui pra consultar, não pra ler de corrida).

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/02-caja-de-herramientas.md"
grep -c "en el simulador, representamos el sensor con un botón" "content/de-jugador-a-creador/02-caja-de-herramientas.md"
grep -c "usarás el módulo L298N" "content/de-jugador-a-creador/02-caja-de-herramientas.md"
```

Esperado: contagem de palavras 2000-2250; os dois greps retornam pelo menos 1 (confirma as notas de substituição obrigatórias).

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/02-caja-de-herramientas.md
git commit -m "Write Caja de Herramientas del Creador section"
```

---

### Task 4: Ritual Sin Pantalla™

**Files:**
- Create: `content/de-jugador-a-creador/03-ritual-sin-pantalla.md`

**Interfaces:**
- Consumes: nomes e ordem dos 8 projetos (spec seção 7 / Tasks 5-12 deste plano)
- Produces: seção "Ritual Sin Pantalla™" consumida pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Explica por que sessões de 30-45 minutos (não mais, não menos)
[ ] Dá orientação prática de como propor a sessão ao filho sem
    resistência/briga (conecta com a dor de tela do produto)
[ ] Inclui uma tabela em markdown representando o calendário de 8
    semanas, 1 projeto por semana, na ordem EXATA da spec seção 7:
    Semana 1: Semáforo del cuarto
    Semana 2: Alarma de la puerta
    Semana 3: Joystick casero
    Semana 4: Detector de movimiento
    Semana 5: Barrera automática
    Semana 6: Medidor de distancia
    Semana 7: Sensor de humedad
    Semana 8: Robot esquiva-obstáculos
    (essa tabela é o conteúdo-fonte pro design do imprimível — a arte
    final fica pra depois, fora de escopo)
[ ] Menciona explicitamente que todos os projetos, incluindo os
    desafiantes, cabem numa sessão de 30-45 min
[ ] 4-5 páginas (aprox. 1000-1250 palavras, tabela incluída)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/03-ritual-sin-pantalla.md` cumprindo o checklist. A tabela markdown do calendário:

```markdown
| Semana | Proyecto |
|---|---|
| 1 | Semáforo del cuarto |
| 2 | Alarma de la puerta |
| 3 | Joystick casero |
| 4 | Detector de movimiento |
| 5 | Barrera automática |
| 6 | Medidor de distancia |
| 7 | Sensor de humedad |
| 8 | Robot esquiva-obstáculos |
```

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/03-ritual-sin-pantalla.md"
grep -c "Robot esquiva-obstáculos" "content/de-jugador-a-creador/03-ritual-sin-pantalla.md"
```

Esperado: 1000-1250 palavras; a tabela presente com os 8 projetos na ordem certa.

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/03-ritual-sin-pantalla.md
git commit -m "Write Ritual Sin Pantalla section"
```

---

### Task 5: Projeto 1 — Semáforo del cuarto

**Files:**
- Create: `content/de-jugador-a-creador/04-proyectos/01-semaforo-del-cuarto.md`

**Interfaces:**
- Consumes: template de 5 elementos (spec seção 5), componentes já descritos na Task 3 (LED, resistor, protoboard)
- Produces: "Proyecto 1" consumido pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Segue os 5 elementos, NESTA ORDEM EXATA:
    1. Qué vas a construir — 1 frase, resultado visível (um semáforo
       de LEDs que muda de cor)
    2. Simula primero — instrui a abrir tinkercad.com/circuits;
       inclui a URL por extenso (versão impressa) — QR code fica
       pra depois, fora de escopo
    3. Bloco condicional único (opcional, só se tiver kit físico) —
       SEMPRE nesta sub-ordem: Materiales → Arma el circuito. Nunca
       separar em steps independentes, nunca inverter a ordem.
    4. ¿Funcionó? — DOIS sub-blocos: (a) 1-2 problemas comuns no
       simulador; (b) 1-2 problemas comuns no kit físico, precedido
       de "Si armaste el circuito físico:"
    5. Para ir más lejos — 1 variação opcional
[ ] Dificuldade: Fácil — projeto simples, 3 LEDs (vermelho/amarelo/
    verde) ligados e desligados em sequência
[ ] Nenhuma nota de substituição de componente necessária (LED é
    nativo no Tinkercad)
[ ] Tom cúmplice, "tú", termo técnico só após analogia
[ ] ~2,5 páginas (aprox. 600-700 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/04-proyectos/01-semaforo-del-cuarto.md` cumprindo o checklist. Circuito: 3 LEDs (rojo, amarillo, verde) com resistores, ligados ao Arduino, piscando em sequência de semáforo.

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/04-proyectos/01-semaforo-del-cuarto.md"
```

Esperado: 600-700 palavras. Confirme a ordem dos 5 elementos e a sub-ordem Materiales→Arma dentro do bloco 3.

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/04-proyectos/01-semaforo-del-cuarto.md
git commit -m "Write Proyecto 1: Semaforo del cuarto"
```

---

### Task 6: Projeto 2 — Alarma de la puerta

**Files:**
- Create: `content/de-jugador-a-creador/04-proyectos/02-alarma-de-la-puerta.md`

**Interfaces:**
- Consumes: template de 5 elementos (spec seção 5); buzzer já descrito na Task 3
- Produces: "Proyecto 2" consumido pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Segue os mesmos 5 elementos na mesma ordem da Task 5
[ ] Resultado: alarme sonoro (buzzer) que avisa quando alguém entra
    no quarto
[ ] DEVE incluir a nota de substituição do reed switch (sensor
    magnético de porta, ausente no Tinkercad), com esta ideia:
    "en el simulador usamos un botón; en la vida real, la puerta
    lleva un sensor magnético que hace exactamente lo mismo cuando
    se abre"
[ ] Dificuldade: Fácil
[ ] ~2,5 páginas (aprox. 600-700 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/04-proyectos/02-alarma-de-la-puerta.md` cumprindo o checklist. No Tinkercad, o "sensor de porta" é representado por um botão/pulsador — explicar a substituição dentro do elemento 3 (Materiales/Arma) ou do elemento 1, onde fizer mais sentido narrativo.

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/04-proyectos/02-alarma-de-la-puerta.md"
grep -c "sensor magnético" "content/de-jugador-a-creador/04-proyectos/02-alarma-de-la-puerta.md"
```

Esperado: 600-700 palavras; grep retorna pelo menos 1.

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/04-proyectos/02-alarma-de-la-puerta.md
git commit -m "Write Proyecto 2: Alarma de la puerta"
```

---

### Task 7: Projeto 3 — Joystick casero

**Files:**
- Create: `content/de-jugador-a-creador/04-proyectos/03-joystick-casero.md`

**Interfaces:**
- Consumes: template de 5 elementos (spec seção 5); módulo joystick já descrito na Task 3
- Produces: "Proyecto 3" consumido pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Segue os mesmos 5 elementos na mesma ordem
[ ] Resultado: um controle (joystick) que move algo na tela do
    simulador (ex: acende LEDs diferentes conforme a direção)
[ ] DEVE incluir uma caixa inline "¿Qué es una entrada analógica?"
    de 2-3 linhas, no INÍCIO do projeto (antes do elemento 1 ou logo
    após), independente de o leitor ter lido o Módulo 2. Usar analogia
    tipo: "como el volumen de una radio: no es solo encendido o
    apagado, tiene niveles intermedios" (ou equivalente)
[ ] A caixa NÃO deve mencionar nomes de funções de código (nada de
    "analogRead" etc.)
[ ] Dificuldade: Intermedio
[ ] ~2,5 páginas (aprox. 600-700 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/04-proyectos/03-joystick-casero.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/04-proyectos/03-joystick-casero.md"
grep -ci "entrada analógica" "content/de-jugador-a-creador/04-proyectos/03-joystick-casero.md"
grep -ci "analogRead" "content/de-jugador-a-creador/04-proyectos/03-joystick-casero.md"
```

Esperado: 600-700 palavras; primeiro grep ≥1; segundo grep = 0 (confirma ausência de nome de função de código).

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/04-proyectos/03-joystick-casero.md
git commit -m "Write Proyecto 3: Joystick casero"
```

---

### Task 8: Projeto 4 — Detector de movimiento

**Files:**
- Create: `content/de-jugador-a-creador/04-proyectos/04-detector-de-movimiento.md`

**Interfaces:**
- Consumes: template de 5 elementos (spec seção 5); Projeto 2 (Task 6, para a referência cruzada obrigatória)
- Produces: "Proyecto 4" consumido pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Segue os mesmos 5 elementos na mesma ordem
[ ] Resultado: detector que "pega" irmão/pet entrando escondido no
    quarto
[ ] DEVE incluir a nota de substituição do sensor PIR HC-SR501
    (ausente no Tinkercad, representado por um botão)
[ ] DEVE incluir a diferenciação obrigatória em relação ao Proyecto 2,
    com esta ideia: "¿Recuerdas el botón del Proyecto 2 (Alarma de la
    puerta)? Aquí usamos el mismo truco, pero este botón representa
    un sensor que detecta movimiento — sin tocar nada."
[ ] Dificuldade: Intermedio
[ ] ~2,5 páginas (aprox. 600-700 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/04-proyectos/04-detector-de-movimiento.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/04-proyectos/04-detector-de-movimiento.md"
grep -c "Proyecto 2" "content/de-jugador-a-creador/04-proyectos/04-detector-de-movimiento.md"
```

Esperado: 600-700 palavras; grep ≥1 (confirma a referência cruzada obrigatória).

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/04-proyectos/04-detector-de-movimiento.md
git commit -m "Write Proyecto 4: Detector de movimiento"
```

---

### Task 9: Projeto 5 — Barrera automática

**Files:**
- Create: `content/de-jugador-a-creador/04-proyectos/05-barrera-automatica.md`

**Interfaces:**
- Consumes: template de 5 elementos (spec seção 5); servo motor SG90 já descrito na Task 3
- Produces: "Proyecto 5" consumido pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Segue os mesmos 5 elementos na mesma ordem
[ ] Resultado: uma barreira (braço de servo motor) que abre/fecha
    pro "estacionamento" dos brinquedos/Legos
[ ] Nenhuma nota de substituição necessária (servo é nativo no
    Tinkercad)
[ ] Dificuldade: Intermedio
[ ] ~2,5 páginas (aprox. 600-700 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/04-proyectos/05-barrera-automatica.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/04-proyectos/05-barrera-automatica.md"
```

Esperado: 600-700 palavras.

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/04-proyectos/05-barrera-automatica.md
git commit -m "Write Proyecto 5: Barrera automatica"
```

---

### Task 10: Projeto 6 — Medidor de distancia

**Files:**
- Create: `content/de-jugador-a-creador/04-proyectos/06-medidor-de-distancia.md`

**Interfaces:**
- Consumes: template de 5 elementos (spec seção 5); sensor ultrasónico HC-SR04 já descrito na Task 3
- Produces: "Proyecto 6" consumido pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Segue os mesmos 5 elementos na mesma ordem
[ ] Resultado: sensor ultrassônico que mede "¿qué tan cerca estás?"
[ ] Nenhuma nota de substituição necessária (HC-SR04 é nativo no
    Tinkercad)
[ ] Dificuldade: Intermedio
[ ] ~2,5 páginas (aprox. 600-700 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/04-proyectos/06-medidor-de-distancia.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/04-proyectos/06-medidor-de-distancia.md"
```

Esperado: 600-700 palavras.

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/04-proyectos/06-medidor-de-distancia.md
git commit -m "Write Proyecto 6: Medidor de distancia"
```

---

### Task 11: Projeto 7 — Sensor de humedad

**Files:**
- Create: `content/de-jugador-a-creador/04-proyectos/07-sensor-de-humedad.md`

**Interfaces:**
- Consumes: template de 5 elementos (spec seção 5); sensor DHT11 já descrito na Task 3
- Produces: "Proyecto 7" consumido pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Segue os mesmos 5 elementos na mesma ordem
[ ] Resultado: sensor de umidade/temperatura pras plantas de casa
[ ] Nenhuma nota de substituição necessária (DHT11 é nativo no
    Tinkercad)
[ ] Dificuldade: Desafiante — o texto pode reconhecer que este é
    "un paso más" em relação aos anteriores, mas sem soar intimidante
    (reforçar "no necesitas saber más que esto")
[ ] ~2,5 páginas (aprox. 600-700 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/04-proyectos/07-sensor-de-humedad.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/04-proyectos/07-sensor-de-humedad.md"
```

Esperado: 600-700 palavras.

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/04-proyectos/07-sensor-de-humedad.md
git commit -m "Write Proyecto 7: Sensor de humedad"
```

---

### Task 12: Projeto 8 — Robot esquiva-obstáculos

**Files:**
- Create: `content/de-jugador-a-creador/04-proyectos/08-robot-esquiva-obstaculos.md`

**Interfaces:**
- Consumes: template de 5 elementos (spec seção 5); motor DC + L298N e HC-SR04 já descritos na Task 3
- Produces: "Proyecto 8" consumido pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Segue os mesmos 5 elementos na mesma ordem
[ ] Resultado: projeto final — um robô que se move e desvia de
    obstáculos sozinho, integrando conceitos dos projetos anteriores
[ ] DEVE incluir a nota de substituição do driver L298N (ausente no
    Tinkercad — motores conectados direto ao Arduino no simulador),
    com esta ideia: "en el simulador, los motores se conectan directo
    al Arduino; con el kit físico, usarás el módulo L298N para
    proteger el Arduino de la corriente de los motores"
[ ] O sensor HC-SR04 (detecção de obstáculo) É nativo no Tinkercad,
    não precisa de nota de substituição
[ ] Dificuldade: Desafiante — projeto final, pode reconhecer que
    reúne o que foi aprendido nos 7 projetos anteriores
[ ] ~2,5 páginas (aprox. 600-700 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/04-proyectos/08-robot-esquiva-obstaculos.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/04-proyectos/08-robot-esquiva-obstaculos.md"
grep -c "L298N" "content/de-jugador-a-creador/04-proyectos/08-robot-esquiva-obstaculos.md"
```

Esperado: 600-700 palavras; grep ≥1.

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/04-proyectos/08-robot-esquiva-obstaculos.md
git commit -m "Write Proyecto 8: Robot esquiva-obstaculos"
```

---

### Task 13: Vitrina Familiar™

**Files:**
- Create: `content/de-jugador-a-creador/05-vitrina-familiar.md`

**Interfaces:**
- Consumes: detalhamento de 5 sub-seções (spec seção 8)
- Produces: seção "Vitrina Familiar™" consumida pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Segue as 5 sub-seções, NESTA ORDEM, com estes títulos (podem ser
    usados como subtítulos literais):
    1. Por qué esto importa
    2. Cómo fotografiar
    3. Cómo grabar un video corto
    4. Qué escribir al compartir
    5. Conoce tu próximo paso
[ ] Sub-seção 4 DEVE incluir a ressalva de privacidade, com esta
    ideia: "Recuerda que eres tú quien decide qué compartir
    públicamente de tu hijo/a — el grupo familiar siempre es una
    opción igual de válida."
[ ] Sub-seção 4 menciona AMBAS as opções: grupo de família (WhatsApp)
    e, opcionalmente, redes sociais públicas
[ ] Sub-seção 5 aponta pro bônus "Mi Primer Diploma de Inventor™"
    SEM detalhar o roteiro de apresentação em si (isso pertence ao
    bônus, que ainda não foi escrito — só a ponte/menção aqui)
[ ] NÃO inclui um "roteiro de mostra e conta" completo — zero
    duplicação de conteúdo com o bônus futuro
[ ] 2-3 páginas (aprox. 500-750 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/05-vitrina-familiar.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/05-vitrina-familiar.md"
grep -c "Mi Primer Diploma de Inventor" "content/de-jugador-a-creador/05-vitrina-familiar.md"
```

Esperado: 500-750 palavras; grep ≥1 (confirma a ponte pro bônus presente).

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/05-vitrina-familiar.md
git commit -m "Write Vitrina Familiar section"
```

---

### Task 14: Cierre

**Files:**
- Create: `content/de-jugador-a-creador/06-cierre.md`

**Interfaces:**
- Consumes: nenhuma dependência de conteúdo de outras tasks
- Produces: seção "Cierre" consumida pela Task 15

- [ ] **Step 1: Escrever o checklist de aceite**

```
[ ] Sugere próximos passos (ex: experimentar o kit físico, explorar
    os bônus) — SEM detalhar o conteúdo de nenhum bônus específico
[ ] NÃO inclui lembrete de garantia (esse já está na Bienvenida —
    Global Constraints, evitar duplicação)
[ ] Tom de celebração/encerramento, cúmplice, "tú"
[ ] 1-2 páginas (aprox. 250-500 palavras)
```

- [ ] **Step 2: Escrever a prosa**

Escreva `content/de-jugador-a-creador/06-cierre.md` cumprindo o checklist.

- [ ] **Step 3: Autoconferência contra o checklist**

```bash
wc -w "content/de-jugador-a-creador/06-cierre.md"
grep -ci "días.*devolvemos\|garantía" "content/de-jugador-a-creador/06-cierre.md"
```

Esperado: 250-500 palavras; grep = 0 (confirma que a garantia NÃO foi duplicada aqui).

- [ ] **Step 4: Commit**

```bash
git add content/de-jugador-a-creador/06-cierre.md
git commit -m "Write Cierre section"
```

---

### Task 15: Montar o manuscrito completo

**Files:**
- Create: `content/de-jugador-a-creador/MANUSCRITO-COMPLETO.md`

**Interfaces:**
- Consumes: todos os 14 arquivos das Tasks 1-14, nesta ordem exata: Bienvenida, Primer Contacto, Caja de Herramientas, Ritual Sin Pantalla, Proyectos 1-8 (nessa ordem), Vitrina Familiar, Cierre
- Produces: manuscrito único, pronto pra revisão editorial e diagramação (fora de escopo deste plano)

- [ ] **Step 1: Concatenar os arquivos na ordem certa**

```bash
cd "content/de-jugador-a-creador"
{
  echo "# De Jugador a Creador™"
  echo ""
  cat "00-bienvenida.md"
  echo -e "\n\n---\n"
  cat "01-primer-contacto.md"
  echo -e "\n\n---\n"
  cat "02-caja-de-herramientas.md"
  echo -e "\n\n---\n"
  cat "03-ritual-sin-pantalla.md"
  echo -e "\n\n---\n"
  cat "04-proyectos/01-semaforo-del-cuarto.md"
  echo -e "\n\n---\n"
  cat "04-proyectos/02-alarma-de-la-puerta.md"
  echo -e "\n\n---\n"
  cat "04-proyectos/03-joystick-casero.md"
  echo -e "\n\n---\n"
  cat "04-proyectos/04-detector-de-movimiento.md"
  echo -e "\n\n---\n"
  cat "04-proyectos/05-barrera-automatica.md"
  echo -e "\n\n---\n"
  cat "04-proyectos/06-medidor-de-distancia.md"
  echo -e "\n\n---\n"
  cat "04-proyectos/07-sensor-de-humedad.md"
  echo -e "\n\n---\n"
  cat "04-proyectos/08-robot-esquiva-obstaculos.md"
  echo -e "\n\n---\n"
  cat "05-vitrina-familiar.md"
  echo -e "\n\n---\n"
  cat "06-cierre.md"
} > MANUSCRITO-COMPLETO.md
```

- [ ] **Step 2: Verificar o tamanho total**

```bash
wc -w "content/de-jugador-a-creador/MANUSCRITO-COMPLETO.md"
```

Esperado: entre 10.000 e 12.500 palavras (soma das faixas por seção, considerando ~250-300 palavras/página em 40-48 páginas).

- [ ] **Step 3: Verificar duplicações proibidas**

```bash
grep -c "100% de tu dinero" "content/de-jugador-a-creador/MANUSCRITO-COMPLETO.md"
```

Esperado: exatamente 1 (a garantia só aparece na Bienvenida, não duplicada no Cierre nem em nenhum outro lugar).

- [ ] **Step 4: Verificar presença de todas as 14 seções**

```bash
grep -c "^# \|^## " "content/de-jugador-a-creador/MANUSCRITO-COMPLETO.md"
```

Esperado: pelo menos 14 títulos de seção/subseção de nível 1-2 (confirma que nenhum arquivo ficou de fora da concatenação).

- [ ] **Step 5: Commit**

```bash
git add content/de-jugador-a-creador/MANUSCRITO-COMPLETO.md
git commit -m "Assemble complete manuscript for main product ebook"
```

---

## Self-Review

**Spec coverage:** Cada seção do sumário da spec (seção 6) tem uma task correspondente (Bienvenida→Task 1, Primer Contacto→Task 2, Caja de Herramientas→Task 3, Ritual Sin Pantalla→Task 4, os 8 projetos→Tasks 5-12, Vitrina Familiar→Task 13, Cierre→Task 14). Todas as notas obrigatórias de substituição Tinkercad (reed switch, PIR, L298N) e a caixa de entrada analógica têm checklist dedicado nas tasks correspondentes (6, 8, 12, 7). A decisão de não duplicar garantia (Bienvenida vs. Cierre) e não duplicar roteiro de apresentação (Vitrina vs. bônus futuro) tem checagem automatizada nas Tasks 14 e 13.

**Placeholder scan:** Nenhuma task usa "TBD"/"adicionar depois" — diagramas, calendário-arte-final e QR code são explicitamente marcados como fora de escopo nas Global Constraints, não como pendência dentro de uma task.

**Type consistency:** Os nomes dos 8 projetos e sua ordem são idênticos em todas as tasks que os referenciam (Task 4, Tasks 5-12, Task 15) — copiados literalmente da spec seção 7.
