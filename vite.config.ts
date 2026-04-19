import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import sitemap from "vite-plugin-sitemap";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    ViteImageOptimizer({
      png:  { quality: 80 },
      jpeg: { quality: 78 },
      webp: { lossless: false, quality: 80 },
    }),
    sitemap({
      hostname: "https://nacress.com",
      dynamicRoutes: [
        "/",
        "/histoire",
        "/produit/collier-perle-solitaire",
        "/produit/bague-onde-nacree",
        "/produit/creoles-perle-eau",
        "/produit/bracelet-perle-unique",
        "/produit/bracelet-constellation",
        "/produit/chaine-cheville-rivage",
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-framer": ["framer-motion"],
          "vendor-router": ["@tanstack/react-router"],
        },
      },
    },
  },
});
