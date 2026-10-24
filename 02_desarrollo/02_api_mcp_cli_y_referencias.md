---
title: "API de plataforma, MCP y CLI"
fecha_revision: 2026-10-25
estado: "Mapa de APIs verificado a alto nivel; referencia de endpoints pendiente"
---

# API de plataforma, MCP y CLI

## Canales documentados

VVD presenta tres interfaces para automatizar mundos: **API REST**, **servidor MCP** y **CLI**. Comparten operaciones y permisos de usuario. El portal sitúa la API en un prefijo `/api/v1`, detalla el servidor MCP y enlaza la descripción OpenAPI. Los roles del mundo restringen también las acciones externas.

En la documentación actual consultada, la lectura/escritura de contenido del mundo desde API/MCP/CLI requiere normalmente planes **Pro o Studio**, mientras que la creación y ejecución de herramientas con el CLI aparece accesible a todos los planes. Esta distinción es fundamental si más adelante automatizas exportaciones de Tabula Mundi o haces conectores propios.

## Operaciones conceptuales

- Gestión de mundos y lectura de metadatos.
- Crear y consultar documentos, tipos y contenido.
- Buscar por mundo.
- Consultar eras y proyectos.
- Administrar autenticación y permisos.

## Seguridad

- No añadir claves de API a archivos del repositorio documental.
- La credencial actúa con los permisos del usuario conectado.
- El desarrollo de apps exige controlar capacidades concedidas a instalaciones de terceros.
- Leer la referencia de autenticación vigente antes de utilizar OAuth, token o API key.

## Cobertura de estas notas

Se han localizado los índices y varias guías, pero **no se ha validado endpoint por endpoint** ni ejecutado operaciones de escritura: los ejemplos que necesiten precisión deben contrastarse contra OpenAPI en el momento de implementación.


## Fuentes directas

- https://docs.beta.vvd.world/docs
- https://docs.beta.vvd.world/docs/quickstart
- https://docs.beta.vvd.world/docs/concepts
- https://docs.beta.vvd.world/docs/authentication
- https://docs.beta.vvd.world/docs/mcp
- https://docs.beta.vvd.world/docs/cli
- https://docs.beta.vvd.world/workshop/reference/commands
