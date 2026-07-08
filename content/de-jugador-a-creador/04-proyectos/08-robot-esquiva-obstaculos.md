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
