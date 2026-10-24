---
title: "Desarrollo de herramientas: arquitectura y SDK"
fecha_revision: 2026-10-25
estado: "Resumen conceptual; sin auditoría de todas las firmas de API"
---

# Desarrollo de herramientas: arquitectura y SDK

## Alcance

Esta es una **orientación técnica resumida** basada en el portal moderno. No sustituye la referencia de tipos y API del SDK ni pretende reproducir sus tutoriales completos.

### Piezas principales

El portal distingue `World`, `Era`, `Project`, `App`, `Tool`, `Document`, `Block`, `Host`, `Codec`. Una **Tool** declara tipos de documento y proporciona su editor; una **App** ofrece contexto, ruta y espacio propio, y puede componer herramientas. Un **Block** ofrece una cara incrustable en otras superficies.

Los ejemplos utilizan **React/TypeScript** y `@vvd/sdk`. Un proyecto de herramienta usa un manifiesto `vvd.json` y módulos para estructura de datos (`codec`) y renderizado; un codec define tipos de campo y persistencia colaborativa. `useDocument` permite trabajar con datos y mutadores. Las guías de `world data`, `host`, `presence`, `testing`, `external APIs` y `shipping` desarrollan capacidades y límites.

### Flujo general

- Instalar CLI desde el dominio correspondiente a la **versión en uso** (véase alerta de dominios).
- Autenticarse desde el Workshop.
- Generar proyecto y ejecutarlo para desarrollar contra un mundo de prueba.
- Guardar versión privada, compartirla con un mundo y, si procede, solicitar publicación.

### Precaución: versiones de dominio

En la propia documentación técnica se encuentran ejemplos con `https://vvd.world/...` y otros con `https://beta.vvd.world/...`; una referencia técnica advierte que ambos dominios podrían exponer generaciones distintas. **No se ha ejecutado una instalación real ni verificado qué URL corresponde a tu cuenta**, por lo que el repositorio evita dar una orden de instalación no comprobada como si fuese universal.

### Fuentes técnicas clave

- Modelo de objetos y alcance de eras/proyectos.
- Referencia de CLI y SDK.
- Pruebas mediante host simulado.
- Revisión del manifiesto de permisos/capacidades antes de compartir una app.


## Fuentes directas

- https://docs.beta.vvd.world/workshop/guides/mental-model
- https://docs.beta.vvd.world/workshop/tools
- https://docs.beta.vvd.world/workshop/apps
- https://docs.beta.vvd.world/workshop/guides
- https://docs.beta.vvd.world/workshop/reference/commands
- https://docs.beta.vvd.world/workshop/guides/testing
