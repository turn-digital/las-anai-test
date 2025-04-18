// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sidebar from "./sidebar.config.js";
// https://astro.build/config
export default defineConfig({
  site: "https://http://www.lasiviegli.lv",
  // base: "/new-docs-3-layer/",
  integrations: [
    starlight({
      title: "Lasi viegli",
      sidebar,
      customCss: ["./src/styles/custom.css"],
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
  ],
});
