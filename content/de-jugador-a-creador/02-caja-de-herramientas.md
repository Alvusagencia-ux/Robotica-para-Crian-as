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
