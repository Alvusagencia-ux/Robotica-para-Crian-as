# Robótica de Emergencia: 10 Proyectos de 15 Minutos™

## Introducción: para cuando no hay tiempo de armar nada grande

Hay días así. Llegaste tarde, la cena todavía no está lista, o tu hijo o hija anda con esa energía inquieta que no aguanta media hora de instrucciones. En esos días, un proyecto completo del libro principal se siente como una montaña. Y la montaña gana: el simulador queda cerrado, y esa noche no se construye nada.

Este bono es la respuesta a esas noches. Diez mini-proyectos nuevos, ninguno repetido de los que ya armaron juntos, pensados para resolverse en el simulador en 15 minutos o menos. Mismo Tinkercad, mismas piezas que ya conocen: LEDs, un buzzer, botones, un joystick, un servo, sensores. Solo que aquí cada proyecto va directo al grano.

Para eso, achicamos la receta. En el libro principal cada proyecto tiene cinco partes. Aquí tiene solo tres: qué van a construir, cómo simularlo, y qué hacer si algo no sale bien. No hay lista de materiales físicos ni instrucciones para armar el circuito con las manos, porque hoy no es noche de destornillador ni de protoboard: es noche de pantalla, mouse y quince minutos. Tampoco hay una sección para "ir más lejos", porque hoy el objetivo no es profundizar, es terminar algo y poder decir "listo, lo logramos" antes de apagar la luz.

No hace falta hacerlos en orden. Abre este archivo cualquier noche apurada, elige el que más te llame la atención según el humor del día, y arma ese. Los diez están pensados para funcionar solos, sin depender de ningún otro proyecto de este bono ni del libro principal. Elige uno, ábrelo en tinkercad.com/circuits, y en un rato vas a tener algo nuevo funcionando en la pantalla.

## Proyecto 1: La luciérnaga que se duerme

### Qué vas a construir

Van a armar una luz de noche con un solo LED que parpadea rápido al principio y se va quedando cada vez más lento, hasta apagarse del todo, como una luciérnaga que se prepara para dormir.

### Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un LED del color que prefieran y un resistor de 220 ohmios.

Conecta la pata larga del LED al resistor, y el resistor al pin 9. La pata corta del LED va al pin "GND". Es la misma conexión de siempre: nada nuevo hasta aquí.

Abre el panel de "Código". Esta vez la receta no se repite igual todo el tiempo, va cambiando poco a poco. Arma este primer grupo de bloques: "Encender pin" 9, "Esperar" 0,2 segundos, "Apagar pin" 9, "Esperar" 0,2 segundos. Debajo, copia ese mismo grupo tres veces más, pero cambia el número del segundo "Esperar" cada vez: 0,5 segundos en el segundo grupo, 1 segundo en el tercero, y 2 segundos en el cuarto y último grupo. Los "Encender pin" y "Apagar pin" quedan siempre iguales; lo único que cambia es cuánto dura la pausa.

Aprieta "Iniciar simulación" y mira el LED: va a parpadear rápido al principio, y cada grupo lo hace más lento que el anterior, hasta quedar casi quieto. Después, como el programa se repite solo, la luciérnaga "despierta" y todo vuelve a empezar desde el parpadeo rápido, en un ciclo que se repite todo el tiempo que la simulación esté corriendo.

### ¿Funcionó?

**El LED parpadea siempre al mismo ritmo, sin ir más lento.** Revisa que hayas cambiado el número del "Esperar" en cada uno de los cuatro grupos. Si dejaste el mismo valor en todos, el efecto de "quedarse dormido" no se nota. Cada grupo necesita un número más alto que el anterior.

**El LED nunca enciende.** Revisa la pata larga y la corta: si están invertidas en el circuito, la luz no pasa. Da vuelta el LED y prueba de nuevo.

## Proyecto 2: El interruptor que no se olvida

### Qué vas a construir

