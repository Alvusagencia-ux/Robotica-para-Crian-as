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
