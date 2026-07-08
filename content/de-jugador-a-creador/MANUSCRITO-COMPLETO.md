# De Jugador a Creador™

# Bienvenida

Hola. Si estás leyendo esto, es probable que hayas sentido esa culpa silenciosa de ver a tu hijo o hija pegado a una pantalla y no saber cómo cambiar eso sin que termine en pelea. Respira. Elegiste bien. No vas a encontrar aquí un sermón sobre "los males de la tecnología". Vas a encontrar un camino concreto para usar esa misma fascinación por las pantallas a tu favor.

Ese es el corazón de este libro: tu hijo o hija ya ama la tecnología. Nosotros no vamos a pelear contra eso. Vamos a redirigirla. En lugar de pasar horas consumiendo lo que otros crearon, va a pasar 30 o 45 minutos por semana creando algo propio, con tus manos y las suyas trabajando juntas. Un semáforo que enciende y apaga. Una alarma que avisa cuando alguien entra a su cuarto. Un robot que esquiva obstáculos por sí solo. Cosas reales, hechas por ustedes dos.

Y aquí va la promesa que sostiene todo el libro: no necesitas ser ingeniero. No necesitas saber nada de electrónica, ni haber tocado un cable en tu vida, ni recordar fórmulas de la escuela. Si sabes seguir una receta de cocina, sabes seguir estos proyectos. Cada paso está pensado para un padre o una madre sin ninguna base técnica. Vamos a hacer esto juntos, un proyecto a la vez.

## Cómo usar esta guía

Este libro está armado para que avances sin perderte, así que déjame explicarte rápido cómo moverte por él.

El Módulo 1, **Primer Contacto™**, es tu punto de partida. Ahí vas a lograr, en unos 20 minutos, tu primer resultado visible con tu hijo o hija: un LED encendido en un simulador gratuito, sin gastar un peso y sin comprar nada. Te recomendamos empezar directamente ahí. Es la mejor forma de sentir, desde el primer día, que esto sí es para ustedes.

El Módulo 2, **Caja de Herramientas del Creador™**, es distinto: no es un paso obligatorio antes de arrancar. Es una referencia. Ahí explicamos, con palabras simples y comparaciones de la vida diaria, qué es cada componente y cómo leer un diagrama sencillo. Puedes ir directo al Módulo 1 ahora mismo y usar el Módulo 2 como consulta, cuando algo te genere dudas durante un proyecto. No hace falta leerlo entero, ni leerlo primero. Está ahí para cuando lo necesites, como un manual al que vuelves solo si te trabas.

Después vienen el Módulo 3, con el ritual semanal para reemplazar la pantalla sin pelear por ella, el Módulo 4, con los 8 proyectos guiados paso a paso, y el Módulo 5, para celebrar y compartir en familia lo que construyeron.

## Nuestra garantía

Sabemos que probar algo nuevo con tu hijo o hija da un poco de nervios. Por eso te lo dejamos por escrito, sin letra chica:

> Si en los primeros 7 días no lograste hacer el primer proyecto junto a tu hijo/a, te devolvemos el 100% de tu dinero. Sin formularios, sin preguntas.

No hay riesgo real de tu lado. El único riesgo es no intentarlo.

## Da vuelta la página

Tu hijo o hija ya te está esperando, aunque todavía no lo sepa. Prepara algo para tomar, siéntate a su lado y da vuelta la página. El Módulo 1 te toma 20 minutos. Vamos a empezar.


---

# Primer Contacto™

> **Antes de empezar:** ve a tinkercad.com/circuits — si no tienes
> cuenta Autodesk, el simulador te guiará para crearla gratis
> (2-3 min). Luego regresa aquí y empieza el cronómetro.

Ese pasito de crear la cuenta no cuenta. Es como cuando llegas a una plaza de juegos y hay que anotarse en la entrada: no es la diversión todavía, es solo la puerta. Una vez que tengas tu cuenta creada, ahí sí arranca el reloj. Y desde ese momento, en unos 20 minutos, vas a tener a tu hijo o hija mirando un LED encenderse y apagarse solo, en la pantalla, obra de ustedes dos.

## Vamos a encender nuestra primera luz

Siéntate junto a tu hijo o hija frente a la pantalla. No necesitas ningún cable, ninguna pieza, ningún gasto. Todo lo que vas a usar hoy vive adentro del navegador, gratis, en un simulador llamado Tinkercad. Es un programa donde arrastras piezas electrónicas con el mouse, las conectas entre sí como si fueran piezas de un juego de mesa, y apretas un botón para ver si tu circuito funciona de verdad, sin riesgo de romper nada ni quemar nada.

La promesa de estos próximos 20 minutos es simple: al final, van a haber armado su primer circuito juntos y van a haber visto un LED parpadeando en la pantalla. Eso es todo. No hace falta entender electrónica, no hace falta saber programar, no hace falta que tú sepas la respuesta de antemano. Solo hace falta seguir los pasos con calma, uno detrás del otro. Vamos.

## Manos a la obra: tu primer circuito

**Paso 1: abre el simulador.** En el navegador, entra a tinkercad.com/circuits. Vas a ver un botón que dice algo como "Crear nuevo circuito" o "Create new Circuit". Haz clic ahí. Se va a abrir un espacio de trabajo vacío: una pantalla en blanco con un menú de piezas a la derecha. Esa pantalla en blanco es tu mesa de trabajo. Ahí vas a construir todo.

**Paso 2: trae el Arduino.** A la derecha vas a ver una lista larga de componentes, con un buscador arriba. Escribe "Arduino Uno" en ese buscador. Va a aparecer una placa rectangular de color azul. Esa placa es el cerebro de tu circuito: es la que va a decidir cuándo encender la luz y cuándo apagarla. Arrástrala con el mouse hasta el centro de tu mesa de trabajo y suéltala ahí.

**Paso 3: trae el LED.** Ahora busca "LED" en el mismo buscador. Va a aparecer un foquito pequeño, como una gotita de colores. Ese es tu LED: una lucecita que se enciende cuando le llega electricidad, parecida a la lucecita del router de tu casa o del control remoto del televisor. Arrástralo también a tu mesa de trabajo, cerca del Arduino.

**Paso 4: trae la resistencia.** Busca "resistor" o "resistencia". Vas a ver una piecita alargada con rayitas de colores. Piensa en ella como una manguera angosta: deja pasar la electricidad, pero controla que no pase demasiada de golpe. Sin ella, el LED recibiría más electricidad de la que soporta y se dañaría. Arrástrala también a la mesa, entre el Arduino y el LED.

**Paso 5: conecta las piezas.** Cada componente tiene puntitos de colores en sus bordes: esos puntitos se llaman pines, y son por donde entra y sale la electricidad. Haz clic sobre un pin y, sin soltar, arrastra hasta otro pin: vas a ver aparecer un cable de color que los une. Conecta así: una pata del LED con un extremo de la resistencia, el otro extremo de la resistencia con el pin llamado "13" del Arduino, y la otra pata del LED con el pin llamado "GND" del Arduino. Si el cable queda de un color raro o cruzado, no te preocupes: puedes hacer clic sobre él y arrastrarlo de nuevo hasta que quede prolijo.

**Paso 6: dile al Arduino qué hacer.** El circuito ya está armado, pero le falta algo: instrucciones. Busca arriba de la pantalla un botón que dice "Código" o "Code" y haz clic ahí. Se va a abrir un panel con bloques de colores, como piezas de rompecabezas que encajan unas con otras: esto es programar, pero sin escribir ni una sola línea de texto. Arrastra un bloque que diga "Encender pin" (o "Set pin") y elige el pin 13. Debajo, suma un bloque de "Esperar" (o "Wait") y ponlo en 1 segundo. Ahora agrega otro bloque de "Apagar pin" (o "Set pin"), otra vez en el pin 13. Y para cerrar, un último "Esperar" de 1 segundo más. Esos cuatro bloques, uno debajo del otro, son literalmente la receta completa: enciende, espera, apaga, espera. Tinkercad repite esa receta sola, una y otra vez, mientras el circuito esté simulando.

