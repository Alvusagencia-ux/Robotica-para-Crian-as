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
