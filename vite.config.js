import { defineConfig } from "vite";

export default defineConfig({
  base: "./portfolio",

  build: {
    assetsDir: 'assets',
    minify: "terser",
  },
});