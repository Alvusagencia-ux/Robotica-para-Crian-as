# El Código Secreto™: Primeros Pasos en Programación

## Introducción: ¿qué es programar, en realidad?

Programar suena a algo enorme. A algo que hacen personas con anteojos gruesos, frente a pantallas llenas de letritas verdes, en un idioma que nadie más entiende. Olvida esa imagen. No sirve para lo que vas a hacer hoy con tu hijo o hija.

Programar es, en el fondo, dejarle instrucciones a una máquina para que las siga sola. Las sigue en el orden exacto en que se las diste, sin que tú tengas que estar ahí repitiéndolas una y otra vez. Eso es todo. Es lo mismo que hace una receta de cocina: primero esto, después esto otro, y si cambias el orden, el resultado cambia. Es lo mismo que un código secreto entre amigos. Ustedes acuerdan de antemano qué significa cada señal. Después, la señal sola alcanza para decir todo, sin explicar nada de nuevo cada vez.

Ese es justamente el espíritu de este bono. Vas a enseñarle a tu hijo o hija a pensar como alguien que arma códigos secretos: mensajes cortos, ordenados, que una máquina puede seguir sin dudar. Y la máquina que van a usar ya la conocen: el mismo simulador del libro principal, Tinkercad Circuits, en tinkercad.com/circuits. No hace falta instalar nada nuevo, ni crear otra cuenta, ni aprender otra herramienta. Es el mismo lugar donde ya armaron su primer LED.

Dentro de Tinkercad Circuits, cuando abren un circuito y hacen clic en el botón que dice "Código", se abre un panel con dos formas de trabajar. Una es escribir texto, línea por línea. La otra es arrastrar piezas de colores que encajan entre sí, como piezas de un rompecabezas. Esa segunda forma se llama el modo Blocks, y es la única que vas a necesitar en todo este bono. Nunca vas a tener que escribir ni una sola palabra de código de texto. Solo vas a arrastrar bloques, leerlos en voz alta como si fueran frases, y acomodarlos en el orden correcto.

Este bono profundiza en tres ideas que ya rozaron sin darse cuenta mientras armaban los proyectos del libro principal. Son estas: el orden de los pasos, la repetición de una acción, y la decisión entre dos caminos posibles. Ahí las usaron para que un proyecto funcionara. Aquí vas a detenerte en cada una, entenderla por separado, y practicarla con un ejercicio propio. Al final, las tres se juntan en un proyecto nuevo: una puerta con código secreto que solo se abre si conoces la señal correcta.

No necesitas saber programar. No necesitas haber estudiado nada de esto antes. Solo necesitas el simulador abierto, un rato tranquilo, y ganas de jugar a los espías con tu hijo o hija.

¿Por qué justo estas tres ideas, y no otras? Porque son las tres piezas mínimas con las que se arma cualquier programa, por más grande o complicado que sea después. Un videojuego, una aplicación del teléfono, el semáforo de la esquina de tu casa: todos, en el fondo, hacen lo mismo. Siguen instrucciones ordenadas, repiten cosas sin volver a escribirlas, y deciden entre caminos distintos según lo que pase. Si tu hijo o hija entiende estas tres ideas con bloques y un LED, ya entiende la base de todo lo demás. El resto, con el tiempo, son detalles.

## Concepto 1: la secuencia — el orden importa

Piensa en algo tan simple como vestirse. Las medias van antes que los zapatos, nunca después. Si tu hijo o hija se pone los zapatos primero y después intenta ponerse las medias, algo no funciona, aunque las dos prendas sean correctas. El problema no es qué prendas eligió: es el orden en que las usó. Con las máquinas pasa exactamente lo mismo. Un circuito puede tener todas las piezas correctas y aun así no funcionar, simplemente porque las instrucciones están en el orden equivocado.

A esa idea, una lista de pasos en un orden específico, la llamamos secuencia. El orden no es un detalle menor: cambiarlo cambia el resultado.

En Tinkercad Circuits, cuando abres el panel de "Código" y entras al modo Blocks, vas a encontrar bloques que dicen cosas como "encender pin", "esperar" o "apagar pin". Cada uno es una instrucción sola, sin sentido completo por sí misma. El sentido aparece cuando los acomodas uno debajo del otro, en fila, formando una secuencia. "Encender pin, esperar 1 segundo, apagar pin" no es lo mismo que "apagar pin, esperar 1 segundo, encender pin". Se parecen, usan las mismas tres piezas, pero cuentan una historia distinta: una empieza con la luz encendida, la otra con la luz apagada.

Ahora piensa en un código secreto de verdad, del tipo que se usaba antes de que existieran los teléfonos. Era una luz que parpadea para avisar algo a la distancia. Un parpadeo corto, corto, y después uno largo, puede significar "todo tranquilo". Cambia el orden, y el mensaje ya no dice lo mismo, aunque la cantidad de parpadeos sea idéntica. Eso es exactamente lo que van a construir con las secuencias de bloques: un mensaje que solo tiene sentido si el orden es el correcto.