**Paso 7: aprieta simular.** Arriba a la derecha vas a ver un botón verde que dice "Iniciar simulación" o "Start Simulation". Ese botón es el momento de la verdad. Apriétalo junto a tu hijo o hija, y cuenten hasta tres en voz alta. Si todo quedó bien conectado y los bloques están en el orden correcto, el LED va a empezar a encenderse y apagarse solo, una y otra vez, siguiendo exactamente la receta que armaron juntos.

Eso que acaba de pasar tiene un nombre, y ya te lo puedes quedar: se llama "blink", parpadeo. Es el primer programa que casi todo el mundo hace cuando empieza en robótica, porque es la forma más simple de comprobar que un circuito y sus instrucciones realmente funcionan juntos.

## ¿Funcionó?

Si el LED no parpadeó a la primera, tranquilo. Es lo más normal del mundo, y casi siempre se arregla en segundos. Estos son los tropiezos más comunes dentro del simulador:

**El LED se ve apagado y nada se mueve.** Lo más probable es que falte alguna conexión, o que un cable haya quedado unido al pin equivocado. Repasa el Paso 5 con calma: toca cada cable y fíjate en sus dos puntas. Si alguna punta no está pegada exactamente sobre un pin, arrástrala de nuevo hasta que encastre bien. Tinkercad suele marcar en rojo los pines que quedaron sueltos, así que revisa si hay algo pintado de ese color.

**Apareció un mensaje de advertencia en la pantalla.** A veces Tinkercad avisa con un cartelito amarillo o rojo que algo está mal conectado, por ejemplo si el LED quedó unido directo al Arduino sin pasar por la resistencia. Léelo con calma junto a tu hijo o hija: casi siempre te dice exactamente qué pieza revisar. Corrige esa conexión y vuelve a apretar "Iniciar simulación".

**Los bloques de código no hacen nada, o el LED queda siempre prendido o siempre apagado.** Vuelve al Paso 6 y revisa el orden de los cuatro bloques: primero "Encender pin", después "Esperar", después "Apagar pin", y por último otro "Esperar". Si dos bloques quedaron invertidos, o si alguno quedó suelto y no encajado dentro de la secuencia, el programa no va a repetir la receta como corresponde. Arrástralos de nuevo hasta que queden en fila, uno debajo del otro, bien pegados. Y si el botón de simular no responde o la pantalla se queda "cargando" para siempre, casi siempre alcanza con cerrar alguna otra pestaña del navegador y volver a apretarlo: tu circuito queda guardado solo, así que no vas a perder nada.

Ninguno de estos tropiezos significa que hiciste algo mal. Significa que estás construyendo, que es exactamente lo que veníamos a hacer.

## Lo logramos

Mira eso: acaban de armar un circuito electrónico desde cero, sin haber tocado nunca antes un cable, y ya lo tienen encendiéndose y apagándose solo frente a ustedes. Eso que parpadea en la pantalla no es un truco ni un video: es un circuito real, que ustedes diseñaron con sus propias manos, pieza por pieza.

Date un momento para mirar la cara de tu hijo o hija ahora mismo. Esa mezcla de sorpresa y orgullo es justo lo que veníamos a buscar. Guárdenla, porque es apenas la primera de muchas.

A partir de aquí, el camino se abre en dos direcciones y puedes tomar la que prefieras. Si quieres entender un poco mejor qué es cada pieza que acabas de usar, el Módulo 2, **Caja de Herramientas del Creador™**, te espera como consulta, para leer entero o solo cuando te surja una duda. Si prefieres seguir con las manos en la masa, el Módulo 3 te muestra cómo convertir este ratito en un ritual semanal con tu hijo o hija, y el Módulo 4 te lleva directo a los 8 proyectos completos, empezando por uno tan sencillo como el que acabas de terminar.

Como quieras seguir, ya diste el paso más difícil: el primero. Lo demás, ya lo saben hacer.


---

# Caja de Herramientas del Creador™

Este capítulo es distinto a los demás. No está pensado para leerlo de un tirón, de principio a fin. Es una referencia consultable, no un paso obligatorio antes de los proyectos: puedes saltar directo al primer proyecto ahora mismo y volver aquí solo cuando algo te genere dudas, como quien vuelve al manual de instrucciones a mitad de armar un mueble. Guarda esta página. Vas a volver a ella más de una vez.

Todo lo que sigue está explicado con comparaciones de la vida diaria, sin fórmulas ni tecnicismos innecesarios. La idea no es que te conviertas en electricista: es que la próxima vez que un proyecto mencione una pieza, sepas de qué está hablando y qué hace, en palabras simples.

## Lo mínimo de electricidad, sin fórmulas

Antes de repasar cada componente, conviene tener una imagen clara de qué es la electricidad dentro de estos circuitos, sin números ni ecuaciones de por medio.

Piensa en la electricidad como el agua que corre por una cañería. El Arduino es como la bomba que decide cuándo abrir y cerrar el paso de agua. Los cables son las cañerías por donde esa agua viaja. Y cada componente que conectas —un LED, un motor, un sensor— es un aparato que necesita que le llegue esa agua para funcionar: algunos la usan para encender una luz, otros para hacer girar algo, otros para escuchar lo que pasa alrededor.

Hay dos ideas más que te van a servir todo el libro. La primera es que la electricidad necesita un circuito cerrado, es decir, un camino de ida y de vuelta: si el camino se corta en algún punto, nada funciona, igual que una manguera cortada no moja el jardín. Por eso vas a ver que casi todos los componentes tienen al menos dos patas o dos cables: uno para que la electricidad entre, otro para que salga y vuelva al Arduino, cerrando ese camino.

La segunda idea es que algunos componentes son frágiles y no toleran que les llegue demasiada electricidad de golpe, por eso a veces vas a usar una pieza que actúa de "freno", regulando cuánta electricidad pasa. Otros componentes, en cambio, piden más electricidad de la que el Arduino puede entregar por sí solo, y ahí va a hacer falta una piecita ayudante que reparta ese esfuerzo. No necesitas calcular nada de esto ni recordar cuál pieza necesita cuál ayuda: los proyectos ya vienen armados para que la cantidad correcta llegue a cada pieza, en el orden correcto. Solo necesitas entender la idea general y reconocer, más adelante, a qué se refería este párrafo cuando vuelvas a leerlo.

## Cómo leer un diagrama sencillo

En los proyectos vas a encontrar diagramas: dibujos que muestran qué pieza va conectada con cuál. No hace falta ningún curso para leerlos, solo estos tres hábitos.

Primero, identifica las piezas antes que las líneas. Cada forma en el diagrama representa un componente real: una placa, un sensor, un cable. Reconoce primero qué es cada forma, después mira cómo se conectan entre sí.

Segundo, sigue las líneas de a una. Cada línea del diagrama es un cable, y une un punto específico de una pieza con un punto específico de otra. Si el diagrama usa colores, generalmente el rojo indica el camino de "ida" de la electricidad y el negro o azul el camino de "vuelta", aunque esto puede variar un poco según el diagrama. Ante la duda, sigue una línea a la vez con el dedo, desde donde empieza hasta donde termina, antes de pasar a la siguiente.

Tercero, compara con lo que tienes en pantalla. En Tinkercad, tu circuito real y el diagrama deberían verse parecidos: mismas piezas, mismas conexiones. Si algo no coincide, confía más en el diagrama y revisa tu circuito, pieza por pieza, hasta encontrar la diferencia.

No hace falta que aprendas a dibujar diagramas ni que memorices ningún símbolo raro. En este libro, cada proyecto ya trae su propio diagrama listo, pensado para que lo mires al lado de tu pantalla mientras armas el circuito, como quien mira una receta al lado de la olla. Con la práctica de los primeros dos o tres proyectos, leer un diagrama se va a volver tan natural como leer un mapa de calles simple.

## Los componentes, uno por uno

### Arduino Uno + cable USB

