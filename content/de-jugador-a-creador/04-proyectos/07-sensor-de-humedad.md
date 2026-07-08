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