### Ejercicio práctico: tu primera señal secreta

Abre un circuito nuevo en Tinkercad Circuits con un Arduino Uno y un LED, igual que armaron en su primer contacto con el simulador. Entra al panel de "Código" y arma esta secuencia, bloque debajo de bloque: enciende el pin del LED, espera medio segundo, apágalo, espera medio segundo. Esa es tu primera señal corta.

Ahora, debajo de esa misma fila, agrega otra secuencia parecida pero con un tiempo distinto: enciende el pin, espera dos segundos esta vez, y apágalo. Aprieta "Iniciar simulación" y miren juntos: corto, corto, largo. Acaban de inventar su primera señal secreta con luz.

Después, juega con tu hijo o hija a romper el orden a propósito. Mueve el bloque de "esperar" largo hacia el principio de la fila, antes que los cortos, y vuelvan a simular. Pregúntale: "¿la señal sigue significando lo mismo?". La respuesta va a ser que no. Esa es exactamente la idea que querías que descubriera solo. En una secuencia, el orden no es decoración: es el mensaje mismo.

**Si algo no sale como esperabas.** Si el LED queda siempre encendido o siempre apagado, revisa que cada bloque de "esperar" tenga un número cargado. Un bloque de espera vacío puede hacer que todo pase de golpe, sin pausa visible entre un paso y el siguiente. Si la señal larga se ve igual de corta que las otras dos, revisa el número de segundos de ese último bloque. Tiene que ser mayor, no solo estar en un lugar distinto de la fila. Y si dos bloques quedaron sueltos, sin encajar bien uno debajo del otro, el simulador los va a ignorar como si no existieran. Acomódalos de nuevo hasta sentir que "encajan" con un clic.

## Concepto 2: la repetición — no repitas a mano lo que puede repetirse solo

Ahora imagina que quieres que esa señal secreta se repita diez veces seguidas. Es para que quien la esté esperando del otro lado no se la pierda por estar mirando para otro lado un segundo. Una opción sería copiar y pegar toda la secuencia diez veces, bloque por bloque. Funcionaría, pero sería lento, ocuparía toda la pantalla, y si un día quisieras cambiar algo, tendrías que cambiarlo diez veces en vez de una sola.

En vez de decir "salta, salta, salta" diez veces seguidas, le dices a tu hijo o hija "salta diez veces", una sola vez. Con esa sola frase, entiende exactamente cuántas veces saltar. Eso es lo que llamamos repetición: decirle a alguien cuántas veces hacer algo, en vez de repetir la instrucción una y otra vez. Una máquina puede entender la misma idea, si se lo dices en su propio idioma de bloques.

En el panel de "Código" del modo Blocks, dentro de la categoría de bloques de control, vas a encontrar uno que dice algo como "repetir ___ veces". Este bloque tiene una forma distinta a los demás: es como un marco o una cajita que envuelve a otros bloques por dentro. Todo lo que pongas adentro de ese marco se repite tantas veces como el número que elijas, sin que tengas que copiarlo ni una sola vez más.

Hay algo más que vale la pena notar. Seguramente ya lo vieron sin ponerle nombre en el libro principal. Cuando aprietas "Iniciar simulación" en Tinkercad Circuits, el programa entero vuelve a empezar solo, una y otra vez, mientras la simulación siga corriendo. Eso también es repetición, solo que automática y sin límite: el simulador repite todo el programa para siempre, sin que se lo pidas con un bloque especial. El bloque de "repetir ___ veces" es distinto. Sirve para cuando quieres una cantidad exacta de repeticiones, ni una más ni una menos, dentro de ese ciclo que ya se repite solo.

### Ejercicio práctico: la señal que no se apaga

Retoma el mismo circuito del ejercicio anterior. Ahora, en vez de dejar la secuencia corta-corta suelta en la fila de bloques, arrastra un bloque de "repetir ___ veces" y ponlo justo antes de esa secuencia. Elige el número cinco. Después, mueve los bloques de "encender pin, esperar, apagar pin, esperar" hacia adentro de ese marco, como si los metieras en una caja.

Aprieta "Iniciar simulación" y cuenten juntos en voz alta cuántas veces parpadea antes de pasar a la parte larga: uno, dos, tres, cuatro, cinco. Después cambia el número cinco por un diez, sin tocar ningún otro bloque, y vuelve a simular. Pregúntale a tu hijo o hija: "¿qué crees que va a cambiar con solo mover ese número?". Esa pregunta, respondida antes de apretar el botón, es la que fija la idea. Repetir no significa escribir de nuevo. Significa decirle a la máquina cuántas veces, y dejar que ella haga el resto sola.

