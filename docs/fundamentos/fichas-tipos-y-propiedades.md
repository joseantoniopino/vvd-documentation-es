---
title: "Fichas, tipos, plantillas, propiedades y conexiones"
fecha_revision: 2026-10-25
estado: "Verificado parcialmente; revisar cambios posteriores"
---

# Fichas, tipos, plantillas, propiedades y conexiones

## Fichas

Una ficha representa algo que merece descripción propia: una sala, un PNJ, un encuentro, una trampa, una facción, un objeto mágico. Puede llevar título, alias, imagen, propiedades y bloques de texto u otras herramientas. El alias puede ayudar a identificar menciones de un mismo personaje o lugar.

Para crear una ficha, el centro de ayuda documenta el menú contextual del editor o los accesos de la barra lateral. Al crearla se elige un tipo o subtipo; se puede cambiar después sin rehacer la ficha.

## Tipos, subtipos y plantillas

En **Información del mundo → Tipos**, el responsable puede definir una taxonomía propia. Los tipos iniciales son ejemplos, no un esquema obligatorio. Al editar un tipo se pueden definir propiedades compartidas, icono, estructura de bloques e imagen inicial. El artículo actualizado el 21/09/2026 indica que es posible sincronizar cambios con fichas ya existentes; conviene confirmar el alcance antes de aplicarlos masivamente.

Una clasificación razonable para rol sería `Lugares → Mazmorra → Sala`, `PNJ → Aliado/Enemigo`, `Encuentro`, `Trampa`, `Tesoro`, `Facción`. **Es una propuesta de organización, no un conjunto de tipos preinstalados confirmado.**

## Propiedades

Dos familias descritas oficialmente: campos textuales y referencias a otras fichas. Pueden definirse individualmente o en un tipo para reutilización. Ejemplos prácticos: `Nivel de peligro`, `Habitantes`, `Secreto`, `Facción`, `Salas conectadas`. Confirmar los tipos de dato disponibles en tu herramienta actual antes de crear un esquema complejo.

## Dos formas de vincular fichas

1. Mencionar en texto el nombre o alias de otra ficha (autovinculación).
2. Crear una propiedad que haga referencia a otra ficha.

Estas relaciones se representan en el **Grafo del mundo**, donde es posible explorar y filtrar conexiones. El sistema de vínculos dibujados en **Árboles de relaciones** es diferente: no debe suponerse que aparezcan automáticamente en el grafo.

## Asistencia de IA opcional

La documentación oficial distingue entre detección de entidades (sugerir nuevas fichas en textos) y autovinculación (enlazar fichas ya existentes). Las plantillas guiadas reorganizan contenido; la política pública explica cómo se procesa el texto y sus límites. Si te preocupa la privacidad, lee la política original vigente, no solo este resumen.


## Fuentes directas

- https://vvd.crisp.help/en/article/cards-62i16j/
- https://vvd.crisp.help/en/article/card-types-templates-44at3z/
- https://vvd.crisp.help/en/article/properties-umr3at/
- https://vvd.crisp.help/en/article/connections-the-graph-eir68m/
- https://vvd.crisp.help/en/article/ai-1e261u7/