Van a armar una luz que se acuerda de su estado: un botón la enciende y se queda encendida aunque suelten el dedo, y otro botón distinto la apaga. Nada de mantener el dedo apretado todo el tiempo, como en un interruptor de pared de verdad.

### Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, dos botones, un LED y un resistor de 220 ohmios. Un botón va a ser "encender", el otro va a ser "apagar".

Conecta el primer botón: una pata al pin 2, la otra a "GND". Conecta el segundo botón: una pata al pin 3, la otra también a "GND". Conecta el LED con su resistor al pin 9, y la pata corta a "GND".

Abre el panel de "Código". La idea es simple, aunque parezca magia: arma un bloque "si" que diga "si el pin 2 está presionado, entonces encender pin 9", sin ningún "si no" debajo. Justo abajo, otro bloque "si" que diga "si el pin 3 está presionado, entonces apagar pin 9", tampoco con "si no". Dos condiciones separadas, una debajo de la otra, cada una ocupándose solo de su propio botón.

Aprieta "Iniciar simulación". Presiona el botón del pin 2 y suéltalo: el LED queda encendido, aunque ya no estés tocando nada. Presiona el botón del pin 3: recién ahí se apaga. Como ninguno de los dos bloques dice qué hacer cuando no se presiona nada, el LED simplemente se queda como estaba. Ese es el truco: la luz "se acuerda" porque nadie le dio la orden de olvidar.

### ¿Funcionó?

**El LED se apaga solo al soltar el botón de encender.** Revisa que ese bloque "si" no tenga un "si no" con "apagar pin 9" debajo. Si lo tiene, bórralo: ese "si no" es justamente lo que borra la memoria del circuito.

**Ningún botón hace nada.** Revisa que cada botón tenga una pata en "GND" y la otra en su pin correspondiente, y que el número del pin en el bloque de código sea el mismo que usaste en el cableado.

## Proyecto 3: El timbre de tu cuarto

### Qué vas a construir

Van a armar un timbre para la puerta del cuarto: en vez de una sirena continua, un botón hace sonar un "din-don" corto, como el timbre de una casa.

### Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un botón y un buzzer piezoeléctrico.

Conecta el botón: una pata al pin 2, la otra a "GND". Conecta el buzzer: la pata positiva al pin 8, la negativa a "GND".

Abre el panel de "Código". Arma un bloque "si": "si el pin 2 está presionado, entonces...", y dentro de ese "entonces" pon esta secuencia: "Encender pin" 8, "Esperar" 0,3 segundos, "Apagar pin" 8, "Esperar" 0,2 segundos, "Encender pin" 8, "Esperar" 0,3 segundos, "Apagar pin" 8. Son dos sonidos cortos seguidos, el "din" y el "don". Debajo de ese "si", agrega un "si no" que diga simplemente "Apagar pin" 8, para que quede en silencio cuando nadie toca el timbre.

Aprieta "Iniciar simulación" y presiona el botón. Vas a escuchar el patrón "din-don" completo. Si mantienes el botón presionado, el patrón se repite una y otra vez, como alguien que toca timbre varias veces porque tiene apuro.

### ¿Funcionó?

**Se escucha un solo sonido largo, no dos cortos.** Cuenta los bloques dentro del "si": tienen que ser exactamente dos pares de "Encender/Esperar/Apagar/Esperar", uno después del otro. Si falta un par, el "din-don" se convierte en un solo "din".

**El buzzer no suena nunca.** Revisa que la pata positiva esté en el pin 8 y no al revés, y que el número de pin del código coincida con el del cableado.

## Proyecto 4: La luz del ciclista

### Qué vas a construir

Van a armar una luz de seguridad como la que llevan algunas bicicletas de noche: un LED que parpadea rápido y parejo, todo el tiempo, para llamar la atención de lejos.

### Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un LED rojo y un resistor de 220 ohmios.

Conecta la pata larga del LED al resistor, y el resistor al pin 9. La pata corta va a "GND".

