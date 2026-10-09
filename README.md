# pablo guzzi · sitio

Dos páginas con el mismo diseño:

- `/` → página personal de Pablo Guzzi (advisory, consultoría, fractional, trayectoria, docencia, contenido).
- `/ai-implementation` → Guzzi AI, la propuesta de implementación de IA (escrita en "nosotros").

Hecha con [Astro](https://astro.build) (sitio estático), tipografías alojadas en el propio sitio, sin dependencias externas en producción.

## Antes de publicar: placeholders

Todo lo pendiente está en **`src/config.ts`**. Mientras un valor esté vacío, la página muestra un recuadro punteado visible en ese lugar, nunca un dato inventado.

| # | Qué | Dónde | Estado |
|---|-----|-------|--------|
| 1 | Link público del formulario | `formUrl` | ✅ cargado |
| 2 | Perfil de LinkedIn y canal de YouTube | `linkedinUrl`, `youtubeUrl` | ✅ cargado |
| 3 | Fotos | `public/pablo.jpg`, `public/pablo-full.jpg` y charlas en `public/img/` | ✅ cargadas |
| 4 | Google Analytics 4 | `gaId` (formato `G-XXXXXXXXXX`) | pendiente, opcional |
| 5 | Dominio propio | `url` en `src/config.ts` y `site` en `astro.config.mjs` | hoy `guzzi.pages.dev` |

Imágenes para compartir el link (1200×630): `public/og.png` (página personal) y `public/og-ai.png` (Guzzi AI).

## Trabajar en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera la carpeta dist/
```

## Publicar en Cloudflare Pages (gratis)

### Opción A: subir la carpeta (la más rápida)

1. Corré `npm run build` (o usá el `dist.zip` que ya viene armado).
2. En el panel de Cloudflare: **Workers & Pages → Create → Pages → Upload assets**.
3. Nombre del proyecto: `guzzi` → la dirección queda `guzzi.pages.dev` (si el nombre está tomado, Cloudflare te asigna una variante).
4. Arrastrá el contenido de `dist/` y publicá.

### Opción B: conectado a GitHub (se publica solo en cada cambio)

1. Subí este proyecto a un repo, por ejemplo `github.com/guzzipa/guzzi-ai`.
2. En Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** y elegí el repo.
3. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.

## Google Analytics

1. En analytics.google.com creá una propiedad y un flujo de datos **Web**.
2. Copiá el ID de medición (`G-...`) en `gaId`.
3. Además de las visitas, el sitio envía el evento `cta_click` cada vez que alguien toca un botón de contacto (con el lugar del botón, por ejemplo `hero`, `final`, `home-hero`).

## Estructura

```
src/config.ts          ← placeholders y datos editables
src/layouts/Base.astro ← SEO, metadatos para compartir, analytics
src/pages/index.astro             ← página personal
src/pages/ai-implementation.astro ← Guzzi AI
src/styles/global.css             ← estilos compartidos
public/                ← favicon, og.png, tipografías, foto
```