Es el cerebro de todo el circuito. Piensa en él como el director de una orquesta: no toca ningún instrumento él mismo, pero le dice a cada uno cuándo entrar y cuándo callar. El cable USB es lo que conecta ese cerebro con tu computadora, para dos cosas: darle energía y enviarle las instrucciones que va a seguir. En Tinkercad, el Arduino Uno aparece como una placa azul rectangular con muchos pines a los costados; lo arrastras a tu mesa de trabajo y ahí queda, siempre en el centro de cada proyecto.

### Protoboard + jumpers

La protoboard es como una mesa de trabajo con agujeritos organizados en filas, pensada para conectar piezas sin necesidad de soldar nada. Imagínala como un tablero de Lego, pero para electricidad: encajas las piezas en sus agujeros y quedan unidas eléctricamente por dentro, sin que tengas que unir cables uno por uno a mano. Los jumpers son esos cablecitos cortos y flexibles que usas para saltar de un punto a otro de la protoboard, como pequeños puentes. En Tinkercad, ambos aparecen como piezas propias: arrastras la protoboard como base, y luego usas jumpers de colores para unir sus agujeros con los pines del Arduino y de otros componentes.

### LED + resistor 220Ω

El LED es una lucecita pequeña que se enciende cuando le llega electricidad, parecida a la lucecita del router de tu casa o del control remoto del televisor. El resistor de 220 ohmios es el "freno" que mencionamos antes: una piecita alargada, con rayitas de colores, que deja pasar la electricidad pero controla que no pase demasiada de golpe. Sin él, el LED recibiría más de lo que soporta y se quemaría en segundos. En Tinkercad, buscas "LED" y aparece como una gotita de color, y buscas "resistor" para encontrar la piecita rayada; casi siempre van conectados juntos, uno al lado del otro.

### Buzzer piezoeléctrico

Es el parlante más simple que existe: un discito negro que emite un sonido cuando le llega electricidad, como el pitido de un microondas o de una alarma de auto. No reproduce música ni voces, solo genera tonos, pero eso alcanza para avisar, alertar o llamar la atención en varios de los proyectos. En Tinkercad lo encuentras buscando "buzzer" o "piezo speaker", y aparece como un pequeño disco con dos patas, listo para conectar directo al Arduino.

### Botón/pulsador

Es exactamente lo que parece: un botoncito que interrumpe o deja pasar la electricidad según si está apretado o no, igual que el botón de un timbre. Cuando lo presionas, cierra el camino y la electricidad pasa; cuando lo sueltas, el camino se corta. En Tinkercad aparece como un botoncito cuadrado, generalmente azul, que puedes "apretar" con el mouse durante la simulación para ver cómo reacciona el resto del circuito.

### Módulo joystick

Es como el joystick de un control de videojuegos en miniatura: lo mueves hacia arriba, abajo, izquierda o derecha, y esa posición le dice al Arduino hacia dónde "apuntas". En la vida real, un joystick físico contiene dos piezas más pequeñas por dentro, una para cada dirección, pero eso no te va a importar nunca: tanto en el kit físico como en Tinkercad lo vas a tratar siempre como una sola pieza. En el simulador aparece como un mini joystick con una perilla en el centro, y se conecta con solo unos pocos cables al Arduino.

### Sensor PIR HC-SR501

Este es un sensor de movimiento: detecta cuando alguien pasa cerca, igual que las luces automáticas de algunos pasillos o garages, que se encienden solas cuando te acercas sin que toques ningún interruptor. Es una de las dos piezas de este libro que no existen en el simulador gratuito, así que usamos una sustituta.

**Nota importante:** en el simulador, representamos el sensor con un botón — en la vida real, es un sensor que detecta movimiento sin necesidad de tocarlo. Cuando en Tinkercad "aprietas" ese botón, es como si en la vida real alguien hubiera entrado en el rango del sensor PIR. Con el kit físico en tus manos, ese mismo circuito va a funcionar de verdad con solo acercarte, sin tocar nada.

### Servo motor SG90

Es un pequeño motor que no gira sin parar como un ventilador, sino que se mueve hasta un ángulo exacto y se queda ahí, como el brazo de una barrera de estacionamiento que sube hasta cierto punto y se detiene. Eso lo hace perfecto para mover una tapa, una barrera o un brazo robótico hasta una posición precisa. En Tinkercad aparece como una cajita con un brazo plástico saliendo de arriba, y ese brazo gira en pantalla durante la simulación, igual que lo haría el servo real.

### Sensor ultrasónico HC-SR04

Mide distancias sin tocar nada, igual que hacen los murciélagos o como el sensor de estacionamiento de algunos autos que empieza a pitar cuando te acercas a la pared. Tiene dos "ojitos" redondos: uno emite un sonido agudo que el oído humano no puede escuchar, y el otro escucha cuánto tarda ese sonido en rebotar y volver. Cuanto más lejos está el objeto, más tarda en volver el eco. En Tinkercad se ve tal cual es en la vida real, con sus dos círculos plateados, y se conecta con cuatro cables al Arduino.

### Sensor de humedad/temperatura DHT11

Es un termómetro y un higrómetro en una sola piecita: mide la temperatura del aire y también cuánta humedad hay, algo parecido a esas estaciones meteorológicas de plástico que se cuelgan en la cocina. Es útil para proyectos que necesitan "sentir" el ambiente, como una alarma que avisa si una planta está en un lugar demasiado seco. En Tinkercad aparece como una piecita azul pequeña con tres o cuatro patas, y se conecta directo al Arduino igual que el resto de los sensores.

### Motor DC (×2) + driver L298N

El motor DC es el motor clásico que gira sin parar mientras le llega electricidad, como el motor de un auto a control remoto o de un ventilador de mano. En la mayoría de los proyectos que usan movimiento vas a necesitar dos, uno para cada rueda de tu robot. Pero los motores DC tienen un problema: piden mucha más electricidad de la que el Arduino puede entregar de forma segura, así que conectarlos directo podría dañar la placa. Ahí entra el módulo L298N, una piecita que actúa como intermediaria: recibe la orden del Arduino y usa su propia fuente de energía para mover los motores, protegiendo al Arduino de ese esfuerzo extra. Este es el segundo componente que no existe en el simulador gratuito.

**Nota importante:** en el simulador, los motores se conectan directo al Arduino; con el kit físico, usarás el módulo L298N para proteger el Arduino. En Tinkercad vas a ver el motor DC conectado directamente a la placa, porque el simulador no necesita protegerse a sí mismo. Cuando armes el proyecto con el kit real en tus manos, va a aparecer el L298N en el medio, haciendo ese trabajo de intermediario que en pantalla no hacía falta mostrar.

## Cuando algo no coincide

Puede pasar que, mientras armas un proyecto, notes que lo que ves en pantalla no es exactamente igual a lo que tienes en la caja física, sobre todo con el sensor PIR y con los motores DC. Eso es normal y ya lo esperábamos: no es un error tuyo ni un error del libro. Vuelve a las dos notas de sustitución de este capítulo cada vez que te surja esa duda, y vas a recordar por qué el simulador se ve un poco distinto del kit real.

Fuera de esos dos casos puntuales, cada pieza que ves en Tinkercad se comporta igual que su versión física: mismo nombre, misma forma, mismas conexiones. Eso significa que todo lo que practiques en el simulador se traslada directo al kit físico, sin sorpresas.

## Ya tienes lo que necesitas

No hace falta que memorices nada de este capítulo. Guárdalo como el manual al que vuelves cuando una palabra te resulta desconocida en medio de un proyecto: "resistor", "PIR", "L298N", lo que sea. Ahora sí, da vuelta la página y sigue construyendo junto a tu hijo o hija.


---

# Ritual Sin Pantalla™

Ya armaste tu primer circuito. Ya viste esa cara de sorpresa. Ahora viene la parte que de verdad cambia algo en tu casa: convertir ese momento suelto en una cita fija de la semana. No un "algún día si hay tiempo". Un rato que ya tiene su lugar reservado en el calendario, como el fútbol de los sábados o la pizza de los viernes.

