---
title: "Crear propiedades y configurar opciones de selección"
fecha_revision: 2026-10-27
estado: "Procedimiento comprobado en la interfaz española; alcance limitado a la sesión observada"
---

# Crear propiedades y configurar opciones de selección

Esta guía explica **cómo definir propiedades reutilizables en la plantilla de un tipo o subtipo de tarjeta** y cómo añadir los valores disponibles de una propiedad **«Seleccionar»**.

> **Evidencia:** procedimiento observado en la interfaz española de VVD el **27/10/2026**, en un mundo con un subtipo **Ubicación → Pueblo**, su **Plantilla de Pueblo** y una tarjeta existente del mismo subtipo. No procede de una traducción oficial ni garantiza una interfaz idéntica en otras versiones, cuentas o mundos.
>
> **Fuente oficial:** el [artículo «Properties»](https://vvd.crisp.help/en/article/properties-umr3at/) confirma que se pueden definir propiedades **por tarjeta** o **por tipo**. Sin embargo, a fecha de esta revisión, **no documenta el procedimiento para crear opciones de «Seleccionar»**. Los pasos de ese apartado proceden de la sesión observada.

## Diferencia entre plantilla y tarjeta

| Dónde | Para qué sirve |
|---|---|
| **Tipo/subtipo → Plantilla de tarjeta** | Definir las propiedades reutilizables y los bloques iniciales de las tarjetas de ese tipo. |
| **Tarjeta concreta** | Introducir o escoger los valores que correspondan a esa entidad particular. |

Por ejemplo, la **plantilla de Pueblo** puede incluir una propiedad `Antigüedad` de tipo `Seleccionar` con opciones predefinidas. Cada pueblo concreto elegirá el valor que le corresponda.

**No confundas** la pestaña **«Plantilla de tarjeta»** del administrador de tipos con la sección **«Plantillas Guiadas»** que puede mostrarse dentro de una tarjeta: son controles y contextos diferentes.

## Abrir y editar la plantilla de un tipo

1. En el mundo, abre el apartado **Tipos** (icono de etiqueta en la barra lateral de la interfaz observada). El [centro de ayuda](https://vvd.crisp.help/en/article/world-info-gmmftq/) también lo sitúa en la información/configuración del mundo.
2. Despliega el tipo padre, si corresponde; en el ejemplo, **Ubicación**.
3. Selecciona el subtipo **Pueblo**.
4. Abre la pestaña **«Plantilla de tarjeta»**.
5. Si ya existe una plantilla asignada, pulsa **«Editar»**. Si todavía no existe, utiliza **«Crear una nueva plantilla»**.

**Importante:** el botón **«+»** situado junto a un tipo en la lista puede indicar **«Agregar subtipo»**; **no** es el botón para añadir una propiedad.

## Crear una propiedad

1. En el editor de la plantilla, utiliza **«Agregar propiedad»**, situado debajo del nombre provisional de la tarjeta (por ejemplo, «Nueva Pueblo»).
2. Escribe el **nombre de la propiedad**.
3. Elige el tipo de dato adecuado.

En la sesión del 27/10/2026 se observaron estas opciones:

| Grupo | Opciones visibles | Uso orientativo |
|---|---|---|
| Datos | **Texto**, **Número**, **Seleccionar**, **Fecha** | Información descriptiva breve, cantidades, categorías cerradas o fechas. |
| Referencias | **Personaje**, **Evento**, **Facción**, **Objeto**, **Ubicación**, **Ecología**, **Lore**, **Especie** y subtipos visibles | Vincular la propiedad a tarjetas existentes. |
| Derivación | **Calcular** | Valor calculado a partir de otras propiedades; la fórmula exacta no se ha probado en esta guía. |

Los tipos enumerados son **los visibles en las capturas de esta sesión**, no un catálogo oficial exhaustivo. Los subtipos que aparecen en «Referencias» pueden depender del mundo.

## Crear las opciones de una propiedad «Seleccionar»

Este paso es el que no resultaba evidente al abrir el menú de configuración.

1. **Permanece en el editor de la plantilla del tipo**, no en una tarjeta individual.
2. Crea una propiedad (por ejemplo, `Antigüedad`) y selecciona el tipo de dato **«Seleccionar»**.
3. En la **propia propiedad de la plantilla**, abre el **campo de selección de valor**. No abras el menú que aparece al pulsar el nombre de la propiedad: ese menú sirve para cambiar el **nombre o el tipo**.
4. En el desplegable del valor, utiliza **«Buscar una opción...»**. Si no hay opciones, la interfaz indica **«Aún no hay opciones. Escribe un nombre para crear la primera»**.
5. Escribe el nombre de una opción y utiliza la acción de creación que ofrece el desplegable. Repite para las demás opciones.
6. Termina la edición con **«Hecho»**.

**Resultado comprobado:** al crear las opciones desde la **Plantilla de Pueblo**, estas quedaron disponibles en el desplegable `Antigüedad` de una tarjeta **Pueblo** ya existente. Por tanto, **no fue necesario crearlas individualmente en esa tarjeta**.

En la sesión observada, las opciones creadas aparecían con **etiquetas de colores**. También se veían iconos de edición junto a cada opción, pero no se comprobó el alcance de sus acciones (renombrar, eliminar, ordenar, colores); evitamos documentarlas como funciones verificadas hasta probarlas.

### Diferenciar los dos menús

- **Pulsar el nombre de una propiedad en el editor de tipos** abre un menú para **renombrar o cambiar su tipo** (por ejemplo, de Texto a Seleccionar). **No** presenta un apartado visible para gestionar una lista de opciones.
- **Pulsar el valor de la propiedad «Seleccionar» dentro de la plantilla** abre el **desplegable de opciones**, desde el que se pueden crear.
- **Pulsar el valor en una tarjeta concreta** permite escoger opciones ya disponibles; en esa sesión también aparecía la posibilidad de crear opciones. **Para preparar una plantilla reutilizable, conviene hacerlo desde la propia plantilla**.

## Comprobar que la propiedad se reutiliza

1. Finaliza la edición de la plantilla con **«Hecho»**.
2. Abre una tarjeta que tenga el mismo tipo o subtipo.
3. Comprueba que la propiedad está presente y despliega su campo **«Seleccionar»**.
4. Verifica que aparecen las opciones que acabas de definir.

**Límite de la comprobación:** se constató en una tarjeta existente del mismo subtipo. No se verificó cómo se propagan los cambios a **todos** los tipos, las demás plantillas, otras cuentas ni cómo se gestionan migraciones complejas de propiedades.

## Criterio de modelado: propiedad frente a bloque de texto

Esto es una **recomendación editorial**, no un requisito de VVD:

- **Propiedad:** dato resumido y consultable a simple vista; por ejemplo, `Actitud = Desconfiada`.
- **Bloque narrativo opcional:** explica **causas, excepciones, consecuencias o contexto**, sin repetir simplemente el valor de la propiedad.
- **Referencia a tarjeta:** si el dato representa un personaje, una facción, un lugar o un evento con entidad propia, considera enlazar su tarjeta en lugar de duplicar su descripción.

El cuerpo de los bloques de texto admite formato Markdown en la interfaz observada; el **título del bloque** es independiente del texto que contiene.

## Preguntas pendientes

- ¿El catálogo de opciones de «Seleccionar» está vinculado estrictamente a cada propiedad o puede compartirse entre tipos? **No comprobado**.
- ¿Qué operaciones realizan exactamente los iconos de edición o arrastre visibles junto a las opciones? **No comprobado**.
- ¿Cómo se sincronizan cambios de estructura complejos con todas las tarjetas existentes? **Requiere una prueba independiente**.

**Fuentes:** [Properties](https://vvd.crisp.help/en/article/properties-umr3at/) · [Card Types & Templates](https://vvd.crisp.help/en/article/card-types-templates-44at3z/) · [World Info](https://vvd.crisp.help/en/article/world-info-gmmftq/) · [Tarjetas, tipos y propiedades](../fundamentos/fichas-tipos-y-propiedades.md).
