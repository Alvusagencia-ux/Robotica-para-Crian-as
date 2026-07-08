# De Jugador a Creador™ — Arquitetura do Livro (Produto Principal)

**Data:** 2026-07-08
**Status:** Aprovado pelo usuário (arquitetura de conteúdo). Prosa/copy real ainda não escrita.
**Depende de:** `2026-07-07-de-jugador-a-creador-design.md` (arquitetura de produto/oferta — define os 5 módulos, o público-alvo e a grande ideia)

## 1. Contexto

Este documento detalha o conteúdo escrito do e-book principal "De Jugador a Creador™", primeiro dos 10 e-books do produto (principal + 4 bônus + 5 order bumps). Os 5 módulos e seus nomes de marca já estavam travados no spec de oferta — este documento quebra cada módulo em capítulos reais, define os 8 projetos do módulo central e fixa um guia de estilo baseado em pesquisa de autores de referência.

## 2. Autores de referência (pesquisa)

| Autor | Papel de referência |
|---|---|
| **Kathy Ceceri** (*Making Simple Robots*, *Robotics: Discover the Science and Technology of the Future*) | Tom e estrutura — guias STEAM práticos pra família, calorosos, expandem a partir do que a criança já gosta em vez de ensinar do zero de forma acadêmica |
| **Massimo Banzi** (*Getting Started with Arduino*) | Explicação técnica — curto, direto, conversacional em vez de "receita de bolo", diagramas lado a lado |
| **Sylvia Libow Martinez & Gary Stager** (*Invent to Learn*) | Fundamento pedagógico — construcionismo (aprender fazendo), projeto como exploração, não instrução rígida |

Os três escrevem em inglês — usados como referência de tom/estrutura/clareza, não de tradução. O conteúdo nasce em espanhol neutro ("tú", sem voseo).

## 3. Guia de estilo

| Regra | Fonte |
|---|---|
| Frases curtas, sem subordinadas encadeadas | Massimo Banzi |
| Os 8 projetos usam o mesmo template de 5 elementos — ver regra da linha **"Invent to Learn + Kathy Ceceri"** abaixo para o detalhamento completo. A previsibilidade da estrutura reduz ansiedade do pai leigo; mesmo que o passo 3 (kit físico) esteja ausente, o leitor reconhece o padrão. | Kathy Ceceri |
| Termo técnico só aparece depois de uma analogia cotidiana | Banzi + Ceceri |
| Tom de cúmplice ("vamos a hacer"), nunca professoral ("usted debe") | Kathy Ceceri |
| A ESTRUTURA dos projetos é fixa (5 elementos — reduz ansiedade do pai leigo): passos 1, 2, 4 e 5 são sempre presentes; passo 3 é um bloco opcional de kit físico. O TOM dentro de cada passo deve ser exploratório e de cúmplice, nunca de manual técnico. "Exploração" (Invent to Learn) se aplica ao tom e convite, não à ausência de estrutura. | Invent to Learn + Kathy Ceceri |
| Reforçar a cada seção que "no necesitas saber más que esto" | Promessa central do produto (spec de oferta, seção 4) |

## 4. Decisões estruturais

| Decisão | Escolha |
|---|---|
| Tamanho total | 40-48 páginas — curto e direto, compatível com o preço de lançamento (US$6,90) e com a promessa de "primeira vitória em 20 minutos" (soma real das seções: mín. 40, máx. 48) |
| Estilo dos 8 projetos | Clássicos de robótica-para-iniciantes (semáforo, alarme, sensor de movimento etc. — mesma base técnica validada no mercado), reescritos com contexto familiar em vez de escolar |
| Formato do Ritual Sin Pantalla™ | Capítulo narrativo curto + 1 página de calendário/checklist imprimível de 8 semanas |
| Sobreposição Vitrina Familiar™ × bônus Mi Primer Diploma de Inventor™ | Vitrina Familiar™ (produto principal) cobre só "como fotografar/gravar/compartilhar"; o bônus separado fica com o certificado imprimível e o roteiro de apresentação oral em família — zero conteúdo duplicado |

