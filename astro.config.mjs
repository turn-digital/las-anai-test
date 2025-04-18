// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sidebar from "./sidebar.config.js";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config

export default defineConfig({
  site: "https://www.lasiviegli.lv",
  integrations: [
    starlight({
      defaultLocale: "root",
      locales: {
        root: {
          label: "Latvian",
          lang: "lv",
        },
      },
      title: "Lasi viegli",
      sidebar,
      customCss: [
        // Fontsource files for to regular and semi-bold font weights.
        "@fontsource/barlow/400.css",
        "@fontsource/barlow/600.css",
        "./src/styles/custom.css",
      ],
      social: [
        {
          icon: "facebook",
          label: "Facebook",
          href: "https://www.facebook.com/pieklustamiba.lv",
        },
      ],
      head: [
        // Example: add Fathom analytics script tag.
        {
          tag: "script",
          attrs: {
            src: "https://plausible.io/js/script.outbound-links.js",
            "data-domain": "lasiviegli.lv",
            defer: true,
          },
        },
      ],
    }),
    sitemap(),
  ],
});
