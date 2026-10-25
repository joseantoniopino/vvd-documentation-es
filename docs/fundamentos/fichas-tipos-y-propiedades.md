---
title: "Tarjetas, tipos, plantillas, propiedades y conexiones"
fecha_revision: 2026-10-25
estado: "Verificado parcialmente; revisar cambios posteriores"
---

# Tarjetas, tipos, plantillas, propiedades y conexiones

En la interfaz española analizada, **Card** aparece como **«Tarjeta»** (por ejemplo, en el acceso inferior «Tarjeta» y en el selector **«Selecciona un tipo»**). En este manual se utiliza **tarjeta** para instrucciones sobre la interfaz; **ficha** puede utilizarse como sinónimo conceptual, pero no se presenta como una etiqueta literal. [Evidencia de interfaz](../../terminologia/glosario.md).

## Tarjetas (Cards)

Una tarjeta representa algo que merece descripción propia: una sala, un PNJ, un encuentro, una trampa, una facción, un objeto mágico. Puede llevar título, alias, imagen, propiedades y bloques de texto u otras herramientas. El alias puede ayudar a identificar menciones de un mismo personaje o lugar.

Para crear una tarjeta, el centro de ayuda documenta el menú contextual del editor o los accesos de la barra lateral. Al crearla se elige un tipo o subtipo; se puede cambiar después sin rehacer la tarjeta.

## Tipos, subtipos y plantillas

La pantalla del selector muestra **«Selecciona un tipo»**, el campo **«Buscar tipos...»**, el apartado **«Categorías»** y la acción **«Agregar tipo»**. Las categorías observadas incluyen **Ecología, Especie, Evento, Facción, Lore, Objeto, Personaje y Ubicación**. Son etiquetas de una sesión concreta, **no evidencia suficiente de que todos sus tipos estén preinstalados globalmente**. Consulta la [transcripción de tipos](../../terminologia/tipos-observados.md).

En **Información del mundo → Tipos**, el responsable puede definir una taxonomía propia. Los tipos iniciales son ejemplos, no un esquema obligatorio. Al editar un tipo se pueden definir propiedades compartidas, icono, estructura de bloques e imagen inicial. En la pantalla del editor de una tarjeta se observan **«Alias»**, **«Agregar propiedad»**, **«Plantillas Guiadas»** y **«Libre»**. También existen botones para **«Bloque de Estadísticas»**, **«Mapa»**, **«Lienzo»** y **«Línea de tiempo»**; esas etiquetas corresponden al **contexto de inserción en una tarjeta**, no necesariamente al nombre de la herramienta autónoma. [Glosario](../../terminologia/glosario.md).

El artículo actualizado el 21/09/2026 indica que es posible sincronizar cambios con tarjetas ya existentes; conviene confirmar el alcance antes de aplicarlos masivamente.

Una clasificación razonable para rol sería `Lugares → Mazmorra → Sala`, `PNJ → Aliado/Enemigo`, `Encuentro`, `Trampa`, `Tesoro`, `Facción`. **Es una propuesta de organización, no un conjunto de tipos preinstalados confirmado.**

## Propiedades

Dos familias descritas oficialmente: campos textuales y referencias a otras fichas. Pueden definirse individualmente o en un tipo para reutilización. Ejemplos prácticos: `Nivel de peligro`, `Habitantes`, `Secreto`, `Facción`, `Salas conectadas`. Confirmar los tipos de dato disponibles en tu herramienta actual antes de crear un esquema complejo.

## Dos formas de vincular tarjetas

1. Mencionar en texto el nombre o alias de otra ficha (autovinculación).
2. Crear una propiedad que haga referencia a otra ficha.

Estas relaciones se representan en el **Grafo del mundo**, donde es posible explorar y filtrar conexiones. El sistema de vínculos dibujados en **Árboles de relaciones** es diferente: no debe suponerse que aparezcan automáticamente en el grafo.

## Asistencia de IA opcional

La documentación oficial distingue entre detección de entidades (sugerir nuevas fichas en textos) y autovinculación (enlazar tarjetas ya existentes). Las plantillas guiadas reorganizan contenido; la política pública explica cómo se procesa el texto y sus límites. Si te preocupa la privacidad, lee la política original vigente, no solo este resumen.


## Cambios recientes del editor de fichas

- **Tarjetas sin imagen:** VVD 3 permite prescindir de la imagen de una tarjeta, aunque el [anuncio de agosto](https://www.reddit.com/r/vvdworld/comments/1vt4h41/vvd3_announcement/) advertía que todavía se estaba adaptando el resto de la interfaz a esa posibilidad.
- **Tablas dentro de bloques de texto:** el [anuncio de septiembre](https://www.reddit.com/r/vvdworld/comments/1x3ar19/vvds_september_2026/) confirma inserción mediante el menú **`/`**.
- **Recorte de imágenes de tarjetas:** el [changelog del 27/09](https://vvd.world/whats-new) documenta formatos **Card 3:4**, **Landscape 4:3**, **Square** y recorte libre.
- **Bloques de nota, pregunta e información:** el [changelog del 27/09](https://vvd.world/whats-new) incorpora **Note**, **Question** (editable o respondible en contexto) e **Info**; este último también aparece en la wiki.
- **Insertar bloques donde se necesitan:** el [changelog del 01/10](https://vvd.world/whats-new) permite usar el menú contextual de la barra de título del bloque y escoger **Above**, **Below**, **Left** o **Right**.

**Alcance:** fuentes de cambios de producto, no pruebas de que los mismos tipos de bloque estén disponibles en todas las herramientas o planes.


## Fuentes directas

- https://vvd.crisp.help/en/article/cards-62i16j/
- https://vvd.crisp.help/en/article/card-types-templates-44at3z/
- https://vvd.crisp.help/en/article/properties-umr3at/
- https://vvd.crisp.help/en/article/connections-the-graph-eir68m/
- https://vvd.crisp.help/en/article/ai-1e261u7/