**Si algo no sale como esperabas.** Si el LED sigue parpadeando sin detenerse nunca, aunque hayas puesto el número cinco, revisa los bloques de la secuencia corta. Tienen que estar realmente adentro del marco de "repetir", no solo pegados debajo de él por fuera. Solo lo que está dentro del marco se cuenta. Si cambiar el número no cambia nada al simular, asegúrate de haber apretado de nuevo "Iniciar simulación" después del cambio. El simulador no actualiza solo: necesita ese clic para leer el número nuevo.

## Concepto 3: el condicional — "si esto, entonces aquello"

Hasta ahora, la señal secreta se repite siempre igual, pase lo que pase. Pero un código secreto de verdad necesita algo más interesante: tiene que responder distinto según lo que pase alrededor. Si alguien da la señal correcta, la puerta se abre. Si alguien da cualquier otra cosa, la puerta se queda cerrada. Esa decisión entre dos caminos posibles es lo que se llama un condicional.

Tu hijo o hija ya usa condicionales todos los días, sin llamarlos así. "Si llueve, me llevo el paraguas; si no llueve, no lo llevo" es un condicional completo, con sus dos caminos bien definidos. "Si el semáforo está en rojo, me detengo; si está en verde, cruzo" es otro. La idea siempre tiene la misma forma: hay una pregunta con solo dos respuestas posibles, sí o no, y cada respuesta lleva a una acción distinta.

En el modo Blocks de Tinkercad Circuits, dentro de la misma categoría de control donde encontraron el bloque de repetir, hay un bloque con esa forma exacta. Dice: "si esto, entonces aquello, y si no, entonces esto otro". Tiene un espacio arriba para la pregunta, y dos espacios separados por debajo. Uno es para lo que pasa cuando la respuesta es sí. El otro, para lo que pasa cuando la respuesta es no. La pregunta suele ser algo simple, como si un botón está presionado en ese instante o no. Y dentro de cada uno de esos dos espacios, puedes poner cualquier otra secuencia de bloques que ya conocen, incluso un bloque de repetir si hace falta.

Piensa otra vez en el código secreto: un botón puede representar el golpe secreto en la puerta. Si alguien presiona el botón, ese es el golpe correcto, y entonces el LED se enciende para avisar "adelante, puedes pasar". Si nadie presiona el botón, no pasa nada, y el LED se queda apagado, como si la puerta no hubiera escuchado ninguna señal. Los dos caminos existen todo el tiempo, esperando, pero solo uno se activa según lo que realmente ocurra.

### Ejercicio práctico: el golpe secreto

Arma un circuito nuevo con un Arduino Uno, un botón y un LED, conectado igual que en los proyectos con botón que ya armaron en el libro principal. En el panel de "Código", en modo Blocks, arrastra el bloque "si esto, entonces aquello, y si no, entonces esto otro". En la parte de la pregunta, indica que se fije si el botón está presionado. En la parte de "entonces", pon un bloque que encienda el pin del LED. En la parte de "si no", pon un bloque que lo apague.

Aprieta "Iniciar simulación" y prueba presionando el botón y soltándolo varias veces, mientras tu hijo o hija mira de cerca. Después pregúntale: "¿qué pasaría si cambiáramos el LED de la parte de 'entonces' por un buzzer?". No hace falta que lo resuelva ahí mismo. La idea es que empiece a notar algo: dentro de cada uno de esos dos caminos puede ir cualquier cosa, no solo un LED. Ese es el corazón del condicional: dos caminos fijos, pero lo que va adentro de cada camino, lo eliges tú.

**Si algo no sale como esperabas.** Si el LED queda siempre encendido, sin importar si presionas el botón o no, revisa la pregunta del bloque condicional. Tiene que estar apuntando realmente al pin del botón, y no a otro número de pin por error. Si el LED nunca se enciende, ni siquiera presionando el botón, comprueba el bloque que enciende el pin. Tiene que estar puesto en la parte de "entonces", no confundido en la parte de "si no". Un solo bloque en el espacio equivocado invierte todo el comportamiento, aunque el resto del circuito esté perfecto.

## Proyecto final: la Puerta del Código Secreto

Ahora van a juntar las tres ideas en un solo proyecto, algo que ya se siente como un invento de verdad. Van a construir una puerta con código secreto: avisa cuando está esperando la señal, y celebra cuando la recibe.

**Qué van a construir.** Un circuito con un Arduino Uno, un LED, un buzzer y un botón. Mientras nadie toca el botón, el LED parpadea sin parar, como diciendo "aquí estoy, esperando el golpe secreto". En el momento en que alguien presiona el botón, el circuito responde con una pequeña celebración: el buzzer suena tres veces seguidas, cortito, como un aplauso electrónico.

