---
title: "Normalización terminológica del corpus en español"
fecha_revision: 2026-10-25
estado: "corpus armonizado con etiquetas observadas; cobertura de interfaz no exhaustiva"
---

# Normalización terminológica del corpus — 25/10/2026

## Motivo

En la primera entrega se creó un glosario sin resolver **todos los desacuerdos terminológicos del manual**. El material de VVD utiliza nombres en español que no siempre coinciden con las traducciones elegidas editorialmente. La prioridad es facilitar las instrucciones siguiendo **la etiqueta que ve el usuario**.

## Evidencias y límites

- Se utilizaron [capturas de la interfaz española](../fuentes/evidencia-interfaz-es-2026-10-25.md), **no** un archivo oficial de traducción.
- Se compararon los nombres del [glosario](../terminologia/glosario.md) y la [lista de herramientas observadas](../terminologia/herramientas-observadas.md) con los capítulos del manual.
- Se revisaron los **34 archivos Markdown** del repositorio en esta pasada para comprobar **rutas de enlaces relativos Markdown**; se detectaron y corrigieron **2 enlaces internos rotos** introducidos por renombrar inadvertidamente palabras dentro de URLs.
- **No se han verificado en esta pasada las URLs HTTP externas** ni el comportamiento funcional de cada control de VVD.

## Cambios incorporados al manual

| Concepto | Tratamiento anterior | Tratamiento actual |
|---|---|---|
| Card | «Ficha» como sustantivo principal | **Tarjeta (Card)** como nombre de interfaz; «ficha» solo como sinónimo explicativo |
| World Graph | «Grafo del mundo» y variantes | **Grafo del Mundo** al citar la herramienta |
| Timelines | «Cronologías» | **Línea de tiempo** al citar la herramienta; cronología como noción conceptual |
| Relation Trees | «Árboles de relaciones» | **Árbol de relaciones** en navegación |
| Canvas | «Lienzo» empleado indistintamente | **Canvas** en catálogo; **Lienzo** al insertar desde Tarjeta |
| Tipos de localización | «Lugares» propuesto como categoría | **Ubicación** observada, con **Mazmorra** y **Cripta** entre sus tipos visibles |
| Herramientas menores | Nombres traducidos libremente o ingleses | **Notas, Conversación, Tabla, Incrustar, Diccionario, Gráfico de Radar, Visor de modelos 3D**, etc., según capturas |
| Integración con IA | Remitía a `VVD_MANUAL_ESPANOL.md`, archivo ya retirado | Instrucciones adaptadas a consultar el repositorio GitHub y el glosario vigentes |

**Importante:** los **nombres de archivo** históricos y los **registros de auditoría anteriores** pueden conservar palabras como `fichas` o referencias a «cronologías». No deben confundirse con los nombres actuales de los controles y no se han reescrito retrospectivamente los registros históricos.

## Archivos funcionales revisados

- [Introducción e índice](../README.md) / [índice de capítulos](../docs/README.md).
- [Tarjetas y tipos](../docs/fundamentos/fichas-tipos-y-propiedades.md).
- [Navegación](../docs/fundamentos/navegacion.md).
- [Guardado y aspecto](../docs/fundamentos/guardado-importacion-y-aspecto.md).
- [Catálogo de herramientas](../docs/herramientas/catalogo.md).
- [Mapas clásico](../docs/herramientas/maps-classic.md).
- [Árbol de relaciones, Línea de tiempo y Grafo del Mundo](../docs/herramientas/arboles-cronologias-y-grafos.md).
- [Canvas y medios](../docs/herramientas/medios-y-canvas.md).
- [Quill](../docs/herramientas/quill.md), [comentarios](../docs/fundamentos/comentarios-y-paths.md), [wikis](../docs/publicacion/wikis-y-permisos.md) y [guía de rol](../docs/guias/flujo-director-de-juego.md).
- [Instrucciones para IA](../integraciones/instrucciones-para-ia.md) e [inventario de fuentes](../fuentes/inventario.md).

La normalización terminológica no sustituye las comprobaciones oficiales de procedimientos, límites de cuenta o compatibilidad entre versiones y herramientas.

## Cambios aún por investigar

- Obtener los archivos de localización o el glosario autorizado del equipo de VVD.
- Verificar los nombres de controles aún no fotografiados (publicación, permisos, importación, configuración).
- Confirmar qué tipos observados proceden de la plantilla del mundo y cuáles son globales o personalizados.
- Aclarar inconsistencias visibles: nombres repetidos «Misión»/«Aldea», «Nuevo Especie», y etiquetas sin traducir «Lore», «Coven», «Tome».

Este documento registra el trabajo realizado, **no** afirma que toda la interfaz española haya sido inventariada.