A eso le llamamos el Ritual Sin Pantalla™: 30 a 45 minutos, una vez por semana, siempre el mismo día si es posible, dedicados a construir algo real junto a tu hijo o hija. Nada de improvisar cada vez si hay ganas. La gracia de un ritual es que no se negocia: simplemente pasa, como pasa el cumpleaños cada año.

## Por qué 30 a 45 minutos, ni más ni menos

Ese rango de tiempo no salió de una intuición al azar. Es el punto donde la atención de un niño o niña todavía está fresca cuando llega el final, y donde tú todavía tienes ganas de repetirlo la semana que viene.

Menos de 30 minutos y el proyecto queda a mitad de camino casi siempre: apenas están entrando en tema y ya hay que guardar todo. Eso genera frustración, no entusiasmo, porque nadie disfruta cerrar un libro justo antes del final del capítulo. Más de 45 minutos, en cambio, el ritual empieza a sentirse como una tarea escolar más, algo largo y pesado que compite con la cena, la tarea real o el cansancio del día. Y una tarea pesada es exactamente lo que un niño o niña aprende a evitar, no a esperar con ganas.

Treinta a cuarenta y cinco minutos es, además, un tiempo que tú puedes sostener semana tras semana sin que se sienta como un sacrificio. Un ritual que exige demasiado se abandona a la tercera o cuarta semana, apenas aparece un día ocupado. Un ritual liviano, en cambio, sobrevive a las semanas difíciles, porque cuesta poco decir "dale, lo hacemos igual, son solo 40 minutos". Ese es el objetivo real: no un proyecto perfecto una sola vez, sino un hábito que dura los ocho proyectos completos.

## Cómo proponerlo sin pelea

Aquí está el punto más delicado, y también el más importante. No se trata de convencer a tu hijo o hija de que las pantallas son malas. No lo son, y decirle eso solo va a generar defensa, no entusiasmo. Se trata de usar esa misma fascinación por las pantallas, pero apuntada hacia otro lado: en vez de mirar a alguien más construir un robot en un video, construir uno propio, con las manos.

Evita la palabra "en vez de". "En vez de la tablet, vamos a hacer esto" suena a castigo, a algo que se pierde. Prueba con una invitación concreta: "Esta semana armamos una alarma de verdad para tu puerta, ¿la probamos hoy después de la merienda?". Nombra el resultado, no la renuncia. Un niño o niña que escucha "vamos a construir algo que suena cuando alguien entra a tu cuarto" está más cerca de decir que sí que uno al que le explicas por qué debería apagar la pantalla.

Elige un horario fijo y anúncialo con anticipación, no lo propongas de improviso cuando ya está mirando algo. "Todos los domingos después del almuerzo" funciona mejor que preguntarle en el momento, porque ya no hay una negociación que ganar o perder: simplemente es la hora del ritual, como es la hora de bañarse o de cenar. Con el tiempo, el ritual deja de necesitar que lo propongas: se vuelve parte de la semana, y hasta puede que un día sea tu hijo o hija quien te lo recuerde a ti.

Dale un rol activo desde el primer minuto. No es "mira cómo yo armo esto", es "elige tú qué cable va primero" o "aprieta tú el botón de simular". Cuanto más sienta que el proyecto es suyo, menos se parece a una obligación que le impones y más se parece a un juego que eligió jugar.

Y si un domingo dice que no quiere, no fuerces la pelea. Ofrece moverlo a otro momento de esa misma semana, sin dramatizar. Un ritual sostenido siete de cada ocho semanas construye un robot igual de bien que uno cumplido a rajatabla, y sin el desgaste de una discusión.

## El calendario de 8 semanas

Cada semana tiene su propio proyecto, en un orden pensado para que la dificultad crezca de a poco, sin saltos bruscos. Empiezas con algo simple para ganar confianza, y terminas con un robot completo que reúne todo lo aprendido en el camino.

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

Guarda esta tabla o pégala en la puerta de la heladera. Es tu mapa de las próximas ocho semanas, y te va a servir para anticiparle a tu hijo o hija qué viene la semana siguiente, algo que también ayuda a generar ganas: "el domingo que viene armamos un robot que esquiva cosas solo, ¿viste alguno así en algún video?".

Una aclaración importante, porque seguro te la preguntas mirando el final de la lista: sí, incluso el robot esquiva-obstáculos de la semana 8, el proyecto más ambicioso del libro, entra completo dentro de los mismos 30 a 45 minutos. Ningún proyecto de este calendario se extiende más que eso, ni siquiera los últimos, los que suman más piezas y más pasos. Cada uno fue diseñado y probado para caber en una sola sesión, del principio al final, sin que tengas que cortarlo a la mitad ni retomarlo al día siguiente. El ritual no crece con las semanas. Lo que crece es lo que tu hijo o hija es capaz de construir dentro de ese mismo ratito fijo.

## Lo que estás construyendo, en realidad

Dentro de ocho semanas vas a tener ocho proyectos terminados, sí. Pero lo que de verdad estás construyendo es otra cosa: un espacio semanal donde tu hijo o hija te busca a ti, no a una pantalla, para pasar un buen rato. Eso no se arma en un solo domingo. Se arma sesión tras sesión, con la misma constancia liviana de la que hablamos antes.

Ahora que ya sabes cuándo, cómo proponerlo y qué viene cada semana, solo falta una cosa: el primer proyecto. Da vuelta la página y empieza por el Semáforo del cuarto, el proyecto de la semana 1.


---

# Proyecto 1: Semáforo del cuarto

## Qué vas a construir

Van a armar un semáforo de mesa con tres LEDs —rojo, amarillo y verde— que se encienden y se apagan en orden, uno detrás del otro, en bucle, igual que el semáforo de la esquina de tu casa.

## Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo, como ya hicieron en su primer contacto con el simulador. Este proyecto usa los mismos pasos de siempre, solo que con tres LEDs en vez de uno.

Trae un Arduino Uno a tu mesa de trabajo. Después busca "LED" y arrastra tres: uno rojo, uno amarillo y uno verde. Haz clic sobre cada LED y vas a poder elegir su color en un menú. Junto a cada LED, arrastra también un resistor: van a ser tres en total, uno por cada luz, cumpliendo el mismo trabajo de "freno" que ya conocen.

Conecta cada LED con su resistor, y cada resistor con un pin distinto del Arduino: por ejemplo, el rojo al pin 8, el amarillo al pin 9 y el verde al pin 10. La otra pata de cada LED va al pin "GND". Tómate tu tiempo: tres LEDs son el mismo paso de conexión, repetido tres veces.

Ahora dale instrucciones. Abre el panel de "Código" y arma esta receta con bloques, uno debajo del otro: "Encender pin" 8, "Esperar" 1 segundo, "Apagar pin" 8. Debajo, la misma receta con el pin 9. Y para cerrar, la misma receta otra vez con el pin 10. Nueve bloques en fila, sin saltarse ninguno. Aprieta "Iniciar simulación" y miren: rojo, amarillo, verde, uno después del otro.

## Si tienes el kit físico

**Materiales:** un Arduino Uno, una protoboard, tres LEDs (rojo, amarillo, verde), tres resistores de 220 ohmios, jumpers y el cable USB.

**Arma el circuito:** clava los tres LEDs en la protoboard, separados entre sí, con la pata más larga hacia arriba. Une cada pata larga a un resistor, y cada resistor a un pin distinto del Arduino con un jumper: pin 8 para el rojo, pin 9 para el amarillo, pin 10 para el verde. Une las patas cortas de los tres LEDs a un mismo jumper, y ese jumper al pin "GND". Conecta el Arduino a tu computadora con el cable USB y carga el mismo programa que armaron en el simulador.

## ¿Funcionó?

Si algo no encendió como esperabas, revisa esto en el simulador:

**Un solo LED no enciende, o queda siempre apagado.** Revisa que su resistor esté bien conectado, y que el pin del bloque de código coincida con el pin donde conectaste ese LED. Un número cambiado alcanza para romper todo el orden.

