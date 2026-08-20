# Estilo Visual — AuraVisión Landing Page

> Este archivo define el estilo visual que debe tener la página.
> Completá cada sección según preferencia; el resultado se aplicará
> en `src/styles/` y en el config de la landing.

---

## 1. Identidad de marca (manual de marca)

### Tipografía oficial

- **Fuente principal (marca y títulos): `Neuropolitical`**
  _(La fuente oficial de la marca. Se usará para el logotipo y títulos principales.)_
  - Archivo incluido en el repo: `public/fonts/neuropolitical.otf` (aplicado vía `@font-face`).
  - Fallback web: **Space Grotesk** (Google Fonts) mientras no cargue la fuente local.

### Isotipo

- **Isotipo:** subido por el usuario.
  - Ubicación: `public/images/isotipo.webp` (WebP con fondo transparente).
  - También disponible el original PNG (reemplazable; luego optimizar con `npm run optimize:images`).

### Logotipo

- **Logotipo:** dice "AuraVisión" pegado (sin separación).
  - La palabra **"Aura"** se escribe en color **Negro** (`#000000`).
  - La palabra **"Visión"** se escribe en color **Morado Aura** (`#7C2AB2`).
  - Si se usa sobre fondo oscuro, evaluar versión legible (ej. "Aura" en Blanco).

### Imagotipo

- **Imagotipo:** el **Isotipo** va **arriba y centrado** sobre el **Logotipo**.

### Nomenclatura de la marca

- **AuraVisión** (una sola palabra, pegado, con "V" mayúscula).

## 2. Paleta de colores (colores oficiales)

| Rol              | Color (hex) | Uso / notas                              |
| ---------------- | ----------- | ---------------------------------------- |
| Morado Aura      | `#7C2AB2`   | Color de marca principal, CTAs, highlights |
| Violeta Profundo | `#311D42`   | Fondos, secciones oscuras, profundidad    |
| Blanco           | `#FFFFFF`   | Texto principal, fondos claros            |
| Negro            | `#000000`   | Texto, "Aura" del logotipo, fondos        |

> Los valores anteriores son los colores oficiales de la marca. Cualquier color
> complementario (acentos, gradientes, bordes) deberá derivar de esta paleta.

## 3. Vibra general

**Dark, moderno, minimalista y muy futurista**, con presencia de líneas y ondas
como elementos decorativos de fondo.

## 4. Modo de color

- [x] **Oscuro (dark)** — no se usa tema claro.

## 5. Tipografía (web)

- Fuente principal (títulos): `Neuropolitical` _(archivo local en `public/fonts/`, fallback Space Grotesk)_
- Fuente secundaria (texto): **Space Grotesk** (Google Fonts)

## 6. Estilo de componentes

- **Bordes:** `Morado Aura (#7C2AB2)` en botones y cards.
- **Resplandor:** ligero glow (resplandor) hacia afuera sobre el borde morado.
- **Fondos/patrones:** fondo oscuro (Violeta Profundo / Negro) con **líneas y ondas** decorativas (futurista/minimalista).
- Esquinas (radios): _por definir_
- Sombras: glow morado (derivado de la paleta)
- Gradientes: derivar de la paleta oficial

## 7. Colaboradores (cards)

Las cards de colaboradores deben contener:

1. **Imagen** del colaborador.
2. **Nombre**.
3. **Enlaces a redes sociales: LinkedIn y GitHub** (iconos clicables).

## 8. Imágenes

- Formato de imágenes: **WebP** (optimización automática con `npm run optimize:images`).
- Isotipo: subido → `public/images/isotipo.webp` (con transparencia).
- Fotos de colaboradores: `public/images/colaboradores/*.webp` (redimensionadas a 256px, mostradas en círculos de 128px).
- Fotos de hitos: `public/images/hitos/hito-N-img-M.webp` (redimensionadas a 1600px, mostradas en 16:9 dentro del modal).

## 9. Referencias de inspiración

Links o capturas de sitios que sirvan de referencia visual.

## 10. Detalles extra

Todo lo que quieras agregar: animaciones, hover effects, secciones especiales, etc.