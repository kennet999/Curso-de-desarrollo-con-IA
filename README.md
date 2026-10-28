# 100 Artificiales Dijeron — Landing Page

Landing page del generador de guiones para **100 Artificiales Dijeron**, un juego de preguntas y respuestas inspirado en el formato de *100 mexicanos dijeron*.

Sitio construido con **Astro** y salida 100% estática. El diseño “Tablero Nocturno”, los textos en español y el comportamiento responsive se mantienen intactos respecto a la versión original.

## Demo

Una vez activado GitHub Pages:

<https://kennet999.github.io/Curso-de-desarrollo-con-IA/>

## Secciones

- Navbar fija con glassmorphism, menú móvil, scroll spy y foco accesible.
- Hero con badge de versión, titular en gradiente y dos llamados a la acción.
- Tarjetas de características con iconos SVG y efectos hover neón.
- Métricas y precios.
- Soporte para `prefers-reduced-motion` y navegación por teclado.

## Requisitos

- Node.js 22 o superior (probado con 24.22.1).
- npm.

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo
npm run build     # generar el sitio en dist/
npm run preview   # previsualizar la compilación
```

El sitio se sirve bajo el subdirectorio del repositorio:

```text
http://localhost:4321/Curso-de-desarrollo-con-IA/
```

## Estructura

```text
.
├── astro.config.mjs          # site + base para GitHub Pages
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro      # menú móvil, scroll spy y foco
│   │   ├── Logo.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── FeatureIcon.astro
│   │   ├── Metrics.astro
│   │   ├── Pricing.astro
│   │   └── Footer.astro
│   ├── data/
│   │   ├── nav.ts
│   │   ├── features.ts
│   │   └── metrics.ts
│   ├── layouts/
│   │   └── BaseLayout.astro  # metadatos, fuentes y estilos globales
│   ├── pages/
│   │   └── index.astro       # composición de la página
│   └── styles/
│       ├── tokens.css
│       ├── base.css
│       ├── buttons.css
│       ├── navbar.css
│       └── landing.css
└── .github/workflows/
    └── deploy.yml            # despliegue automático a GitHub Pages
```

## Despliegue

Cada push a `main` compila el sitio y lo publica con GitHub Actions.

1. En GitHub, abre **Settings → Pages**.
2. En **Source**, selecciona **GitHub Actions**.
3. Haz push a `main` o ejecuta el workflow manualmente desde **Actions**.

El workflow usa Node.js 24, `npm ci` y publica `dist/` con `actions/deploy-pages`.

## Rollback

La versión estática anterior quedó guardada en el tag `pre-astro`:

```bash
git switch --detach pre-astro
```

## Stack

Astro · TypeScript · CSS3 (Grid, Flexbox, custom properties) · Google Fonts (Space Grotesk, Inter, JetBrains Mono).