**Los tres LEDs encienden juntos, en vez de uno por uno.** Repasa los nueve bloques de código: probablemente falte un "Esperar" o un "Apagar pin" entre una receta y la siguiente. Cuenta que haya exactamente tres bloques por cada color.

Si armaste el circuito físico:

**Ningún LED enciende.** Fíjate si alguno quedó al revés: la pata larga y la corta no son intercambiables, y si están invertidas, la luz no pasa. Da vuelta el LED y prueba de nuevo.

**El programa no se carga al Arduino.** Revisa que el cable USB esté bien conectado, y que hayas elegido la placa correcta en el menú antes de cargar el programa.

## Para ir más lejos

Cuando el semáforo funcione, cambia el tiempo del "Esperar" del amarillo, de 1 segundo a 3. Así se parece más a un semáforo real, donde el amarillo dura menos que el rojo y el verde, y tu hijo o hija va a notar la diferencia enseguida.


---

# Proyecto 2: Alarma de la puerta

## Qué vas a construir

Van a armar una alarma sencilla para la puerta del cuarto: cuando alguien "entra", el buzzer suena como una pequeña sirena y avisa que hubo movimiento.

En el simulador usamos un botón; en la vida real, la puerta lleva un sensor magnético que hace exactamente lo mismo cuando se abre. Piensa en el botón como el timbre de una casa: mientras nadie lo toca, todo está tranquilo; cuando alguien lo presiona, el Arduino entiende que algo cambió. No necesitas saber más que esto.

## Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Busca un Arduino Uno, un botón y un buzzer piezoeléctrico. El buzzer es una mini bocina que el Arduino puede encender y apagar.

Coloca el botón cerca del Arduino. Conecta una pata al pin 2 y la otra al pin "GND". Si el simulador muestra cuatro patitas, no te asustes: usa dos del mismo lado.

Ahora coloca el buzzer. Conecta su pata positiva al pin 8 y la otra pata al pin "GND". Si no sabes cuál es cuál, mira las marcas del componente: normalmente el lado positivo aparece con un signo "+".

Abre el panel de "Código". Arma una receta con esta idea: si el botón está presionado, encender el buzzer; si el botón no está presionado, apagarlo. En bloques, busca una condición tipo "si... entonces... si no". Dentro de la parte "si", pon el bloque que activa el pin 8. Dentro de "si no", pon el bloque que apaga el pin 8. Aprieta "Iniciar simulación" y presiona el botón. Si todo está bien, el buzzer suena solo mientras el botón está presionado.

Ese botón está actuando como la puerta. Cuando lo presionan, es como si la puerta se abriera. Cuando lo sueltan, es como si volviera a cerrarse.

## Si tienes el kit físico

**Materiales:** un Arduino Uno, una protoboard, un buzzer piezoeléctrico, un botón o pulsador, un sensor magnético de puerta si tu kit lo incluye, jumpers y el cable USB.

**Arma el circuito:** si todavía no tienes el sensor magnético a mano, arma primero la versión con botón. Coloca el botón en la protoboard, conecta una pata al pin 2 y otra a "GND". Después conecta el buzzer: pata positiva al pin 8, pata negativa a "GND". Carga el mismo programa que usaron en el simulador y prueba presionando el botón.

Si tienes el sensor magnético de puerta, úsalo en el lugar del botón. Una parte va pegada a la puerta y la otra al marco. Cuando se separan, el circuito entiende que la puerta se abrió. Para tu hijo o hija, la magia visible es clara: abrir puerta, sonar alarma.

## ¿Funcionó?

Si algo no salió como esperaban, revisa esto en el simulador:

**El buzzer nunca suena.** Revisa que el pin del buzzer sea el mismo en el circuito y en los bloques. Si lo conectaste al pin 8, el código también debe hablar con el pin 8. También confirma que el botón esté conectado al pin 2, no a otro número.

**El buzzer suena todo el tiempo.** Mira la condición del código. Puede estar invertida: el Arduino quizá está entendiendo "si no está presionado, sonar". Cambia el orden de los bloques de encender y apagar, y vuelve a iniciar la simulación.

Si armaste el circuito físico:

**El buzzer hace un sonido muy bajo o raro.** Confirma que la pata positiva esté en el pin correcto y la negativa en "GND". Debe responder cuando el botón o sensor se activa.

**El sensor magnético no dispara la alarma.** Acerca y separa sus dos partes lentamente. Si están demasiado lejos incluso con la puerta cerrada, el sensor puede quedar siempre en modo "abierto".

## Para ir más lejos

Cuando la alarma funcione, cambien el sonido para que sea intermitente: medio segundo encendido, medio segundo apagado, repetido varias veces. Así la alarma se siente más real, y tu hijo o hija puede inventarle un nombre, como "modo guardián del cuarto".


---

# Proyecto 3: Joystick casero

> **¿Qué es una entrada analógica?** Es una entrada con niveles, como el volumen de una radio: no es solo encendido o apagado. Puede estar bajito, medio o alto. No necesitas saber más que esto.

## Qué vas a construir

Van a armar un joystick que controla luces en el simulador: cuando lo mueven hacia un lado, se enciende un LED; cuando lo mueven hacia otro lado, se enciende otro.

## Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un componente "Joystick" y cuatro LEDs. Imagina que los LEDs son flechas: uno marca izquierda, otro derecha, otro arriba y otro abajo.

Coloca los cuatro LEDs cerca del Arduino, cada uno con su resistor de 220 ohmios. Conecta el LED de izquierda al pin 8, el de derecha al pin 9, el de arriba al pin 10 y el de abajo al pin 11. La otra pata de cada LED va a "GND". Es parecido al semáforo, solo que ahora cada luz representa una dirección.

Ahora conecta el joystick. En Tinkercad suele tener pines llamados GND, 5V, VRx, VRy y SW. GND va a "GND"; 5V va a "5V". VRx va al pin A0 y VRy va al pin A1. Piensa en VRx como "izquierda-derecha" y en VRy como "arriba-abajo". El pin SW es el clic del joystick; para este proyecto lo dejamos sin usar.

Abre el panel de "Código". La receta es leer si el joystick está muy hacia un lado o muy hacia el otro, y encender el LED correspondiente. Con bloques, crea una condición para el eje horizontal: si el valor de A0 está bajo, enciende izquierda; si está alto, enciende derecha; si está en el centro, apaga esos dos LEDs. Después repite la misma idea con A1 para arriba y abajo.

No hace falta memorizar números. Usa valores simples para separar los extremos del centro: por debajo de 400 puede ser "un lado", por encima de 600 puede ser "el otro lado", y entre esos dos queda el descanso. Aprieta "Iniciar simulación" y mueve el joystick con el mouse. Si lo llevas a la izquierda, debe encenderse el LED de izquierda. Si lo sueltas, se apaga.

## Si tienes el kit físico

**Materiales:** un Arduino Uno, una protoboard, un módulo joystick, cuatro LEDs, cuatro resistores de 220 ohmios, jumpers y el cable USB.

**Arma el circuito:** monta los cuatro LEDs en la protoboard con sus resistores, igual que en el simulador: pines 8, 9, 10 y 11 para las direcciones, y todas las patas cortas a "GND". Conecta el joystick al Arduino: GND con "GND", VCC o 5V con "5V", VRx con A0 y VRy con A1. Si tu módulo tiene un pin SW, puedes dejarlo libre por ahora. Carga el programa y prueba moviendo la palanca despacio.

## ¿Funcionó?

Si algo no salió como esperaban, revisa esto en el simulador:

**Los LEDs quedan encendidos aunque el joystick esté quieto.** Revisa los valores que elegiste para separar centro y extremos. Si el centro está muy cerca de 400 o 600, sube o baja un poco esos límites.

**Se enciende izquierda cuando mueves a la derecha.** No está roto: el eje puede quedar invertido. Cambia los LEDs de condición, o intercambia la conexión mental de "bajo" y "alto".

Si armaste el circuito físico:

