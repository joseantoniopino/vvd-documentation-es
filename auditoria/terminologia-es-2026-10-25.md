---
title: "Auditoría de nomenclatura española"
revisado: 2026-10-25
estado: "comparación entre corpus y capturas reales de interfaz, parcial"
---

# Auditoría de terminología española — 25/10/2026

## Objeto y metodología

**Base examinada:** capturas aportadas por un usuario que muestran catálogo de herramientas, selector de tipos y editor de **Tarjeta**, comparadas con documentos Markdown del repositorio antes de esta corrección. La evidencia se describe en [fuentes](../fuentes/evidencia-interfaz-es-2026-10-25.md) y el vocabulario literal en [glosario](../terminologia/glosario.md).

**No** son archivos oficiales de traducción. La transcripción no certifica qué nombres ven otras cuentas ni qué tipos están disponibles de forma predeterminada.

## Divergencias identificadas

| Corpus anterior | Etiqueta de interfaz observada | Decisión editorial |
|---|---|---|
| Ficha / Card | **Tarjeta** | Utilizar **Tarjeta** en instrucciones y encabezados; «ficha» solo como sinónimo explicativo |
| Timelines, cronologías | **Línea de tiempo** | Nombre de control **Línea de tiempo**; «cronología» como concepto |
| World Graph, grafo del mundo | **Grafo del Mundo** | Literal al indicar la herramienta |
| Relation Trees, árboles | **Árbol de relaciones** | Literal en navegación |
| Canvas, lienzo | **Canvas** en catálogo; **Lienzo** en inserción de Tarjeta | Registrar ambos contextos, sin inferir identidad técnica completa |
| Embed, incrustaciones | **Incrustar** | Nombre de herramienta observado |
| Notes, Conversation, Tables | **Notas**, **Conversación**, **Tabla** | Etiquetas literales en el catálogo |
| 3D Model Viewer / Radar Chart | **Visor de modelos 3D**, **Gráfico de Radar** | Corregir títulos/índice cuando guías individuales existan |
| D&D Character Sheet | **Hoja de personaje de 5e** | Usar nombre literal; no asumir variantes exactas |
| Voice Note / Dictionary | **Nota de voz**, **Diccionario** | Nombre literal observado |
| Map Maker | **Mapa** con distintivo **Beta** | Mantener «Map Maker» como nombre inglés explicativo |
| Tipos de contenido genéricos | **Ecología, Especie, Evento, Facción, Lore, Objeto, Personaje, Ubicación** | Lista **observada en ese mundo**, no taxonomía universal |
| Lore / Coven / Tome | **Lore**, **Coven**, **Tome** en español | No «corregir» la interfaz; anotar falta de traducción |
| Crear tipo | **Agregar tipo** | Usar en pasos del selector; otros menús pueden usar otro verbo |

## Incidencias de localización observables

1. **«Nuevo Especie»** en la pantalla de creación: posible concordancia incorrecta.
2. **«Misión»** aparece dos veces entre 14 tipos de Evento; comprobar si representan dos tipos distintos o un error de localización.
3. **«Aldea»** aparece dos veces entre 21 tipos de Ubicación.
4. **«Lore»**, **«Coven»**, **«Tome»** y nombres técnicos como **«Canvas»** y **«Workshop»** permanecen en inglés en una interfaz configurada en español.
5. Hay encabezados funcionales específicos como **«Lentes de mapa»** cuya semántica no debe reinterpretarse sin datos adicionales.

**No confundir** incidencias de localización con errores del modelo de datos: para determinar si dos entradas representan el mismo tipo serían necesarios identificadores internos o aclaración del equipo.

## Estado de revisión

- **Cubierto por capturas:** catálogo de herramientas (parcial), siete categorías con los tipos visibles, un editor de Tarjeta y sus controles.
- **Sin captura detallada todavía:** tipos bajo **Especie**, configuración global, publicación de wikis, menús contextuales específicos, pantallas de administración del mundo y variantes de todas las herramientas.
- **Acciones:** glosario textual y YAML, transcripción exacta de tipos, listado de herramientas, correcciones de capítulos y avisos de procedencia.

La meta no es traducir VVD por nuestra cuenta, sino **documentar exactamente la versión española existente**, incluso cuando sea inconsistente. Los cambios de interfaz deberán registrarse por fecha y, si es posible, por versión de aplicación y herramienta.
