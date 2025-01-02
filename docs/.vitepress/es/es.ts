import { defineConfig } from "vitepress";
import nav from "./nav.json";
import sidebar from "./sidebar.json";

export const es = defineConfig({
  lang: "es",
  description: "Una biblioteca práctica de funciones utilitarias",
  base: "/es/",
  themeConfig: {
    nav,
    sidebar,
    docFooter: {
      prev: "Página Anterior",
      next: "Página siguiente"
    }
  }
});