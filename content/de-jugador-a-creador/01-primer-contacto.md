# Primer Contacto™

> **Antes de empezar:** ve a tinkercad.com/circuits — si no tienes
> cuenta Autodesk, el simulador te guiará para crearla gratis
> (2-3 min). Luego regresa aquí y empieza el cronómetro.

Ese pasito de crear la cuenta no cuenta. Es como cuando llegas a una plaza de juegos y hay que anotarse en la entrada: no es la diversión todavía, es solo la puerta. Una vez que tengas tu cuenta creada, ahí sí arranca el reloj. Y desde ese momento, en unos 20 minutos, vas a tener a tu hijo o hija mirando un LED encenderse y apagarse solo, en la pantalla, obra de ustedes dos.

## Vamos a encender nuestra primera luz

Siéntate junto a tu hijo o hija frente a la pantalla. No necesitas ningún cable, ninguna pieza, ningún gasto. Todo lo que vas a usar hoy vive adentro del navegador, gratis, en un simulador llamado Tinkercad. Es un programa donde arrastras piezas electrónicas con el mouse, las conectas entre sí como si fueran piezas de un juego de mesa, y apretas un botón para ver si tu circuito funciona de verdad, sin riesgo de romper nada ni quemar nada.

La promesa de estos próximos 20 minutos es simple: al final, van a haber armado su primer circuito juntos y van a haber visto un LED parpadeando en la pantalla. Eso es todo. No hace falta entender electrónica, no hace falta saber programar, no hace falta que tú sepas la respuesta de antemano. Solo hace falta seguir los pasos con calma, uno detrás del otro. Vamos.

## Manos a la obra: tu primer circuito

**Paso 1: abre el simulador.** En el navegador, entra a tinkercad.com/circuits. Vas a ver un botón que dice algo como "Crear nuevo circuito" o "Create new Circuit". Haz clic ahí. Se va a abrir un espacio de trabajo vacío: una pantalla en blanco con un menú de piezas a la derecha. Esa pantalla en blanco es tu mesa de trabajo. Ahí vas a construir todo.

**Paso 2: trae el Arduino.** A la derecha vas a ver una lista larga de componentes, con un buscador arriba. Escribe "Arduino Uno" en ese buscador. Va a aparecer una placa rectangular de color azul. Esa placa es el cerebro de tu circuito: es la que va a decidir cuándo encender la luz y cuándo apagarla. Arrástrala con el mouse hasta el centro de tu mesa de trabajo y suéltala ahí.

**Paso 3: trae el LED.** Ahora busca "LED" en el mismo buscador. Va a aparecer un foquito pequeño, como una gotita de colores. Ese es tu LED: una lucecita que se enciende cuando le llega electricidad, parecida a la lucecita del router de tu casa o del control remoto del televisor. Arrástralo también a tu mesa de trabajo, cerca del Arduino.

**Paso 4: trae la resistencia.** Busca "resistor" o "resistencia". Vas a ver una piecita alargada con rayitas de colores. Piensa en ella como una manguera angosta: deja pasar la electricidad, pero controla que no pase demasiada de golpe. Sin ella, el LED recibiría más electricidad de la que soporta y se dañaría. Arrástrala también a la mesa, entre el Arduino y el LED.

**Paso 5: conecta las piezas.** Cada componente tiene puntitos de colores en sus bordes: esos puntitos se llaman pines, y son por donde entra y sale la electricidad. Haz clic sobre un pin y, sin soltar, arrastra hasta otro pin: vas a ver aparecer un cable de color que los une. Conecta así: una pata del LED con un extremo de la resistencia, el otro extremo de la resistencia con el pin llamado "13" del Arduino, y la otra pata del LED con el pin llamado "GND" del Arduino. Si el cable queda de un color raro o cruzado, no te preocupes: puedes hacer clic sobre él y arrastrarlo de nuevo hasta que quede prolijo.

**Paso 6: dile al Arduino qué hacer.** El circuito ya está armado, pero le falta algo: instrucciones. Busca arriba de la pantalla un botón que dice "Código" o "Code" y haz clic ahí. Se va a abrir un panel con bloques de colores, como piezas de rompecabezas que encajan unas con otras: esto es programar, pero sin escribir ni una sola línea de texto. Arrastra un bloque que diga "Encender pin" (o "Set pin") y elige el pin 13; debajo, arrastra un bloque de "Esperar" (o "Wait") y pon 1 segundo; después, otro bloque de "Apagar pin" (o "Set pin") en el pin 13; y por último otro "Esperar" de 1 segundo más. Esos cuatro bloques, uno debajo del otro, son literalmente la receta completa: enciende, espera, apaga, espera. Tinkercad repite esa receta sola, una y otra vez, mientras el circuito esté simulando.