**Cómo armarlo en el simulador.** Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un LED con su resistor, un buzzer y un botón, igual que en los proyectos con botón del libro principal. Conecta el LED al pin 9, el buzzer al pin 10 y el botón al pin 2, y lleva la otra pata de cada uno a "GND".

Abre el panel de "Código" y entra al modo Blocks. Primero arma la parte de la secuencia que se repite sola: un bloque de "repetir ___ veces", con el número que quieran. Adentro va la secuencia "encender pin 9, esperar medio segundo, apagar pin 9, esperar medio segundo". Eso resuelve la parte de "estoy esperando".

Debajo de ese bloque de repetir, agrega el bloque "si esto, entonces aquello, y si no, entonces esto otro". En la pregunta, indica que se fije si el pin 2 (el botón) está presionado. En la parte de "entonces", coloca otro bloque de "repetir ___ veces", esta vez con el número tres. Adentro, pon la secuencia "hacer sonar el pin 10, esperar un cuarto de segundo, apagar el pin 10, esperar un cuarto de segundo". En la parte de "si no", no hace falta poner nada. Si nadie presionó el botón, simplemente no pasa nada nuevo, y el LED sigue con su parpadeo de espera.

Aprieta "Iniciar simulación". Van a ver el LED parpadeando solo, en bucle, gracias a la repetición. En el momento en que presionen el botón, el buzzer va a sonar tres veces. Eso pasa gracias al condicional, que decidió cuál de los dos caminos tomar. Y gracias a la repetición, que se aseguró de que sonara exactamente tres veces, ni una más ni una menos.

**Qué esperar cuando funcione.** Si el LED no deja de parpadear nunca, revisen que el bloque de repetir de arriba esté fuera del condicional, no adentro. Esa parte tiene que repetirse siempre, pase lo que pase con el botón. Si el buzzer no suena al presionar el botón, revisen dos cosas. Primero, que la pregunta del condicional esté realmente comprobando ese botón. Segundo, que el bloque de sonido esté dentro de la parte de "entonces", no de la de "si no". Como siempre, un solo bloque en el lugar equivocado alcanza para que todo el mensaje cambie de sentido. Pasa exactamente igual que con la primera señal secreta que armaron al principio de este bono.

Cuando lo tengan funcionando, invita a tu hijo o hija a inventar su propia variación. Puede cambiar el golpe secreto por dos presiones seguidas, o cambiar el aplauso final de tres sonidos a cinco, cambiando un solo número. No hace falta ayuda técnica para eso. Ya tiene, sin saberlo, las tres piezas que necesita: una secuencia ordenada, una repetición que ahorra trabajo, y un condicional que decide entre dos caminos.

## Cómo hablar de esto sin sonar a profesor

Una advertencia antes de cerrar. Es muy fácil, sin darte cuenta, empezar a hablar como si estuvieras dando una clase: "ahora vamos a ver el concepto de secuencia", "recordemos qué es un condicional". Ese tono, aunque venga con buena intención, convierte el juego en tarea, y la tarea es justo lo que este bono quiere evitar.

En vez de nombrar el concepto antes de jugar, deja que el juego pase primero y nombra la idea después, casi de pasada. Si armaron la señal secreta y funcionó, puedes decir "mira, eso que armaste, en orden, se llama secuencia" al final. Dilo como quien cuenta un dato curioso, no como quien evalúa si aprendió bien. El nombre importa menos que la experiencia de haberlo hecho funcionar con sus propias manos.

Tampoco corrijas de inmediato si tu hijo o hija usa mal una palabra, como llamar "el bloque del si" a cualquier bloque con forma de marco. Vas a tener después mil oportunidades de afinar el vocabulario. Lo que no vas a poder recuperar tan fácil es el entusiasmo de la primera vez que algo parpadeó, sonó o se abrió. Eso pasó gracias a algo que él o ella armó con sus propias manos.

## Cierre

Tu hijo o hija acaba de dar sus primeros pasos reales en programación, sin escribir una sola línea de código de texto y sin necesitar aprender ninguna jerga nueva. Aprendió que el orden de los pasos importa. También aprendió que repetir algo no significa escribirlo de nuevo cada vez, y que una máquina puede decidir entre dos caminos si le dejas la pregunta bien planteada. Son las mismas tres ideas que sostienen, por debajo, cualquier programa que exista, por más complicado que parezca.

No hace falta que memorice nombres ni categorías de bloques. Lo que importa es esto. La próxima vez que abran juntos el panel de "Código" en cualquier proyecto del simulador, tu hijo o hija va a mirar la fila de bloques con otros ojos. Ya no la va a ver como algo misterioso que hay que copiar. La va a ver como una secuencia que puede leer, entender, y algún día, armar por su cuenta desde cero. Ese cambio de mirada es el verdadero código secreto de este bono.