Abre el panel de "Código". Esta receta es corta a propósito: "Encender pin" 9, "Esperar" 0,1 segundos, "Apagar pin" 9, "Esperar" 0,1 segundos. Cuatro bloques nada más. La diferencia con un semáforo o una alarma es que aquí no hay ninguna condición: el LED parpadea todo el tiempo, sin que nada se lo pida, como una luz de bicicleta que queda prendida hasta que alguien la apaga.

Aprieta "Iniciar simulación" y mira el LED titilar rápido, en un parpadeo parejo que no cambia nunca. Así se ve una luz de seguridad real cuando alguien pedalea de noche.

### ¿Funcionó?

**El LED parpadea muy lento, casi como si dudara.** Revisa el valor de los dos bloques "Esperar": si pusiste números grandes, como 1 o 2 segundos, el efecto se ve lento y pesado. Bájalos a 0,1 o 0,2 segundos para lograr el parpadeo rápido de una luz de bicicleta.

**El LED queda encendido fijo, sin parpadear.** Revisa que el bloque "Apagar pin" 9 esté presente y en su lugar. Sin él, el LED recibe la orden de encender y nunca la de apagar.

## Proyecto 5: El termómetro de la mochila

### Qué vas a construir

Van a armar un ayudante para decidir qué ropa llevar: un sensor que lee la temperatura y enciende un LED cuando hace calor, como una señal de "hoy no hace falta abrigarse tanto".

### Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un sensor DHT11, un LED amarillo y un resistor de 220 ohmios.

Coloca el DHT11 cerca del Arduino. Va a mostrar tres conexiones: energía, datos y tierra. Conecta energía a "5V", tierra a "GND" y datos al pin 2. Conecta el LED con su resistor al pin 9, y la pata corta a "GND".

Abre el panel de "Código". La receta es leer solo la temperatura del sensor, sin mirar la humedad esta vez. Arma un bloque "si": "si la temperatura es mayor que 28, entonces encender pin 9; si no, apagar pin 9". No hace falta nada más: un solo dato, una sola decisión.

Aprieta "Iniciar simulación". Busca el panel del componente DHT11 y sube el valor de temperatura por encima de 28. El LED amarillo debe encenderse, como diciendo "hoy hace calor". Baja el valor y el LED se apaga solo.

### ¿Funcionó?

**El LED nunca se enciende, aunque subas mucho la temperatura.** Revisa que el bloque de comparación diga "mayor que 28" y no "menor que". Es un error fácil de cometer y deja el circuito funcionando al revés de lo esperado.

**El LED queda encendido siempre, sin importar la temperatura.** Revisa que el pin de datos del DHT11 en el cableado sea el mismo número que usaste en el bloque de lectura del sensor. Si no coinciden, el Arduino puede estar leyendo un valor que no es el real.

## Proyecto 6: El saludo del robot

### Qué vas a construir

Van a armar un brazo robótico que saluda solo, moviéndose de un lado a otro una y otra vez, como una mano que dice "hola" sin cansarse nunca.

### Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno y un micro servo.

Conecta el servo al Arduino. Suele tener tres cables: uno de energía, uno de tierra y uno de señal. El de energía va a "5V", el de tierra a "GND", y el de señal al pin 9.

Abre el panel de "Código". A diferencia de otros proyectos con servo, aquí no hay ningún botón ni sensor: el brazo se mueve solo, sin que nadie le pida nada. Busca la acción para fijar el ángulo del servo y arma esta receta: fijar el ángulo en 0 grados, "Esperar" 0,5 segundos, fijar el ángulo en 90 grados, "Esperar" 0,5 segundos. Esos cuatro bloques van a repetirse en bucle todo el tiempo que la simulación esté corriendo.

Aprieta "Iniciar simulación" y mira el brazo del servo: va a moverse de un lado a otro, una y otra vez, como si estuviera saludando a alguien que pasa.

### ¿Funcionó?

