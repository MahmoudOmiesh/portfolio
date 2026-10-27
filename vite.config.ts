import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  // Link previews need an absolute og:image URL; Vercel exposes the production domain at build time.
  define: {
    "import.meta.env.VITE_SITE_URL": JSON.stringify(productionHost ? `https://${productionHost}` : ""),
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        // The crawler follows every same-origin href, including /resume.pdf; only HTML routes belong here.
        filter: ({ path }) => !/\.\w+$/.test(path),
      },
    }),
    nitro({ traceDeps: ["react"] }),
    viteReact(),
  ],
});
