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
