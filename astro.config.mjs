import { defineConfig } from "astro/config";

// El sitio se publica en GitHub Pages bajo el nombre del repositorio.
const repoBase = "/Curso-de-desarrollo-con-IA";

export default defineConfig({
  site: "https://kennet999.github.io",
  base: repoBase,
  trailingSlash: "ignore",
});