**Nada responde al mover la palanca.** Revisa que VRx vaya a A0 y VRy a A1. Si los pusiste en pines digitales, el Arduino no ve los niveles intermedios.

**Un LED no enciende nunca.** Vuelve a revisar ese LED y su resistor. Como son cuatro luces, un solo jumper flojo puede esconderse fácil.

## Para ir más lejos

Cuando el joystick controle las cuatro direcciones, agreguen una regla de juego: si se mueve arriba, el LED queda encendido dos segundos; si se mueve abajo, parpadea rápido. Tu hijo o hija acaba de construir la primera versión de un control propio.


---

# Proyecto 4: Detector de movimiento

## Qué vas a construir

Van a armar un detector que avisa cuando alguien entra escondido al cuarto: puede ser un hermano, una hermana o la mascota curiosa de la casa.

¿Recuerdas el botón del Proyecto 2 (Alarma de la puerta)? Aquí usamos el mismo truco, pero este botón representa un sensor que detecta movimiento — sin tocar nada. En la vida real, ese sensor se llama PIR HC-SR501. En el simulador, lo representamos con un botón porque Tinkercad no trae ese sensor como pieza lista. No necesitas saber más que esto.

## Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un botón, un LED rojo, un resistor de 220 ohmios y un buzzer. El botón será nuestro "sensor invisible"; el LED será la luz de alerta; el buzzer será el aviso sonoro.

Conecta el botón al pin 2 y a "GND", igual que en la alarma de la puerta. Luego conecta el LED rojo: la pata larga va al pin 9 a través del resistor, y la pata corta va a "GND". Por último, conecta el buzzer con la pata positiva al pin 8 y la negativa a "GND".

Abre el panel de "Código". La receta es parecida a la del Proyecto 2, pero ahora encendemos dos avisos a la vez. Si el botón está presionado, enciende el LED y activa el buzzer. Si el botón no está presionado, apaga los dos. En bloques, usa una condición "si... entonces... si no". Dentro de "si", pon encender pin 9 y encender pin 8. Dentro de "si no", pon apagar pin 9 y apagar pin 8.

Aprieta "Iniciar simulación". Cuando presiones el botón, imagina que alguien cruzó frente al sensor del cuarto. El LED se enciende y el buzzer suena. Cuando sueltas el botón, el cuarto vuelve a estar tranquilo.

## Si tienes el kit físico

**Materiales:** un Arduino Uno, una protoboard, un sensor PIR HC-SR501, un LED rojo, un resistor de 220 ohmios, un buzzer, jumpers y el cable USB.

**Arma el circuito:** conecta el LED al pin 9 con su resistor, y el buzzer al pin 8, igual que en el simulador. Para el sensor PIR, conecta VCC a "5V", GND a "GND" y OUT al pin 2. Ese pin OUT es la forma en que el sensor le dice al Arduino: "vi movimiento".

Coloca el sensor mirando hacia la entrada del cuarto o hacia una zona de paso. No lo escondas detrás de una caja ni lo apuntes a una pared muy cercana. El sensor necesita "ver" el movimiento, como una linterna que ilumina una zona.

## ¿Funcionó?

Si algo no salió como esperaban, revisa esto en el simulador:

**El LED enciende, pero el buzzer no suena.** Revisa que el buzzer esté en el pin 8 y que el bloque de código también use el pin 8. Si el LED funciona, la condición está bien; el problema está en la conexión del sonido.

**Nada cambia cuando presionas el botón.** Revisa el pin del botón. Debe estar conectado al pin 2, y la condición del código debe leer ese mismo pin.

Si armaste el circuito físico:

**El sensor tarda unos segundos en responder.** Es normal. Algunos sensores PIR necesitan un momento para estabilizarse cuando reciben energía. Espera un poco y prueba caminando frente a él.

**Detecta movimiento todo el tiempo.** Cambia su orientación. Si apunta a una ventana, una fuente de calor o una zona con mucho movimiento, puede activarse aunque nadie esté entrando al cuarto.

## Para ir más lejos

Cuando el detector funcione, agreguen una "luz silenciosa": durante el día, que solo se encienda el LED; por la noche, que también suene el buzzer. Así tu hijo o hija empieza a pensar como creador: no solo hace que algo funcione, decide cuándo conviene usarlo.


---

# Proyecto 5: Barrera automática

## Qué vas a construir

Van a armar una barrera automática para el estacionamiento de juguetes o piezas de Lego: un brazo pequeño sube para dejar pasar y baja para cerrar el camino.

La pieza central es un servo motor. Piensa en él como un brazo que sabe quedarse en una posición exacta, no solo girar sin parar. Puede mirar a 0 grados, 90 grados o 180 grados, como una puerta que se abre hasta cierto punto y se detiene. No necesitas saber más que esto.

## Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un micro servo y un botón. El botón será la entrada: cuando lo presionan, la barrera se abre; cuando lo sueltan, se cierra.

Conecta el servo al Arduino. En Tinkercad, el servo suele tener tres cables: uno de energía, uno de tierra y uno de señal. El cable de energía va a "5V"; el de tierra va a "GND"; el de señal va al pin 9. Si los colores aparecen distintos, usa los nombres del componente como guía.

Ahora conecta el botón. Una pata va al pin 2 y la otra a "GND". Es el mismo gesto que ya conoces: un botón le dice al Arduino que algo pasó. Aquí no representa una puerta ni un sensor invisible; representa el permiso para abrir la barrera.

Abre el panel de "Código". La receta es simple: si el botón está presionado, mover el servo a 90 grados; si no está presionado, moverlo a 0 grados. En bloques, busca la acción para fijar el ángulo del servo y colócala dentro de una condición "si... entonces... si no". En la parte "si", usa 90. En la parte "si no", usa 0.

Aprieta "Iniciar simulación". Presiona el botón y mira el brazo del servo. Debe levantarse. Suelta el botón y debe volver a su posición inicial. Si quieres hacerlo más visual, puedes imaginar que hay una tira de cartón pegada al eje del servo: esa tira es la barrera.

## Si tienes el kit físico

**Materiales:** un Arduino Uno, una protoboard, un servo motor SG90, un botón, jumpers, el cable USB y una tira liviana de cartón o palito de helado para hacer el brazo.

**Arma el circuito:** conecta el servo con sus tres cables: señal al pin 9, energía a "5V" y tierra a "GND". Conecta el botón al pin 2 y a "GND". Pega la tira de cartón al brazo plástico del servo, sin forzarlo. Carga el programa y prueba presionando el botón. Si el brazo golpea la mesa o se traba, cambia los ángulos: usa 20 grados para cerrado y 100 grados para abierto.

## ¿Funcionó?

Si algo no salió como esperaban, revisa esto en el simulador:

**El servo no se mueve.** Revisa que el cable de señal esté en el pin 9 y que el bloque de código también use ese pin. Si el número no coincide, el Arduino está hablando al lugar equivocado.

**El servo se mueve al revés.** No hay problema. Cambia los ángulos: donde pusiste 90, pon 0; donde pusiste 0, pon 90. La barrera no sabe qué es "abierto"; tú se lo enseñas.

Si armaste el circuito físico:

**El servo vibra o hace fuerza.** Puede estar empujando contra algo. Quita el brazo de cartón, prueba el servo solo y después vuelve a colocar el brazo en una posición más cómoda.

**El botón no responde.** Revisa sus patas. En la protoboard, es fácil conectarlo del lado incorrecto. Muévelo una fila y prueba de nuevo.

## Para ir más lejos

Cuando la barrera funcione, conviértanla en un juego: solo puede abrirse si el "auto" de juguete espera tres segundos frente a ella. Agrega una pausa antes de subir el servo, y tu hijo o hija tendrá una barrera con personalidad propia.


---

# Proyecto 6: Medidor de distancia

## Qué vas a construir

Van a armar un medidor que responde a la pregunta: "¿qué tan cerca estás?". Cuando acercan la mano al sensor, el Arduino detecta la distancia y puede encender una luz o hacer sonar un aviso.