**Paso 7: aprieta simular.** Arriba a la derecha vas a ver un botón verde que dice "Iniciar simulación" o "Start Simulation". Ese botón es el momento de la verdad. Apriétalo junto a tu hijo o hija, y cuenten hasta tres en voz alta. Si todo quedó bien conectado y los bloques están en el orden correcto, el LED va a empezar a encenderse y apagarse solo, una y otra vez, siguiendo exactamente la receta que armaron juntos.

Eso que acaba de pasar tiene un nombre, y ya te lo puedes quedar: se llama "blink", parpadeo. Es el primer programa que casi todo el mundo hace cuando empieza en robótica, porque es la forma más simple de comprobar que un circuito y sus instrucciones realmente funcionan juntos.

## ¿Funcionó?

Si el LED no parpadeó a la primera, tranquilo. Es lo más normal del mundo, y casi siempre se arregla en segundos. Estos son los tropiezos más comunes dentro del simulador:

**El LED se ve apagado y nada se mueve.** Lo más probable es que falte alguna conexión, o que un cable haya quedado unido al pin equivocado. Repasa el Paso 5 con calma: toca cada cable y fíjate en sus dos puntas. Si alguna punta no está pegada exactamente sobre un pin, arrástrala de nuevo hasta que encastre bien. Tinkercad suele marcar en rojo los pines que quedaron sueltos, así que revisa si hay algo pintado de ese color.

**Apareció un mensaje de advertencia en la pantalla.** A veces Tinkercad avisa con un cartelito amarillo o rojo que algo está mal conectado, por ejemplo si el LED quedó unido directo al Arduino sin pasar por la resistencia. Léelo con calma junto a tu hijo o hija: casi siempre te dice exactamente qué pieza revisar. Corrige esa conexión y vuelve a apretar "Iniciar simulación".

**Los bloques de código no hacen nada, o el LED queda siempre prendido o siempre apagado.** Vuelve al Paso 6 y revisa el orden de los cuatro bloques: primero "Encender pin", después "Esperar", después "Apagar pin", y por último otro "Esperar". Si dos bloques quedaron invertidos, o si alguno quedó suelto y no encajado dentro de la secuencia, el programa no va a repetir la receta como corresponde. Arrástralos de nuevo hasta que queden en fila, uno debajo del otro, bien pegados. Y si el botón de simular no responde o la pantalla se queda "cargando" para siempre, casi siempre alcanza con cerrar alguna otra pestaña del navegador y volver a apretarlo: tu circuito queda guardado solo, así que no vas a perder nada.

Ninguno de estos tropiezos significa que hiciste algo mal. Significa que estás construyendo, que es exactamente lo que veníamos a hacer.

## Lo logramos

Mira eso: acaban de armar un circuito electrónico desde cero, sin haber tocado nunca antes un cable, y ya lo tienen encendiéndose y apagándose solo frente a ustedes. Eso que parpadea en la pantalla no es un truco ni un video: es un circuito real, que ustedes diseñaron con sus propias manos, pieza por pieza.

Date un momento para mirar la cara de tu hijo o hija ahora mismo. Esa mezcla de sorpresa y orgullo es justo lo que veníamos a buscar. Guárdenla, porque es apenas la primera de muchas.

A partir de aquí, el camino se abre en dos direcciones y puedes tomar la que prefieras. Si quieres entender un poco mejor qué es cada pieza que acabas de usar, el Módulo 2, **Caja de Herramientas del Creador™**, te espera como consulta, para leer entero o solo cuando te surja una duda. Si prefieres seguir con las manos en la masa, el Módulo 3 te muestra cómo convertir este ratito en un ritual semanal con tu hijo o hija, y el Módulo 4 te lleva directo a los 8 proyectos completos, empezando por uno tan sencillo como el que acabas de terminar.

Como quieras seguir, ya diste el paso más difícil: el primero. Lo demás, ya lo saben hacer.
