# AGENTS.md — AuraVisión Website

> Guía para agentes y futuras sesiones de edición de este repositorio.
> **Regla principal:** antes de desarrollar, modificar o proponer cambios, SIEMPRE
> leer los archivos de `Docs/` para contextualizarse. No escribir código sin leerlos.

---

## 1. Contexto del proyecto

- **AuraVisión** es una landing page para mostrar a stakeholders un proyecto de
  tecnología inclusiva: un dispositivo tipo **lentes inteligentes** (sensores
  ultrasónicos + motores vibradores) que complementa el bastón blanco para
  personas con discapacidad visual, con retroalimentación háptica y software de
  monitoreo en tiempo real.
- **Stack:** Astro, sitio 100% estático (sin SSR).
- **Deploy:** Vercel, capa gratuita.
- **Propósito de la página:** que los stakeholders vean la información del
  proyecto, la cronología de avances, los eventos asistidos y los colaboradores
  (con LinkedIn/GitHub), y puedan contactar al equipo.
- **Nombre de marca:** "AuraVisión" (una palabra, "V" mayúscula). "Urbanix" fue
  solo el nombre de un evento; NO usarlo como nombre del proyecto.

---

## 2. Documentación obligatoria (leer en este orden)

1. **`Docs/proyect-context.md`** — información del proyecto: resumen ejecutivo,
   problema, solución, tecnologías, beneficiarios, impacto, mensajes clave de la
   landing (hook, problema, solución, propuesta de valor, CTA) y referencias APA.
2. **`Docs/visual-style.md`** — manual de marca y estilo visual:
   - Tipografía oficial: **Neuropolitical**.
   - Colores oficiales: Morado Aura `#7C2AB2`, Violeta Profundo `#311D42`,
     Blanco `#FFFFFF`, Negro `#000000`.
   - Logotipo: "AuraVisión" pegado; "Aura" en Negro, "Visión" en Morado Aura.
   - Isotipo: pendiente de subir (`public/images/isotipo.png`).
   - Imagotipo: isotipo arriba y centrado sobre el logotipo.
   - Tema **dark**, moderno, minimalista, futurista, con líneas y ondas.
3. **`Docs/requirements.md`** — requerimientos R-1..R-22 con su **Estado**
   (Completado / No Completado). Actualizarlo al completar o agregar requerimientos.
4. **`Docs/development-plan.md`** — plan de desarrollo y módulos de la página
   (M-1..M-15) con su alcance y requerimientos asociados.

---

## 3. Reglas de trabajo clave

- **Tema oscuro** siempre (no hay tema claro).
- Componentes (botones y cards) con **borde Morado Aura** y **glow** (resplandor
  ligero hacia afuera). Fondos oscuros con líneas/ondas decorativas.
- **Colaboradores:** cards con imagen, nombre y enlaces a LinkedIn y GitHub.
- **Cronología (timeline):**
  - Línea de tiempo con **puntos**.
  - El **nombre del evento/hito** aparece arriba o abajo del punto.
  - **Hover** en un punto: muestra una descripción breve (tooltip).
  - **Click** en un hito: abre un **modal** con detalle extenso (nombre del
    evento, descripción, fotografías —cada una con su descripción— y, opcional,
    enlaces a otras fuentes como LinkedIn, Instagram, etc.).
- **Contenido editable sin tocar componentes:** todo el texto debe concentrarse
  en `src/config/site.config.ts`.
- **Imágenes reemplazables:** guardar en `public/images/` con nombres fijos y
  documentados (ej. `isotipo.png`, `evento-1.jpg`, `colaborador-1.jpg`).
  Reemplazar una imagen = sobrescribir el archivo.
- **Referencias APA:** toda información externa citada debe tener referencia APA
  (algunas aún son placeholders `[FUENTE: ...]` en `Docs/proyect-context.md`).

---

## 4. Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo
npm run build      # build de producción (verificar SIEMPRE antes de terminar)
npm run preview    # previsualizar el build
```

> Verificación obligatoria al terminar cualquier cambio: `npm run build`.

---

## 5. Estructura prevista del proyecto

```
Docs/                       # Documentación (proyect-context, visual-style, requirements, development-plan)
src/
  config/
    site.config.ts          # ÚNICA fuente de contenido editable
  components/               # Navbar, Hero, About, Timeline, Events, Collaborators, Contact, Footer, Modal, Iconos
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css
public/
  images/                   # Imágenes con nombres fijos (isotipo, eventos, colaboradores)
package.json
astro.config.mjs
tsconfig.json
AGENTS.md
```

---

## 6. Pendientes conocidos (ver detalle en `Docs/requirements.md`)

- Decidir método de contacto (botón `mailto:` vs formulario tipo Formspree).
- Definir fuente web secundaria para texto (Neuropolitical no siempre está en web).
- Completar links relevantes (demo, GitHub, redes) y fuentes APA del hook.
- Subir el isotipo y los datos reales de timeline, eventos y colaboradores.