El sensor ultrasónico funciona como un eco. Imagina que grita "hola" muy rápido, espera que el sonido rebote en un objeto y cuenta cuánto tarda en volver. Con ese tiempo, calcula si algo está cerca o lejos. En Tinkercad usamos el sensor HC-SR04, que ya viene listo. No necesitas saber más que esto.

## Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un sensor ultrasónico HC-SR04, un LED, un resistor de 220 ohmios y un buzzer. El LED será la alerta visual y el buzzer será la alerta sonora cuando algo esté demasiado cerca.

Coloca el HC-SR04 frente al Arduino. Vas a ver cuatro pines: VCC, Trig, Echo y GND. VCC va a "5V" y GND va a "GND". Trig va al pin 7 y Echo va al pin 6. Piensa en Trig como el botón que manda el "hola", y Echo como el oído que escucha la respuesta.

Conecta el LED con su resistor al pin 9 y a "GND". Conecta el buzzer con la pata positiva al pin 8 y la negativa a "GND". Ya tienes tres partes trabajando juntas: el sensor mide, el LED muestra y el buzzer avisa.

Abre el panel de "Código". La receta es pedirle al sensor una distancia y decidir qué hacer con ella. En bloques, usa la opción de leer el sensor ultrasónico si Tinkercad la muestra disponible. Indica el pin Trig como 7 y el pin Echo como 6. Después crea una condición: si la distancia es menor que 20 centímetros, encender el LED y el buzzer; si es mayor, apagar ambos.

Aprieta "Iniciar simulación". Mueve el objeto que aparece frente al sensor, o ajusta la distancia desde el control del componente. Cuando el objeto esté cerca, el LED debe encenderse y el buzzer sonar. Cuando lo alejas, todo vuelve a quedar apagado.

## Si tienes el kit físico

**Materiales:** un Arduino Uno, una protoboard, un sensor ultrasónico HC-SR04, un LED, un resistor de 220 ohmios, un buzzer, jumpers y el cable USB.

**Arma el circuito:** conecta el sensor igual que en el simulador: VCC a "5V", GND a "GND", Trig al pin 7 y Echo al pin 6. Conecta el LED al pin 9 con su resistor, y el buzzer al pin 8. Coloca el sensor mirando hacia adelante, sin cables tapando sus dos círculos. Carga el programa y prueba acercando tu mano despacio.

## ¿Funcionó?

Si algo no salió como esperaban, revisa esto en el simulador:

**Siempre marca cerca.** Revisa la condición. Tal vez pusiste "mayor que 20" en vez de "menor que 20". Cambiar ese símbolo cambia todo el comportamiento.

**No cambia al mover el objeto.** Revisa los pines Trig y Echo. Si están invertidos, el sensor intenta escuchar por donde debería hablar.

Si armaste el circuito físico:

**El sensor da lecturas raras.** Asegúrate de que esté apuntando a una superficie más o menos plana. Una mano de costado, una tela o una esquina pueden devolver el eco de forma irregular.

**El buzzer no suena, pero el LED sí enciende.** La medición está funcionando. Revisa solo el buzzer: pata positiva, pata negativa y pin 8.

## Para ir más lejos

Cuando el medidor funcione, cambien la regla: a menos de 10 centímetros, que suene rápido; entre 10 y 20 centímetros, que solo se encienda el LED. Así el proyecto deja de decir solo "cerca" y empieza a decir "muy cerca" o "un poco cerca".


---

# Proyecto 7: Sensor de humedad

## Qué vas a construir

Van a armar un sensor para cuidar plantas de casa: el Arduino lee humedad y temperatura, y avisa si el ambiente está seco o si hace demasiado calor.

Este proyecto es un paso más que los anteriores, porque el sensor entrega dos datos a la vez. Piensa en él como una pequeña estación del clima en miniatura: no mira nubes, pero siente el aire que tiene alrededor. En Tinkercad usamos el sensor DHT11, que ya viene listo. No necesitas saber más que esto.

## Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un sensor DHT11, un LED azul, un LED rojo, dos resistores de 220 ohmios y un buzzer. El LED azul avisará "ambiente seco"; el LED rojo avisará "temperatura alta"; el buzzer será una alerta extra si quieren hacerlo más visible.

Coloca el DHT11 cerca del Arduino. En Tinkercad suele mostrar tres conexiones útiles: energía, datos y tierra. Conecta energía a "5V", tierra a "GND" y datos al pin 2. El pin de datos es como la frase que el sensor le dice al Arduino: "esto estoy sintiendo ahora".

Conecta el LED azul al pin 8 con su resistor, y el LED rojo al pin 9 con su resistor. Las patas cortas van a "GND". Conecta el buzzer al pin 10 y a "GND". Ya tienes una lectura y tres formas de mostrarla.

Abre el panel de "Código". La receta es leer el DHT11 y tomar decisiones simples. Si la humedad está por debajo de 40, enciende el LED azul. Si la temperatura está por encima de 30, enciende el LED rojo. Si las dos cosas pasan al mismo tiempo, activa también el buzzer. Si todo está dentro de un rango cómodo, apaga las alertas.

Aprieta "Iniciar simulación". Cambia los valores del sensor desde el panel del componente. Baja la humedad y mira si se enciende el LED azul. Sube la temperatura y mira si se enciende el LED rojo. Si ambos aparecen juntos, el buzzer puede sonar como aviso de "la planta necesita atención".

## Si tienes el kit físico

**Materiales:** un Arduino Uno, una protoboard, un sensor DHT11, dos LEDs, dos resistores de 220 ohmios, un buzzer, jumpers y el cable USB.

**Arma el circuito:** conecta el DHT11 con energía a "5V", tierra a "GND" y datos al pin 2. Conecta el LED azul al pin 8, el LED rojo al pin 9 y el buzzer al pin 10. Coloca el sensor cerca de una planta, pero no lo mojes ni lo entierres. Este sensor mide el aire alrededor; no es una sonda para clavar en la tierra.

## ¿Funcionó?

Si algo no salió como esperaban, revisa esto en el simulador:

**Las alertas no cambian cuando ajustas el sensor.** Revisa que el código esté leyendo el DHT11 del pin 2. Si el sensor está en un pin y el código mira otro, no se van a encontrar.

**El buzzer suena demasiado pronto.** Revisa la condición doble. Debe sonar solo cuando humedad baja y temperatura alta ocurren juntas, no cuando aparece una sola alerta.

Si armaste el circuito físico:

**El sensor parece lento.** Es normal. El DHT11 no responde como un botón; necesita un momento para actualizar la lectura.

**La planta está seca, pero el LED azul no enciende.** Recuerda que este proyecto mide humedad del aire, no humedad de la tierra. Para una lectura real de suelo, se usa otro tipo de sensor. Aquí estamos entrenando la idea de medir y decidir.

## Para ir más lejos

Cuando el sistema funcione, conviértanlo en una "estación de cuidado": anoten durante tres días cuándo se enciende cada alerta. Tu hijo o hija va a empezar a mirar una planta como mira un invento: con curiosidad, datos simples y ganas de mejorar.


---

# Proyecto 8: Robot esquiva-obstáculos

## Qué vas a construir

Van a armar el proyecto final: un robot que avanza, mide lo que tiene enfrente y cambia de dirección cuando encuentra un obstáculo.

Este proyecto reúne piezas que ya conocen: el sensor ultrasónico del medidor de distancia, la lógica de "si pasa esto, haz esto" de las alarmas, y motores que convierten una decisión en movimiento. En el simulador, los motores se conectan directo al Arduino; con el kit físico, usarás el módulo L298N para proteger el Arduino de la corriente de los motores. No necesitas saber más que esto.

## Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un sensor ultrasónico HC-SR04 y dos motores DC. El sensor será los "ojos" del robot. Los motores serán sus ruedas: uno para el lado izquierdo y otro para el lado derecho.

