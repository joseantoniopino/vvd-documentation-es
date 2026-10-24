# VVD — Manual documental en español

**Revisión:** 2026-10-25. **Cobertura:** 35 artículos de ayuda pública + changelog + índice de documentación técnica.

**Advertencia:** síntesis independiente, no reproducción íntegra; contrastar cambios posteriores y casos no documentados.

## Índice

- [00_fuentes/inventario.md](#00-fuentes-inventario)
- [01_manual/01_conceptos_y_navegacion.md](#01-manual-01-conceptos-y-navegacion)
- [01_manual/02_fichas_tipos_propiedades_y_enlaces.md](#01-manual-02-fichas-tipos-propiedades-y-enlaces)
- [01_manual/03_maps_clasico.md](#01-manual-03-maps-clasico)
- [01_manual/04_map_maker_beta.md](#01-manual-04-map-maker-beta)
- [01_manual/05_multimedia_canvas_herramientas.md](#01-manual-05-multimedia-canvas-herramientas)
- [01_manual/06_arboles_cronologias_grafos.md](#01-manual-06-arboles-cronologias-grafos)
- [01_manual/07_quill.md](#01-manual-07-quill)
- [01_manual/08_wikis_publicacion_permisos.md](#01-manual-08-wikis-publicacion-permisos)
- [01_manual/09_guardado_importacion_configuracion.md](#01-manual-09-guardado-importacion-configuracion)
- [01_manual/10_flujo_director_de_juego.md](#01-manual-10-flujo-director-de-juego)
- [02_desarrollo/01_modelo_sdk_workshop.md](#02-desarrollo-01-modelo-sdk-workshop)
- [02_desarrollo/02_api_mcp_cli_y_referencias.md](#02-desarrollo-02-api-mcp-cli-y-referencias)
- [03_auditoria/01_errores_contradicciones_y_desfases.md](#03-auditoria-01-errores-contradicciones-y-desfases)
- [03_auditoria/02_cambios_relevantes_2026.md](#03-auditoria-02-cambios-relevantes-2026)
- [03_auditoria/03_preguntas_pendientes.md](#03-auditoria-03-preguntas-pendientes)
- [04_uso/instrucciones_para_chatgpt.md](#04-uso-instrucciones-para-chatgpt)
- [README.md](#readme)


---

<a id="00-fuentes-inventario"></a>

<!-- Origen: 00_fuentes/inventario.md -->

# Inventario de fuentes oficiales

**Revisión:** 2026-10-25. **Cobertura:** 35/35 artículos listados en las cuatro categorías del centro de ayuda, más índice técnico y changelog.

La fecha de actualización indicada es la que figura en el propio artículo, no la de este fichero. Revisar los cambios recientes en el changelog antes de usar instrucciones antiguas.

## General

| Documento | Actualizado por VVD | Tema |
|---|---|---|
| [Visión general](https://vvd.crisp.help/en/article/vvd-overview-wy5lsa/) | 2026-09-01 | Mundos, fichas, herramientas, wiki y Quill. |
| [Inteligencia artificial](https://vvd.crisp.help/en/article/ai-1e261u7/) | 2026-09-11 | Política de IA, plantillas guiadas y detección de entidades. |
| [Suscripciones y pagos](https://vvd.crisp.help/en/article/subscriptions-and-payment-methods-1i9x5yg/) | 2026-09-08 | Planes, legado, cancelación y límites; algunos datos contradictorios. |
| [Privacidad y autoría](https://vvd.crisp.help/en/article/content-privacy-ownership-1ohe258/) | 2026-06-11 | Privacidad predeterminada, propiedad del contenido e imágenes ajenas. |
| [Acceso y dispositivos](https://vvd.crisp.help/en/article/access-m2mlw2/) | 2026-08-20 | Web y aplicaciones; parcialmente superado por novedades de septiembre. |
| [Colaboración](https://vvd.crisp.help/en/article/collaboration-1g9q82f/) | 2026-07-15 | Invitaciones y roles; cifras de plazas por verificar. |
| [Guardado](https://vvd.crisp.help/en/article/saving-1ceh8lh/) | 2026-07-28 | Autoguardado, revisiones y papelera. |
| [Funciones futuras](https://vvd.crisp.help/en/article/future-features-2m583k/) | 2026-08-20 | Hoja de ruta informal; no tomar la lista como situación actual. |
| [Configuración de cuenta](https://vvd.crisp.help/en/article/account-settings-1fp4wab/) | 2026-06-11 | Identidad, acceso, idioma y suscripción. |
| [Radio](https://vvd.crisp.help/en/article/radio-d7sayv/) | 2026-07-23 | Emisoras ambientales del espacio de trabajo. |
| [Comunidad](https://vvd.crisp.help/en/article/community-1ig1hqb/) | 2026-06-11 | Canales comunitarios y ayuda externa. |

## Creación

| Documento | Actualizado por VVD | Tema |
|---|---|---|
| [Fichas](https://vvd.crisp.help/en/article/cards-62i16j/) | 2026-08-20 | Crear, clasificar y editar fichas, bloques y alias. |
| [Enlaces y grafo](https://vvd.crisp.help/en/article/connections-the-graph-eir68m/) | 2026-06-01 | Enlaces entre fichas y grafo de relaciones. |
| [Propiedades](https://vvd.crisp.help/en/article/properties-umr3at/) | 2026-07-03 | Campos textuales y referencias entre fichas. |
| [Biblioteca multimedia](https://vvd.crisp.help/en/article/media-gallery-w1fuka/) | 2026-04-15 | Subida y reutilización de imágenes. |
| [Quill: introducción](https://vvd.crisp.help/en/article/quill-overview-jpl3u0/) | 2026-07-13 | Historias, capítulos, enlace con el mundo y publicación. |
| [Quill: panel lateral](https://vvd.crisp.help/en/article/quill-side-panel-kwwch0/) | 2026-08-20 | Notas, panel personalizable y apariencia en escritura; en progreso. |
| [Quill: capítulos y borradores](https://vvd.crisp.help/en/article/chapters-and-drafts-qoqr7j/) | 2026-08-20 | Capítulos y borradores, vista conjunta; en progreso. |
| [Campañas](https://vvd.crisp.help/en/article/campaigns-yuokro/) | 2026-04-15 | Herramienta antigua de campañas no disponible en la versión corriente. |
| [Catálogo de herramientas](https://vvd.crisp.help/en/article/tools-ttd107/) | 2026-09-01 | Explorar, instalar, Workshop y herramientas de terceros. |
| [Árboles de relaciones](https://vvd.crisp.help/en/article/relation-trees-1v7xebv/) | 2026-08-20 | Nodos, vínculos, variantes y personalización. |
| [Maps clásico](https://vvd.crisp.help/en/article/maps-akxl85/) | 2026-08-20 | Imagen base, marcadores, zonas, capas y etiquetas. |
| [Cronologías](https://vvd.crisp.help/en/article/timelines-1ky9csp/) | 2026-08-20 | Calendarios y eventos en cronologías; indicación beta. |
| [Canvas](https://vvd.crisp.help/en/article/canvas-13svpxt/) | 2026-08-20 | Tableros, imágenes, grupos y dibujo libre. |

## Compartir

| Documento | Actualizado por VVD | Tema |
|---|---|---|
| [Wiki y compartición](https://vvd.crisp.help/en/article/wiki-sharing-8dla6g/) | 2026-08-20 | Privacidad, publicación, spoilers y permisos. |
| [Personalización de wiki](https://vvd.crisp.help/en/article/wiki-customization-j9wee1/) | 2026-08-20 | Temas, tipografías, páginas y organización. |
| [Dominios personalizados](https://vvd.crisp.help/en/article/custom-domains-5w62jl/) | 2026-08-20 | Dominio propio para mundos con plan compatible. |
| [Diseños de wiki](https://vvd.crisp.help/en/article/wiki-layouts-1vowkbx/) | 2026-08-20 | Plantillas Default/Traditional: lista antigua. |
| [Publicación en Quill](https://vvd.crisp.help/en/article/quill-publishing-5m51zu/) | 2026-07-13 | Publicar y exportar libros; en progreso. |
| [Estilos de publicación en Quill](https://vvd.crisp.help/en/article/publish-side-styling-p4vl90/) | 2026-07-13 | Portada, tipografía y capítulo; en progreso. |

## Configuración

| Documento | Actualizado por VVD | Tema |
|---|---|---|
| [Información del mundo](https://vvd.crisp.help/en/article/world-info-gmmftq/) | 2026-09-01 | Panel de mundo, tipos, medios, temas, archivo. |
| [Tipos y plantillas](https://vvd.crisp.help/en/article/card-types-templates-44at3z/) | 2026-09-21 | Tipos, subtipos, propiedades y bloques iniciales. |
| [Importar y exportar](https://vvd.crisp.help/en/article/import-export-15oat5e/) | 2026-08-20 | ZIP, Markdown/JSON y medios; importación beta. |
| [Mundos](https://vvd.crisp.help/en/article/worlds-r5vlq4/) | 2026-06-11 | Crear y gestionar mundos; cuotas conflictivas. |
| [Temas y accesibilidad](https://vvd.crisp.help/en/article/themes-dt48jy/) | 2026-09-01 | Tema del mundo, desenfoque, contraste y tipografías. |

## Fuentes complementarias

- [Cambios oficiales](https://vvd.world/whats-new) (última entrada encontrada: 1 de octubre de 2026).
- [Maps clásico, catálogo](https://vvd.world/t/maps).
- [Portal para desarrolladores](https://docs.beta.vvd.world/).

## Documentación técnica localizada

La enumeración siguiente registra rutas oficiales encontradas, pero no equivale a un examen exhaustivo de todo su contenido.

- [Portada de desarrollo](https://docs.beta.vvd.world/)
- [API: introducción](https://docs.beta.vvd.world/docs)
- [API: primeros pasos](https://docs.beta.vvd.world/docs/quickstart)
- [API: conceptos](https://docs.beta.vvd.world/docs/concepts)
- [API: autenticación](https://docs.beta.vvd.world/docs/authentication)
- [API: MCP](https://docs.beta.vvd.world/docs/mcp)
- [API: CLI](https://docs.beta.vvd.world/docs/cli)
- [CLI de desarrollo](https://docs.beta.vvd.world/workshop/getting-started)
- [Kits de inicio](https://docs.beta.vvd.world/workshop/starter-kits)
- [Herramientas: arquitectura](https://docs.beta.vvd.world/workshop/tools)
- [Apps: arquitectura](https://docs.beta.vvd.world/workshop/apps)
- [Wikis: arquitectura](https://docs.beta.vvd.world/workshop/wiki)
- [Guías técnicas: índice](https://docs.beta.vvd.world/workshop/guides)
- [Guía: modelo mental](https://docs.beta.vvd.world/workshop/guides/mental-model)
- [Guía: estructura de proyectos](https://docs.beta.vvd.world/workshop/guides/project-anatomy)
- [Guía: almacenamiento](https://docs.beta.vvd.world/workshop/guides/storing-data)
- [Guía: lectura y cambios](https://docs.beta.vvd.world/workshop/guides/retrieving-data)
- [Guía: datos de mundo](https://docs.beta.vvd.world/workshop/guides/world-data)
- [Guía: presencia](https://docs.beta.vvd.world/workshop/guides/presence)
- [Guía: host](https://docs.beta.vvd.world/workshop/guides/the-host)
- [Guía: APIs externas](https://docs.beta.vvd.world/workshop/guides/external-apis)
- [Guía: pruebas](https://docs.beta.vvd.world/workshop/guides/testing)
- [Guía: publicar](https://docs.beta.vvd.world/workshop/guides/shipping)
- [Referencia técnica: índice](https://docs.beta.vvd.world/workshop/reference)
- [Referencia: comandos](https://docs.beta.vvd.world/workshop/reference/commands)
- [Referencia: apps](https://docs.beta.vvd.world/workshop/reference/apps)

## Limitaciones del inventario

- Solo páginas públicas enlazadas desde el centro de ayuda y ramas técnicas localizadas. Las herramientas de terceros y las guías accesibles solo tras iniciar sesión no están auditadas.
- La documentación cambia de versión y puede no reflejar la interfaz en español.
- No se ha copiado ni traducido íntegramente documentación ajena: este repositorio es un manual original resumido, con referencias a la fuente.


## Fuentes directas

- https://vvd.crisp.help/en/
- https://vvd.world/whats-new
- https://docs.beta.vvd.world/


---

<a id="01-manual-01-conceptos-y-navegacion"></a>

<!-- Origen: 01_manual/01_conceptos_y_navegacion.md -->

# Estructura y navegación de VVD

## Jerarquía de trabajo

VVD organiza el contenido dentro de **mundos**: un mundo funciona como espacio de proyecto y puede representar un universo completo, no solamente un planeta. Dentro de él conviven **fichas** (Cards) y otros **documentos** elaborados mediante herramientas: mapas, cronologías, árboles, lienzos y documentos personalizados.

La **ficha** es la unidad preferente para información persistente: personajes, lugares, facciones, escenas, objetos o acontecimientos. El usuario puede enlazar fichas entre sí y desde ciertos marcadores del mapa. El **documento** no es sinónimo de ficha: un mapa es también un documento, pero de otro tipo.

## Entorno de trabajo

- El icono de VVD abre la navegación general y los mundos disponibles.
- El nombre del mundo y su menú cercano abren sus opciones: información, tipos, biblioteca multimedia, colaboración, aspecto, importación/exportación y archivo.
- La barra lateral del editor reúne fichas, carpetas y otros documentos.
- En la sección de herramientas se pueden explorar, instalar y quitar herramientas. Quitar una herramienta del mundo **no equivale** a borrar los documentos ya creados con ella.
- Un panel puede presentar varios documentos simultáneamente; algunas rutas y etiquetas varían con la versión.

## Nombres que conviene distinguir

| Nombre | Función |
|---|---|
| Mundo | Espacio que agrupa contenido y colaboradores |
| Ficha / Card | Unidad de conocimiento enlazable |
| Documento | Objeto editable: ficha, mapa, timeline, etc. |
| Herramienta | Editor o componente que crea un tipo de documento |
| Bloque | Contenido incrustado dentro de otro documento |
| Wiki | Vista publicada y navegable de material seleccionado |
| Quill | Entorno especializado en escritura de historias |

## Precaución de versiones

Las explicaciones de 2026 sobre navegación mezclan nombres de varias iteraciones de la interfaz. Para instrucciones de botones, contrastar con capturas actuales. Los conceptos anteriores son más estables que la localización exacta de cada control.


## Fuentes directas

- https://vvd.crisp.help/en/article/vvd-overview-wy5lsa/
- https://vvd.crisp.help/en/article/world-info-gmmftq/
- https://vvd.crisp.help/en/article/tools-ttd107/


---

<a id="01-manual-02-fichas-tipos-propiedades-y-enlaces"></a>

<!-- Origen: 01_manual/02_fichas_tipos_propiedades_y_enlaces.md -->

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


---

<a id="01-manual-03-maps-clasico"></a>

<!-- Origen: 01_manual/03_maps_clasico.md -->

# Maps clásico: mapas interactivos sobre imágenes

## Para qué sirve

**Maps / Mapas clásico** parte de una imagen preexistente (mapa de mundo, región, ciudad, edificio o mazmorra) y permite convertirla en una superficie interactiva. La ficha del catálogo menciona expresamente las mazmorras. Es la elección inicial más sencilla para un plano ya dibujado.

## Capacidades documentadas

- Incorporar una **imagen base** desde la biblioteca multimedia o mediante importación.
- Añadir **marcadores/pins** vinculados a fichas; la guía cita hacer clic derecho o arrastrar fichas desde la barra lateral.
- Crear **zonas** mediante vértices sobre la imagen, con un contorno configurable, y asociarlas a fichas.
- Añadir **etiquetas de texto**.
- Organizar elementos en **capas** y cambiar su visibilidad/disposición.
- Incrustar un mapa ya creado en una ficha como bloque.
- Asociar mapas entre sí mediante marcadores o zonas (descrito en las novedades de 2026).

## Cómo crear un mapa de mazmorra

1. Localiza la herramienta **Mapas**, icono de mapa plegado; no confundir con **Mapa / Map Maker Beta**.
2. Crea un documento con un nombre como `La Cripta`.
3. Selecciona el plano como **imagen base** y comprueba que aparece nítido.
4. Crea una ficha por habitación relevante y asocia un marcador o zona a la ficha.
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


---

<a id="01-manual-04-map-maker-beta"></a>

<!-- Origen: 01_manual/04_map_maker_beta.md -->

# Mapa / Map Maker Beta: terreno y geografía

## Disponibilidad

La nota oficial del **1 de octubre de 2026** anuncia que **Map Maker** pasa a estar disponible para todos en **beta** y que los mapas existentes continúan funcionando como mapas clásicos. El nuevo editor aparece en algunas interfaces en español simplemente como **«Mapa»**; en cambio, el clásico aparece como «Mapas». Esta distinción concuerda con las capturas aportadas, aunque los nombres podrían cambiar.

## Capacidades confirmadas en el changelog

- Pintar superficies terrestres, cauces y caminos.
- Trabajar a escalas geográficas desde islas hasta continentes.
- Calcular tiempos de desplazamiento en 2D y 3D.
- Partir de una imagen cartográfica para obtener una representación tridimensional.

## Qué herramienta elegir

| Trabajo | Primera opción |
|---|---|
| Plano de dungeon ya dibujado con salas y POI | **Mapas clásico** |
| Identificar regiones o ciudades en ilustración existente | **Mapas clásico** |
| Crear paisaje desde cero, ríos y caminos | **Mapa / Map Maker Beta** |
| Representar una ruta de viaje geográfica | **Mapa / Map Maker Beta** |

La tabla es una **recomendación editorial** basada en la función de cada herramienta, no una limitación formal: hay usos que se solapan.

## Información que todavía no está documentada suficientemente

No se ha localizado una guía pública exhaustiva de la interfaz nueva, con todos sus controles, formatos de capa, escala exacta, persistencia, exportación y limitaciones de beta. Tampoco se han probado personalmente todas las funciones en una cuenta. Para esos aspectos hay que consultar el tutorial integrado y pedir confirmación al equipo de VVD.


## Fuentes directas

- https://vvd.world/whats-new
- https://vvd.world/t/maps


---

<a id="01-manual-05-multimedia-canvas-herramientas"></a>

<!-- Origen: 01_manual/05_multimedia_canvas_herramientas.md -->

# Biblioteca multimedia, Canvas y catálogo de herramientas

## Biblioteca de medios

La biblioteca reúne imágenes públicas y subidas por el usuario para su utilización en fichas y mapas. El centro de ayuda permite identificar qué contenidos están en uso y filtrar por etiquetas. La actualización del 13/09/2026 añade búsqueda semántica por contenido visual. La novedad de junio amplió la búsqueda por nombre a toda la colección.

**Licencias:** la documentación diferencia las obras propias y las imágenes del catálogo público; que una imagen se pueda usar dentro de VVD no significa que se pueda descargar y reutilizar en otros proyectos. Consulta siempre los permisos de la fuente original, sobre todo si piensas publicar un módulo de rol.

## Canvas

Canvas es un lienzo libre para diagramas, tableros de inspiración, mapas mentales y bocetos. Acepta fichas, imágenes, texto, secciones, grupos y dibujo. No se debe confundir con el editor de mapas, aunque ambos representen información visualmente.

## Herramientas y Workshop

El catálogo separa **Explorar** (buscar aplicaciones/herramientas y probarlas), **Biblioteca** (las instaladas en un mundo) y **Workshop** (desarrollo con SDK). VVD también permite herramientas creadas por terceros. Su documentación y sus versiones pueden ser independientes de VVD.

### Herramientas enumeradas oficialmente

El artículo de septiembre incluye Canvas, Notes, Conversation, Maps, Relation Trees, hojas y bloques de personaje para D&D 5e, Call of Cthulhu y Daggerheart, visor 3D, Radar Chart, Embed y Tables. **No es una lista completa ni garantiza que todas sigan disponibles con el mismo nombre:** el artículo reconoce que faltan guías y que existen herramientas comunitarias.


## Fuentes directas

- https://vvd.crisp.help/en/article/media-gallery-w1fuka/
- https://vvd.crisp.help/en/article/canvas-13svpxt/
- https://vvd.crisp.help/en/article/tools-ttd107/
- https://vvd.crisp.help/en/article/content-privacy-ownership-1ohe258/
- https://vvd.world/whats-new


---

<a id="01-manual-06-arboles-cronologias-grafos"></a>

<!-- Origen: 01_manual/06_arboles_cronologias_grafos.md -->

# Árboles, cronologías y grafo

## Árboles de relaciones

Permiten organizar nodos conectados y enlazarlos con fichas. Admiten nodos no enlazados, conexiones editables, relaciones tipadas y variantes para representar estados diferentes. Pueden emplearse para genealogía, estructura militar, corporativa o política. La actualización del 20/09/2026 añade plantillas temáticas (familiar, corporativa, militar, corte real y blanco) y nuevos controles.

**Importante:** las conexiones dibujadas en el árbol no se vuelcan necesariamente al grafo de fichas. Son mecanismos independientes.

## Cronologías

La herramienta de líneas temporales diferencia **periodos** (intervalos) y **eventos** (fechas concretas). El calendario puede ser terrestre, genérico o personalizado; se documentan controles de duración del día, meses, denominaciones y rangos de años. Los eventos pueden enlazarse a fichas y tener imagen y descripción. Actualizaciones de septiembre amplían la asociación de varias fichas por evento.

## Grafo del mundo

Refleja las conexiones creadas en las fichas por enlaces de texto y propiedades. Sirve para detectar personajes, lugares o facciones con muchas relaciones. No sustituye al árbol cuando se requieren líneas jerárquicas de parentesco o mando.

## Para dirigir una campaña

Recomendación editorial: cronologías para la historia del escenario, grafo para relaciones del canon y árboles para estructuras jerárquicas. Mantener el contenido narrativo principal en fichas, para que los editores visuales lo referencien.


## Fuentes directas

- https://vvd.crisp.help/en/article/relation-trees-1v7xebv/
- https://vvd.crisp.help/en/article/timelines-1ky9csp/
- https://vvd.crisp.help/en/article/connections-the-graph-eir68m/
- https://vvd.world/whats-new


---

<a id="01-manual-07-quill"></a>

<!-- Origen: 01_manual/07_quill.md -->

# Quill: escritura y publicación de historias

Quill está pensado para escribir narraciones estructuradas en **historias, capítulos y borradores**. Se integra con fichas y documentos del mundo: permite consultar material de worldbuilding sin salir del espacio de escritura, detectar entidades y enlazar referencias. El panel lateral reúne notas y vistas de documentos; algunos textos del centro de ayuda están marcados expresamente «work in progress».

## Escritura y organización

Cada capítulo admite varios borradores; la guía documenta navegación lateral y opciones de edición y organización. Quill incluye historial de revisiones y modo de concentración. Las notas pueden quedar vinculadas a fragmentos o capítulos.

## Publicación y exportación

En el modo de publicación se configura la presentación y qué capítulos se comparten. La guía antigua documenta **EPUB, PDF y DOCX**. Los cambios del **1/10/2026** amplían la maquetación: sangrías, capitulares, versalitas, ornamentos y exportaciones con características de libro impreso.

## Límites de versión

El artículo de julio presenta condiciones de Early Access y niveles de suscripción; los cambios de septiembre permitieron escribir una historia con un capítulo en el plan gratuito. Para límites actuales, consultar la página comercial y la cuenta, no la guía antigua.


## Fuentes directas

- https://vvd.crisp.help/en/article/quill-overview-jpl3u0/
- https://vvd.crisp.help/en/article/quill-side-panel-kwwch0/
- https://vvd.crisp.help/en/article/chapters-and-drafts-qoqr7j/
- https://vvd.crisp.help/en/article/quill-publishing-5m51zu/
- https://vvd.crisp.help/en/article/publish-side-styling-p4vl90/
- https://vvd.world/whats-new


---

<a id="01-manual-08-wikis-publicacion-permisos"></a>

<!-- Origen: 01_manual/08_wikis_publicacion_permisos.md -->

# Wikis, publicación, permisos y spoilers

## Diferenciar colaboración y publicación

**Colaboradores**: personas a las que se da acceso al mundo de edición según roles (administrador, editor o lector). **Wiki**: presentación seleccionada del material para lectores externos; se pueden omitir fichas y fragmentos que no deban compartirse. Tener acceso de colaboración al mundo puede dar acceso a material que se oculta de la wiki: no sustituir ocultación de secretos por un mero cambio de plantilla.

## Tipos de visibilidad indicados en la guía

- Privada: acceso restringido al propietario y, según ajustes, colaboradores.
- No listada: accesible con enlace, opcionalmente protegida por contraseña.
- Pública: accesible a personas que la encuentren según configuración y plan.

La guía también documenta opciones de ocultar texto de la wiki, ocultar bloques y marcar texto como spoiler para que se revele bajo acción del lector. **Spoiler visible tras pulsación no equivale a confidencialidad**, por lo que nunca debe contener secretos que no puedan llegar al jugador.

## Diseño y cambios recientes

Los artículos de agosto describen los diseños Default y Traditional y elección de páginas, tipos y orden. **Están desfasados como catálogo de plantillas**, porque el changelog incorpora posteriormente Overworld, Terminal y Shell. Overworld navega por mapas y sus pines, incluidos enlaces a otros mapas.

## Publicación y republicación

La guía de agosto dice que publicar no hace aparecer automáticamente todas las modificaciones: requiere republicar. Una actualización de julio indica que el contenido republicado se muestra inmediatamente, pero eso no implica que exista publicación automática. Comprobar la vista de lector en cada modificación importante.

## Dominios personalizados

Se documenta la conexión de dominio propio para planes compatibles en el apartado Site & Domain. El estado concreto depende de tu plan y de posibles modificaciones posteriores.


## Fuentes directas

- https://vvd.crisp.help/en/article/wiki-sharing-8dla6g/
- https://vvd.crisp.help/en/article/wiki-customization-j9wee1/
- https://vvd.crisp.help/en/article/custom-domains-5w62jl/
- https://vvd.crisp.help/en/article/wiki-layouts-1vowkbx/
- https://vvd.crisp.help/en/article/collaboration-1g9q82f/
- https://vvd.world/whats-new


---

<a id="01-manual-09-guardado-importacion-configuracion"></a>

<!-- Origen: 01_manual/09_guardado_importacion_configuracion.md -->

# Guardado, importación, exportación, temas y configuración

## Guardado y recuperación

La plataforma guarda cambios automáticamente. La guía de julio de 2026 indica que existen revisiones por documento y un Archivo donde recuperar elementos borrados. También puede haber opciones de eliminación permanente, que no deben utilizarse como mecanismo ordinario de limpieza. Desde septiembre, VVD anuncia continuidad de edición ante pérdidas temporales de conexión, sin que ello garantice uso sin red en todos los clientes.

## Importar y exportar

La exportación del mundo se documenta como ZIP con escritura en **Markdown** y datos **JSON**, opcionalmente con medios; la exportación individual depende del tipo de documento. El asistente de importación está en beta y, según cambios de septiembre, acepta contenido procedente de Obsidian, Notion, Google Docs, World Anvil y Word con revisión previa de la estructura propuesta. **No dar por hecho que todos los bloques/herramientas se exportan con fidelidad completa.** Verificar el ZIP y conservar copia externa.

## Aspecto y accesibilidad

El apartado de temas permite modificar colores, fuentes, imágenes del entorno y opciones de transparencia. La documentación menciona un modo de rendimiento que desactiva desenfoques y transparencias generales de la interfaz. **No está verificado** que controle el fondo desenfocado específico de Maps Classic; son conceptos distintos que conviene probar sin sustituir el mapa principal. Una novedad de septiembre añade varios tamaños globales de letra.

## Cuenta y planes

La cuenta permite gestionar nombre, correo, acceso, idioma y pago. Las guías de 2026 ofrecen cantidades divergentes de mundos y colaboradores; no confiar en cifras aisladas de este repositorio. Consultar condiciones actuales de la cuenta y precios vigentes.

## Derechos de imágenes

Las páginas oficiales distinguen propiedad de tu contenido y autorización para usar material de terceros. Una imagen disponible para worldbuilding dentro de VVD no implica permiso para redistribución exterior.


## Fuentes directas

- https://vvd.crisp.help/en/article/saving-1ceh8lh/
- https://vvd.crisp.help/en/article/import-export-15oat5e/
- https://vvd.crisp.help/en/article/themes-dt48jy/
- https://vvd.crisp.help/en/article/account-settings-1fp4wab/
- https://vvd.crisp.help/en/article/subscriptions-and-payment-methods-1i9x5yg/
- https://vvd.crisp.help/en/article/access-m2mlw2/
- https://vvd.world/whats-new


---

<a id="01-manual-10-flujo-director-de-juego"></a>

<!-- Origen: 01_manual/10_flujo_director_de_juego.md -->

# Flujo recomendado para un director de juego

**Esta sección es una metodología propuesta, no un tutorial oficial.** Se basa en funcionalidades documentadas y está enfocada en una mazmorra OSR como «La Cripta» de Asvondor.

## Preparación mínima y reversible

1. Crear un mundo para el escenario, sin rediseñar todo el sistema de tipos.
2. Elegir **Mapas clásico** si ya existe un plano de mazmorra dibujado. Evitar Map Maker Beta para la primera importación si no necesitas geografía ni rutas.
3. Añadir el plano a la biblioteca; comprobarlo en un documento de prueba.
4. Crear una ficha `Sala 01 — Entrada` con la información que necesitas al dirigir. Estructura propuesta: `Descripción visible`, `Elementos interactivos`, `Encuentro`, `Secreto`, `Consecuencias`, `Referencias`.
5. Crear un marcador sobre la sala y enlazar la ficha desde el mapa. Probar que abre correctamente antes de repetir el proceso.
6. Duplicar la estructura en los demás recintos: salas 2A–2D, 3–12, etc., sin asumir que todos deban tener ficha propia.
7. Separar información pública y notas del director. **No compartir una wiki o acceso de colaboración sin comprobar que las notas secretas permanecen ocultas.**
8. Hacer una exportación y verificar el contenido antes de invertir horas en introducir más material.

## Escalar después

Solo cuando el núcleo mapa → marcador → ficha funcione con fluidez: añadir relaciones entre PNJ y facciones, cronologías, mapas de regiones, esquemas de sectores y publicación de la wiki de jugadores.

## Prueba de aceptación

La plataforma te sirve si puedes: (a) localizar una habitación en segundos, (b) abrir su descripción con un clic, (c) mantener ocultos secretos al publicar y (d) exportar el texto sin pérdidas significativas. Si alguno de esos cuatro puntos falla, documenta el bloqueo antes de renovar la suscripción.


## Fuentes directas

- https://vvd.crisp.help/en/article/maps-akxl85/
- https://vvd.crisp.help/en/article/cards-62i16j/
- https://vvd.crisp.help/en/article/wiki-sharing-8dla6g/
- https://vvd.crisp.help/en/article/import-export-15oat5e/
- https://vvd.world/whats-new


---

<a id="02-desarrollo-01-modelo-sdk-workshop"></a>

<!-- Origen: 02_desarrollo/01_modelo_sdk_workshop.md -->

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


---

<a id="02-desarrollo-02-api-mcp-cli-y-referencias"></a>

<!-- Origen: 02_desarrollo/02_api_mcp_cli_y_referencias.md -->

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


---

<a id="03-auditoria-01-errores-contradicciones-y-desfases"></a>

<!-- Origen: 03_auditoria/01_errores_contradicciones_y_desfases.md -->

# Auditoría de contradicciones y obsolescencia

**Regla de auditoría:** cuando dos textos oficiales discrepan, no elegir arbitrariamente el que parece más conveniente. Dar prioridad provisional al anuncio más reciente y verificar detalles concretos en la interfaz actual o con soporte.

| Tema | Evidencia de conflicto | Decisión segura |
|---|---|---|
| Crear mapas desde cero | La guía clásica de Maps (20/08) afirma que VVD no genera mapas; el changelog del 01/10 anuncia Map Maker | Diferenciar **Maps Classic** de **Map Maker Beta** |
| Cuota de mundos Hobbyist | Mundo (11/06) habla de **3**; Suscripciones (08/09) indica **2** | Cifra indeterminada para una cuenta concreta; consultar panel de plan |
| Cupo de colaboradores | Colaboración (15/07) usa «tantos como quieras» para Pro; Suscripciones (08/09) indica **3** | Consultar límites de plan actuales y condiciones Legacy |
| App Android | Acceso (20/08) dice pendiente de Play Store; novedades del 20/09 anuncian distribución en Play Store | Dar prioridad a actualización reciente |
| Modo sin conexión | Acceso (20/08) dice que apps no tienen uso offline; novedades del 06/09 anuncian retención de cambios ante desconexión | No equiparar «tolerar desconexiones» a «funcionar offline completo» |
| Diseños de wiki | Guía de agosto enumera Default y Traditional; changelog incorpora Overworld, Terminal y Shell | La lista antigua no es exhaustiva |
| Plan gratuito de Quill | Guía de julio se centra en acceso de pago; novedades del 20/09 permiten una historia y un capítulo gratuitos | Verificar límites vigentes en precios/plan |
| Dominio CLI/SDK | Portal API y portal Workshop muestran ejemplos `vvd.world` y `beta.vvd.world` | No ejecutar scripts de instalación sin confirmar entorno |
| Fondo de Maps clásico | Documento oficial explica sustituir imagen base pero no el fondo decorativo desenfocado | **No afirmar** que existe una opción de personalización separada |
| Campañas | Guía de abril describe herramienta indisponible fuera de legacy | Confirmar vigencia en la herramienta actual antes de recomendar |

## Términos inestables

La interfaz traducida puede llamar «Mapa» a Map Maker y «Mapas» a Classic; conservar entre paréntesis el nombre inglés y el icono/contexto. Los artículos pueden describir menús con nombres antiguos. Las herramientas comunitarias no siguen necesariamente el calendario del producto principal.


## Fuentes directas

- https://vvd.crisp.help/en/article/maps-akxl85/
- https://vvd.crisp.help/en/article/worlds-r5vlq4/
- https://vvd.crisp.help/en/article/subscriptions-and-payment-methods-1i9x5yg/
- https://vvd.crisp.help/en/article/collaboration-1g9q82f/
- https://vvd.crisp.help/en/article/access-m2mlw2/
- https://vvd.crisp.help/en/article/wiki-layouts-1vowkbx/
- https://vvd.crisp.help/en/article/campaigns-yuokro/
- https://vvd.world/whats-new
- https://docs.beta.vvd.world/docs/cli
- https://docs.beta.vvd.world/workshop/getting-started


---

<a id="03-auditoria-02-cambios-relevantes-2026"></a>

<!-- Origen: 03_auditoria/02_cambios_relevantes_2026.md -->

# Cronología contrastada de cambios relevantes

**Fuente primaria:** el registro oficial de novedades, cuya cabecera indica actualización al **1 de octubre de 2026**. Esta selección se centra en worldbuilding, mapas y herramientas; no reproduce todo el historial del producto.

| Fecha | Novedad relevante |
|---|---|
| 01/10/2026 | **Map Maker Beta** abierto a todos; continuidad de mapas clásicos. Enlazar fichas a eventos de cronología y mejoras Quill, publicación y editor de bloques. |
| 27/09/2026 | Mejora de exportación de libros, notas de voz con transcripción, carga de mundos, búsqueda de bloques y controles de medios. |
| 20/09/2026 | Comentarios en herramientas, recorridos guiados, plantillas de árbol, Quill gratuito limitado, paquete de iconos y app Android en Play Store. |
| 14/09/2026 | Tamaños de texto y de pestañas, organización de carpetas e importación mejorada. |
| 13/09/2026 | Diccionario, tablas en textos, importación beta desde sistemas externos y búsqueda visual en medios. |
| 06/09/2026 | Continuidad de edición ante interrupciones de conexión y ajustes de visibilidad/publicación. |
| 2026, fechas anteriores | Overworld, pines agrupados, enlace entre mapas, variantes de árboles, cronologías e importantes mejoras del editor. Consultar el historial original para fechas y detalle exactos. |

## Política de actualización

Antes de responder una duda dependiente de versión:
1. Mirar la última entrada y la fecha de actualización del changelog.
2. Comparar contra fecha del artículo específico.
3. Distinguir **anuncio de disponibilidad** de manual completo.
4. Registrar dudas no resueltas y pedir captura/confirmación de soporte cuando sea imprescindible.


## Fuentes directas

- https://vvd.world/whats-new


---

<a id="03-auditoria-03-preguntas-pendientes"></a>

<!-- Origen: 03_auditoria/03_preguntas_pendientes.md -->

# Preguntas abiertas que no deben responderse por suposición

1. ¿Se puede cambiar el **desenfoque exterior** de Maps clásico sin modificar el mapa base? **No localizado** en la documentación pública.
2. ¿Qué estado exacto de capas se transmite a una wiki de jugadores y cómo se ocultan pines sensibles? **No verificado** completamente.
3. ¿El nuevo Map Maker admite capas de terreno con restricciones específicas para interiores? **Sin guía pública exhaustiva**.
4. ¿Se conservan perfectamente medios, marcadores, capas y bloques en todas las modalidades de exportación? **Sin prueba funcional**.
5. ¿Cuáles son los límites efectivos de mundos, medios y colaboradores para una suscripción Legacy comprada antes del 20/08/2026? **Dependientes de cuenta y contrato**.
6. ¿El origen de las imágenes rotas al cargarlas desde Maps está resuelto? **No hay diagnóstico técnico confirmando causa**.
7. ¿Existen manuales recientes exclusivos de la aplicación autenticada y del tutorial interactivo? **No inspeccionados con acceso de usuario**.
8. ¿Cómo difieren todos los formatos de bloques que producen las herramientas de terceros? **Fuera del alcance del centro de ayuda público**.

Al responder consultas sobre estos puntos, preferir «no documentado / no confirmado» antes que inventar pasos. Cuando se obtenga una respuesta oficial, agregar URL, fecha y contexto de versión.


## Fuentes directas

- https://vvd.crisp.help/en/article/maps-akxl85/
- https://vvd.crisp.help/en/article/subscriptions-and-payment-methods-1i9x5yg/
- https://vvd.world/whats-new


---

<a id="04-uso-instrucciones-para-chatgpt"></a>

<!-- Origen: 04_uso/instrucciones_para_chatgpt.md -->

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


---

<a id="readme"></a>

<!-- Origen: README.md -->

# VVD — Manual independiente en español

**Edición:** 0.1 — **Revisión de fuentes:** 2026-10-25.

Este es un **manual de referencia elaborado a partir de información oficial pública**, escrito en español y orientado a consultas con ChatGPT. No está afiliado a VVD. No es una traducción completa de sus páginas ni una copia del centro de ayuda. Las instrucciones pueden diferir de la interfaz real.

## Qué se ha revisado

- Las **4 categorías** de su centro de ayuda y los **35 artículos** que aparecían enlazados en ellas a la fecha de revisión.
- Registro oficial de cambios, cuya última entrada encontrada es **01/10/2026**.
- Catálogo público de Maps clásico y estructura de la documentación de desarrollo.
- Índices técnicos de API, SDK, CLI, MCP, Workshop, apps y wiki; **sin validación de todos los endpoints ni ejemplos**.

## Qué NO se ha podido verificar

- Contenido reservado a usuarios registrados, tutoriales interactivos, cambios aún no publicados y todas las herramientas comunitarias.
- Que un documento está «actualizado» solo porque su URL se encuentra activa.
- Pruebas de uso real de cada control (no hay acceso de edición a tu cuenta en esta auditoría).
- Compilación exhaustiva de cada referencia técnica y sus variantes.

## Inicio rápido

1. Lee [Inventario de fuentes](00_fuentes/inventario.md).
2. Para tu caso, [Maps clásico](01_manual/03_maps_clasico.md) y [Map Maker beta](01_manual/04_map_maker_beta.md).
3. Para dudas de plan, privacidad o funciones aparentemente contradictorias, [Auditoría](03_auditoria/01_errores_contradicciones_y_desfases.md).
4. Si vas a construir herramientas, [Modelo SDK](02_desarrollo/01_modelo_sdk_workshop.md) y [API/MCP/CLI](02_desarrollo/02_api_mcp_cli_y_referencias.md).
5. Consulta [Instrucciones de uso para ChatGPT](04_uso/instrucciones_para_chatgpt.md).

## Estructura

```text
00_fuentes/    inventario de 35 artículos + índice técnico
01_manual/     manual temático para usuarios y directores de juego
02_desarrollo/ orientación SDK, Workshop, API y MCP
03_auditoria/  conflictos, novedades y preguntas sin respuesta
04_uso/        instrucciones para ChatGPT
```

### Criterio de fiabilidad

**Confirmado:** expresamente descrito por una fuente pública. **Recomendado:** propuesta propia identificada. **Pendiente:** no documentado o contradictorio. Antes de decidir cuestiones sensibles (acceso de jugadores, costes, exportación), confirmar en el producto y documentación más reciente.

## Licencias y límites

Texto explicativo original, con enlaces al contenido oficial. El material de VVD pertenece a sus respectivos autores. No redistribuir capturas, gráficos ni contenido íntegro de sus guías sin los permisos pertinentes.