## 5. Estrutura fixa de cada um dos 8 projetos (bloco reutilizável)

1. **Qué vas a construir** — 1 frase, resultado visível
2. **Simula primero** — instrução + URL `tinkercad.com/circuits` (gratuito, sem kit, sem gasto — leva diretamente ao simulador de circuitos); versão impressa: incluir URL digitável; versão digital: QR code apontando para a mesma URL (gerar antes da diagramação — ver Seção 9)
3. *(Bloco opcional — solo si tienes el kit físico; sempre nesta ordem: Materiales → Arma)*
   - **Materiales** — lista curta dos componentes necessários para este projeto
   - **Arma el circuito** — passo a passo curto, com diagrama
4. **¿Funcionó?** — mini-troubleshooting com 2 sub-blocos, **1-2 problemas por sub-bloco**: (a) 1-2 problemas comuns no **simulador** (Tinkercad — ex: componente mal conectado no canvas, simulação não inicia); (b) 1-2 problemas comuns no **kit físico**, precedido de *"Si armaste el circuito físico:"* — cobre ambos os caminhos; leitor simulator-only ignora o sub-bloco (b)
5. **Para ir más lejos** — 1 variação opcional pro filho mais empolgado

> **Nota para o escritor:** O passo 3 é um bloco condicional único — nunca separar Materiales e Arma em steps independentes, e nunca inverter a ordem (Materiales sempre vem antes de Arma).

## 6. Sumário completo (40-48 páginas)

| Seção | Páginas aprox. | Conteúdo |
|---|---|---|
| Bienvenida | 2-3 | Como usar o guia; "no necesitas ser ingeniero"; lembrete da garantia de 7 dias (**obrigatório — não omitir**); instrução de navegação: "puedes ir directo al Módulo 1 ahora y usar el Módulo 2 (Caja de Herramientas) como referencia cuando lo necesites" — comunicar explicitamente que Caja de Herramientas é opcional antes dos projetos |
| 1. Primer Contacto™ | 5-6 | **Deve ser auto-suficiente como experiência de 20 minutos (contados após a conta Tinkercad estar criada).** Adicionar **pré-requisito em caixa destacada** no início do módulo (copy em espanhol): *"Antes de empezar: ve a tinkercad.com/circuits — si no tienes cuenta Autodesk, el simulador te guiará para crearla gratis (2-3 min). Luego regresa aquí y empieza el cronómetro."* — a criação de conta é pré-sessão, fora do cronômetro. Usa estrutura PRÓPRIA de 4 partes (não o bloco de 5 elementos da Seção 5): **(a) Abertura** — promessa de 20 min após conta criada, tom de convite cúmplice; **(b) Passo a passo Tinkercad** — abrir simulador de circuitos, montar e acionar o primeiro LED (guia visual, sem jargão); **(c) ¿Funcionó?** — troubleshooting específico do Tinkercad (2-3 erros comuns do simulador apenas, sem referência a kit físico); **(d) Celebração** — "Lo logramos", fecha o primeiro win com orgulho antes de apresentar os módulos seguintes. Sem bloco de kit físico. |
| 2. Caja de Herramientas del Creador™ | 8-9 | Componentes com analogia cotidiana, como ler diagrama simples, o mínimo de eletricidade (sem fórmula). **Referência consultável — não obrigatória antes dos projetos** (comunicado na Bienvenida). **Lista canônica de componentes a cobrir** (derivada dos 8 projetos): Arduino Uno + cabo USB, protoboard + jumpers, LED + resistor 220Ω, buzzer piezoelétrico, botão/pulsador, módulo joystick (×1, para Projeto 3 — contém 2 potenciômetros internos integrados; no Tinkercad usar o componente "Joystick" como unidade única), sensor PIR HC-SR501, servo motor SG90, sensor ultrassônico HC-SR04, sensor de humedad/temperatura DHT11, motor DC (×2) + driver L298N. Cada componente: nome coloquial → analogia cotidiana → representação no Tinkercad. **Nota de Tinkercad para o escritor:** PIR HC-SR501 e L298N não existem na biblioteca padrão do Tinkercad Circuits. Substitutos: (1) PIR → usar botão/pulsador no Tinkercad com texto explicativo em espanhol: *"en el simulador, representamos el sensor con un botón — en la vida real, es un sensor que detecta movimiento sin necesidad de tocarlo"*; (2) L298N → usar componente de motor DC direto no Tinkercad sem driver explícito, com nota *"en el simulador, los motores se conectan directo al Arduino; con el kit físico, usarás el módulo L298N para proteger el Arduino"*. Indicar esses substitutos na entrada de cada componente na Caja de Herramientas. **Não incluir funções de código** (analogRead, map() etc.) — introduzidos inline nos projetos. |
| 3. Ritual Sin Pantalla™ | 4-5 | Por que 30-45min, como propor sem resistência, calendário imprimível de 8 semanas. **Decisão de design (constraint de escopo):** 1 sessão/semana = 1 projeto/semana = 8 semanas. Todos os projetos (incluindo Desafiante) **devem ser completáveis em 1 sessão de 30-45 min**. **Protocolo de teste (obrigatório para projetos Intermedio e Desafiante):** testar com pelo menos 1 dupla pai+filho (criança de 7-12 anos) em condições reais antes de finalizar. **Responsável:** editor/produtor de conteúdo. Se exceder 45 min no teste, o escritor simplifica o projeto até caber — não expande o calendário. |
| 4. Proyectos Manos a la Obra™ | 18-20 | 8 projetos, ~2,5 páginas cada, estrutura fixa (seção 5) |
| 5. Vitrina Familiar™ | 2-3 | Como fotografar/gravar/compartilhar; ponte pro bônus Diploma (ver seção 8) |
| Cierre | 1-2 | Próximos passos sugeridos (ex: tentar kit físico, bônus); **sem lembrete de garantia** — o lembrete vai na Bienvenida, não no encerramento |

