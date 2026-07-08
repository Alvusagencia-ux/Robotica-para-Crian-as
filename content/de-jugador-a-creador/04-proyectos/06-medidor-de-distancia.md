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