**El brazo se mueve, pero de forma muy brusca, casi como un golpe.** Es normal: el servo salta directo de un ángulo al otro sin pasos intermedios. Si quieres un saludo más suave, prueba acortar la distancia entre ángulos, por ejemplo de 30 a 60 grados en vez de 0 a 90.

**El brazo no se mueve en absoluto.** Revisa que el cable de señal esté en el pin 9, y que ese mismo número aparezca en el bloque que fija el ángulo. Revisa también que el cable de energía esté en "5V" y no en "GND".

## Proyecto 7: El tambor casero

### Qué vas a construir

Van a armar un tambor con un buzzer: un patrón de sonido corto-corto-largo que se repite solo, como el ritmo de un tambor tocando siempre la misma frase.

### Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno y un buzzer piezoeléctrico.

Conecta la pata positiva del buzzer al pin 8, y la negativa a "GND".

Abre el panel de "Código". El ritmo va a ser: golpe corto, golpe corto, golpe largo, silencio, y otra vez desde el principio. En bloques: "Encender pin" 8, "Esperar" 0,15 segundos, "Apagar pin" 8, "Esperar" 0,15 segundos (ese es el primer golpe corto). Repite ese mismo par una vez más (segundo golpe corto). Después: "Encender pin" 8, "Esperar" 0,6 segundos, "Apagar pin" 8 (el golpe largo). Y para cerrar, "Esperar" 0,8 segundos antes de que el patrón vuelva a empezar desde arriba.

Aprieta "Iniciar simulación" y escucha: corto, corto, largo, pausa, corto, corto, largo, pausa. Un ritmo de tambor sencillo que se repite solo, sin que nadie tenga que tocar nada.

### ¿Funcionó?

**Todos los golpes suenan igual de largos, sin diferencia entre cortos y largo.** Revisa los números de "Esperar" después de cada "Encender pin" 8: los dos primeros golpes deben tener un número bajo, como 0,15, y el tercero un número más alto, como 0,6. Si los tres tienen el mismo valor, el ritmo se pierde.

**El buzzer suena sin parar, sin ninguna pausa entre patrones.** Revisa que el último bloque de "Esperar" (0,8 segundos, en silencio) esté presente antes de que la receta vuelva a repetirse. Sin esa pausa, un patrón se pega con el siguiente.

## Proyecto 8: La caja fuerte de dos manos

### Qué vas a construir

Van a armar una caja fuerte de juguete que solo se abre si dos personas presionan sus botones exactamente al mismo tiempo: ni antes, ni después, los dos juntos. Si alguien presiona su botón solo, sin ayuda, no pasa nada.

### Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, dos botones, un LED verde, un resistor de 220 ohmios y un buzzer piezoeléctrico.

Conecta el primer botón: una pata al pin 2, la otra a "GND". Conecta el segundo botón: una pata al pin 4, la otra también a "GND". Conecta el LED con su resistor al pin 9, y la pata corta a "GND". Conecta la pata positiva del buzzer al pin 8, y la negativa a "GND".

Abre el panel de "Código". Esta vez la condición necesita dos partes unidas por un "y": busca el bloque lógico "y" (en algunos paneles aparece como "and") y arma un "si" que diga "si el pin 2 está presionado Y el pin 4 está presionado, entonces". Dentro de ese "entonces" pon: "Encender pin" 9, y además "Encender pin" 8, "Esperar" 0,3 segundos, "Apagar pin" 8, para el sonido de "caja abierta". Debajo, agrega un "si no" que diga simplemente "Apagar pin" 9. Ninguno de los dos botones abre nada por su cuenta: hace falta que los dos estén presionados juntos, dentro del mismo bloque "y".

Aprieta "Iniciar simulación". Presiona solo el primer botón: no pasa nada. Suéltalo y presiona solo el segundo: tampoco pasa nada. Ahora mantén los dos presionados a la vez (haz clic con el mouse en uno y, sin soltarlo, haz clic también en el otro): el LED se enciende y el buzzer suena, como una caja fuerte que solo se abre con dos llaves girando al mismo tiempo.

