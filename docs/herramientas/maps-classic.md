---
title: "Maps clásico: mapas interactivos sobre imágenes"
fecha_revision: 2026-10-25
estado: "Funciones principales verificadas; apariencia y controles pendientes de comprobación en la interfaz"
---

# Maps clásico: mapas interactivos sobre imágenes

## Para qué sirve

**Maps / Mapas clásico** parte de una imagen preexistente (mapa de mundo, región, ciudad, edificio o mazmorra) y permite convertirla en una superficie interactiva. La descripción oficial del catálogo menciona expresamente las mazmorras. Es la elección inicial más sencilla para un plano ya dibujado.

## Capacidades documentadas

- Incorporar una **imagen base** desde la biblioteca multimedia o mediante importación.
- Añadir **marcadores/pins** vinculados a tarjetas; la guía cita hacer clic derecho o arrastrar tarjetas desde la barra lateral.
- Crear **zonas** mediante vértices sobre la imagen, con un contorno configurable, y asociarlas a tarjetas.
- Añadir **etiquetas de texto**.
- Organizar elementos en **capas** y cambiar su visibilidad/disposición.
- Incrustar un mapa ya creado en una tarjeta como bloque.
- Asociar mapas entre sí mediante marcadores o zonas (descrito en las novedades de 2026).

## Cómo crear un mapa de mazmorra

1. Localiza la herramienta **Mapas**, icono de mapa plegado; no confundir con **Mapa / Map Maker Beta**.
2. Crea un documento con un nombre como `La Cripta`.
3. Selecciona el plano como **imagen base** y comprueba que aparece nítido.
4. Crea una tarjeta por habitación relevante y asocia un marcador o zona a esa tarjeta.
5. Separa por capas, si lo permite tu versión, marcadores visibles, información del director de juego y navegación. **No se ha verificado un sistema de visibilidad por jugador a nivel de capa**: no asumir que cambiar capas oculta contenido en todos los contextos de publicación.
6. Prueba un marcador completo antes de importar las doce salas.

## Zonas

La guía de agosto explica que se añaden puntos y se cierra la región pulsando el primero. Hay opciones para cambiar bordes, color, transparencia, patrón y tipografía. Los puntos pueden ajustarse después. Una novedad de mayo permite enganchar bordes compartidos entre zonas; es útil para regiones, menos importante para un dungeon pequeño.

## Capas y mapas conectados

Las capas sirven para agrupar la información cartográfica y ordenar visualmente elementos. Las novedades de marzo de 2026 indican que las zonas y los pines también pueden llevar a otros mapas, lo que permite una jerarquía continente → comarca → población → mazmorra.

## El botón «Cambiar fondo» y la imagen borrosa

**Hecho documentado:** la opción de fondo del editor clásico sustituye la **imagen base del mapa**, conservando, según la guía, zonas y pines. **No está documentado** como control para sustituir la versión desenfocada de la imagen que se muestra alrededor del plano. La captura del usuario muestra dicho desenfoque, pero no demuestra que haya una opción independiente para modificarlo. No se debe afirmar que tal opción existe ni que es imposible sin confirmación de VVD.

## Incidencias de carga

Que una miniatura aparezca en la biblioteca no garantiza que el visor del mapa la renderice. Para diagnosticar: registrar formato/tamaño, comprobar en un mapa de prueba, revisar el estado de red si se dispone de conocimientos técnicos y acudir a soporte. No adjudicar la causa a URL, CORS, caché o servidor sin respuesta HTTP o registro verificable.

## Atención a la versión

La guía de agosto dice que VVD no dibuja mapas desde cero. Esto se refiere a la herramienta clásica; no describe el **Map Maker Beta**, anunciado el 01/10/2026. Este documento prioriza el changelog posterior.


## Fuentes directas

- https://vvd.crisp.help/en/article/maps-akxl85/
- https://vvd.world/t/maps
- https://vvd.world/whats-new
- https://vvd.crisp.help/en/article/media-gallery-w1fuka/
