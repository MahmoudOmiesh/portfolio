import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

import { remarkHeadings } from "./remark-headings";
import { profile } from "./src/content/profile";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    { enforce: "pre", ...mdx({ remarkPlugins: [remarkHeadings] }) },
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        // The crawler follows every same-origin href, including /resume.pdf; only HTML routes belong here.
        filter: ({ path }) => !/\.\w+$/.test(path),
      },
      sitemap: { host: profile.url },
    }),
    nitro(),
    viteReact({ include: /\.(mdx|tsx?)$/ }),
  ],
});
