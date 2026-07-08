# Proyecto 5: Barrera automática

## Qué vas a construir

Van a armar una barrera automática para el estacionamiento de juguetes o piezas de Lego: un brazo pequeño sube para dejar pasar y baja para cerrar el camino.

La pieza central es un servo motor. Piensa en él como un brazo que sabe quedarse en una posición exacta, no solo girar sin parar. Puede mirar a 0 grados, 90 grados o 180 grados, como una puerta que se abre hasta cierto punto y se detiene. No necesitas saber más que esto.

## Simula primero

Abre tinkercad.com/circuits y crea un circuito nuevo. Trae un Arduino Uno, un micro servo y un botón. El botón será la entrada: cuando lo presionan, la barrera se abre; cuando lo sueltan, se cierra.

Conecta el servo al Arduino. En Tinkercad, el servo suele tener tres cables: uno de energía, uno de tierra y uno de señal. El cable de energía va a "5V"; el de tierra va a "GND"; el de señal va al pin 9. Si los colores aparecen distintos, usa los nombres del componente como guía.

Ahora conecta el botón. Una pata va al pin 2 y la otra a "GND". Es el mismo gesto que ya conoces: un botón le dice al Arduino que algo pasó. Aquí no representa una puerta ni un sensor invisible; representa el permiso para abrir la barrera.

Abre el panel de "Código". La receta es simple: si el botón está presionado, mover el servo a 90 grados; si no está presionado, moverlo a 0 grados. En bloques, busca la acción para fijar el ángulo del servo y colócala dentro de una condición "si... entonces... si no". En la parte "si", usa 90. En la parte "si no", usa 0.

Aprieta "Iniciar simulación". Presiona el botón y mira el brazo del servo. Debe levantarse. Suelta el botón y debe volver a su posición inicial. Si quieres hacerlo más visual, puedes imaginar que hay una tira de cartón pegada al eje del servo: esa tira es la barrera.

## Si tienes el kit físico

**Materiales:** un Arduino Uno, una protoboard, un servo motor SG90, un botón, jumpers, el cable USB y una tira liviana de cartón o palito de helado para hacer el brazo.

**Arma el circuito:** conecta el servo con sus tres cables: señal al pin 9, energía a "5V" y tierra a "GND". Conecta el botón al pin 2 y a "GND". Pega la tira de cartón al brazo plástico del servo, sin forzarlo. Carga el programa y prueba presionando el botón. Si el brazo golpea la mesa o se traba, cambia los ángulos: usa 20 grados para cerrado y 100 grados para abierto.

## ¿Funcionó?

Si algo no salió como esperaban, revisa esto en el simulador:

**El servo no se mueve.** Revisa que el cable de señal esté en el pin 9 y que el bloque de código también use ese pin. Si el número no coincide, el Arduino está hablando al lugar equivocado.

**El servo se mueve al revés.** No hay problema. Cambia los ángulos: donde pusiste 90, pon 0; donde pusiste 0, pon 90. La barrera no sabe qué es "abierto"; tú se lo enseñas.

Si armaste el circuito físico:

**El servo vibra o hace fuerza.** Puede estar empujando contra algo. Quita el brazo de cartón, prueba el servo solo y después vuelve a colocar el brazo en una posición más cómoda.

**El botón no responde.** Revisa sus patas. En la protoboard, es fácil conectarlo del lado incorrecto. Muévelo una fila y prueba de nuevo.

## Para ir más lejos

Cuando la barrera funcione, conviértanla en un juego: solo puede abrirse si el "auto" de juguete espera tres segundos frente a ella. Agrega una pausa antes de subir el servo, y tu hijo o hija tendrá una barrera con personalidad propia.