## 7. Os 8 projetos (Proyectos Manos a la Obra™)

Clássicos de robótica iniciante, reescritos com contexto familiar, dificuldade crescente:

| # | Projeto | Dificuldade | Contexto familiar |
|---|---|---|---|
| 1 | Semáforo del cuarto | Fácil | LED básico |
| 2 | Alarma de la puerta | Fácil | Avisa quando alguém entra no quarto. **Nota Tinkercad:** reed switch (sensor magnético de porta) não existe no Tinkercad — usar botão/pulsador como substituto. O escritor deve incluir 1-2 frases explicando a analogia: *"en el simulador usamos un botón; en la vida real, la puerta lleva un sensor magnético que hace exactamente lo mismo cuando se abre"*. |
| 3 | Joystick casero | Intermedio | Controle simples — requer conceito de entrada analógica (leitura de valores variáveis, não apenas ligado/desligado). **Via primária de prep:** caixa inline *"¿Qué es una entrada analógica?"* de 2-3 linhas no início deste projeto, independente do Módulo 2 — garante que todo leitor (sequencial ou que pulou o Módulo 2) receba o conceito mínimo necessário aqui. Sem mencionar nomes de funções de código na caixa — usar analogia cotidiana em espanhol (ex: *"como el volumen de una radio: no es solo encendido o apagado, tiene niveles intermedios"*). |
| 4 | Detector de movimiento | Intermedio | "Pega" irmão/pet entrando escondido. **Nota Tinkercad:** sensor PIR HC-SR501 não existe no Tinkercad — usar botão/pulsador como substituto (mesmo padrão do Projeto 2, mas com sensor diferente). **Diferenciação obrigatória:** o escritor deve incluir 1-2 frases explicando que este botão representa um sensor de MOVIMENTO, diferente do sensor magnético de porta do Projeto 2: *"¿Recuerdas el botón del Proyecto 2 (Alarma de la puerta)? Aquí usamos el mismo truco, pero este botón representa un sensor que detecta movimiento — sin tocar nada."* |
| 5 | Barrera automática | Intermedio | "Estacionamento" dos brinquedos/Legos |
| 6 | Medidor de distancia | Intermedio | Sensor ultrassônico, "¿qué tan cerca estás?" |
| 7 | Sensor de humedad | Desafiante | Pras plantas de casa |
| 8 | Robot esquiva-obstáculos | Desafiante | Projeto final, integra vários conceitos. **Nota Tinkercad:** driver L298N não existe no Tinkercad — usar componente de motor DC direto conectado ao Arduino (sem driver explícito). O escritor deve incluir nota: *"en el simulador, los motores se conectan directo al Arduino; con el kit físico, usarás el módulo L298N para proteger el Arduino de la corriente de los motores."* O sensor HC-SR04 (obstáculos) está disponível no Tinkercad normalmente. |

