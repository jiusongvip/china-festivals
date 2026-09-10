import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.festivals-china.com",
  trailingSlash: "always",
  server: { port: 4325 },
  build: { inlineStylesheets: "always" },
  integrations: [sitemap({ lastmod: new Date("2026-08-20") })],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["images.unsplash.com", "source.unsplash.com", "picsum.photos"],
  },
});
