# Metodología editorial, evidencias y auditoría

**Fecha de esta evaluación:** 25/10/2026. **Objetivo:** maximizar precisión y trazabilidad, no aparentar carácter oficial.

## Jerarquía de evidencias

1. **Comportamiento probado** en una versión identificada + fuente pública.
2. **Fuente oficial específica vigente** (artículo de ayuda o documentación técnica).
3. **Novedad oficial posterior** para hechos que actualiza expresamente.
4. **Página comercial vigente** para condiciones generales; las condiciones de cada suscripción pueden diferir.
5. **Anuncios del equipo en Reddit** con autor identificado y etiqueta de equipo: evidencia oficial complementaria de lanzamientos y cambios, siempre contrastada con el changelog; [inventario](reddit-y-comunidad.md).
6. **Catálogo oficial de la herramienta** para existencia, autor y versión puntual.
7. **Respuestas de personal identificado**: aclaraciones de alcance limitado; no convertir planes futuros en funciones publicadas.
8. **Comunidad/captura**: evidencia contextual, nunca prueba universal de una funcionalidad.

Si dos fuentes oficiales discrepan, registrar **ambas** y el alcance de la duda. No inventar resolución; una fecha más reciente orienta, pero no resuelve por sí sola un contrato o una función distinta.

## Etiquetas editoriales

- **Confirmado documentalmente**: descripción explícita, con URL.
- **Anunciado**: comunicado oficial sin procedimiento exhaustivo.
- **Comprobado en interfaz**: prueba controlada con fecha, plan, versión y resultado.
- **Recomendación editorial**: consejo original; no atribuir a VVD.
- **No confirmado**: evidencia insuficiente.
- **Contradictorio / potencialmente obsoleto**: referencias incompatibles o cambios de producto posteriores.

**Una URL accesible no equivale a haber comprobado todas sus afirmaciones.** Los 35 artículos del centro de ayuda están inventariados; la revisión de esta versión no implica una auditoría frase por frase de toda la documentación ni pruebas de todos los controles.

## Formato mínimo por página

- Nombre en inglés e identificación inequívoca de herramienta.
- Alcance y versión observada cuando sea relevante.
- Fecha de la **fuente** separada de la **fecha de comprobación**.
- Procedimientos solo cuando estén documentados o probados.
- Enlace directo por apartado/afirmación importante.
- Restricciones de plan y disponibilidad, si existen pruebas.
- Contradicciones o vacíos sin ocultar.
- Enlaces internos comprobados.

## Actualizaciones

1. Enumerar categorías de [ayuda](https://vvd.crisp.help/en/) y el [catálogo](https://vvd.crisp.help/en/article/tools-ttd107/).
2. Revisar el [changelog](https://vvd.world/whats-new) desde la revisión anterior.
3. Comparar fuentes actualizadas y registrar la diferencia semántica, no solo la fecha.
4. Realizar commits descriptivos directamente sobre `main`, verificando el estado de la rama y las referencias antes y después de editar (política acordada con el mantenedor).
5. No ejecutar scraping masivo ni reproducir manuales, imágenes o recursos protegidos: [condiciones](https://vvd.world/terms). El índice de enlaces y los resúmenes originales son la base del proyecto.

## Auditoría reproducible

- Inventario inicial: [fuentes](inventario.md) y [JSON](catalogo.json).
- Discrepancias: [auditoría](../auditoria/contradicciones.md).
- Revisión contrastada: [informe](../auditoria/informe-2026-10-25.md).
- Afirmaciones que exigen pruebas adicionales: [preguntas abiertas](../auditoria/preguntas-abiertas.md).
