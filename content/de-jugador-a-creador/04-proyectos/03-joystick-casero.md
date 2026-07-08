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