## 8. Detalhamento do módulo Vitrina Familiar™

1. **Por qué esto importa** *(Por que isso importa)* — fecha o círculo emocional da grande ideia: o filho vê que criou algo de verdade, não só "brincou com eletrônica"
2. **Cómo fotografiar** *(Como fotografar)* — luz natural perto de janela; mostrar o projeto e a cara de orgulho do filho, não só o circuito; opcional foto antes/depois
3. **Cómo grabar un video corto** *(Como gravar um vídeo curto)* (10-15s) — o projeto funcionando de verdade
4. **Qué escribir al compartir** *(O que escrever ao compartilhar)* — 2-3 frases modelo prontas pro pai copiar; sugestão de compartilhar no grupo de família (WhatsApp) e, **opcionalmente e a critério dos pais**, em redes sociais públicas (Instagram/TikTok) — o compartilhamento público alimenta a "prova social" do spec de oferta. **Incluir ressalva de privacidade:** *"Recuerda que eres tú quien decide qué compartir públicamente de tu hijo/a — el grupo familiar siempre es una opción igual de válida."* **Atenção ao escritor:** não duplicar o "roteiro de mostra e conta" — esse roteiro pertence ao bônus "Mi Primer Diploma de Inventor™" (zero duplicação, ver seção 4).
5. **Conoce tu próximo paso** *(Ponte pro bônus)* — última frase indica o bônus "Mi Primer Diploma de Inventor™" pra quem quiser o certificado imprimível e o roteiro de apresentação oral em família — mantém o produto principal leve e prático, sem duplicar o bônus

## 9. Próximos passos

- Escrever a prosa real de cada seção, seguindo o guia de estilo (seção 3) e a estrutura fixa dos projetos (seção 5)
- Produzir os diagramas dos 8 projetos em formato **"lado a lado"**: painel esquerdo = screenshot do circuito montado no Tinkercad (simulador); painel direito = lista visual dos componentes usados, com **ícones ilustrados ou screenshots do componente no painel lateral do Tinkercad** + nome coloquial. **Sem fotos de componentes físicos reais** (contradizem o posicionamento "100% simulador, sem kit") e **sem schematic elétrico** (símbolo de engenharia). Para componentes sem versão Tinkercad nativa (3 casos): **reed switch** (Projeto 2), **PIR HC-SR501** (Projeto 4) e **L298N** (Projeto 8) — usar o substituto do simulador (botão / botão / motor DC direto, respectivamente) no painel esquerdo e uma nota explicativa em vez de ícone físico no painel direito. Ferramenta sugerida: Canva ou Figma para composição dos painéis.
- Desenhar a página do calendário imprimível de 8 semanas (Ritual Sin Pantalla™)
- Gerar QR code apontando para `tinkercad.com/circuits` **antes da diagramação** — necessário para o Step 2 de cada projeto na versão digital do e-book
- Depois do produto principal: repetir esse mesmo processo de arquitetura pros 4 bônus e 5 order bumps
