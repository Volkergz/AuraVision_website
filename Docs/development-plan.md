# Plan de Desarrollo — AuraVisión Landing Page

> Documento maestro del plan de desarrollo del sitio.
> Define los módulos que debe tener la página, su alcance y el orden de
> implementación sugerido. Complementa a `Docs/requirements.md`
> (requerimientos R-1..R-22) y a `Docs/visual-style.md` (estilo visual).

---

## 1. Alcance

Landing page estática en Astro (sin SSR) para mostrar AuraVisión a stakeholders:
información del proyecto, cronología de avances, eventos asistidos, colaboradores
(LinkedIn/GitHub) y contacto. Deploy en Vercel (capa gratuita).

## 2. Orden de implementación sugerido

1. Infraestructura base (config, layout, estilos globales).
2. Navbar y Hero.
3. About (información del proyecto).
4. Timeline (cronología) + Modal.
5. Events.
6. Collaborators.
7. Contact.
8. Footer.
9. Política de imágenes y contenido.
10. Verificación final (build) y deploy.

---

## 3. Módulos

### M-1. Infraestructura base

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Configuración del proyecto Astro: `astro.config.mjs`, `tsconfig.json`, `src/config/site.config.ts`. |
| Alcance     | Fuente única de contenido, configuración del sitio (URL, nombre, descripción, SEO). |
| R-Asociados | R-1, R-11, R-16, R-17 |

### M-2. Layout base (`src/layouts/BaseLayout.astro`)

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Estructura HTML base: `<head>` con metadatos SEO, favicon, carga de fuentes (Neuropolitical + fallback), `<body>` con fondo oscuro y patrón de líneas/ondas. |
| Alcance     | Envuelve todas las secciones.                                  |
| R-Asociados | R-1, R-13, R-14, R-17 |

### M-3. Estilos globales (`src/styles/global.css`)

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Variables CSS de la paleta oficial (Morado Aura, Violeta Profundo, Blanco, Negro), tipografías, estilos base, utilidades (glow, bordes, ondas/líneas de fondo), scroll suave. |
| Alcance     | Tema oscuro global, componentes reutilizables.                 |
| R-Asociados | R-13, R-14, R-15, R-16, R-17 |

### M-4. Config de contenido (`src/config/site.config.ts`)

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | ÚNICA fuente de contenido editable. Agrupa: datos del sitio, hero, about, timeline (hitos), events, collaborators, contact y footer. |
| Alcance     | Todo el texto y rutas de imágenes de la página.                |
| R-Asociados | R-11, R-12, R-21 |

### M-5. Navbar

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Barra de navegación fija superior. Logo AuraVisión (con el estilo del logotipo: "Aura" + "Visión") y enlaces ancla a las secciones. Menú responsive. |
| Alcance     | Anclas: Inicio, Proyecto, Cronología, Eventos, Colaboradores, Contacto. |
| R-Asociados | R-5, R-18, R-19, R-20 |

### M-6. Hero

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Sección de portada con el hook del proyecto, tagline y CTAs (Ver proyecto / Contáctanos). Fondo con ondas/líneas. |
| Alcance     | Texto del hook (5M personas con pérdida de visión, +150k ceguera total, con cita APA), propuesta de valor y llamada a la acción. |
| R-Asociados | R-6, R-14, R-21 |

### M-7. About — Información del proyecto

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Sección con la información del proyecto: qué es AuraVisión, problema que resuelve, solución/propuesta de valor, tecnologías e impacto. Puede incluir métricas clave (stats). |
| Alcance     | Datos de `Docs/proyect-context.md` (secciones 3 a 10).         |
| R-Asociados | R-6, R-21 |

### M-8. Timeline — Cronología

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Línea de tiempo con puntos. Cada punto muestra el nombre del evento/hito arriba o abajo. **Hover** = descripción breve (tooltip). **Click** = abre un Modal con detalle extenso. |
| Alcance     | Datos de hitos: fecha, nombre, descripción breve, detalle, fotografías (cada una con descripción) y enlaces externos opcionales. |
| R-Asociados | R-7, R-12 |

### M-9. Modal (para Timeline)

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Ventana modal que se abre al hacer click en un hito. Contiene: nombre del evento, descripción extensa, fotografías (cada una con su descripción) y enlaces opcionales a fuentes externas (LinkedIn, Instagram, etc.). Cierre con botón y tecla ESC / click en el fondo. |
| Alcance     | Reutilizable para cualquier hito del timeline.                 |
| R-Asociados | R-7 |

### M-10. ~~Events~~ (eliminado)

> Sección **eliminada**: los eventos asistidos se muestran dentro de la Cronología
> (timeline) para evitar redundancia. R-8 se cumple vía M-8.

### M-11. Collaborators — Colaboradores

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Grid de cards de colaboradores: imagen, nombre, rol (opcional) y enlaces clicables a **LinkedIn** y **GitHub** (iconos). |
| Alcance     | Datos de colaboradores: nombre, rol, foto, linkedin, github.   |
| R-Asociados | R-9, R-12 |

### M-12. Contact — Contacto

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Sección de contacto para stakeholders. CTA y vía de contacto. **Decisión pendiente:** botón `mailto:` vs formulario (Formspree). |
| Alcance     | Email de contacto y CTA.                                       |
| R-Asociados | R-10 |

### M-13. Footer

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Pie de página con logo, enlaces rápidos, redes sociales y copyright. |
| Alcance     | Información institucional y créditos.                          |
| R-Asociados | R-5, R-20 |

### M-14. Íconos

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Componente de íconos SVG reutilizable: LinkedIn, GitHub, Instagram, mail, etc. (no dependencias externas para mantener la capa gratuita). |
| Alcance     | Íconos usados en navbar, colaboradores, eventos y footer.      |
| R-Asociados | R-9 |

### M-15. Imágenes (`public/images/`)

| Campo       | Detalle                                                        |
| ----------- | -------------------------------------------------------------- |
| Descripción | Carpeta con imágenes de nombres fijos y documentados para reemplazo simple: `isotipo.png`, `evento-1.jpg`, `colaborador-1.jpg`, etc. |
| Alcance     | Logo/isotipo, fotografías de eventos y colaboradores.          |
| R-Asociados | R-12, R-19 |

---

## 4. Criterios de terminación (Definition of Done)

- [ ] Todos los módulos M-1..M-15 implementados según los R-asociados.
- [ ] `npm run build` pasa sin errores.
- [ ] Tema dark, bordes morado + glow, tipografía y paleta según `visual-style.md`.
- [ ] Contenido editable desde `src/config/site.config.ts` sin tocar componentes.
- [ ] Imágenes reemplazables copiando archivos en `public/images/`.
- [ ] `Docs/requirements.md` actualizado (estados Completado / No Completado).
- [ ] Deploy verificado en Vercel (capa gratuita).

---

## 5. Notas de arquitectura

- **Sin dependencias externas de JS** donde sea posible (Astro hidrata solo lo
  necesario; el Modal puede usar JS propio pequeño o vanilla).
- **SEO básico:** meta tags, Open Graph y `lang="es"`.
- **Accesibilidad:** uso de `aria` en el modal, tooltips accesibles y alternativas
  de texto para imágenes.