# AuraVisión — Landing Page

Landing page de **AuraVisión**, un proyecto de tecnología inclusiva: lentes inteligentes con
sensores ultrasónicos y retroalimentación háptica que complementan el bastón blanco para
personas con discapacidad visual.

- **Stack:** [Astro](https://astro.build) (sitio 100% estático, sin SSR).
- **Deploy:** Vercel (capa gratuita).
- **Tema:** dark, moderno, minimalista y futurista, con líneas y ondas decorativas.

---

## Requisitos previos

- Node.js 18 o superior.
- npm.

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:4321)
npm run build      # build de producción (genera la carpeta dist/)
npm run preview    # previsualizar el build de producción
```

> Verificación obligatoria tras cualquier cambio: `npm run build` debe pasar sin errores.

## Estructura del proyecto

```
Docs/                       # Documentación del proyecto
src/
  config/
    site.config.ts          # ÚNICA fuente de contenido editable
  components/               # Navbar, Hero, About, Timeline, Events, Collaborators, Contact, Footer, Modal, Imagotipo, Icon
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css
public/
  images/                   # Imágenes (isotipo, colaboradores, hitos)
  fonts/                    # Fuente Neuropolitical (opcional: neuropolitical.otf/.ttf)
  favicon.svg
```

## Cómo editar el contenido

Todo el texto y las rutas de imágenes viven en **`src/config/site.config.ts`**. No hace falta
tocar los componentes para cambiar contenido:

- **Datos del sitio / SEO:** objeto `site` (nombre, URL, descripción, favicon, ogImage).
- **Navegación:** array `nav`.
- **Hero (portada):** objeto `hero` (tagline, hook, problema, solución, CTAs y fuente APA).
- **Proyecto (About):** objeto `about` (resumen, problema, propuesta de valor, tecnologías, impacto, stats).
- **Cronología (Timeline):** array `timeline`. Cada hito acepta fecha, título, descripción breve,
  detalle, fotos (`photos[]` con `src`, `alt`, `description`) y enlaces externos (`links[]`).
  El hover muestra la descripción breve y el click abre el modal con el detalle. Los eventos
  asistidos por el equipo se documentan aquí (ej. Demo Day, AWS Community Day, Urbanix).
- **Colaboradores:** array `collaborators` (nombre, rol, foto, linkedin, github). `github` es
  opcional: si se omite, no se muestra el ícono.
- **Contacto:** objeto `contact` (email, CTA). Actualmente usa `mailto:`.
- **Footer:** objeto `footer`.

### Cómo reemplazar imágenes

Las imágenes se guardan en `public/images/` con nombres fijos. **Reemplazar una imagen =
sobrescribir el archivo con el mismo nombre** (no hace falta cambiar el código):

| Imagen                 | Ruta                                                   |
| ---------------------- | ------------------------------------------------------ |
| Isotipo                | `public/images/isotipo.png`                            |
| Colaborador Haleym     | `public/images/colaboradores/haleym.png`               |
| Colaborador Angel      | `public/images/colaboradores/angel.jpeg`               |
| Colaborador Aaron      | `public/images/colaboradores/aaron.jpeg`               |
| Colaboradora Priscilla | `public/images/colaboradores/priscilla.jpeg`           |
| Colaborador Osnellys   | `public/images/colaboradores/osnellys.jpeg`            |
| Hitos (cronología)     | `public/images/hitos/hito-N-img-M.jpg` (ej. `hito-2-img-1.jpg`) |

### Fuente Neuropolitical

La tipografía oficial de la marca es **Neuropolitical**. Si dispones de la licencia, coloca el
archivo en `public/fonts/` con el nombre `neuropolitical.otf` (o `.ttf`) y se aplicará
automáticamente. Mientras no exista, se usa el fallback **Space Grotesk** (Google Fonts).

## Guía de deploy en Vercel

1. Sube el repositorio a GitHub (o conecta el repo existente).
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repositorio.
3. Vercel detecta Astro automáticamente. Si no, configura:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Haz clic en **Deploy**.
5. Después del primer deploy, actualiza `site.url` en `src/config/site.config.ts` con la URL
   real del proyecto (ej. `https://tu-proyecto.vercel.app`) y redespliega.

> La capa gratuita de Vercel es suficiente para este sitio estático.

## Documentación

La documentación del proyecto vive en `Docs/`:

- `Docs/proyect-context.md` — información del proyecto (problema, solución, pitch, referencias APA).
- `Docs/visual-style.md` — manual de marca y estilo visual.
- `Docs/requirements.md` — requerimientos R-1..R-22 con su estado.
- `Docs/development-plan.md` — plan de desarrollo y módulos.

## Licencia

© AuraVisión. Todos los derechos reservados.