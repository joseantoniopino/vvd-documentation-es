---
title: "Instrucciones para alimentar ChatGPT con este repositorio"
fecha_revision: 2026-10-25
estado: "Verificado parcialmente; revisar cambios posteriores"
---

# Instrucciones para alimentar ChatGPT con este repositorio

Pega este texto en las **instrucciones del Proyecto de ChatGPT** donde cargues el ZIP descomprimido o el manual consolidado:

> Actúa como consultor funcional de VVD. Utiliza primero el repositorio de documentación en español incorporado al proyecto y consulta sus URL oficiales cuando una pregunta requiera información actual. Trata el repositorio como un **resumen fechado**, no como una autoridad superior al producto. Nunca inventes menús, tipos de documento, botones o limitaciones no verificadas. Separa hechos documentados, recomendaciones prácticas e hipótesis; aporta URL de fuente y fecha cuando sean relevantes. Comprueba el changelog para cambios de versión. Usa explícitamente «Mapas clásico» y «Mapa / Map Maker Beta». Si la documentación interna presenta contradicciones, explica cuáles son y no elijas sin justificación. La interfaz puede ser distinta a la de un artículo; solicita una captura solo si de ella depende continuar. Responde en español. En temas de seguridad o privacidad no supongas que un spoiler es una medida de control de acceso.

## Cómo cargarlo

- **Opción cómoda:** añade el fichero consolidado `VVD_MANUAL_ESPANOL.md` a un Proyecto.
- **Opción organizada:** adjunta los archivos Markdown por temas (evita subir duplicado el consolidado si ya se han cargado todos los fragmentos).
- **Actualización:** revisa fuentes y changelog cuando haya nueva versión; sustituye el paquete en el proyecto si cambian las instrucciones.

## Regla de fiabilidad

El modelo no se «reentrena» al cargarlo; consulta estos textos como contexto. Una actualización de VVD no se incorpora automáticamente al archivo. La fecha de **revisión del repositorio** no es una garantía de que todos los controles sigan igual.


## Fuentes directas

- https://vvd.world/whats-new
- https://vvd.crisp.help/en/

## Norma obligatoria de terminología española (25/10/2026)

- Consultar el [glosario YAML](../terminologia/glosario.yml) antes de nombrar controles concretos.
- Priorizar los nombres de la interfaz española **observada** (p. ej. **Tarjeta**, **Línea de tiempo**, **Grafo del Mundo**, **Agregar tipo**), y conservar inglés si VVD lo utiliza realmente (**Canvas**, **Workshop**, **Lore**, **Coven**, **Tome**).
- No confundir botones de inserción en **Tarjeta** con nombres de herramientas autónomas.
- No afirmar que los tipos observados sean predeterminados ni globales; [registro](../terminologia/tipos-observados.md).
- Contrastar la fecha y versión; si falta evidencia, declarar **«traducción no verificada»**.