### ¿Funcionó?

**El LED se enciende con un solo botón presionado, sin necesitar el otro.** Revisa que dentro del "si" hayas usado el bloque "y" y no dos bloques "si" separados, uno debajo del otro. Si son dos "si" independientes, cada botón actúa solo, sin necesitar al compañero.

**Ninguna combinación enciende el LED, ni siquiera los dos botones juntos.** Revisa que cada botón tenga una pata en "GND" y la otra en su pin correspondiente, y que los números de pin dentro del bloque "y" (2 y 4) coincidan exactamente con los que usaste en el cableado.

## Proyecto 9: La veleta casera

### Qué vas a construir

Van a armar una veleta de juguete: un joystick controla hacia dónde apunta el brazo de un servo, como si fuera una antena o una flecha que gira según hacia dónde la empujen.

### Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un componente "Joystick" y un micro servo.

Conecta el joystick: GND a "GND", 5V a "5V", y VRx al pin A0. Para este proyecto no vamos a usar VRy ni SW: la veleta solo necesita moverse de izquierda a derecha, no de arriba a abajo. Conecta el servo: energía a "5V", tierra a "GND", y señal al pin 9.

Abre el panel de "Código". La receta lee el valor de A0 y decide hacia dónde apunta el brazo. Arma tres condiciones: si el valor de A0 es menor que 400, fijar el ángulo del servo en 0 grados (apunta a la izquierda). Si no, si el valor de A0 es mayor que 600, fijar el ángulo en 180 grados (apunta a la derecha). Si no (el joystick está cerca del centro), fijar el ángulo en 90 grados (apunta al frente).

Aprieta "Iniciar simulación" y mueve el joystick con el mouse hacia la izquierda: el brazo del servo debe girar hacia un lado. Muévelo a la derecha y el brazo gira hacia el otro. Suéltalo en el centro y el brazo vuelve a apuntar al frente, como una veleta que se acomoda con el viento.

### ¿Funcionó?

**El brazo del servo no se mueve, sin importar hacia dónde empujes el joystick.** Revisa que VRx esté conectado al pin A0, y que ese mismo pin aparezca en las tres condiciones del código. Revisa también que el cable de señal del servo esté en el pin 9.

**El brazo queda siempre en la misma posición, sin importar el joystick.** Revisa los números 400 y 600 en las condiciones: si están muy pegados entre sí o invertidos, el bloque "si no, si no" puede no estar cubriendo ningún caso real.

## Proyecto 10: El ventilador de escritorio

### Qué vas a construir

Van a armar un ventilador de escritorio: un botón enciende un motor mientras lo mantienen presionado, y se apaga apenas lo sueltan, como un ventilador de mesa con un solo botón.

### Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un botón y un motor DC.

Conecta el botón: una pata al pin 2, la otra a "GND". Conecta el motor a los pines 9 y 10, igual que aprendieron con los motores del libro principal: en el simulador, esta conexión directa alcanza para entender la idea.

Abre el panel de "Código". La receta es corta: "si el pin 2 está presionado, entonces" fijar el pin 9 en encendido y el pin 10 en apagado, para que el motor gire hacia adelante. "Si no", fijar tanto el pin 9 como el pin 10 en apagado, para que el motor se detenga del todo.

Aprieta "Iniciar simulación" y presiona el botón: el motor debe empezar a girar, como las aspas de un ventilador arrancando. Suelta el botón y el motor se detiene enseguida.

### ¿Funcionó?

**El motor gira todo el tiempo, aunque no toques el botón.** Revisa que el bloque "si no" esté completo, con los dos pines del motor apagados. Si falta ese bloque, el motor puede quedar girando con la última orden que recibió.

**El motor no gira en ningún momento.** Revisa que los dos pines del motor en el cableado (9 y 10) coincidan exactamente con los números que usaste en el código, y que el botón tenga una pata en "GND".
