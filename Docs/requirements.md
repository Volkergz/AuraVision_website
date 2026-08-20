# Requirements — AuraVisión Website

> Documento de requerimientos del sitio web de AuraVisión.
> Sirve como referencia para retomar la edición del proyecto en otra sesión
> (sin depender del chat original). Cada requerimiento indica su estado actual.

---

## Contexto general

- **Stack:** Astro (sitio 100% estático).
- **Deploy:** Vercel, capa gratuita. Producción: https://aura-vision-website.vercel.app/
- **Propósito:** landing page para mostrar el proyecto a stakeholders, ver información
  y contactar al equipo.
- **Imágenes:** todas en **WebP** (generadas con `npm run optimize:images`).

---

## Requerimientos

| R-N | Nombre Requerimiento (Corto)        | Descripción Requerimiento                                                                                                                                                                                                                                              | Estado        |
| --- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| R-1 | Proyecto Astro estático             | Sitio construido con Astro, salida estática (sin SSR), listo para deploy en Vercel free tier.                                                                                                                                                                           | Completado    |
| R-2 | Carpeta Docs                        | Crear carpeta `Docs/` como centro de documentación del proyecto.                                                                                                                                                                                                       | Completado    |
| R-3 | Doc de contexto del proyecto        | `Docs/proyect-context.md` con la información del proyecto (resumen ejecutivo, problema, solución, tecnologías, beneficiarios, impacto, pitch, referencias APA).                                                                                                          | Completado    |
| R-4 | Doc de estilo visual                | `Docs/visual-style.md` con la especificación del estilo visual de la página (marca, colores, tipografía, componentes).                                                                                                                                                  | Completado    |
| R-5 | Nomenclatura de marca               | El proyecto se llama **AuraVisión** (una palabra, "V" mayúscula).                                                                                                                      | Completado    |
| R-6 | Sección de información del proyecto | La página debe mostrar información general del proyecto (qué es, problema, solución, impacto).                                                                                                         | Completado    |
| R-7 | Sección de cronología (timeline)    | Línea de tiempo con puntos. El nombre del evento/hito aparece arriba o abajo del punto. Al hacer **click** en el hito se abre un **modal** con detalle extenso: nombre, descripción, fotografías (cada una con una pequeña descripción) y opcionalmente enlaces externos de otras fuentes (LinkedIn, Instagram, etc.). *(El tooltip de hover en los puntos fue eliminado a petición del usuario.)*                                                                                                                                                                           | Completado    |
| R-8 | Sección de eventos                 | Los eventos asistidos por el equipo se muestran dentro de la Cronología (timeline), evitando una sección redundante.                                                                                                                                                    | Completado    |
| R-9 | Sección de colaboradores            | La página debe mostrar cards de colaboradores con: imagen, nombre y enlaces a redes (LinkedIn y GitHub).                                                                                                                                                                | Completado    |
| R-10 | Sección de contacto                | La página debe ofrecer una vía de contacto para stakeholders. Implementado con botón `mailto:` y email `contacto@auravision.cl` (placeholder). **Pendiente:** confirmar email real y/o formulario (Formspree u otro).                                                                                                                                   | Completado    |
| R-11 | Contenido fácil de editar           | Todo el texto debe concentrarse en un solo archivo de config (`src/config/site.config.ts`) para editar sin tocar componentes.                                                                                                                                            | Completado    |
| R-12 | Imágenes fáciles de reemplazar      | Las imágenes deben vivir en `public/images/` con nombres fijos y documentados (`isotipo.webp`, `colaboradores/haleym.webp`, `hitos/hito-2-img-1.webp`) para reemplazarlas copiando el archivo. Todo en **WebP** (optimización con `npm run optimize:images`).                                                                              | Completado    |
| R-13 | Tema oscuro (dark)                  | El tema debe ser **oscuro**, no claro.                                                                                                                                                                                                                                  | Completado    |
| R-14 | Estilo moderno/futurista            | La página debe verse moderna, minimalista y muy futurista, con líneas y ondas como elementos decorativos de fondo.                                                                                                                                                       | Completado    |
| R-15 | Bordes con glow morado              | Los botones y cards deben tener borde **Morado Aura** (`#7C2AB2`) con un ligero resplandor (glow) hacia afuera.                                                                                                                                                         | Completado    |
| R-16 | Paleta de colores oficial           | Usar los colores oficiales: Morado Aura `#7C2AB2`, Violeta Profundo `#311D42`, Blanco `#FFFFFF`, Negro `#000000`. Cualquier color complementario debe derivar de esta paleta.                                                                                           | Completado    |
| R-17 | Tipografía oficial                  | La fuente oficial de la marca es **Neuropolitical** (para marca y títulos). La fuente está incluida en `public/fonts/neuropolitical.otf` y se aplica vía `@font-face`, con fallback **Space Grotesk** (Google Fonts).                                                                                                                                      | Completado    |
| R-18 | Logotipo                            | Logotipo: "AuraVisión" pegado, con **"Aura" en Negro** y **"Visión" en Morado Aura**. Evaluar versión legible sobre fondo oscuro.                                                                                                                                       | Completado    |
| R-19 | Isotipo                             | Isotipo subido por el usuario en `public/images/isotipo.webp` (WebP con fondo transparente).                                                                                                                                                                             | Completado    |
| R-20 | Imagotipo                           | Disposición: **Isotipo arriba y centrado sobre el Logotipo**. Implementado en `src/components/Imagotipo.astro` y usado en el Hero (240px), el Footer (120px) y el Navbar (28px).                                                                                          | Completado    |
| R-21 | Referencias APA                     | Toda información externa mencionada debe poder citarse en formato APA. Hook citado con cifras verificables (4,68M adultos con pérdida de visión; 153.560 ciegos) y fuente Fundación Luz/ENDIDE 2022.                                                                                | Completado    |
| R-22 | README con guía de deploy           | README con pasos para desplegar en Vercel y guía de edición de contenido e imágenes.                                                                                                                                                                                     | Completado    |

---

## Decisiones pendientes (a confirmar en futuras sesiones)

1. **Contacto (R-10):** se implementó botón de email (`mailto:`) por defecto con
   `contacto@auravision.cl` (placeholder). Si se decide un formulario, se requiere un
   servicio externo (ej. Formspree, gratis con límite) y se actualizaría el CTA.
2. **Links relevantes (R-6):** completar demo/sitio, repositorio GitHub y redes
   en `Docs/proyect-context.md` (sección 12).
3. **Cifras del hook (R-21):** el hook usa cifras verificables de Fundación Luz (2023)
   sobre ENDIDE 2022 (4,6M con pérdida de visión; +153k con ceguera total) y ya tiene
   referencia APA. Se mantiene la alternativa del Censo 2024 (847.000) documentada
   en `proyect-context.md`.
4. **Reemplazo de imágenes:** al actualizar una foto, generar el `.webp` con
   `npm run optimize:images` (borrar el `.webp` previo si el archivo original cambió).