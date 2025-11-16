import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import sitemapPlugin from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    sitemapPlugin({ hostname: "https://www.cristian-anzola.xyz" }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "Cristian Anzola - Portfolio",
          description:
            "Welcome to my portfolio website showcasing my work and projects.",
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
