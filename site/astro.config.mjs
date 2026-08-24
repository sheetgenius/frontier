import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  build: {
    // The stylesheet is ~11KB gzipped; inlining it removes the one
    // render-blocking request every page otherwise pays before first paint.
    inlineStylesheets: "always",
  },
});
