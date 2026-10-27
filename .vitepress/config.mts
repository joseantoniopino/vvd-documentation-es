import { defineConfig } from 'vitepress'

const repo = 'https://github.com/joseantoniopino/vvd-documentation-es'

export default defineConfig({
  lang: 'es-ES',
  title: 'VVD en español',
  titleTemplate: ':title · Documentación comunitaria de VVD',
  description: 'Guía comunitaria independiente sobre VVD, con fuentes, auditorías y terminología contrastada con la interfaz española.',
  base: '/vvd-documentation-es/',
  lastUpdated: true,
  cleanUrls: false,
  head: [
    ['meta', { name: 'theme-color', content: '#176b68' }],
    ['meta', { name: 'robots', content: 'noindex, nofollow' }]
  ],
  themeConfig: {
    siteTitle: 'VVD en español',
    logo: undefined,
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Guía', link: '/docs/README' },
      { text: 'Herramientas', link: '/docs/herramientas/catalogo' },
      { text: 'Terminología', link: '/terminologia/glosario' },
      { text: 'Fuentes', link: '/fuentes/inventario' }
    ],
    sidebar: [
      {
        text: 'Introducción',
        collapsed: false,
        items: [
          { text: 'Índice de documentación', link: '/docs/README' },
          { text: 'Navegación y conceptos', link: '/docs/fundamentos/navegacion' },
          { text: 'Tarjetas, tipos y propiedades', link: '/docs/fundamentos/fichas-tipos-y-propiedades' },
          { text: 'Configurar propiedades y opciones', link: '/docs/guias/configurar-propiedades-y-opciones' },
          { text: 'Comentarios y Paths', link: '/docs/fundamentos/comentarios-y-paths' },
          { text: 'Guardado e importación', link: '/docs/fundamentos/guardado-importacion-y-aspecto' },
          { text: 'Planes y acceso', link: '/docs/fundamentos/planes-y-acceso' }
        ]
      },
      {
        text: 'Herramientas',
        collapsed: false,
        items: [
          { text: 'Catálogo y cobertura', link: '/docs/herramientas/catalogo' },
          { text: 'Mapas clásico', link: '/docs/herramientas/maps-classic' },
          { text: 'Mapa (beta)', link: '/docs/herramientas/map-maker' },
          { text: 'Canvas y multimedia', link: '/docs/herramientas/medios-y-canvas' },
          { text: 'Línea de tiempo, árboles y grafo', link: '/docs/herramientas/arboles-cronologias-y-grafos' },
          { text: 'Diccionario', link: '/docs/herramientas/diccionario' },
          { text: 'Incrustaciones multimedia', link: '/docs/herramientas/incrustaciones-multimedia' },
          { text: 'Quill', link: '/docs/herramientas/quill' }
        ]
      },
      {
        text: 'Publicación y desarrollo',
        collapsed: true,
        items: [
          { text: 'Wikis y permisos', link: '/docs/publicacion/wikis-y-permisos' },
          { text: 'SDK y Workshop', link: '/docs/desarrollo/sdk-y-workshop' },
          { text: 'API, MCP y CLI', link: '/docs/desarrollo/api-mcp-y-cli' },
          { text: 'Guía para directores de juego', link: '/docs/guias/flujo-director-de-juego' }
        ]
      },
      {
        text: 'Terminología y evidencias',
        collapsed: true,
        items: [
          { text: 'Glosario de interfaz', link: '/terminologia/glosario' },
          { text: 'Herramientas observadas', link: '/terminologia/herramientas-observadas' },
          { text: 'Tipos observados', link: '/terminologia/tipos-observados' },
          { text: 'Inventario de fuentes', link: '/fuentes/inventario' },
          { text: 'Comunicaciones en Reddit', link: '/fuentes/reddit-y-comunidad' },
          { text: 'Metodología de verificación', link: '/fuentes/metodologia' },
          { text: 'Auditoría documental', link: '/auditoria/informe-2026-10-25' },
          { text: 'Auditoría terminológica', link: '/auditoria/normalizacion-terminologica-2026-10-25' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar documentación' },
              modal: {
                noResultsText: 'No se encontraron resultados',
                resetButtonTitle: 'Limpiar búsqueda',
                footer: { selectText: 'seleccionar', navigateText: 'navegar', closeText: 'cerrar' }
              }
            }
          }
        }
      }
    },
    outline: { level: [2, 3], label: 'En esta página' },
    docFooter: { prev: 'Anterior', next: 'Siguiente' },
    returnToTopLabel: 'Volver arriba',
    sidebarMenuLabel: 'Menú',
    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Cambiar a tema claro',
    darkModeSwitchTitle: 'Cambiar a tema oscuro',
    editLink: { pattern: `${repo}/edit/main/:path`, text: 'Proponer una corrección en GitHub' },
    lastUpdated: { text: 'Actualizado en Git', formatOptions: { dateStyle: 'long' } },
    socialLinks: [{ icon: 'github', link: repo }],
    footer: {
      message: 'Proyecto comunitario independiente. No afiliado, aprobado ni mantenido por VVD.',
      copyright: 'Las marcas y recursos oficiales pertenecen a sus titulares.'
    }
  }
})