Conecta el HC-SR04 igual que en el Proyecto 6: VCC a "5V", GND a "GND", Trig al pin 7 y Echo al pin 6. Si esa parte ya te resulta familiar, es una buena señal: no estás empezando de cero, estás reutilizando lo que ya construyeron.

Conecta el primer motor a los pines 9 y 10, y el segundo motor a los pines 11 y 12. En el simulador, esta conexión directa sirve para entender la idea. Un motor puede girar hacia adelante, detenerse o girar al revés según cómo le hable el Arduino. Piensa en cada motor como una rueda que puede obedecer órdenes simples.

Abre el panel de "Código". La receta del robot es esta: medir distancia; si hay espacio libre, avanzar; si algo está cerca, detenerse, girar un momento y volver a medir. Usa 20 centímetros como límite inicial. Si la distancia es mayor que 20, ambos motores avanzan. Si es menor que 20, el robot se detiene, un motor avanza y el otro se queda quieto o gira al revés durante un segundo. Así cambia de rumbo.

Aprieta "Iniciar simulación". Ajusta el objeto frente al sensor. Cuando está lejos, los motores deben avanzar. Cuando lo acercas, el robot debe cambiar su comportamiento. Todavía no estás viendo un chasis real rodando por el piso, pero sí estás viendo el cerebro del robot tomar decisiones.

## Si tienes el kit físico

**Materiales:** un Arduino Uno, un sensor ultrasónico HC-SR04, dos motores DC, un módulo L298N, chasis o base liviana, ruedas, jumpers, batería adecuada para motores y cable USB.

**Arma el circuito:** conecta el HC-SR04 como en el simulador: VCC a "5V", GND a "GND", Trig al pin 7 y Echo al pin 6. Para los motores, no los conectes directo al Arduino. Usa el módulo L298N: los motores van al L298N, y el L298N recibe las señales del Arduino. Su trabajo es hacer de puente fuerte, porque los motores piden más corriente de la que el Arduino debe entregar. Repite la idea clave: en el simulador, los motores se conectan directo al Arduino; con el kit físico, usarás el módulo L298N para proteger el Arduino de la corriente de los motores.

## ¿Funcionó?

Si algo no salió como esperaban, revisa esto en el simulador:

**Los motores avanzan aunque el obstáculo esté cerca.** Revisa la condición de distancia. Tal vez está usando "mayor que 20" donde debería usar "menor que 20", o al revés.

**El robot nunca avanza.** Revisa Trig y Echo. Si el sensor no mide bien, el robot cree que siempre hay algo adelante.

Si armaste el circuito físico:

**Un motor gira y el otro no.** Revisa primero los cables del motor que no responde. Después revisa las señales que llegan desde el Arduino al L298N.

**El robot gira en círculo.** Puede que un motor esté invertido. Cambia los cables de ese motor en el L298N o ajusta la dirección en el código.

## Para ir más lejos

Cuando el robot esquive un obstáculo, cambien su personalidad: que gire más tiempo, que haga un sonido antes de girar o que retroceda un segundo. Ahí aparece el creador de verdad: no solo copia un robot, decide cómo se comporta.


---

# Vitrina Familiar™

## Por qué esto importa

Un proyecto terminado merece algo más que quedar sobre la mesa. Merece una pequeña vitrina, aunque sea casera, porque tu hijo o hija necesita ver que lo que construyó tiene valor fuera de la pantalla.

No hablamos de presumir ni de convertir cada logro en contenido. Hablamos de cerrar el ciclo: imaginar, armar, probar, corregir y mostrar. Cuando un niño muestra lo que hizo, empieza a ordenar sus ideas. Dice qué intentó, qué falló, qué cambió y qué quiere probar después. Eso es pensamiento de creador.

La Vitrina Familiar™ es simple: una foto, un video corto o un mensaje para alguien cercano. No necesitas saber más que esto.

## Cómo fotografiar

Busca luz natural si puedes. Una mesa cerca de una ventana suele funcionar mejor que una lámpara directa. Coloca el proyecto sobre una superficie despejada: cartón, mesa, piso limpio o una hoja blanca.

Haz una foto del invento completo y otra con tu hijo o hija señalando una parte importante. No hace falta mostrar rostro si no quieren. Una mano apretando el botón, el LED encendido o el robot frente a un obstáculo ya cuenta la historia.

Antes de tomar la foto, pregunta: "¿Qué parte quieres que se vea bien?". Esa pregunta cambia el clima. El proyecto deja de ser una tarea y se vuelve una obra que merece cuidado.

## Cómo grabar un video corto

Un buen video puede durar entre 10 y 20 segundos. Empieza con el proyecto quieto, luego muestra la acción: la alarma sonando, el servo levantando la barrera, el sensor detectando distancia o el robot cambiando de rumbo.

Graba en horizontal si el proyecto ocupa una mesa, y en vertical si solo quieres enviarlo rápido por WhatsApp. Acerca la cámara lo suficiente para que se entienda qué está pasando, pero deja espacio para ver la reacción.

No busques una toma perfecta. Si algo falla en el primer intento, puede ser parte del video. A veces el momento más valioso es escuchar: "Espera, ya sé qué pasó".

## Qué escribir al compartir

El mensaje debe ser breve y concreto. Puedes escribir algo como: "Hoy construimos una alarma de puerta con Arduino. Primero no sonaba, revisamos el pin y lo arreglamos". Esa frase muestra logro y proceso.

Recuerda que eres tú quien decide qué compartir públicamente de tu hijo/a — el grupo familiar siempre es una opción igual de válida. Puedes enviarlo al grupo de familia por WhatsApp, a los abuelos o a alguien cercano que vaya a celebrar con cariño. Si decides publicar en redes sociales públicas, hazlo solo si te sientes cómodo y si protege la privacidad de tu hijo o hija.

Lo importante no es el aplauso grande. Es que el niño escuche a alguien decir: "Lo hiciste tú".

## Conoce tu próximo paso

Después de compartir uno o dos proyectos, guarda las mejores fotos en una carpeta. Esas imágenes pueden convertirse en una pequeña galería familiar de inventos.

También puedes usar este momento como puente hacia el bono **Mi Primer Diploma de Inventor™**. No necesitas preparar una presentación completa aquí. Solo conserva evidencias: una foto clara, un video corto y una frase del niño sobre lo que construyó. Con eso ya tienes materia prima para celebrar el recorrido sin complicarte.


---

# Cierre

Si llegaste hasta aquí, no tienes solo una lista de proyectos. Tienes una secuencia de momentos compartidos: un LED que encendió, una alarma que sonó, un joystick que respondió, una barrera que subió, un sensor que midió y un robot que empezó a decidir.

Tal vez algunas cosas funcionaron al primer intento. Tal vez otras pidieron paciencia. Eso también cuenta. La robótica en casa no se trata de hacer todo perfecto; se trata de mirar un problema pequeño y decir: "vamos a probar otra vez".

Tu hijo o hija no necesitó una pantalla para consumir algo ya hecho. Usó la pantalla, cuando hizo falta, como mesa de pruebas. Después imaginó, conectó, revisó, corrigió y mostró. Ese cambio es enorme. Pasa de "quiero jugar" a "quiero construir".

El próximo paso puede ser simple. Pueden repetir el proyecto favorito con más calma. Pueden montar una versión física si todavía trabajaron solo en el simulador. Pueden explorar los bonos y convertir lo que ya hicieron en una pequeña celebración familiar. No hace falta correr.

También pueden abrir una caja de piezas, elegir un componente al azar y preguntar: "¿qué podríamos hacer con esto?". Esa pregunta vale mucho. Es la puerta de entrada a inventos propios.

Guarda este libro como referencia. Vuelve a la Caja de Herramientas cuando un nombre suene raro. Repite el Ritual Sin Pantalla cuando necesiten una tarde distinta. Usa la Vitrina Familiar™ cuando quieras cerrar un proyecto con orgullo.

Y recuerda esto: no necesitas saber más que esto para empezar de nuevo. Un creador no es quien lo sabe todo. Es quien se anima a probar, mirar qué pasa y ajustar el camino.

Eso ya lo hicieron.
