# Web de documentación con VitePress

**Estado:** sitio configurado, publicación pública no activada. No implica que exista ya una URL operativa.

## Arquitectura

La raíz del sitio VitePress es **la raíz de este repositorio** (`vitepress dev .`). Esto permite reutilizar los Markdown existentes de `docs/`, `terminologia/`, `fuentes/` y `auditoria/` directamente, sin copias ni sincronización de contenidos. `index.md` es la portada. El buscador local indexa las páginas del sitio en el navegador.

VitePress tiene configurada la ruta base `/vvd-documentation-es/` para cuando se despliegue en GitHub Pages.

## Requisitos

- Node.js 22 o superior.
- npm.

## Desarrollo local

```bash
npm install
npm run docs:dev
```

Abre la dirección local que muestre el comando.

## Comprobación y compilación

```bash
npm run docs:check-links
npm run docs:build
npm run docs:preview
```

La salida estática queda en `.vitepress/dist/`. El validador revisa rutas Markdown locales; **no** verifica la disponibilidad de URLs externas ni la calidad factual del contenido.

GitHub Actions ejecuta `validate-docs.yml` en cada push a `main`. No despliega el sitio.

## Publicación voluntaria

**No publicar antes de aclarar con VVD los permisos necesarios de traducción y reutilización de materiales, si el proyecto pretende incorporar contenido protegido.** El material actual se presenta como elaboración independiente basada en fuentes citadas.

Cuando el mantenedor lo decida:

1. En el repositorio, ir a **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. Abrir **Actions → Publicar web de documentación (manual) → Run workflow**.
3. Verificar el resultado en `https://joseantoniopino.github.io/vvd-documentation-es/` **después** de que GitHub confirme que se ha publicado. No asumir que existe antes.
4. Si se desea publicar automáticamente con cada commit en `main`, cambiar el workflow en un paso posterior.

**Privacidad:** una web de GitHub Pages puede ser pública incluso si el repositorio es privado, según plan y configuración. La acción manual de publicación evita un despliegue accidental durante esta fase.

## Convenciones editoriales

Los títulos y menús utilizan la terminología española **observada** de VVD cuando hay evidencia. [Glosario](terminologia/glosario.md). Las capturas de usuario no se redistribuyen y no prueban disponibilidad universal de tipos/herramientas.

La web es un proyecto **no oficial** y se identifica expresamente como tal. No usar logotipos ni diseños exclusivos de VVD sin permiso.
