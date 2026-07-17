import path from "node:path";
import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vinext()],
  resolve: {
    alias: {
      "cloudflare:workers": path.resolve("github-pages/cloudflare-workers.ts"),
    },
  },
});

